const API_URL = 'http://localhost:3001';

export const blogApi = {
  getAllBlogs: async () => {
    const res = await fetch(`${API_URL}/blogs`);
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
  },

  getBlogById: async (id) => {
    const res = await fetch(`${API_URL}/blogs/${id}`);
    if (!res.ok) throw new Error('Failed to fetch blog');
    return res.json();
  },
  
}