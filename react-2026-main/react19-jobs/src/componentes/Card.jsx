
const Card = ({children, bg='bg-green-100' }) => {
  return (
    <div className={`${bg} rounded Lg p-6 shadow-nd`}>
      {children}
    </div>
  )
}

export default Card