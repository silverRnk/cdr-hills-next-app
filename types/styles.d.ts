import 'styled-components';
import {theme} from "../styles/styled-component/theme";

type StyledComponentTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends StyledComponentTheme {}
}