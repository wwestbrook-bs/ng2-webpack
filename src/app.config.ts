module.exports = {
  dev: {
    environmentName: 'Development',
    authServiceBaseUrl: 'http://localhost:8025/',
    apiBaseUrl: 'http://localhost:8024/',
    fbAppId: '34291238041239401'
  },
  prod: {
    environmentName: 'Production',
    authServiceBaseUrl: 'https://auth.example.com/',
    apiBaseUrl: 'http://api.example.com/',
    fbAppId: '13249058202302020'
  }
};
