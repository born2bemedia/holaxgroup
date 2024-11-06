import Image from "next/image";
import HomeHero from "./_components/HomeHero";
import HomeVideo from "./_components/HomeVideo";
import HomeItems from "./_components/HomeItems";
import HomeAbout from "./_components/HomeAbout";


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
      <HomeAbout />
      <HomeItems />
    </div>
  );
}
