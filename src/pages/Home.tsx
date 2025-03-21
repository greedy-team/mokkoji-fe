import { CategorySection, HomeSection } from "@/features/home";

function Home() {
  return (
    <>
      <title>모꼬지 | 세종대학교의 모든 동아리</title>
      <meta name="title" content="모꼬지 | 세종대학교의 모든 동아리" />
      <meta name="description" content="모꼬지 메인 페이지입니다." />
      <meta name="keywords" content="세종대학교, 세종대, 동아리" />
      <meta name="robots" content="index, follow" />

      <HomeSection />
      <CategorySection />
    </>
  );
}

export default Home;
