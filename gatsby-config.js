module.exports = {
  siteMetadata: {
    title: "დათოს ბლოგი",
    author: "დავით კვარაცხელია",
    description: "ჩემი შთაბეჭდილებები სიტყვებით და კოდით"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
