import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import './SideBar.style.scss';

const SideBarComponent = (props) => {
  const user = {
    imgUrl: `${process.env.PUBLIC_URL}/assets/portal/images/user4.png`,
    firstname: 'star',
    lastname: 'arnold'
  }

  const renderTitle = () => {
    return (
      <Link
        to='/admin'
        onClick={() => {}}
        className='text-xl font-extrabold text-gray-200'
      >
        
      </Link>
    );
  }

  const renderClose = () => {
    const {  sideBarAction, currentColor } = props;

    return (
      <button
        type='button'
        className='block md:hidden'
        onClick={ () => sideBarAction(false) }
      >
        <MdOutlineCancel className='text-2xl' style={{ color: currentColor }}/>
      </button>
    );
  }

  const renderLinks = () => {
    const link = 'm-2 flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md rounded-lg';
    const linkIsActive = `${link}`; //text-gray-700 
    const linkIsNormal = `${link} text-gray-200 hover:text-gray-500 hover:bg-half-transparent`;
    
    const { currentColor, sideBarLinks } = props;

    return (
      <>
        { 
          sideBarLinks.map((link) => {
            const { name, url, icon } = link;

            return (
              <NavLink 
                key={name} 
                to={url}
                onClick={() => {}}
                style={
                  ({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : ''
                  }) 
                }
                className={({ isActive }) => isActive ? linkIsActive : linkIsNormal}
              >
                {icon} <span className='capitalize'>{name}</span>
              </NavLink>
            )
          })
        }
      </>
    );
  }

  const renderAppName = () => {
    return (
      <div className='flex my-6 ml-4 mr-3 justify-between items-center'>
        { renderTitle() }
        { renderClose() }
      </div>
    );
  }

  const renderProfile = () => {
    // const { currentColor } = props;
    const { imgUrl, firstname, lastname } = user;

    return (
      <div className='flex my-6 ml-4 mr-3 items-center'>
        <div className='rounded-full' style={{ border: `2px solid #666`}}>
          <img
            className='rounded-full h-16 w-16'
            alt='user profile display'
            src={imgUrl}
          />
          </div>
        <p className='capitalize text-gray-400 text-md font-bold ml-2'>
          {firstname} {lastname }
        </p>
      </div>
    );
  }

  const renderDivider = () => {
    return (
        <div className='sideBarDivider'></div>
    );
  }

  const renderSideBarLinks = () => {
    return (
      <div className='mt-8'>
        { renderLinks() }
      </div>
    );
  }

  const renderComponent = () => {
    const { sideBarIsActive } = props;
    
    return (
      <div
        className='sideBarWrapper overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10 dark:bg-secondary-dark-bg bg-main-dark-bg'
      >
        {
          sideBarIsActive && 
          <>
            { renderAppName() }
            { renderProfile() }
            { renderDivider() }
            { renderSideBarLinks() }
          </>
        }
      </div>
    );
  }

  return renderComponent();
}

export default SideBarComponent;
