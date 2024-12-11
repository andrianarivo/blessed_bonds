import { config } from "@/config";
import { PrismaClient } from "@prisma/client";
import { Application } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

const prisma = new PrismaClient();

passport.use(
  new FacebookStrategy(
    {
      clientID: config.FACEBOOK_APP_ID,
      clientSecret: config.FACEBOOK_APP_SECRET,
      callbackURL: `http://${config.HOSTNAME}:${config.PORT}/auth/facebook/callback`,
      profileFields: ["id", "displayName", "email", "photos"],
    },
    async (_, __, profile, done) => {
      try {
        const user = await prisma.user.upsert({
          where: {
            provider_providerId: {
              provider: "facebook",
              providerId: profile.id,
            },
          },
          create: {
            email: profile.emails?.[0]?.value || "",
            name: profile.displayName,
            provider: "facebook",
            providerId: profile.id,
            avatarUri: profile.photos?.[0]?.value,
          },
          update: {
            email: profile.emails?.[0]?.value,
            name: profile.displayName,
            avatarUri: profile.photos?.[0]?.value,
          },
        });

        return done(null, user);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

export const configureFacebookAuth = (app: Application) => {
  app.get("/auth/facebook", (req, res, next) => {
    const { origin } = req.headers;
    passport.authenticate("facebook", {
      scope: ["public_profile", "email"],
      state: origin,
    })(req, res, next);
  });

  app.get(
    "/auth/facebook/callback",
    (req, res, next) => {
      passport.authenticate("facebook", {
        session: false,
        failureRedirect: `${req.query.state || config.FRONTEND_URL}/login`,
      })(req, res, next);
    },
    (req, res) => {
      const token = jwt.sign({ user: req.user }, config.JWT_SECRET, {
        expiresIn: "7d",
      });

      const frontendUrl = req.query.state || config.FRONTEND_URL;
      res.redirect(`${frontendUrl}/auth-callback?token=${token}`);
    }
  );
};
