const express = require('express');
const TwitterStrategy = require('passport-twitter').Strategy;
const passport = require('passport');
const session = require('express-session');
const cookieSession = require('cookie-session')
const app = express();

app.use(cookieSession({
    name: 'twitter-auth-session',
    keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    cb(null, id);
});

passport.use(
    new TwitterStrategy(
        {
            consumerKey: "TWITTER_API_KEY",
            consumerSecret: "TWITTER_API_KEY_SECRET",
            callbackURL: 'http://127.0.0.1:5000/auth/twitter/callback'
        },
        function (accessToken, refreshToken, profile, cb) {
            cb(null, profile);
        }
    )
);

const isAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.get('/', isAuth, (req, res) => {
    res.send(`Hello world ${req.user.displayName}`)
    res.sendFile(__dirname + '/dashboard.html');
});

app.get('/login', (req, res) => {
    if (req.user) {
        return res.redirect('/');
    }
    res.sendFile(__dirname + '/login.html');
});

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
});

//auth
app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

app.listen(5000, () => console.log('server is running on port 5000'));
