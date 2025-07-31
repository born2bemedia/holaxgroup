import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'holaxgroup-cms.onrender.com', 'cms.holaxgroup.com', 'res.cloudinary.com'],
  },
};
  
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);