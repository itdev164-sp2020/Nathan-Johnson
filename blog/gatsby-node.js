const path = require(`path`);

exports.createPages = ({graphl, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) ={
        graphql(`{
            allContentfulBlogPost {
                edges {
                  node {
                    id
                    slug
                  }
                }
              }
        }`
      ).then(result => {
          if(results.errors) {
              reject(results.errors);
          }
          result.data.allContentfulBlogPost.edges.forEach((edge) => {
              createPage({
                  path: edge.node.slug,
                  component: path.resolve(`./src/templaetes/blog-post.js`),
                  context: {
                      slug: edge.node.slug
                  }
              })
          })
          resolve();
      })
    }); 
};
