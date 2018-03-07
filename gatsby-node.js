const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              guid
              title
              date
              excerpt
              categories {
                name
              }
            }
          }
        }
        wordpressPage(title: { eq: "Accueil" }) {
          guid
        }
      }
    `).then(result => {
      // Journal de bord
      const jdb = result.data.allWordpressPost.edges.filter(
        data =>
          data.node.categories.filter(cat => cat.name === 'Journal de bord')
            .length !== 0
      );

      createPaginatedPages({
        edges: jdb,
        createPage,
        pageTemplate: 'src/templates/jdb.archive.js',
        pageLength: 10,
        pathPrefix: 'journal-de-bord',
      });
      jdb.forEach(({ node }) => {
        createPage({
          path: `journal-de-bord/${node.guid.replace(
            'http://amisinpe.lcl/',
            ''
          )}`,
          component: path.resolve('./src/templates/jdb.single.js'),
          context: {
            guid: node.guid,
          },
        });
      });

      // Derniers bulletins
      const bulletin = result.data.allWordpressPost.edges.filter(
        data =>
          data.node.categories.filter(cat => cat.name === 'Derniers bulletins')
            .length !== 0
      );

      createPaginatedPages({
        edges: bulletin,
        createPage,
        pageTemplate: 'src/templates/bulletin.archive.js',
        pageLength: 10,
        pathPrefix: 'dernier-bulletin',
      });
      bulletin.forEach(({ node }) => {
        createPage({
          path: `dernier-bulletin/${node.guid.replace(
            'http://amisinpe.lcl/',
            ''
          )}`,
          component: path.resolve('./src/templates/bulletin.single.js'),
          context: {
            guid: node.guid,
          },
        });
      });

      createPage({
        path: 'actions/',
        component: path.resolve('./src/templates/actions.page.js'),
      });

      createPage({
        path: 'presentation/',
        component: path.resolve('./src/templates/presentation.page.js'),
      });

      createPage({
        path: '/',
        component: path.resolve('./src/templates/home.page.js'),
      });

      resolve();
    });
  });
};
