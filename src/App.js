import { useState } from "react";
import {GetAllCourses, GetCourseByID} from './resolvers/course/'

function App() {
  const [id, setId] = useState("");
  return (
    <div>
      <h2>ALL COURSES</h2>
      <br />
      <div
        style={{
          height: "20rem",
          border: "solid 0.3px #0236",
          borderColor: "black",
          overflow: "auto",
          padding: "40px",
        }}
      >
        <GetAllCourses />
      </div>
      <hr></hr>
      <h2>Find course ID.</h2>
      <p>
        <b>Searching: </b>
        <input onChange={(event) => setId(event.target.value)} type="text" />
      </p>

      <GetCourseByID idCourse={id} />
    </div>
  );
}

export default App;
