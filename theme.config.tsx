import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DevUps Notes</span>,
  project: {
    link: 'https://github.com/munaciella/devups-notes',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/munaciella/devups-notes',
  footer: {
    text: `© ${new Date().getFullYear()} DevUps.  All rights reserved.`,
  },
}
export default config
