const express=require("express");
const passport=require("passport");
const key=require("./configs/keys");
const googleStrategies=require("passport-google-oauth20");
const app=express();
passport.use(new googleStrategies({
    clientID:key.googleClientID,
    clientSecret:key.googleClientSecret,
    callbackURL:'/auth/google/callback'
},
 (accessToken,refreshToken,profile,done)=>{
     console.log('accessToken',accessToken);

    console.log('refreshToken',refreshToken);
    console.log('Profile',profile);
    }));
// 
// 

app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}))
app.get('/auth/google/callback',passport.authenticate('google'));
const port=process.env.PORT || 5000;

app.listen(port);
