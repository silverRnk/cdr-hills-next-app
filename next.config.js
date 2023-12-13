/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
            source: '/admin/students',
            destination: '/admin/students/list',
            permanent: true,
        }]
    },
    compiler:{
        styledComponents: true,
    }
}

module.exports = nextConfig
