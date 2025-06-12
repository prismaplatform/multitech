// src/fonts.js
import localFont from 'next/font/local'

export const univiaPro = localFont({
  src: [
    // Thin (100)
    {
      path: '../../public/assets/fonts/UniviaPro-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    // Ultra Light (200)
    {
      path: '../../public/assets/fonts/UniviaPro-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-UltraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    // Light (300)
    {
      path: '../../public/assets/fonts/UniviaPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    // Book (350)
    {
      path: '../../public/assets/fonts/UniviaPro-Book.woff2',
      weight: '350',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-BookItalic.woff2',
      weight: '350',
      style: 'italic',
    },
    // Regular (400)
    {
      path: '../../public/assets/fonts/UniviaPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    // Medium (500)
    {
      path: '../../public/assets/fonts/UniviaPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    // Bold (700)
    {
      path: '../../public/assets/fonts/UniviaPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    // Black (900)
    {
      path: '../../public/assets/fonts/UniviaPro-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    // Ultra (950)
    {
      path: '../../public/assets/fonts/UniviaPro-Ultra.woff2',
      weight: '950',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/UniviaPro-UltraItalic.woff2',
      weight: '950',
      style: 'italic',
    },
  ],
  variable: '--font-univia-pro',
  display: 'swap',
})