import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Head from 'next/head';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/logo.png"
        alt="DevUps Logo"
        style={{ height: '52px', marginRight: '8px' }}
      />
      <span>DevUps</span>
    </div>
  ),
  project: {
    link: 'https://github.com/munaciella/devups-notes',
  },
  chat: {
    link: 'https://discord.com',
  },
  editLink: {
    text: null,
  },
  //docsRepositoryBase: 'https://github.com/munaciella/devups-notes',
  footer: {
    text: `© ${new Date().getFullYear()} DevUps. All rights reserved.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s',
    };
  },
  head: (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="180x180"
        href="/assets/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon-16x16.png"
      />
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
    </Head>
  ),
};

export default config;
