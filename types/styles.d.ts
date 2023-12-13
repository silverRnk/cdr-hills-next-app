import 'styled-components';
import {theme} from "../src/styled-component/theme";

type StyledComponentTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends StyledComponentTheme {}
}