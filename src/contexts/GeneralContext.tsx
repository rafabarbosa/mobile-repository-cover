import { createContext, useState, useEffect, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { convertToBase64 } from "../utils/convert";

type BackgroundProps = {
  title: string;
  gradient: string;
};

type GeneralContextProps = {
  files: any;
  getRootProps: any;
  getInputProps: any;
  background: BackgroundProps;
  setBackground: (background: BackgroundProps) => void;
};

const GeneralContext = createContext({} as GeneralContextProps);

export const GeneralProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [background, setBackground] = useState<BackgroundProps>({
    title: "pink",
    gradient:
      "linear-gradient(90deg, rgba(195,37,223,1) 0%, rgba(115,29,180,1) 100%)",
  });

  useEffect(() => {
    const data = localStorage.getItem("@creating:github:cover");
    if (data) {
      setFiles(JSON.parse(data));
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: async (acceptedFiles) => {
      const uploadedFiles = acceptedFiles.map(async (file) => {
        return Object.assign(file, {
          preview: await convertToBase64(file),
        });
      });

      const files = await Promise.all(uploadedFiles);
      localStorage.setItem("@creating:github:cover", JSON.stringify(files));
      setFiles(files);
    },
  });

  return (
    <GeneralContext.Provider
      value={{ files, getInputProps, getRootProps, background, setBackground }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneral = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw "General context is not initialized!";
  }
  return context;
};

export default GeneralContext;
