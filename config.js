const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo:
      'https://bloomberg.nursing.utoronto.ca/wp-content/themes/nursing/images/bloomberg_logo.png',
    logoLink: '/',
    title: '',
    githubUrl: 'https://github.com/awconway/nur1127syllabus',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'dev_nur1127search',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/index',
      '/schedule', // add trailing slash if enabled above
      '/reading',
      '/online',
      '/assignments',
      '/evaluation',
      '/policies',
    ],
    collapsedNav: [
      '/evaluation', // add trailing slash if enabled above
    ],
    links: [{ text: 'Course webpage', link: 'https://nur1127.netlify.app' }],
    frontline: true,
    ignoreIndex: false,
    title: "<div class='greenCircle'></div> NUR 1127 <div class='greenCircle'></div>",
  },
  siteMetadata: {
    title: 'NUR1127 Syllabus',
    description: '',
    ogImage: null,
    docsLocation: 'https://github.com/awconway/nur1127syllabus/tree/master/content',
    favicon: 'https://raw.githubusercontent.com/awconway/nur1127/master/static/logo.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'https://raw.githubusercontent.com/awconway/nur1127/master/static/logo.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
