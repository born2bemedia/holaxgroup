import { create } from "zustand";
import qs from "qs";
import axiosClient from "@/app/api/GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

const buildPostsUrl = (count, category) => {
  const query = {
    fields: [
      "id",
      "slug",
      "title",
      "excerpt",
      "content",
      "seo_title",
      "seo_description",
    ],
    populate: {
      image: { fields: ["url"] },
    },
    pagination: { pageSize: count || 9999 },
    sort: ["id:asc"],
  };

  if (category) {
    query.filters = { category: category };
  }

  return `posts?${qs.stringify(query)}`;
};

const usePostStore = create((set) => ({
  posts: [],
  slugs: [],
  loading: false,
  error: null,
  singlePost: {},

  fetchPosts: async (count) => {
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
          mobile_image: post.mobile_image,
          seo_title: post.seo_title,
          seo_description: post.seo_description,
        };
      });

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

      const slugs = response.data.data.map((post) => post.slug);

      set({ slugs, loading: false });
    } catch (error) {
      console.error(
        "Error fetching slugs:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },

  fetchPostsByCategory: async (category, count) => {
    set({ loading: true, error: null });
    try {
      const url = buildPostsUrl(count, category);
      const response = await axiosClient.get(url);

      const posts = response.data.data.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        content: post.content,
        image: post.image,
        mobile_image: post.mobile_image,
        seo_title: post.seo_title,
        seo_description: post.seo_description,
      }));

      set({ posts, loading: false });
    } catch (error) {
      console.error(
        "Error fetching posts by category:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },

  fetchPostBySlug: async (slug) => {
    set({ loading: true, error: null });
    try {
      const url = buildPostsUrl(999);
      const response = await axiosClient.get(url);

      const post = response.data.data.find((post) => post.slug === slug);

      if (post) {
        const processedPost = {
          id: post.id,
          slug: post.slug,
          title: post.title,
          content: post.content,
          image: post.image,
          mobile_image: post.mobile_image,
          seo_title: post.seo_title,
          seo_description: post.seo_description,
        };

        set({ singlePost: processedPost, loading: false });
      } else {
        set({ singlePost: {}, loading: false });
        console.error("Post not found.");
      }
    } catch (error) {
      console.error(
        "Error fetching post:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },
}));

export default usePostStore;
