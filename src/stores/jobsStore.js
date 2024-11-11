import { create } from "zustand";
import qs from "qs";
import axiosClient from "@/app/api/GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

const buildJobsUrl = (count) => {
  const query = {
    fields: [
      "id",
      "title",
      "responsibilities",
      "requirements",
    ],
    pagination: { pageSize: count || 9999 },
    sort: ["id:asc"],
  };

  return `jobs?${qs.stringify(query)}`;
};

const useJobsStore = create((set) => ({
  jobs: [],
  slugs: [],
  loading: false,
  error: null,
  singlePost: {},

  fetchJobs: async (count = 999) => {
    set({ loading: true, error: null });
    try {
      const url = buildJobsUrl(count);
      const response = await axiosClient.get(url);
      const jobs = response.data.data.map((job) => {
        return {
          id: job.id,
          title: job.title,
          responsibilities: job.responsibilities,
          requirements: job.requirements,
        };
      });
      console.log(jobs);
      set({ jobs, loading: false });
    } catch (error) {
      console.error(
        "Error fetching jobs:",
        error.response?.data || error.message
      );
      set({ error: error.message, loading: false });
    }
  },

}));

export default useJobsStore;
