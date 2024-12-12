import { config } from "@/config";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

export const signIn = async (_, { email, password }, { prisma }) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
    throw new GraphQLError("Invalid credentials", {
      extensions: { code: "INVALID_CREDENTIALS" },
    });
  }

  const token = jwt.sign({ userId: user.id }, config.JWT_SECRET);

  return {
    token,
    user,
  };
};
