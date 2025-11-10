export default function BtnAndroid({ count, onIncrement }) {
  return (
    <button onClick={onIncrement}>
      Android is the best {count}
    </button>
  )
}
