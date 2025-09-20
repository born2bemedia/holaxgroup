import '@/styles/articles.scss';
import axiosClient from '@/app/api/GlobalApi';
import Image from 'next/image';
import ArrowVertical from '@/icons/other/ArrowVertical';
import ReactMarkdown from 'react-markdown';
import CasesCta from '../_components/CasesCta';
import { getTranslations } from 'next-intl/server';

// Use server-side data fetching to get the post by slug
const fetchPostBySlugServer = async slug => {
  const url = `articles?filters[slug][$eq]=${slug}&populate=*`; // Adjust your API query here
  const response = await axiosClient.get(url);
  const article = response.data.data[0]; // Assuming the response returns a single post

  return article
    ? {
        id: article.id,
        slug: article.slug,
        title: article.title,
        content: article.content,
        image: article.image,
        icon: article.icon,
        introduction: article.introduction,
        conclusion: article.conclusion,
        seo_title: article.seo_title,
        seo_description: article.seo_description,
      }
    : null;
};

// Metadata generation for SEO
export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;
  const article = await fetchPostBySlugServer(slug);

  return {
    title: article?.seo_title || article?.title || 'Default Title',
    description: article?.seo_description || 'Default description',
  };
}

const CasesInner = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;
  const singlePost = await fetchPostBySlugServer(slug);

  const t = await getTranslations('articlesSlug');

  if (!singlePost) {
    return (
      <section className="case-inner">
        <div className="_container">
          <div className="case-inner__top">
            <div className="col-01">
              <h1>{t('notFound', { fallback: 'Post not found' })}</h1>
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
              <img src={singlePost.icon.url} />
              <h1>{singlePost.title}</h1>
            </div>
            <div className="content">
              <div className="introduction">
                <h2>{t('introduction', { fallback: 'Introduction' })}</h2>
                <p>{singlePost.introduction}</p>
              </div>
              <ReactMarkdown>{singlePost.content}</ReactMarkdown>
              <div className="conclusion">
                <h2>{t('conclusion', { fallback: 'Conclusion' })}</h2>
                <p>{singlePost.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasesInner;
