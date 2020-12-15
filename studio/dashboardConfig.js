export default {
  widgets: [
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
                  buildHookId: '5fd8ff888477ca2d8a1786dc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-js8h4igj',
                  apiId: '0c61a975-8335-4ba7-809b-935a950296f2'
                },
                {
                  buildHookId: '5fd8ff8948e26f3807f00848',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kkpb5r8m',
                  apiId: 'b752a7a2-c582-4e82-8de4-fe86bf16c7d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jordanwhitestephenson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kkpb5r8m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
