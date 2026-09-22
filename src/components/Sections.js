import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { cardShadow, colors, fonts, radius, roleAccent, roleAccentSoft } from '../theme';
import { profile, contact, experience, projects, skillGroups, education } from '../data';
import { Bullet, Button, Chip, Section, openUrl } from './ui';

const show = (item, role) => role === 'all' || item.roles.includes(role);

export function About({ role, wide, narrow, onLayout }) {
  const help = profile.helpWith.filter((h) => show(h, role));
  return (
    <Section title="About" onLayout={onLayout} wide={wide} narrow={narrow}>
      <View style={wide ? styles.twoCol : null}>
        <View style={wide ? { flex: 3 } : null}>
          {profile.about.map((p) => (
            <Text key={p.slice(0, 24)} style={styles.para}>
              {p}
            </Text>
          ))}
        </View>
        <View style={[styles.helpCard, wide ? { flex: 2, marginLeft: 48, marginTop: 0 } : { marginTop: 20 }]}>
          <Text style={styles.h3}>What I can help with</Text>
          {help.map((h) => (
            <Bullet key={h.text} accent={roleAccent[role]}>
              {h.text}
            </Bullet>
          ))}
        </View>
      </View>
    </Section>
  );
}

export function Experience({ role, accent, wide, narrow, onLayout }) {
  const items = experience.filter((e) => show(e, role));
  return (
    <Section title="Experience" onLayout={onLayout} wide={wide} narrow={narrow} alt>
      {items.map((e, i) => (
        <View key={e.id} style={styles.tlRow}>
          <View style={styles.tlRail}>
            <View style={[styles.tlDot, { backgroundColor: accent }]} />
            {i < items.length - 1 ? <View style={styles.tlLine} /> : null}
          </View>
          <View style={styles.tlBody}>
            <Text style={styles.h3}>{e.title}</Text>
            <Text style={styles.org}>{e.org}</Text>
            <Text style={[styles.period, { color: accent }]}>{e.period}</Text>
            {e.points.map((p) => (
              <Bullet key={p} accent={accent}>
                {p}
              </Bullet>
            ))}
          </View>
        </View>
      ))}
    </Section>
  );
}

function ProjectCard({ p, wide }) {
  const color = roleAccent[p.primary];
  return (
    <View style={[styles.card, { borderTopColor: color }, wide && styles.cardWide]}>
      <View style={styles.cardHead}>
        <Text style={[styles.h3, { flex: 1 }]}>{p.title}</Text>
        <View style={[styles.status, { backgroundColor: roleAccentSoft[p.primary] }]}>
          <Text style={[styles.statusText, { color }]}>{p.status}</Text>
        </View>
      </View>
      <Text style={styles.cardSummary}>{p.summary}</Text>
      {p.points.map((pt) => (
        <Bullet key={pt} accent={color}>
          {pt}
        </Bullet>
      ))}
      <View style={styles.chipRow}>
        {p.tags.map((t) => (
          <Chip key={t} label={t} />
        ))}
      </View>
      {p.link ? (
        <View style={{ marginTop: 18, alignSelf: 'flex-start' }}>
          <Button label={p.link.label} accent={color} variant="outline" href={p.link.url} />
        </View>
      ) : null}
    </View>
  );
}

export function Projects({ role, wide, narrow, onLayout }) {
  const items = projects.filter((p) => show(p, role));
  return (
    <Section
      title="Projects"
      intro="Software I have built and systems I have supported. The top border shows which kind of work it is: blue for engineering, green for systems support."
      onLayout={onLayout}
      wide={wide}
      narrow={narrow}
    >
      <View style={styles.grid}>
        {items.map((p) => (
          <ProjectCard key={p.id} p={p} wide={wide} />
        ))}
      </View>
    </Section>
  );
}

export function Skills({ role, wide, narrow, onLayout }) {
  const groups = skillGroups.filter((g) => show(g, role));
  return (
    <Section title="Skills" onLayout={onLayout} wide={wide} narrow={narrow} alt>
      {groups.map((g) => (
        <View key={g.title} style={{ marginBottom: 28 }}>
          <Text style={styles.h3}>{g.title}</Text>
          <View style={styles.chipRow}>
            {g.items.map((s) => (
              <Chip key={s} label={s} />
            ))}
          </View>
        </View>
      ))}
    </Section>
  );
}

export function Education({ wide, narrow, onLayout }) {
  return (
    <Section title="Education" onLayout={onLayout} wide={wide} narrow={narrow}>
      {education.map((e) => (
        <View key={e.id} style={styles.eduCard}>
          <Text style={styles.h3}>{e.title}</Text>
          <Text style={styles.org}>{e.org}</Text>
          <Text style={styles.period}>{e.period}</Text>
          {e.note ? <Text style={[styles.para, { marginTop: 8, marginBottom: 0 }]}>{e.note}</Text> : null}
        </View>
      ))}
    </Section>
  );
}

export function Contact({ accent, wide, narrow, onLayout }) {
  const links = [
    contact.email && { label: 'Email me', href: `mailto:${contact.email}`, note: contact.email },
    contact.linkedin && { label: 'LinkedIn', href: contact.linkedin },
    contact.github && { label: 'GitHub', href: contact.github },
    contact.whatsapp && { label: 'WhatsApp', href: `https://wa.me/${contact.whatsapp}` },
  ].filter(Boolean);

  return (
    <Section
      title="Get in touch"
      intro="Need help with a health information system, or want to build one? Send me a message."
      onLayout={onLayout}
      wide={wide}
      narrow={narrow}
      alt
    >
      <View style={styles.chipRow}>
        {links.map((l) => (
          <Button key={l.label} label={l.label} href={l.href} accent={accent} variant={l.label === 'Email me' ? 'solid' : 'outline'} />
        ))}
      </View>
      {contact.email ? <Text style={[styles.para, { marginTop: 18, marginBottom: 0 }]}>{contact.email}</Text> : null}
      {__DEV__ && !contact.email ? (
        <Text style={[styles.para, { marginTop: 18, marginBottom: 0, color: colors.ochre }]}>
          Dev note: add your email, LinkedIn and WhatsApp in src/data.js and the buttons will appear.
        </Text>
      ) : null}
    </Section>
  );
}

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        {`\u00A9 ${new Date().getFullYear()} ${profile.name}. Built with React Native and Expo.`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  twoCol: { flexDirection: 'row' },
  para: { fontFamily: fonts.body, fontSize: 17, lineHeight: 28, color: colors.ink, marginBottom: 14, maxWidth: 640 },
  h3: { fontFamily: fonts.heading, fontSize: 20, lineHeight: 26, color: colors.ink },
  org: { fontFamily: fonts.bodyMedium, fontSize: 16, color: colors.inkSoft, marginTop: 4 },
  period: { fontFamily: fonts.bodyMedium, fontSize: 14, marginTop: 2, marginBottom: 6 },
  helpCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 22,
    ...cardShadow(0.6),
  },
  tlRow: { flexDirection: 'row' },
  tlRail: { width: 24, alignItems: 'center' },
  tlDot: { width: 12, height: 12, borderRadius: 6, marginTop: 7 },
  tlLine: { flex: 1, width: 2, backgroundColor: colors.line, marginTop: 6 },
  tlBody: { flex: 1, paddingBottom: 36, paddingLeft: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 20 },
  card: {
    width: '100%',
    backgroundColor: colors.surface,
    borderTopWidth: 4,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    padding: 22,
    ...cardShadow(0.7),
  },
  cardWide: { width: '48.4%', flexGrow: 1 },
  cardHead: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  cardSummary: { fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: colors.inkSoft, marginTop: 8, marginBottom: 4 },
  status: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.sm },
  statusText: { fontFamily: fonts.bodyBold, fontSize: 13 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 14 },
  eduCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 22,
    marginBottom: 16,
    ...cardShadow(0.5),
  },
  footer: { paddingVertical: 32, paddingHorizontal: 20, borderTopWidth: 1, borderTopColor: colors.line, alignItems: 'center' },
  footerText: { fontFamily: fonts.body, fontSize: 14, color: colors.inkSoft, textAlign: 'center' },
});
