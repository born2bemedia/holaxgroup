import { create } from 'zustand';

const usePopupStore = create((set) => ({
  orderPopupDisplay: false,
  thanksPopupDisplay: false,
  serviceValue: false,
  serviceType: false,

  setOrderPopupDisplay: (value) => set({ orderPopupDisplay: value }),
  setThanksPopupDisplay: (value) => set({ thanksPopupDisplay: value }),
  setServiceValue: (value) => set({ serviceValue: value }),
  setServiceType: (value) => set({ serviceType: value }),
}));

export default usePopupStore;
