export default function CandidateBtn({ name, count, onIncrement }) {
  return (
    <button onClick={onIncrement}>
      {name} is the best {count}
    </button>
  )
}
