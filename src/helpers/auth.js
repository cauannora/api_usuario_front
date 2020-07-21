export const TOKEN_KEY = '@token_api';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  console.log(`removendo token -> ${getToken()}`)
  localStorage.removeItem(TOKEN_KEY);
};