import { useGeneral } from "../../contexts/GeneralContext";
import * as S from "./style";

export default function DropImages() {
  const { getInputProps, getRootProps } = useGeneral();

  return (
    <S.Container {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <S.Text>
        Drag 'n' drop some files here,
        <br /> or click to select files
      </S.Text>
    </S.Container>
  );
}
