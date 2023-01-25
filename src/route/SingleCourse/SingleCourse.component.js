import Course from "../../component/Course";

import './SingleCourse.style.scss';

const SingleCourseComponent = (props) => {
  const renderComponent = () => {
    return (
      <div className='mt-6 ml-4 mr-4 mb-4'>
          <Course 
            { ...props }
          />
      </div>
    );
  }

  return renderComponent();
}

export default SingleCourseComponent;

