module.exports = {
  apps : [{
    name: 'strapi',
    interpreter: "/home/strapgats/.nvm/versions/node/v18.12.1/bin/.node",
    script: '/home/strapgats/.nvm/versions/node/v18.12.1/bin/.npm',
    env: { 
       NODE_ENV: "production",
    },
    args: 'start',
    user: 'strapgats', 
    path : '/home/strapgats/eoinGatsbyStrapiBlog/backend',
    watch: '.',
   }
  ],
  deploy : {
    production : {
      user : 'strapgats',
      path : '/home/strapgats/eoinGatsbyStrapiBlog/backend',
    }
  }
};
