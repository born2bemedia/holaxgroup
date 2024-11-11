import { create } from 'zustand';

const usePopupStore = create((set) => ({
  orderPopupDisplay: false,
  thanksPopupDisplay: false,
  jobsPopupDisplay: false,
  serviceValue: false,
  serviceType: false,
  jobValue: false,

  setOrderPopupDisplay: (value) => set({ orderPopupDisplay: value }),
  setThanksPopupDisplay: (value) => set({ thanksPopupDisplay: value }),
  setJobsPopupDisplay: (value) => set({ jobsPopupDisplay: value }),
  setServiceValue: (value) => set({ serviceValue: value }),
  setServiceType: (value) => set({ serviceType: value }),
  setJobValue: (value) => set({ jobValue: value }),
}));

export default usePopupStore;
