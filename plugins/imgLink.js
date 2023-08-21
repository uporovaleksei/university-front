
export default defineNuxtPlugin(({ img }) => {
  const { baseURL } = useRuntimeConfig()
  return `${baseURL}imgs/${img?.id}.${img?.format}`
})
