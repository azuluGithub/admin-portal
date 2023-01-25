// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import Admin from '../../route/Admin';
import StudentsList from '../../route/StudentsList';
import LecturersList from '../../route/LecturersList';
import Employees from '../../route/Employees';
import ApplicantsList from '../../route/ApplicantsList';
import Courses from '../../route/Courses';
import News from '../../route/News';
import SingleNews from '../../route/SingleNews';
import SingleCourse from '../../route/SingleCourse';
import SingleStudent from '../../route/SingleStudent';
import SingleLecturer from '../../route/SingleLecturer';
import SingleEmployee from '../../route/SingleEmployee';
import SingleApplicant from '../../route/SingleApplicant';
import NewsCreate from '../../route/NewsCreate';
import CourseCreate from '../../route/CourseCreate';
import StudentCreate from '../../route/StudentCreate';
import LecturerCreate from '../../route/LecturerCreate';
import EmployeeCreate from '../../route/EmployeeCreate';
import Events from '../../route/Events';

import { sideBarLinks } from './Router.config';
import SideBar from '../../component/SideBar';
import NavBar from '../../component/NavBar';
// import Footer from '../../component/Footer';
import ThemeSetting from '../../component/ThemeSetting';

const RouterComponent = (props) => {
  const { sideBarIsActive } = props;

  const renderSettings = () => {
    const { handleThemeBar, currentColor } = props;

    return (/**hover:bg */
      <div className='fixed bottom-4 right-4' style={{ zIndex: '1000' }}>
        <button
          type='button'
          className='p-3 text-white hover:text-black hover:bg-light-gray hover:drop-shadow-xl'
          style={{ backgroundColor: currentColor, borderRadius: '50%' }}
          onClick={() => handleThemeBar(true)}
        >
          <FiSettings className='text-2xl'/>
        </button>
      </div>
    );
  }

  const renderSidebar = () => {
    return (
      // bg-secondary-dark-bg
      <div className='w-72 h-screen sidebar fixed bg-main-bg dark:bg-main-dark-bg'> 
        <SideBar 
          sideBarIsActive={sideBarIsActive} 
          sideBarLinks={sideBarLinks}
        />
      </div>
    );
  }

  const renderEmptySidebar = () => {
    return (
      <div className='w-0'></div>
    );
  }

  const renderNavBar = () => {
    return (/**static */
      <div className={`navbar dark:bg-main-dark-bg bg-main-bg fixed md:static w-full`}>
        <NavBar />
      </div>
    );
  }

  const renderRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={ <Admin /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/students" element={ <StudentsList /> } />
        <Route path="/applicants" element={ <ApplicantsList /> } />
        <Route path="/applicants/:id" element={ <SingleApplicant /> } />
        <Route path="/students/:id" element={ <SingleStudent /> } />
        <Route path="/create-student" element={ <StudentCreate /> } />
        <Route path="/lecturers" element={ <LecturersList /> } />
        <Route path="/lecturers/:id" element={ <SingleLecturer /> } />
        <Route path="/create-lecturer" element={ <LecturerCreate /> } />
        <Route path="/events" element={ <Events /> } />
        <Route path="/employees" element={ <Employees /> } />
        <Route path="/employees/:id" element={ <SingleEmployee /> } />
        <Route path="/create-employee" element={ <EmployeeCreate /> } />
        <Route path="/news" element={ <News /> } />
        <Route path="/news/:id" element={ <SingleNews /> } />
        <Route path="/create-news" element={ <NewsCreate /> } />
        <Route path="/create-course" element={ <CourseCreate /> } />
        <Route path="/courses" element={ <Courses /> } />
        <Route path="/courses/:id" element={ <SingleCourse /> } />
      </Routes>
    );
  }

  const renderThemeSetting = () => {
    return (
      <ThemeSetting />
    );
  }

  const renderMain = () => {
    const { isThemeBarOpen } = props;

    return (/**flex-2 ? */
      <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${sideBarIsActive ? 'md:ml-72' : 'flex-2'} `}>
        { renderNavBar() }
        { isThemeBarOpen && renderThemeSetting() }
        { renderRoutes() }
      </div>
    );
  }

  const renderComponent = () => {
    return ( /**relative ? */
      <div className='flex relative dark:bg-main-dark-bg'>
        { renderSettings() }
        { sideBarIsActive ? renderSidebar() : renderEmptySidebar() }
        { renderMain() }
      </div>
    );
  }

  const renderRouter = () => {
    const { currentMode } = props;

    return (
      <div className={currentMode === 'Dark' ? 'dark' : 'light'}>
        <BrowserRouter>
          { renderComponent() }
        </BrowserRouter>
      </div>
    );
  }

  return renderRouter();
}

export default RouterComponent;
