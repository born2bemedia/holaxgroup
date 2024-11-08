import { create } from "zustand";
import qs from "qs";
import axiosClient from "@/app/api/GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

const buildCasesUrl = (count) => {
  const query = {
    fields: [
      "id",
      "slug",
      "title",
      "content",
      "introduction",
      "conclusion",
      "seo_title",
      "seo_description",
    ],
    populate: {
      image: { fields: ["url"] },
      icon: { fields: ["url"] },
    },
    pagination: { pageSize: count || 9999 },
    sort: ["id:asc"],
  };

  return `articles?${qs.stringify(query)}`;
};

const useArticlesStore = create((set) => ({
  articles: [],
  slugs: [],
  loading: false,
  error: null,
  singlePost: {},

  fetchCases: async (count = 999) => {
    set({ loading: true, error: null });
    try {
      const url = buildCasesUrl(count);
      const response = await axiosClient.get(url);
      const articles = response.data.data.map((article) => {
        return {
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
        };
      });
      console.log(articles);
      set({ articles, loading: false });
    } catch (error) {
      console.error(
        "Error fetching articles:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },

  fetchSlugs: async (count) => {
    set({ loading: true, error: null });
    try {
      const url = buildCasesUrl(count);
      const response = await axiosClient.get(url);

      const slugs = response.data.data.map((article) => article.slug);

      set({ slugs, loading: false });
    } catch (error) {
      console.error(
        "Error fetching slugs:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },

}));

export default useArticlesStore;
