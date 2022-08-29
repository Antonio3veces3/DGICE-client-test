import { gql, useMutation } from "@apollo/client";

const Create_Course = gql`
  mutation {
    createCourse(course: { title: "example2", description: "example2" }) {
      id
      title
      description
    }
  }
`;

const DELETE_course = gql`
  mutation {
    deleteCourse(id: "630c4f1fff694e8c68b2d2db")
  }
`;

function CreateCourse() {
  const [createCourse, { data, error, loading }] = useMutation(Create_Course);

  if (loading) return "Creating...";
  if (error) return "error";

  return (
    <div>
      <button onClick={createCourse} type="submit">
        Crear
      </button>
    </div>
  );
}

function DeleteCourse() {
    const [deleteCourse, { data, error, loading }] = useMutation(DELETE_course)


  return (
    <div>
      <button onClick={deleteCourse}>
        Delete
      </button>
    </div>
  );
}

function AppMutations() {
  return (
    <div>
        
      <CreateCourse />
      <hr></hr>
      <DeleteCourse/>
    </div>
  );
}

export default AppMutations;
