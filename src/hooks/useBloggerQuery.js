import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {blogApi}  from "../services/blogApi";

export const useBlogList = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogApi.getAllBlogs
  });
};


export const useBlogDetail = (blogId) => {
  return useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => blogApi.getBlogById(blogId),
    enabled: !!blogId
  });
};


export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: blogApi.createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    }
  });
};