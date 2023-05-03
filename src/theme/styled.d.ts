import "styled-components";

import { Palette } from "./palette";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: Palette;
  }
}
