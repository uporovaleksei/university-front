export default ({ img }) => {
  const { baseURL } = useRuntimeConfig()
  return `${baseURL}imgs/${img?.id}.${img?.format}`
}
