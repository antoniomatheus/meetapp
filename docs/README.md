# [Meetapp](https://github.com/antoniomatheus/meetapp)
---

## Introduction

The Meetapp application was developed as the final project from [Rocketseat's](https://rocketseat.com.br/) bootcamp.

This application has both a **back-end** and a **front-end**. The back-end was developed using Node.js with Express.js,
it makes use of relational databases (**postgreSQL**) and non-relational databases (**Mongo** and **Redis**), 
and other auxiliary libraries. The front-end was developed for browsers and smartphones (**Android** and **iOS**), using **React.js** 
and **React Native**, respectively.

Although the Mobile app should work well both on Android and iOS, it's been **only tested on Android**.

---

## Usage

To use it, first clone the project:

```bash
git clone https://github.com/antoniomatheus/meetapp.git
```

### Backend

To run both the mobile and browser application, it's necessary to start-up the back-end processes.

> As mentioned, the back-end makes use of 3 databases: **postgreSQL, Mongo and Redis**. You can 
run all of them as **Docker** containers.

To setup the back-end follow the steps:

1. Enter into the back-end folder ```/backend```:

2. Install all dependecies (with yarn):

```bash
yarn
```
3. Make a file called ```.env``` with the same contents as ```.env.example```, and fill 
  the missing environment variables with the values obtained from the databases. As you 
  can see, there are environment variables related to mailing, you can set them up if you wish.
  
  >The reason the application uses **Redis** is that the mailing process runs on a different 
  process from the main process, to do that, it uses Redis to store e-mails in a queue and then send them.

4. Create the postgreSQL's table by running:

```bash
yarn sequelize db:migrate
```

5. Start the main process:

```bash
yarn dev
```

6. (Optional) If you wish to send e-mails for testing, start the redis queue:

```bash
yarn queue
```

The back-end is ready to receive requests on the ```APP_URL``` specified.

### Mobile

To run the mobile application, the React Native CLI should be available, to install it, run:

```bash
yarn global add react-native-cli
```

Also, to run it on an Android, it needs the Android SDK installed, the easiest way to do that is 
to [Download and install Android Studio](https://developer.android.com/studio/index.html), for 
more information and debugging visit the [React Native website](https://facebook.github.io/react-native/docs/getting-started).

After that, go into the```/mobile```folder and install the dependecies, running:

```bash
yarn
```

And install application on the physical device or the emulator:

```bash
react-native run-android
```

Finally, start the main process, if not already started:

```bash
yarn start
```

### Browser

To run the browser application, go into the ```/web``` folder and install the dependencies:

```bash
yarn
```

Then, simply start it:

```bash
yarn start
```
