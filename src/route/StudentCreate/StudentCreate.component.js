import StudentCreate from "../../component/StudentCreate";

const StudentCreateComponent = () => {
  const renderComponent = () => {
    return (
      <div className='StudentCreate mt-6 ml-4 mr-4 mb-4'>
        <StudentCreate />
      </div>
    );
  }

  return renderComponent();
}

export default StudentCreateComponent;

