import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Head from 'next/head';

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
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
    </Head>
  ),
};

export default config;
