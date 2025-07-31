import "@/styles/cases.scss";
import axiosClient from "@/app/api/GlobalApi";
import Image from "next/image";
import ArrowVertical from "@/icons/other/ArrowVertical";
import ReactMarkdown from "react-markdown";
import CasesCta from "../_components/CasesCta";

// Use server-side data fetching to get the post by slug
const fetchPostBySlugServer = async (slug) => {
  const url = `cases?filters[slug][$eq]=${slug}&populate=*`; // Adjust your API query here
  const response = await axiosClient.get(url);
  const caseItem = response.data.data[0]; // Assuming the response returns a single post

  return caseItem
    ? {
        id: caseItem.id,
        slug: caseItem.slug,
        title: caseItem.title,
        client: caseItem.client,
        image: caseItem.image,
        challenge: caseItem.challenge,
        solution: caseItem.solution,
        result: caseItem.result,
      }
    : null;
};

// Metadata generation for SEO
export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;
  const caseItem = await fetchPostBySlugServer(slug);

  return {
    title: caseItem?.seo_title || caseItem?.title || "Default Title",
    description: caseItem?.seo_description || "Default description",
  };
}

const CasesInner = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;
  const singlePost = await fetchPostBySlugServer(slug);

  if (!singlePost) {
    return (
      <section className="case-inner">
        <div className="_container">
          <div className="case-inner__top">
            <div className="col-01">
              <h1>Post not found</h1>
            </div>
          </div>
        </div>
      </section>
    ); // Handle
  }

  return (
    <>
      <section className="case-inner">
        <div className="_container">
          <div className="case-inner__body">
            <div className="top">
              <div className="col-01">
                <h1>{singlePost.title}</h1>
                <div className="client">
                  <span>Client: {singlePost.client}</span>
                </div>
                <div className="challenge">
                  <span>Challenge:</span> {singlePost.challenge}
                </div>
              </div>
              <Image
                src={singlePost.image.url}
                width={574}
                height={323}
                alt={singlePost.title}
              />
            </div>
            <ArrowVertical />
            <div className="content">
              <h2>Solution:</h2>
              <ReactMarkdown>{singlePost.solution}</ReactMarkdown>
              <h2>Results:</h2>
              <ReactMarkdown>{singlePost.result}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
      <CasesCta />
    </>
  );
};

export default CasesInner;
