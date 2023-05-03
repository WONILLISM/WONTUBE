interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export interface Palette {
  primary: PaletteColor;
  secondary?: PaletteColor;
  error?: PaletteColor;
  warning?: PaletteColor;
  info?: PaletteColor;
  success?: PaletteColor;
}

export const palette: Palette = {
  primary: {
    main: "#1739AF",
  },
};
