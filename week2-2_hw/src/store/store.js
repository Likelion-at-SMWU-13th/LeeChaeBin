import { create } from "zustand";

const usePlaylistStore = create((set) => ({
  playlist: [],
  addPlaylist: (song) => {
    const title = song.title.trim();
    const artist = song.artist.trim();
    const albumImg = song.albumImg.trim();

    if (!title) return;
    set((state) => ({
      playlist: [
        ...state.playlist,
        { id: Date.now(), title, artist, albumImg, liked: false },
      ],
    }));
  },
  removePlaylist: (id) =>
    set((state) => ({
      playlist: state.playlist.filter((song) => song.id !== id),
    })),
  togglePlaylist: (id) =>
    set((state) => ({
      playlist: state.playlist.map((song) =>
        song.id === id ? { ...song, liked: !song.liked } : song
      ),
    })),
}));

export default usePlaylistStore;
