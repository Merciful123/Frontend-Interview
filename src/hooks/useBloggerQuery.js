import { useQuery } from "@tanstack/react-query";
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