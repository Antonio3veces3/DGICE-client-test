import { gql, useMutation } from "@apollo/client";
import {useState} from 'react'; 

const GET_courses = gql`
  query {
    getAllCourses {
      id
      title
      description
    }
  }
`;

const Create_Course = gql`
  mutation ($title: String, $description: String) {
    createCourse(course: { title: $title, description: $description }) {
      id
      title
      description
      __typename
    }
  }
`;

const DELETE_course = gql`
  mutation ($id: ID!) {
    deleteCourse(id: $id)
  }
`;

function CreateCourse() {
  let title, description;
  const [createCourse, { data, error, loading }] = useMutation(Create_Course,{
    refetchQueries: [
      {query: GET_courses},
      "getCourses"
    ]
  });

  if (loading) return "Creating...";
  if (error) return console.log(error);

  return (
    <div>
      <h2>
        <b>Create course</b>
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCourse({
            variables: { title: title.value, description: description.value },
          });
        }}
      >
        <p>
          Title:
          <input
            ref={(node) => {
              title = node;
            }}
          />
        </p>

        <p>
          Description:
          <input
            ref={(node) => {
              description = node;
            }}
          />
        </p>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

function DeleteCourse() {
  const [id, setId] = useState('');

  const [deleteCourse, { data, error, loading }] = useMutation(DELETE_course,
    {
      refetchQueries: [
        {query: GET_courses},
        "getCourses"
      ]
    });
  if (loading) return "Deleting...";
  if (error) return console.log(error);
  return (
    <div>
      <h2>Delete course</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //Convertir el string a ID 
          console.log(id);
          deleteCourse({ variables: { id: `${id}` } });
        }}
      >
        <p>
          ID:
          <input
            onChange={ event => setId(event.target.value)}
            type="text"
          />
        </p>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

function AppMutations() {
  return (
    <div>
      <CreateCourse />
      <hr></hr>
      <DeleteCourse />
    </div>
  );
}

export default AppMutations;
