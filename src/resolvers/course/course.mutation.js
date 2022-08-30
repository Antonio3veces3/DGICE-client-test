import {useState} from 'react';
import { useMutation } from "@apollo/client";
import {Create_Course, DELETE_course} from '../../gql/mutationCourse'
import {GET_courses} from '../../gql/queryCourse'

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

  export{
    CreateCourse,
    DeleteCourse
  }