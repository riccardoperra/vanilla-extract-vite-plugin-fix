import {recipe, RecipeVariants} from "@vanilla-extract/recipes";
import {createTheme} from "@vanilla-extract/css";

export const [buttonTheme, buttonVars] = createTheme({
  borderColor: 'red',
  primaryBg: 'blue',
  secondaryBg: 'gray'
})

export const button = recipe({
  base: [
    {
      padding: '4px 2px',
      border: `1px solid ${buttonVars.borderColor}`
    }
  ],
  variants: {
    theme: {
      primary: {
        backgroundColor: buttonVars.primaryBg
      },
      secondary: {
        backgroundColor: buttonVars.secondaryBg
      }
    }
  }
});

export type ButtonProps = RecipeVariants<typeof button>;
