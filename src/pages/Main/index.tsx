import { useCallback, useContext, useRef } from "react";
import { toPng } from "html-to-image";
import { download } from "../../utils/download";
import BackgroundPicker from "../../components/BackgroundPicker";
import DropImages from "../../components/DropImages";
import GeneratedImage, {
  generatedImageRef,
} from "../../components/GeneratedImage";
import * as S from "./style";

export default function Main() {
  const handleCreateImage = useCallback(async () => {
    const imageUrl = await toPng(generatedImageRef.current);
    if (!imageUrl) return;

    download(imageUrl, "cover.png");
  }, [generatedImageRef]);

  return (
    <S.Container>
      <S.NavigationContainer>
        <S.Navigation>
          <DropImages />
          <BackgroundPicker />
          <button type="button" onClick={handleCreateImage}>
            Click to download
          </button>
        </S.Navigation>
      </S.NavigationContainer>
      <GeneratedImage />
    </S.Container>
  );
}
