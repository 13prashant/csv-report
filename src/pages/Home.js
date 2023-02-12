import { useState } from "react";
import UploadCsv from "../components/UploadCsv";
import Reports from "../components/Reports";

export default function Home() {
  const [parsedJson, setParsedJson] = useState(null);

  return (
    <>
      <UploadCsv setParsedJson={setParsedJson} />
      <Reports data={parsedJson} />
    </>
  );
}
