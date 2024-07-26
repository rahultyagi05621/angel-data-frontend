// export const baseUrl = "http://localhost:3001/user";
export const baseUrl = "https://angel-data-backend.onrender.com/user";
export const loginUrl = `${baseUrl}/login`;
export const signUpUrl = `${baseUrl}/signup`;
export const contactUrl = `${baseUrl}/contact`;
export const createTaskUrl = (userId) => `${baseUrl}/${userId}/tasks`;
export const getUserTasksUrl = (userId) => `${baseUrl}/${userId}/tasks`;
export const signUrl = (userId) => `${baseUrl}/${userId}/sign`;
export const getUrl = (userId) => `${baseUrl}/${userId}/sign`;
