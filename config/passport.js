const GOOGLE_CLIENT_ID = '248309339406-9ut8ppfpv0mgnomhuk1tbjgu3gfcc8s9.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'C7uKRmF7Cpu3IvrGKw9P-KsD';
const FACEBOOK_APP_ID = '317800725678899';
const FACEBOOK_APP_SECRET = '5f2a212c8b553b350bba72f7c33f8ae8';
const TWITTER_CONSUMER_KEY = 'Under review';
const TWITTER_CONSUMER_SECRET = 'Under review';
const LINKEDIN_API_KEY = '78kegyu1uy6c3z';
const LINKEDIN_SECRET_KEY = 'EjBZSfpctnJQR9ju';

const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    function findOrCreate (accessToken, refreshToken, profile, done) {
        console.log('Check user table for anyone with a Facebook ID of profile.id') 
        console.log(profile);  
        email =  profile.emails[0].value;       
        User.findOne({'email': email}, (err, user) => {
           console.log('Create a new user with values from Facebook profile');
           bcrypt.hash(profile.id,10, (err, hash)=>{
               if (err)
                    return done(err, user);
               if (!user) {
                   user = new User({
                       name: (profile.displayName)?profile.displayName:`${profile.firstName} ${profile.lastName}`,
                       profileId:profile.id,
                       email: email,
                       username: email,
                       password: hash,
                       provider: profile.provider,
                   });
                    user.save((err) => {
                       if (err) console.log(err);
                       return done(err, user);
                   });
               } else {
                   return done(err, user);
               }
            })
        });
      }

    //Local stategy
    passport.use(new LocalStrategy((username, password, done)=>{
        let query = {username:username}
        User.findOne(query, (error,user)=>{
            if(error) throw error
            if (!user){
                return done(null, false, {message:'No user found'});
            }
            bcrypt.compare(password, user.password, (err,isMatch)=>{
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else{
                    return done(null, false, {message:'Incorrect password'});
                }
            });
        });
    }))    
    
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        profileFields: ['id', 'name', 'emails', 'displayName']
      },findOrCreate
    ));

    passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ['id', 'name', 'emails', 'displayName']
      },findOrCreate
    ));

    passport.use(new LinkedInStrategy({
        consumerKey: LINKEDIN_API_KEY,
        consumerSecret: LINKEDIN_SECRET_KEY,
        callbackURL: "http://localhost:3000/auth/linkedin/callback",
        profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline']
      },findOrCreate
    ));

    passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: "http://localhost:3000/auth/twitter/callback",
        profileFields: ['id', 'name', 'emails', 'displayName']
      },findOrCreate
    ));

    passport.serializeUser((user,done)=>{
        done(null, user.id);
    })

    passport.deserializeUser((id,done)=>{
        User.findById(id, (err,user)=>{
            done(err, user);
        })
    })

}