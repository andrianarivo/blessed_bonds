import { storageService } from "@/services/storage";
import { GraphQLError } from "graphql";

export const uploadProfilePicture = async (_, { file }, { prisma, user }) => {
  if (!user) {
    throw new GraphQLError("Not authenticated", {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }

  try {
    const [fileUpload] = await file;
    const filename = await storageService.uploadFile(fileUpload, user.id);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { avatarUri: filename },
    });

    return updatedUser;
  } catch (error) {
    throw new GraphQLError("Failed to upload profile picture", {
      extensions: { code: "UPLOAD_FAILED" },
    });
  }
};
