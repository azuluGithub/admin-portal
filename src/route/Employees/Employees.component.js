import UserCard from '../../component/UserCard';

import './Employees.style.scss';

const EmployeesComponent = ({ employees, currentColor }) => {
  const renderComponent = () => {
    if (!employees.length) {
      return (
        <div className='m-4 pt-8 text-center'>
          <p className='text-2xl uppercase font-extrabold text-gray-600 capitalize dark:text-gray-400'>
            {'No employees where found'}
          </p>
        </div>
      )
    };

    return (
      <div className='Employees m-4'>
        {
          employees.map((employee) => {
            const user = {  
              ...employee, 
              role: employee.worksAs, 
              yearsActive: `worked for ${employee.workDuration}`,
            };
            
            return (
              <div key={employee._id} >
                <UserCard
                  user={user}
                  currentColor={currentColor}
                />
              </div>
              )
          })
        }
      </div>
    );
  }

  return renderComponent();
}

export default EmployeesComponent;

