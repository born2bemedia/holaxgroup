import "@/styles/base.scss";
import HomeHero from "./_components/HomeHero";
import HomeVideo from "./_components/HomeVideo";
import HomeItems from "./_components/HomeItems";
import HomeAbout from "./_components/HomeAbout";
import HomeServices from "./_components/HomeServices";


export const metadata = {
  title: "",
  description:
    "",
  openGraph: {
    title: "",
    description:
      "",
    images: "",
  },
};

export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <HomeVideo />
      <HomeServices />
      <HomeAbout />
      <HomeItems />
    </div>
  );
}
