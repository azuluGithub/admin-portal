import ApplicantProfile from "../../component/ApplicantProfile";

import './SingleApplicant.style.scss';

const SingleApplicantComponent = (props) => {
  const renderComponent = () => {
    const { applicant } = props;
    
    return (
      <div className='mt-6 ml-4 mr-4 mb-4 flex'>
        <ApplicantProfile 
          applicant={applicant}
        />
      </div>
    );
  }

  return renderComponent();
}

export default SingleApplicantComponent;

