"use client";
import { UpupUploader, UpupProvider, UploadAdapter } from "@bassem97/upup";

export default function Uploader() {
  return (
    <UpupUploader
      provider={UpupProvider.AWS}
      limit={10}
      tokenEndpoint="http://localhost:3000/api/upload"
      uploadAdapters={[
        UploadAdapter.INTERNAL,
        UploadAdapter.ONE_DRIVE,
        UploadAdapter.GOOGLE_DRIVE,
        UploadAdapter.LINK,
        UploadAdapter.CAMERA,
      ]}
      driveConfigs={{
        googleDrive: {
          google_client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          google_api_key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
          google_app_id: process.env.NEXT_PUBLIC_GOOGLE_APP_ID!,
        },
        oneDrive: {
          onedrive_client_id: process.env.NEXT_PUBLIC_ONEDRIVE_CLIENT_ID!,
        },
      }}
      // onError={console.error}
      // mini
    />
  );
}
