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

    result.data.allAirtable.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug}`,
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.slug
        }
      });
    });
  });
};
