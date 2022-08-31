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

const UPDATE_course = gql`
mutation ($updateCourseId: ID!, $title: String, $description: String) {
  updateCourse(id: $updateCourseId, course: {
    title: $title,
    description: $description
  }) {
    id
    title
    description
  }
}
`;

export {
    Create_Course,
    DELETE_course,
    UPDATE_course
}