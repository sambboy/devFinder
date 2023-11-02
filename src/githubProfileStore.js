import create from 'zustand';

const useGitHubProfileStore = create((set) => ({
  profiles: null,

  setSearchResult: (newProfiles) => set({ profiles: newProfiles }),
}));

export default useGitHubProfileStore;