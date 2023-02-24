const ENV = {
  dev: {    
    apiUrl: 'http://localhost:56332/api',
    name: 'environment-dev'
  },
  prod: {
    apiUrl: 'http://192.168.14.8:9053/api',
    name: 'environment-prod'
  },
};

const getEnvVars = () => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.

  //   if (__DEV__) {
  //     return ENV.dev;
  //   } else {
  //     return ENV.prod;
  //   }

  return ENV.dev

  // if (__DEV__) {
  //   return ENV.dev;
  // } else if (env === 'staging') {
  //   return ENV.staging;
  // } else if (env === 'prod') {
  //   return ENV.prod;
  // }
};

export default getEnvVars