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
      "client",
      "challenge",
      "solution",
      "result",
    ],
    populate: {
      image: { fields: ["url"] },
    },
    pagination: { pageSize: count || 9999 },
    sort: ["id:asc"],
  };

  return `cases?${qs.stringify(query)}`;
};

const useCasesStore = create((set) => ({
  cases: [],
  slugs: [],
  loading: false,
  error: null,
  singlePost: {},

  fetchCases: async (count = 999) => {
    set({ loading: true, error: null });
    try {
      const url = buildCasesUrl(count);
      const response = await axiosClient.get(url);
      const cases = response.data.data.map((caseItem) => {
        return {
          id: caseItem.id,
          slug: caseItem.slug,
          title: caseItem.title,
          client: caseItem.client,
          image: caseItem.image,
          challenge: caseItem.challenge,
          solution: caseItem.solution,
          result: caseItem.result,
        };
      });
      console.log(cases);
      set({ cases, loading: false });
    } catch (error) {
      console.error(
        "Error fetching cases:",
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

      const slugs = response.data.data.map((caseItem) => caseItem.slug);

      set({ slugs, loading: false });
    } catch (error) {
      console.error(
        "Error fetching slugs:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },

  fetchPostBySlug: async (slug) => {
    set({ loading: true, error: null });
    try {
      const url = buildCasesUrl(999);
      const response = await axiosClient.get(url);

      const caseItem = response.data.data.find((caseItem) => caseItem.slug === slug);

      if (caseItem) {
        const processedPost = {
          id: caseItem.id,
          slug: caseItem.slug,
          title: caseItem.title,
          content: caseItem.content,
          image: caseItem.image,
          mobile_image: caseItem.mobile_image,
          seo_title: caseItem.seo_title,
          seo_description: caseItem.seo_description,
        };

        set({ singlePost: processedPost, loading: false });
      } else {
        set({ singlePost: {}, loading: false });
        console.error("Post not found.");
      }
    } catch (error) {
      console.error(
        "Error fetching caseItem:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },
}));

export default useCasesStore;
