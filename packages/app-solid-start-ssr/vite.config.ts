import { defineConfig } from "vite";
import solid from "solid-start";
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [solid(), vanillaExtractPlugin()],
});
