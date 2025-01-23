import dynamic from "next/dynamic";

const DynamicUploader = dynamic(() => import("./components/Uploader"), {
  ssr: false,
});

export default function Page() {
  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <DynamicUploader />
    </div>
  );
}
