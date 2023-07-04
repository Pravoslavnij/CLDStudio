import './globals.css'

import localFont from 'next/font/local'

const BIZUDPGothic = localFont({
  src: [
    {
      path: '../../public/fonts/BIZUDPGothic-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/BIZUDPGothic-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
  ]
})

export const metadata = {
  title: 'Cloud Studio',
  description: 'Студия веб-разработки Cloud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`bg-white relative text-black flex flex-col items-center ${BIZUDPGothic.className}`}>{children}</body>
    </html >
  )
}
