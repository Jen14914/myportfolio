import React, { useCallback, useRef, useState } from 'react';
import { ScrollView, StatusBar, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import {
  BricolageGrotesque_700Bold,
  BricolageGrotesque_800ExtraBold,
} from '@expo-google-fonts/bricolage-grotesque';
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
} from '@expo-google-fonts/ibm-plex-sans';

import { colors, getBreakpoints, NAV_HEIGHT, roleAccent } from './src/theme';
import Hero from './src/components/Hero';
import Nav, { NAV } from './src/components/Nav';
import { About, Experience, Projects, Skills, Education, Contact, Footer } from './src/components/Sections';

// Shows the error on screen instead of a blank page if something throws while rendering.
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 8 }}>Something went wrong</Text>
          <Text selectable>{String(this.state.error && (this.state.error.stack || this.state.error.message || this.state.error))}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

function Portfolio() {
  // Fonts load in the background; the page renders straight away with system fonts
  // and switches to the custom fonts as soon as they are ready.
  useFonts({
    BricolageGrotesque_700Bold,
    BricolageGrotesque_800ExtraBold,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
  });

  const [role, setRole] = useState('all');
  const [active, setActive] = useState('about');
  const scrollRef = useRef(null);
  const positions = useRef({});
  const { width } = useWindowDimensions();
  const { narrow, wide } = getBreakpoints(width);
  const accent = roleAccent[role];

  const measure = useCallback(
    (id) => (e) => {
      positions.current[id] = e.nativeEvent.layout.y;
    },
    []
  );

  const goTo = useCallback((id) => {
    const y = positions.current[id];
    if (y != null && scrollRef.current) {
      scrollRef.current.scrollTo({ y: Math.max(y - NAV_HEIGHT, 0), animated: true });
    }
  }, []);

  const onScroll = useCallback((e) => {
    const y = e.nativeEvent.contentOffset.y + NAV_HEIGHT + 24;
    let current = null;
    NAV.forEach((n) => {
      const p = positions.current[n.id];
      if (p != null && p <= y) current = n.id;
    });
    if (current) setActive((prev) => (prev === current ? prev : current));
  }, []);

  // Hero must be child 0 and Nav child 1: Nav is the sticky header.
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.paper }} edges={['top']}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.paper} />
        <ScrollView
          ref={scrollRef}
          stickyHeaderIndices={[1]}
          onScroll={onScroll}
          scrollEventThrottle={32}
        >
          <Hero role={role} setRole={setRole} accent={accent} wide={wide} narrow={narrow} goTo={goTo} />
          <Nav active={active} accent={accent} goTo={goTo} />
          <About role={role} wide={wide} narrow={narrow} onLayout={measure('about')} />
          <Experience role={role} accent={accent} wide={wide} narrow={narrow} onLayout={measure('experience')} />
          <Projects role={role} wide={wide} narrow={narrow} onLayout={measure('projects')} />
          <Skills role={role} wide={wide} narrow={narrow} onLayout={measure('skills')} />
          <Education wide={wide} narrow={narrow} onLayout={measure('education')} />
          <Contact accent={accent} wide={wide} narrow={narrow} onLayout={measure('contact')} />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Portfolio />
    </ErrorBoundary>
  );
}
