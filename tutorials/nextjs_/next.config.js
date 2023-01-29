/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['gifpng.com', 'source.unsplash.com'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',// 사용할 주소
  //       destination: '/PageMain',// 실제 주소
  //     },
  //   ]
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',// 들어오는 요청 경로 패턴
  //       destination: '/PageMain',// 라우팅하려는 경로
  //       permanent: true,// 브라우저나 검색엔진이 이 정보를 기억하는지 여부 결정
  //     },
  //   ]
  // },
}

module.exports = nextConfig
