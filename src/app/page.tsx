import dynamic from "next/dynamic";

const DynamicUploader = dynamic(() => import("./components/Uploader"), {
  ssr: false,
});

export default function Page() {
  return <DynamicUploader />;
}
