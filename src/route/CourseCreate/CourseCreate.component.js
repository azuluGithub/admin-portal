import CourseCreate from "../../component/CourseCreate";

const CourseCreateComponent = () => {
  const renderComponent = () => {
    return (
      <div className='mt-6 ml-4 mr-4 mb-4'>
        <CourseCreate />
      </div>
    );
  }

  return renderComponent();
}

export default CourseCreateComponent;

