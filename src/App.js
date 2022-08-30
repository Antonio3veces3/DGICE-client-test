import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
const GET_courses = gql`
  query {
    getAllCourses {
      id
      title
      description
    }
  }
`;

const GET_course = gql`
  query ($id: ID) {
    getCourse(id: $id) {
      id
      title
      description
    }
  }
`;

function GetAllCourses() {
  const { loading, error, data } = useQuery(GET_courses);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :c </p>;

  return data.getAllCourses.map(({ id, title, description }) => (
    <div key={id} style={{ height: "150px" }}>
      <h3>{title}</h3>
      <p>
        ID:<i>{id}</i>
      </p>
      <b>About this course:</b>
      <p>{description}</p>
      <hr />
    </div>
  ));
}

function GetCourseByID({ idCourse }) {
  const { loading, error, data } = useQuery(GET_course, {
    variables: {
      id: idCourse,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :c </p>;
  const { id, title, description } = data.getCourse;

  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>
        ID:<i>{id}</i>
      </p>
      <b>About this course:</b>
      <p>{description}</p>
      <hr></hr>
    </div>
  );
}

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
