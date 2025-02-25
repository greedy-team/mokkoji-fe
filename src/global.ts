import { createGlobalStyle } from "styled-components";
import IBMPlexBold from "@/fonts/IBM_Plex_Sans_KR/IBMPlexSansKR-Bold.ttf";
import IBMPlexRegular from "@/fonts/IBM_Plex_Sans_KR/IBMPlexSansKR-Regular.ttf";


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "IBMPlexBold";
    src: local('IBMPlexBold'), local('IBMPlexBold');
    font-style: normal;
    src: url(${IBMPlexBold}) format('truetype');
  }
  @font-face {
    font-family: "IBMPlexRegular";
    src: local('IBMPlexRegular'), local('IBMPlexRegular');
    font-style: normal;
    src: url(${IBMPlexRegular}) format('truetype');
  }
`;