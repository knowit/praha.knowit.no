const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const villageMarkdownComponent = path.resolve(
    `src/components/Villages/VillageMarkdown.jsx`,
  );

  return graphql(`
  {
   allAirtable {
    edges {
       node {
         slug
       }
      }
   }
  }
`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: villageMarkdownComponent,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
