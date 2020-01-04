A basic node or static-site template that could be deployed to Firebase, Google App Engine or Zeit.

```
npm install
npm run --help
```

## Firebase

Create the project on firebase.console.com

```
npm install -g firebase-tools

firebase logout
firebase login 

# Deploy
npm run deploy-gcloud

```

## Google Cloud Console

Create the project on Google Cloud Console and enable both AppEngine and Storage.
You may need to wait a few minutes for this to activate.
You may need to go to IAM and add the cloud-build @cloudbuild.gserviceaccount.com to the Storage Object Viewer permission

```
gcloud auth login
# Deploy
npm run deploy-gcloud
```

### Google Cloud Functions

Follow [https://cloud.google.com/functions/docs/quickstart-nodejs](). Project is inside `gcloud-functions`.


## Zeit Now

```
npm install -g now
```

Literally just have to sign in to now and then run:

```
npm run deploy-now
# or 
now
```