import { create } from "zustand";

const usePlaylistStore = create((set) => ({
  playlists: [],
  addPlaylist: (song) => {
    const title = song.title.trim();
    if (!title) return;
    set((state) => ({
      playlists: [...state.playlists, { id: Date.now(), title, liked: false }],
    }));
  },
  removePlaylist: (id) =>
    set((state) => ({
      playlists: state.playlists.filter((song) => song.id !== id),
    })),
  togglePlaylist: (id) =>
    set((state) => ({
      playlists: state.playlists.map((song) =>
        song.id === id ? { ...song, liked: !song.liked } : song
      ),
    })),
}));

export default usePlaylistStore;
