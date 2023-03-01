/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    domains: ['servicebuss-dev.transvision.co.id'],
    path: 'https://servicebuss-dev.transvision.co.id:9443/cubmu/images/trinvi/coupon_brand'
  }
}

module.exports = nextConfig
