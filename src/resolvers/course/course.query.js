import { useQuery } from "@apollo/client";

import {GET_course, GET_courses} from '../../gql/queryCourse'

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
  if(!data.getCourse) return <p>-Not found-</p>
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

export {
    GetAllCourses,
    GetCourseByID
}