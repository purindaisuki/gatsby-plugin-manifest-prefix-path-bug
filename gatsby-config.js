module.exports = {
  pathPrefix: "/test",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `test`,
        start_url: `/`,
        lang: "en",
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/gatsby-icon.png`,
        cache_busting_mode: `none`,
        localize: [
          {
            start_url: `/zh-TW/`,
            lang: `zh-TW`,
            name: `測試`,
          },
        ],
      },
    },
  ],
};
