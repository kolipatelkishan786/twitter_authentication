# Twitter Authentication Demo
Node.js Twitter Authentication

This project was generated with Node.js.

## Development server

Run `npm run start` for a dev server. Navigate to `http://127.0.0.1:5000/`. The app will automatically reload if you change any of the source files.


## Before You Get Started ☝️


1. A good understanding of JavaScript and Node.js
2. An application with a server

Awesome, let’s go!


## Step 1: Install Dependencies
Just one — it’s on NPM if you didn’t already assume that.

That was easy!

## Step 2: Configure Twitter
Next you will need to configure the library with your credentials so Twitter knows who is making the requests.

To get credentials — if you don’t already have them — go to your Twitter For Developers settings and create a new OAuth Apps.

## Step 3: Get the Twitter Login URL
Why do we need this?… Well, in order for us to sign someone in to Twitter, we need to send them to the Twitter login page. From here, they will sign in to their account and then they will be redirect to our app with their sign in details.

## Step 4: Your Turn — Redirect Your Users to the Twitter URL
This step requires you to send your users to the URL we just created. In my app, I generate the URL in the API and send it to my front-end where I make it the href address of a button e.g.

```
<a href="<GENERATED_TWITTER_URL>">Login with Twitter</a>
```

This will take the user to the sign in page.

## Step 5: Save the Sign In Details

Hopefully, you would have been able to sign in to your Twitter account and Twitter would have redirected you back to your app (or the redirect address you told it to go to). Now all we have to do is make sure the account they signed in with matches a user in our database (or create one).

To do this, Twitter has given us a parameter on the redirect address called “code”. You will see this as:

```
https://yourwebsite.com/callback?code=a-bunch-of-random-characters
```
