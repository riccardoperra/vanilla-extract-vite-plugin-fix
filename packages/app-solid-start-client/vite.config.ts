import {defineConfig} from "vite";
import solid from "solid-start";
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'

const vanillaExtractPluginResult = vanillaExtractPlugin({
  esbuildOptions: {
    external: [],
  }
});

export default defineConfig({
  plugins: [
    solid({ssr: false}),
    {
      ...vanillaExtractPluginResult,
    },
  ],
});
