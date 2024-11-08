import { create } from "zustand";
import qs from "qs";
import axiosClient from "@/app/api/GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

const buildPostsUrl = (count) => {
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

  return `posts?${qs.stringify(query)}`;
};

const usePostsStore = create((set) => ({
  posts: [],
  slugs: [],
  loading: false,
  error: null,
  singlePost: {},

  fetchPosts: async (count = 999) => {
    set({ loading: true, error: null });
    try {
      const url = buildPostsUrl(count);
      const response = await axiosClient.get(url);
      const posts = response.data.data.map((post) => {
        return {
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
        };
      });
      console.log(posts);
      set({ posts, loading: false });
    } catch (error) {
      console.error(
        "Error fetching posts:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },

  fetchSlugs: async (count) => {
    set({ loading: true, error: null });
    try {
      const url = buildPostsUrl(count);
      const response = await axiosClient.get(url);

      const slugs = response.data.data.map((article) => post.slug);

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

export default usePostsStore;
