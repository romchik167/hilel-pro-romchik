export default function BtnApple({ count, onIncrement }) {
  return (
    <button onClick={onIncrement}>
      Apple is the best {count}
    </button>
  )
}