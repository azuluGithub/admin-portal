import EmployeeCreate from "../../component/EmployeeCreate";

const EmployeeCreateComponent = () => {
  const renderComponent = () => {
    return (
      <div className='EmployeeCreate mt-6 ml-4 mr-4 mb-4'>
        <EmployeeCreate />
      </div>
    );
  }

  return renderComponent();
}

export default EmployeeCreateComponent;

