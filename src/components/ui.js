import React from 'react';
import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { cardShadow, colors, fonts, MAX_WIDTH, radius } from '../theme';

export function openUrl(url) {
  if (url) Linking.openURL(url).catch(() => {});
}

// interactive() gives Pressable a consistent lift-on-hover, press-down feel across web and touch.
function interactive({ pressed, hovered }) {
  return [
    Platform.OS === 'web' && { transition: 'transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease' },
    hovered && !pressed && { transform: [{ translateY: -1 }] },
    pressed && { transform: [{ scale: 0.97 }], opacity: 0.9 },
  ];
}

export function Button({ label, onPress, href, accent, variant = 'solid' }) {
  const solid = variant === 'solid';
  return (
    <Pressable
      accessibilityRole={href ? 'link' : 'button'}
      accessibilityLabel={label}
      onPress={() => (href ? openUrl(href) : onPress && onPress())}
      style={(state) => [
        styles.button,
        { borderColor: accent, backgroundColor: solid ? accent : 'transparent' },
        solid && cardShadow(0.6),
        Platform.OS === 'web' && state.focused && { outlineWidth: 3, outlineStyle: 'solid', outlineColor: colors.ochre, outlineOffset: 2 },
        interactive(state),
      ]}
    >
      <Text style={[styles.buttonText, { color: solid ? '#FFFFFF' : accent }]}>{label}</Text>
    </Pressable>
  );
}

export function Chip({ label, tone }) {
  return (
    <View style={[styles.chip, tone && { backgroundColor: tone }]}>
      <Text style={styles.chipText}>{label}</Text>
    </View>
  );
}

export function Bullet({ children, accent }) {
  return (
    <View style={styles.bulletRow}>
      <View style={[styles.bulletDot, accent && { backgroundColor: accent }]} />
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

// Full-width band with a centred, width-limited column inside. `alt` gives zebra-striped sections a lift.
export function Section({ title, intro, onLayout, wide, narrow, alt, children }) {
  return (
    <View onLayout={onLayout} style={[styles.section, wide && styles.sectionWide, narrow && styles.sectionNarrow, alt && { backgroundColor: colors.paperAlt }]}>
      <View style={styles.inner}>
        <View style={styles.titleRow}>
          <View style={styles.titleRule} />
          <Text accessibilityRole="header" style={[styles.h2, wide && { fontSize: 34, lineHeight: 40 }]}>
            {title}
          </Text>
        </View>
        {intro ? <Text style={styles.intro}>{intro}</Text> : null}
        <View style={{ marginTop: 24 }}>{children}</View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 22,
    borderWidth: 2,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { fontFamily: fonts.bodyBold, fontSize: 16 },
  chip: {
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.surface,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: radius.pill,
  },
  chipText: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.ink },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 9 },
  bulletDot: { width: 7, height: 7, borderRadius: 4, marginTop: 9, marginRight: 12, backgroundColor: colors.inkSoft },
  bulletText: { flex: 1, fontFamily: fonts.body, fontSize: 16, lineHeight: 26, color: colors.ink },
  section: { paddingVertical: 48, paddingHorizontal: 20 },
  sectionNarrow: { paddingVertical: 40, paddingHorizontal: 18 },
  sectionWide: { paddingVertical: 76, paddingHorizontal: 32 },
  inner: { width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center' },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  titleRule: { width: 28, height: 4, borderRadius: 2, backgroundColor: colors.ochre },
  h2: { fontFamily: fonts.display, fontSize: 28, lineHeight: 34, color: colors.ink },
  intro: { fontFamily: fonts.body, fontSize: 17, lineHeight: 27, color: colors.inkSoft, marginTop: 12, maxWidth: 620 },
});
