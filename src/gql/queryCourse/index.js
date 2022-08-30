import { gql } from "@apollo/client";

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

export {
    GET_course,
    GET_courses
}