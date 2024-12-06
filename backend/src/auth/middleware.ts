import { config } from "@/config";
import { Application } from "express";
import session from "express-session";
import passport from "passport";
import { configureFacebookAuth } from "./facebook_auth";
import { configureGoogleAuth } from "./google_auth";

export const configureAuth = (app: Application) => {
  app.use(
    session({
      secret: config.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  configureGoogleAuth(app);
  configureFacebookAuth(app);
};
