/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages.
  // Pages serves the contents of out/ as plain static files, so we cannot use
  // runtime features (custom headers, image optimization, ISR). All security
  // headers below were dropped because next export rejects the headers() hook.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // The site is published under github.io/bls-holdco-site, so every asset and
  // route needs the repo name as a prefix. Flip both basePath and assetPrefix
  // to empty strings if/when the site moves to a root domain.
  basePath: "/bls-holdco-site",
  assetPrefix: "/bls-holdco-site",
};

export default nextConfig;
