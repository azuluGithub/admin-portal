import EmployeeCard from "../../component/EmployeeCard";
// import EmployeeUpdate from '../../component/EmployeeUpdate';

import './SingleEmployee.style.scss';

const SingleEmployeeComponent = (props) => {
  const renderComponent = () => {
    const { employee } = props;

    return (
      <div className='mt-6 ml-4 mr-4 mb-4'>
          <EmployeeCard 
            employee={employee}
          />
      </div>
    );
    
    // return (
    //   <div className='flex mt-6 gap-5 ml-4 mr-4 mb-4 flex'>
    //     <div className='w-full mb-4 md:w-3/5'>
    //       <EmployeeCard 
    //         employee={employee}
    //       />
    //     </div>
    //     <div className='w-full md:w-2/5'>
    //       <EmployeeUpdate 
    //         employee={employee}
    //       />
    //     </div>
    //   </div>
    // );
  }

  return renderComponent();
}

export default SingleEmployeeComponent;

