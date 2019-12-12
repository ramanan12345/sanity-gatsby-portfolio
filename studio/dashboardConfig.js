export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df1ffe58d133eea51049d7d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wm47fazu',
                  apiId: '01cb7878-14ca-4d0f-bbf6-023e6eb950cb'
                },
                {
                  buildHookId: '5df1ffe60122328004bf6607',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-owh6zmsp',
                  apiId: 'afa020ce-75f3-4e1f-9ec0-c0ab8f8319fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ramanan12345/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-owh6zmsp.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
