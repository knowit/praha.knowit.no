const secrets = require('./secrets');

module.exports = {
  siteMetadata: {
    title: 'Knowit Praha 2019',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    '&gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: secrets.AIRTABLE.API_SECRET,
        tables: [
          {
            baseId: secrets.AIRTABLE.BASE_ID,
            tableName: secrets.AIRTABLE.TABLE_NAME,
            mapping: { speaker_image: 'fileNode' },
          },
        ],
      },
    },
  ],
  pathPrefix: '/',
};
