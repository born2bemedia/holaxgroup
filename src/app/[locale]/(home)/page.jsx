import "@/styles/base.scss";
import HomeHero from "./_components/HomeHero";
import HomeVideo from "./_components/HomeVideo";
import HomeItems from "./_components/HomeItems";
import HomeAbout from "./_components/HomeAbout";
import HomeServices from "./_components/HomeServices";
import FormBottom from "./_components/FormBottom";


export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <HomeVideo />
      <HomeServices />
      <HomeAbout />
      <HomeItems />
      <FormBottom />
    </div>
  );
}
