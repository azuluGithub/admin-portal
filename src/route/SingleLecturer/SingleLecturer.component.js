import LecturerProfile from "../../component/LecturerProfile";

import './SingleLecturer.style.scss';

const SingleLecturerComponent = (props) => {
  const renderComponent = () => {
    return (
      <div className='mt-6 ml-4 mr-4 mb-4'>
        <LecturerProfile
          { ...props }
        />
      </div>
    );
  }

  return renderComponent();
}

export default SingleLecturerComponent;

