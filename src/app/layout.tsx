'use client'
import './globals.css'
import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '../styled-component/registry'
import { ThemeProvider } from 'styled-components'
import Theme from '../styled-component/theme'
import GlobalStyles from '../styled-component/globar_styles'

// const poppins = Poppins({ weight:['300', '400', '500', '600', '700', '800'], subsets:['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles/>
          <Theme>
            {children}
          </Theme>
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
