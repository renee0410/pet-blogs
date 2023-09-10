
export function Button({ text, style, icon }) {
  return (
    <>
      <button className={`button ${style}`}>
        {text}
        {icon ? (<img src={icon} alt="" />) : ''}
      </button>
    </>
  )
}