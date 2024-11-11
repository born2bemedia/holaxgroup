import "@/styles/news.scss";
import axiosClient from "@/app/api/GlobalApi";
import Image from "next/image";
import ArrowVertical from "@/icons/other/ArrowVertical";
import ReactMarkdown from "react-markdown";
import CasesCta from "../_components/CasesCta";

// Use server-side data fetching to get the post by slug
const fetchPostBySlugServer = async (slug) => {
  const url = `posts?filters[slug][$eq]=${slug}&populate=*`; // Adjust your API query here
  const response = await axiosClient.get(url);
  const post = response.data.data[0]; // Assuming the response returns a single post

  return post
    ? {
        id: post.id,
        slug: post.slug,
        title: post.title,
        content: post.content,
        image: post.image,
        icon: post.icon,
        introduction: post.introduction,
        conclusion: post.conclusion,
        seo_title: post.seo_title,
        seo_description: post.seo_description,
      }
    : null;
};

// Metadata generation for SEO
export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;
  const post = await fetchPostBySlugServer(slug);

  return {
    title: post?.seo_title || post?.title || "Default Title",
    description: post?.seo_description || "Default description",
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
                <div className="client">{singlePost.introduction}</div>
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
              <ReactMarkdown>{singlePost.content}</ReactMarkdown>
              <h2>Conclusion</h2>
              <p>{singlePost.conclusion}</p>
            </div>
          </div>
        </div>
      </section>
      <CasesCta />
    </>
  );
};

export default CasesInner;
