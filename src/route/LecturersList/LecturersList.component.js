import UserCard from '../../component/UserCard';

import './LecturersList.style.scss';

const LecturersListComponent = ({ lecturers, currentColor }) => {
  const renderComponent = () => {

    if (!lecturers.length) {
      return (
        <div className='m-4 pt-8 text-center'>
          <p className='text-2xl uppercase font-extrabold text-gray-600 capitalize dark:text-gray-400'>
            {'No lecturers where found'}
          </p>
        </div>
      )
    };

    return (
      <div className='Lecturers m-4'>
        {
          lecturers.map((lecturer) => {
            const user = {  
              ...lecturer, 
              role: lecturer.worksAs, 
              yearsActive: `worked for ${lecturer.workDuration}`,
            };
            
            return (
              <div key={lecturer._id} >
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

export default LecturersListComponent;

