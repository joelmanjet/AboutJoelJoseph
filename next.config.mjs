const repo = 'More-About-Me';
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
};
