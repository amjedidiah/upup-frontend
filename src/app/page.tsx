import dynamic from "next/dynamic";

const DynamicUploader = dynamic(() => import("./components/Uploader"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="h-dvh flex items-center justify-center p-4">
      <DynamicUploader />
    </div>
  );
}
