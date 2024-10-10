const ShowOrHide = ({ when, fallback = null, child }) => {
  console.log(when)
  return when ? child : fallback
}
export default ShowOrHide
