// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyCB_J2pQM_D4Kkuj68O5ILwVScDZzncmWg',
    authDomain: 'fire-app-be.firebaseapp.com',
    databaseURL: 'https://fire-app-be.firebaseio.com',
    projectId: 'fire-app-be',
    storageBucket: 'fire-app-be.appspot.com',
    messagingSenderId: '145710870625'
  }


};
