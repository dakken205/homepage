import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  output: "export",
  experimental: {},
};

const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(withVanillaExtract(nextConfig));
