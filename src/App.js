import { useQuery, gql } from "@apollo/client";
const GET_courses = gql`
  query {
    getAllCourses {
      id
      title
      description
    }
  }
`;

const GET_course = 
  gql`
    query ($id: ID){
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
    <div key={id}>
      <h3>{title}</h3>
      <p>
        ID:<i>{id}</i>
      </p>
      <b>About this course:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

function GetCourseByID({idCourse}) {
  
  const { loading, error, data } = useQuery(GET_course, {
    variables: {
      id: idCourse
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :c </p>;
  const {id, title, description} = data.getCourse;

  return (
    
    <div key={id}>
      <h2>Find course ID: {idCourse}</h2>
      <hr></hr>
      <h3>{title}</h3>
      <p>
        ID:<i>{id}</i>
      </p>
      <b>About this course:</b>
      <p>{description}</p>
      <br />
    </div>
  );
  
}

function App() {
  return (
    <div>
      <h2>ALL COURSES</h2>
      <br />
      <GetAllCourses />
      <hr></hr>
      <GetCourseByID idCourse={"630c4e3cff694e8c68b2d2d4"}/>
    </div>
  );
}

export default App;
