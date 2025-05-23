// composables/useResolveSrc.js
export const useResolveSrc = () => {
  const baseURL = useRuntimeConfig().app.baseURL
  const resolveSrc = (src) => baseURL.replace(/\/$/, '') + '/' + src
  return { resolveSrc }
}