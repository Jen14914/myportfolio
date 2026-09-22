import React, { useRef } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, MAX_WIDTH, NAV_HEIGHT } from '../theme';

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ active, accent, goTo }) {
  const scrollRef = useRef(null);
  const itemX = useRef({});
  const barWidth = useRef(0);

  const centerOn = (id) => {
    const x = itemX.current[id];
    if (x == null || !scrollRef.current) return;
    const target = Math.max(x.x - barWidth.current / 2 + x.w / 2, 0);
    scrollRef.current.scrollTo({ x: target, animated: true });
  };

  return (
    <View style={styles.bar} onLayout={(e) => (barWidth.current = e.nativeEvent.layout.width)}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
        accessibilityRole="tablist"
      >
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <Pressable
              key={n.id}
              accessibilityRole="link"
              accessibilityState={{ selected: on }}
              onLayout={(e) => {
                itemX.current[n.id] = { x: e.nativeEvent.layout.x, w: e.nativeEvent.layout.width };
              }}
              onPress={() => {
                goTo(n.id);
                centerOn(n.id);
              }}
              style={(state) => [
                styles.item,
                on && { borderBottomColor: accent },
                Platform.OS === 'web' && state.hovered && !on && { borderBottomColor: colors.line },
              ]}
            >
              <Text style={[styles.text, on && { color: colors.ink, fontFamily: fonts.bodyBold }]}>{n.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: NAV_HEIGHT,
    backgroundColor: colors.paper,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    justifyContent: 'center',
  },
  content: { paddingHorizontal: 16, alignItems: 'stretch', minWidth: '100%', maxWidth: MAX_WIDTH + 64, alignSelf: 'center' },
  item: { paddingHorizontal: 14, justifyContent: 'center', borderBottomWidth: 3, borderBottomColor: 'transparent' },
  text: { fontFamily: fonts.bodyMedium, fontSize: 15, color: colors.inkSoft },
});
