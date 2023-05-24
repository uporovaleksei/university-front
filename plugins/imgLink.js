export default ({ img }) => {
  const { globalURL } = useRuntimeConfig()
  return `${globalURL}imgs/${img?.id}.${img?.format}`
}
