"use client";
import {
  UpupUploader,
  UpupProvider,
  UploadAdapter,
} from "upup-react-file-uploader";

export default function Uploader() {
  return (
    <UpupUploader
      provider={UpupProvider.BackBlaze}
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
      // dark
      classNames={{
        // containerFull: "bg-green-500",
        // containerMini: "bg-red-400",
        // adapterList: "grid grid-cols-3",
        // adapterButton: "bg-white !scale-[200%]",
        // adapterButtonIcon: "bg-green-300",
        // adapterButtonText: "text-red-500",
        // containerHeader: "border !border-black",
        // containerCancelButton: "!bg-red-800",
        // containerAddMoreButton: "!bg-pink-300",
        // adapterDriveLoading: "bg-white",
        // adapterView: "!border-4 !border-red-300",
        // adapterViewHeader: "flex flex-col",
        // adapterViewCancelButton: "!bg-red-300",
        // driveHeader: "flex flex-col",
        // driveLogoutButton: "!text-red-600",
        // driveBody: "bg-red-500",
        // driveItemContainerDefault: "bg-red-200",
        // driveItemContainerInner: "bg-red-700",
        // driveItemContainerSelected: "bg-blue-500",
        // driveItemInnerText: "text-white",
        // driveSearchContainer: "bg-black",
        // driveSearchInput: "bg-white text-red-500",
        // driveFooter: "bg-pink-300",
        // driveAddFilesButton: "!bg-slate-400 text-white",
        // driveCancelFilesButton: "!bg-yellow-400",
        // cameraCaptureButton: "!bg-yellow-500",
        // cameraRotateButton: "!bg-black text-white",
        // cameraAddButton: "!bg-pink-700",
        // cameraDeleteButton: "!bg-red-600",
        // cameraPreviewContainer: "!bg-purple-500",
        // urlInput: "!text-red-700",
        // urlFetchButton: "!bg-yellow-500",
        // fileListContainer: "bg-pink-600",
        // fileListContainerInnerSingle: "bg-purple-400",
        fileListContainerInnerMultiple: "bg-slate-200 !flex !flex-col",
        // fileItemSingle: "!bg-black",
        // fileItemMultiple: "!bg-green-400",
        // fileThumbnailSingle: "!border-4 !border-yellow-500",
        // fileThumbnailMultiple: "bg-blue-300",
        // fileDeleteButton: "bg-white p-2",
        // fileInfo: "bg-yellow-300",
        // fileName: "text-red-500",
        // fileSize: "text-green-400 !text-4xl",
        // filePreviewButton: "bg-black !text-3xl",
        // filePreviewPortal: "bg-teal-300 shadow-xl",
        // fileListFooter: "bg-slate-300",
        // uploadButton: "!bg-black text-red-500",
        // uploadDoneButton: "!bg-white text-green-800",
        // progressBarContainer: "!border-3 !border-green-400",
        // progressBarText: "font-semibold text-xl text-pink-600",
        // progressBarInner: "bg-red-500",
        // progressBar: "bg-blue-500",
      }}
      // icons={{
      //   ContainerAddMoreIcon: () => <>OO</>,
      //   CameraCaptureIcon: () => <>CI</>,
      //   CameraDeleteIcon: () => <>DI</>,
      //   CameraRotateIcon: () => <>RI</>,
      //   FileDeleteIcon: () => <>DI</>,
      // }}
      // onError={console.error}
      // mini
      customProps={{
        fendi: true,
      }}
    />
  );
}
