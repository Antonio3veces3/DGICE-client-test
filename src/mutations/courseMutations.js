import {CreateCourse, DeleteCourse} from '../resolvers/course'

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
