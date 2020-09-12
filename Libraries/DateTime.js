export default () => {
  const Time = new Date()
  return `${Time.getFullYear()}-${Time.getMonth()}-${Time.getDate()}`
}