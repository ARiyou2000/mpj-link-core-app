"use client";

import { useParams } from "next/navigation";
import getDocumentDir from "../lib/getDocumentDir";

const useGlobalDir = () => {
  const params = useParams();

  const dir = getDocumentDir(params.lang);

  return dir;
};

export default useGlobalDir;
