export default function EmployeeListItem(props) {
  return (
    <div className="container">
      <img src={props.img} alt={props.name} />
      <div className="emText">
        <h3>{props.name}</h3>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
