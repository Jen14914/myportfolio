import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, MAX_WIDTH, radius, roleAccent, roleAccentSoft } from '../theme';
import { profile, contact } from '../data';
import { Button, Chip } from './ui';

const OPTIONS = [
  { id: 'all', label: 'Everything' },
  { id: 'engineer', label: 'Software engineer' },
  { id: 'support', label: 'Systems support' },
];

// Below ~480px three pills don't sit comfortably on one line, so it becomes a clean
// stacked list instead of wrapping into an uneven 2+1 grid.
function RoleSwitch({ role, setRole, narrow }) {
  return (
    <View accessibilityRole="tablist" style={[styles.switchWrap, narrow && styles.switchWrapNarrow]}>
      {OPTIONS.map((o) => {
        const selected = role === o.id;
        return (
          <Pressable
            key={o.id}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            onPress={() => setRole(o.id)}
            style={(state) => [
              styles.switchItem,
              narrow && styles.switchItemNarrow,
              selected && { backgroundColor: roleAccent[o.id] },
              !selected && state.hovered && Platform.OS === 'web' && { backgroundColor: roleAccentSoft[o.id] },
            ]}
          >
            <Text numberOfLines={1} style={[styles.switchText, narrow && { textAlign: 'center' }, selected && { color: '#FFFFFF' }]}>
              {o.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function Hero({ role, setRole, accent, wide, narrow, goTo }) {
  return (
    <View style={[styles.hero, wide && styles.heroWide, narrow && styles.heroNarrow]}>
      <View style={[styles.glow, { backgroundColor: accent }]} pointerEvents="none" />
      <View style={styles.inner}>
        <Text accessibilityRole="header" style={[styles.name, wide && { fontSize: 60, lineHeight: 64 }, narrow && { fontSize: 34, lineHeight: 38 }]}>
          {profile.name}
        </Text>
        <Text style={[styles.title, { color: accent }, narrow && { fontSize: 18 }]}>{profile.title}</Text>

        <Text style={styles.switchLabel}>Show my work as</Text>
        <RoleSwitch role={role} setRole={setRole} narrow={narrow} />

        <Text style={[styles.tagline, wide && { fontSize: 23, lineHeight: 33 }, narrow && { fontSize: 17, lineHeight: 26 }]}>
          {profile.taglines[role]}
        </Text>

        <View style={styles.row}>
          {profile.heroChips[role].map((c) => (
            <Chip key={c} label={c} tone={roleAccentSoft[role]} />
          ))}
        </View>

        <View style={[styles.row, { marginTop: 28 }]}>
          <Button label="View projects" accent={accent} onPress={() => goTo('projects')} />
          <Button label="Get in touch" accent={accent} variant="outline" onPress={() => goTo('contact')} />
          {contact.cvUrl ? <Button label="Download CV" accent={accent} variant="outline" href={contact.cvUrl} /> : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { paddingTop: 40, paddingBottom: 40, paddingHorizontal: 20, overflow: 'hidden' },
  heroNarrow: { paddingTop: 32, paddingBottom: 32, paddingHorizontal: 18 },
  heroWide: { paddingTop: 84, paddingBottom: 68, paddingHorizontal: 32 },
  glow: {
    position: 'absolute',
    top: -160,
    right: -120,
    width: 340,
    height: 340,
    borderRadius: 340,
    opacity: 0.08,
  },
  inner: { width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center' },
  name: { fontFamily: fonts.display, fontSize: 40, lineHeight: 44, color: colors.ink, letterSpacing: -0.5 },
  title: { fontFamily: fonts.heading, fontSize: 20, marginTop: 10 },
  switchLabel: { fontFamily: fonts.bodyMedium, fontSize: 13, color: colors.inkSoft, marginTop: 30, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  switchWrap: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    padding: 4,
    gap: 4,
  },
  switchWrapNarrow: { flexDirection: 'column', alignSelf: 'stretch', borderRadius: radius.md },
  switchItem: { minHeight: 44, paddingHorizontal: 18, borderRadius: radius.pill, justifyContent: 'center', alignItems: 'center' },
  switchItemNarrow: { borderRadius: radius.sm, paddingHorizontal: 14 },
  switchText: { fontFamily: fonts.bodyBold, fontSize: 15, color: colors.ink },
  tagline: { fontFamily: fonts.body, fontSize: 20, lineHeight: 30, color: colors.ink, marginTop: 26, maxWidth: 680 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 9, marginTop: 20 },
});
