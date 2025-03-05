import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NanumGothicBold";
    src: url("/Nanum_Gothic/NanumGothic-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumGothicRegular";
    src: url("/Nanum_Gothic/NanumGothic-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("/Pretendard-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: "Pretendard-Regular", sans-serif !important;
  }
`;
