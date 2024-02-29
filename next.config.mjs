import withReactSvg from 'next-react-svg'
import path from 'path'

/**
 * @type {import('next-react-svg').NextReactSvgConfig}
 */
const nextReactSvgConfig = {
  include: path.resolve(process.cwd(), 'public'),
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // ...
}

export default withReactSvg(nextReactSvgConfig)(nextConfig)
