import { gql } from "@apollo/client";

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

export {
    Create_Course,
    DELETE_course
}