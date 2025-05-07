import { Roboto_Mono, Comfortaa, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'

export const robotoMono100 = Roboto_Mono({ subsets: ['latin'], weight: '100' })
export const robotoMono200 = Roboto_Mono({ subsets: ['latin'], weight: '200' })
export const robotoMono300 = Roboto_Mono({ subsets: ['latin'], weight: '300' })
export const robotoMono400 = Roboto_Mono({ subsets: ['latin'], weight: '400' })
export const robotoMono500 = Roboto_Mono({ subsets: ['latin'], weight: '500' })
export const robotoMono600 = Roboto_Mono({ subsets: ['latin'], weight: '600' })
export const robotoMono700 = Roboto_Mono({ subsets: ['latin'], weight: '700' })

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
})

export const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})