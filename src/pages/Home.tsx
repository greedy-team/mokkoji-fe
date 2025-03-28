import SEO from "@/components/SEO";
import { CategorySection, HomeSection } from "@/features/home";

function Home() {
  return (
    <>
      <SEO
        title="모꼬지 | 세종대학교의 모든 동아리"
        description="모꼬지 메인 페이지입니다."
        keywords="세종대학교, 세종대, 동아리"
      />
      <HomeSection />
      <CategorySection />
    </>
  );
}

export default Home;
