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
import WhatApproach from "./_components/WhatApproach";



export const metadata = {
  title: "Our Approach and Services | Holax Group",
  description:
    "Learn about Holax Group’ unique approach to delivering top-tier consulting services. Explore how our expertise can help your business thrive.",
  openGraph: {
    title: "Our Approach and Services | Holax Group",
    description:
      "Learn about Holax Group’ unique approach to delivering top-tier consulting services. Explore how our expertise can help your business thrive.",
    //images: "https://holaxgroup.com/images/meta.png",
  },
};

export default function WhatWeDo() {
  return (
    <div className="what-we-do">
      <WhatHero />
      <WhatVideo />
      <WhatText />
      <WhatApproach />
      <WhatOur />
      <WhatFeatures />
      <WhatWhy />
      <WhatHow />
      <WhatValues />
    </div>
  );
}
