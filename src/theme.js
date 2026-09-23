// Design tokens. Blue and green come from the Lesotho flag; ochre marks status.
export const colors = {
  paper: '#F2F5F3',
  paperAlt: '#E9EFEA',
  surface: '#FFFFFF',
  ink: '#16222E',
  inkSoft: '#4A5A68',
  line: '#D5DED9',
  lineSoft: '#E3E9E5',
  blue: '#1F4E9C',
  blueSoft: '#E7EDF8',
  green: '#1C7A4F',
  greenSoft: '#E4F1EA',
  ochre: '#8A5F0F',
  ochreSoft: '#F6E9CC',
  footerColor: '#174D7C',
  footerColorSoft: '#4A5A68',
};

// The accent colour follows the role being viewed.
export const roleAccent = {
  all: colors.ink,
  engineer: colors.blue,
  support: colors.green,
};

export const roleAccentSoft = {
  all: colors.lineSoft,
  engineer: colors.blueSoft,
  support: colors.greenSoft,
};

export const fonts = {
  display: 'BricolageGrotesque_800ExtraBold',
  heading: 'BricolageGrotesque_700Bold',
  body: 'IBMPlexSans_400Regular',
  bodyMedium: 'IBMPlexSans_500Medium',
  bodyBold: 'IBMPlexSans_600SemiBold',
};

export const radius = { sm: 8, md: 14, pill: 999 };

// Soft elevation, cross-platform: boxShadow renders on web, elevation on Android/iOS reads shadow*.
export function cardShadow(strength = 1) {
  return {
    boxShadow: `0 ${2 * strength}px ${10 * strength}px rgba(22, 34, 46, ${0.06 * strength})`,
    shadowColor: '#16222E',
    shadowOpacity: 0.08 * strength,
    shadowRadius: 8 * strength,
    shadowOffset: { width: 0, height: 2 * strength },
    elevation: 2 * strength,
  };
}

export const NAV_HEIGHT = 56;
export const MAX_WIDTH = 1040;

// Breakpoints as a small helper so components share one definition of "narrow/wide".
export function getBreakpoints(width) {
  return { narrow: width < 480, wide: width >= 900 };
}
