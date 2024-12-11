import { config } from "@/config";
import { PrismaClient } from "@prisma/client";
import { Application } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://${config.HOSTNAME}:${config.PORT}/auth/google/callback`,
    },
    async (_, __, profile, done) => {
      try {
        const user = await prisma.user.upsert({
          where: {
            provider_providerId: {
              provider: "google",
              providerId: profile.id,
            },
          },
          create: {
            email: profile.emails?.[0]?.value || "",
            name: profile.displayName,
            provider: "google",
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

export const configureGoogleAuth = (app: Application) => {
  app.get("/auth/google", (req, res, next) => {
    const { origin } = req.headers;
    passport.authenticate("google", {
      scope: ["profile", "email"],
      state: origin,
    })(req, res, next);
  });

  app.get(
    "/auth/google/callback",
    (req, res, next) => {
      passport.authenticate("google", {
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
