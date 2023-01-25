import CourseCard from '../../component/CourseCard';

import './Courses.style.scss';

const CoursesComponent = ({ courses, currentColor }) => {
  const renderComponent = () => {
    if (!courses.length) {
      return (
        <div className='m-4 pt-8 text-center'>
          <p className='text-2xl uppercase font-extrabold text-gray-600 capitalize dark:text-gray-400'>
            {'No courses where found'}
          </p>
        </div>
      )
    };

    return (
      <div className='Courses m-4'>
        {
          courses.map((course) => {
            return (
              <CourseCard
                key={course.slug} 
                course={course}
                currentColor={currentColor}
              />
              )
          })
        }
      </div>
    );
  }

  return renderComponent();
}

export default CoursesComponent;

