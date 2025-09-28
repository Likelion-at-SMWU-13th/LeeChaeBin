import {
  createPost,
  updatePost,
  deletePost,
  createUser,
  readUser,
} from "./axios";
import { getPost } from "./axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost({ title, content }),
  });
};

export const useGetPost = (postId) => {
  return useQuery({
    queryKey: ["postId", postId],
    queryFn: () => getPost(postId),

    enabled: !!postId,
    staleTime: 10 * 1000,
    gcTime: 60 * 1000,
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: async ({ postId, title, content }) => {
      if (!postId) throw new Error("postId가 없습니다.");
      return updatePost(postId, { title, content });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      alert("게시글이 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["postList"] });
    },
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => createUser({ username, password }),
    onSuccess: () => {
      alert("환영합니다!");
    },
  });
};

export const useReadUser = (userId) => {
  return useQuery({
    queryKey: ["userId", userId],
    queryFn: () => readUser(userId),

    staleTime: 30 * 1000,
    retry: 3,
  });
};
