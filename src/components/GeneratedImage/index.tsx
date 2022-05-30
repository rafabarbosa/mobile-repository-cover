import { useRef } from "react";
import { useGeneral } from "../../contexts/GeneralContext";
import * as S from "./style";

export let generatedImageRef = null;

export default function GeneratedImage() {
  generatedImageRef = useRef<HTMLDivElement>(null);
  const { files, background } = useGeneral();
  return (
    <S.Container
      ref={generatedImageRef}
      style={{
        background: background.gradient,
        margin: "auto",
      }}
    >
      {files.length > 0 ? (
        files.map((file, index) => (
          <S.Item key={index}>
            <img src={file.preview} />
          </S.Item>
        ))
      ) : (
        <div>
          <S.Hint>Upload files</S.Hint>
        </div>
      )}
    </S.Container>
  );
}
