const { Card, ListGroup } = ReactBootstrap;

function StudentCard(props) {
  return (
    <div>
      <img src={props.image} />
      <h4>Name: {props.name}</h4>
      <h4>Register No.: {props.regno}</h4>
      <h4>Department: {props.dept}</h4>
    </div>
  )
}

// TODO 2:
// Create the React Root.

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// TODO 3:
// Render three StudentCard components.

root.render(

  <div className="container mt-4">

    <div className="row">

      {/* Student 1 */}
      <StudentCard
        image="image1.jpg"
        name="student 1"
        regno="iu74ba29"
        dept="BBA"
      />

      {/* Student 2 */}
      <StudentCard
        image="image2.jpg"
        name="student 2"
        regno="Iuca044"
        dept="CA"
      />

      {/* Student 3 */}
      <StudentCard
        image="image3.jpg"
        name="student 3"
        regno="1ua23o77"
        dept="IT"
      />

    </div>

  </div>

);
