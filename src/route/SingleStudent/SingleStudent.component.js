import StudentCard from "../../component/StudentCard";

import './SingleStudent.style.scss';

const SingleStudentComponent = (props) => {
  const renderComponent = () => {
    return (
      <div className='mt-6 ml-4 mr-4 mb-4'>
        <StudentCard
          { ...props }
        />
      </div>
    );
  }

  return renderComponent();
}

export default SingleStudentComponent;


