import { config } from "@/config";
import fs from "fs";
import { Upload } from "graphql-upload-ts";
import path from "path";

export interface IStorageService {
  uploadFile(file: Upload, userId: string): Promise<string>;
}

class LocalStorageService implements IStorageService {
  async uploadFile(file: Upload, userId: string): Promise<string> {
    const { createReadStream, filename } = await file.promise;
    const uniqueName = `${userId}-${Date.now()}-${filename}`;
    const uploadDir = path.join(process.cwd(), config.UPLOAD_DIR);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    console.log(file);

    const filePath = path.join(uploadDir, uniqueName);

    await new Promise((resolve, reject) => {
      const stream = createReadStream();
      const writeStream = fs.createWriteStream(filePath);
      stream.pipe(writeStream).on("finish", resolve).on("error", reject);
    });

    return uniqueName;
  }
}

class AwsStorageService implements IStorageService {
  async uploadFile(file: Upload, userId: string): Promise<string> {
    throw new Error("Cloud storage not implemented yet");
  }
}

export const storageService = config.STORAGE_TYPE === "aws" ? new AwsStorageService() : new LocalStorageService();
