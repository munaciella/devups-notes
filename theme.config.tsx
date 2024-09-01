import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/assets/DevUps_Logo.png"
        alt="DevUps Logo"
        style={{ height: '58px', marginLeft: '2px', marginBottom: '8px' }}
      />
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
  feedback: {
    content: null,
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: `© ${new Date().getFullYear()} DevUps. All rights reserved.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s',
    };
  },
  head: () => (
    <>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      <link
        rel="apple-touch-icon"
        type='image/png'
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
      <link 
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/assets/android-chrome-192x192.png"
      />
      <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/assets/android-chrome-512x512.png"
      />
      <link rel="manifest" href="/assets/site.webmanifest"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="DevUps Documentation" />
      <meta name="og:title" content="DevUps Documentation" />
    </>
  ),
};

export default config;
