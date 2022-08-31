import {CreateCourse, DeleteCourse, UpdateCourse} from '../resolvers/course'

function AppMutations() {
  return (
    <div>
      <CreateCourse />
      <hr></hr>
      <DeleteCourse />
      <hr></hr>
      <UpdateCourse/>
    </div>
  );
}

export default AppMutations;
