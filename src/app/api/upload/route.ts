import { s3GeneratePresignedUrl } from "@bassem97/upup/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { provider, ...fileParams } = body;

    const origin = req.headers.get("origin");

    // Generate presigned URL
    const presignedData = await s3GeneratePresignedUrl({
      origin: origin as string,
      provider,
      fileParams,
      bucketName: process.env.BACKBLAZE_BUCKET_NAME!,
      s3ClientConfig: {
        region: process.env.BACKBLAZE_BUCKET_REGION,
        credentials: {
          accessKeyId: process.env.BACKBLAZE_KEY_ID!,
          secretAccessKey: process.env.BACKBLAZE_APP_KEY!,
        },
        endpoint: process.env.BACKBLAZE_S3_ENDPOINT, // In this format: https://...
        forcePathStyle: false,
      },
    });

    return NextResponse.json(presignedData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: (error as Error).message,
      error: true,
    });
  }
}
