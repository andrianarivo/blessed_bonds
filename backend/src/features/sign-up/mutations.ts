import { config } from "@/config";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

export const signUp = async (_, { email, password, name }, { prisma }) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new GraphQLError("Email already exists", {
      extensions: { code: "EMAIL_EXISTS" },
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      provider: "email",
      providerId: email,
    },
  });

  const token = jwt.sign({ userId: user.id }, config.JWT_SECRET);

  return {
    token,
    user,
  };
};
