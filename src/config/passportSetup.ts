import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20");
import User from "../models/schemas/user.schema";
import config from "./config";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: config.CALLBACK_URL,
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      email: any,
      done: any
    ) => {
      User.findOne({ googleId: email.id }).then((user) => {
        if (user) {
          done(null, user);
        } else {
          new User({
            email: email._json.email,
            googleId: email.id,
            avatar: email._json.picture,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);
