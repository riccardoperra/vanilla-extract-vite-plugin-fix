import {createGlobalTheme} from "@vanilla-extract/css";

export const rootVars = createGlobalTheme(':root', {
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});
