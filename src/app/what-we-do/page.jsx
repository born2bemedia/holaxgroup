import "@/styles/base.scss";
import "@/styles/what-we-do.scss";
import WhatHero from "./_components/WhatHero";
import WhatVideo from "./_components/WhatVideo";
import WhatText from "./_components/WhatText";
import WhatValues from "./_components/WhatValues";
import WhatHow from "./_components/WhatHow";
import WhatWhy from "./_components/WhatWhy";
import WhatFeatures from "./_components/WhatFeatures";
import WhatOur from "./_components/WhatOur";



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

export default function WhatWeDo() {
  return (
    <div className="what-we-do">
      <WhatHero />
      <WhatVideo />
      <WhatText />

      <WhatOur />
      <WhatFeatures />
      <WhatWhy />
      <WhatHow />
      <WhatValues />
    </div>
  );
}
