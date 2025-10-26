export default function Button ({ text, onClick, ...props }) {
   return (
      <button type="button" onClick={onClick} {...props}>{text}</button>
   )
}