// Todo: 개발 환경에서는 Navigation 형태로 사용하고, 추후 배포시에는 토큰에 따른 Navigate로 변경
import SvgLogo from "@/assets/react.svg?react";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <SvgLogo />
    </>
  );
}

export default Home;
