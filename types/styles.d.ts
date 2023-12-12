import 'styled-components';
import theme from "../styles/theme.tsx";

type StyledComponentTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends StyledComponentTheme {}
}