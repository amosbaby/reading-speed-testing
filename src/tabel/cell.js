import "./tabel.css";

export default function Cell(props) {
  return (
    <div className="cell">
      <span>{props.value}</span>
    </div>
  );
}
