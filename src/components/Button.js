
export function Button({ text, style }) {
  return (
    <>
      <button className={`button ${style}`}>
        {text}
      </button>
    </>
  )
}