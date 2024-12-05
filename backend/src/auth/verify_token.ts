import { config } from "@/config";
import { prisma } from "@/db";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export async function verifyToken(token: string): Promise<User | null> {
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: parseInt(decoded.userId) },
    });
    return user;
  } catch {
    return null;
  }
}
