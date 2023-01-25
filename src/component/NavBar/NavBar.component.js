import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatLeft } from 'react-icons/bs';

import NavButton from '../NavButton';
import Chat from '../Chat';
import Notification from '../Notification';
import UserProfile from '../UserProfile';

const NavBarComponent = (props) => {

  const renderMenu = () => {
    const { sideBarIsActive, currentColor, sideBarAction } = props;

    return (
      <NavButton
          btnColor={currentColor}
          icon={<AiOutlineMenu />}
          title={'Menu'}
          tab={!sideBarIsActive}
          handleNavTab={sideBarAction}
      />
    );
  }

  const renderComponent = () => {
    const user = {
      imgUrl: `${process.env.PUBLIC_URL}/assets/portal/images/user4.png`,
      firstname: 'star',
      lastname: 'arnold'
    }

    const { openTab, handleNavTab, currentColor } = props;
    const { imgUrl, firstname, lastname } = user;

    return (
      // <div className='flex justify-between p-2 md:mx-6 relative'>
      <div className='bg-white container-shadow dark:bg-secondary-dark-bg rounded-md flex justify-between p-2 md:mx-4 md:mt-4 relative'>
        { renderMenu() }
        <div className='flex items-center'>
          <NavButton
            btnColor={currentColor}
            icon={<BsChatLeft />}
            title={'Chat'}
            tab={'chat'}
            handleNavTab={handleNavTab}
            dotColor={'#03C907'}
          />
          <NavButton
            btnColor={currentColor}
            icon={<RiNotification3Line />}
            title={'Notification'}
            tab={'notification'}
            handleNavTab={handleNavTab}
            dotColor={'orange'}
          />
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleNavTab('user profile')}
          >
            <img
              className='rounded-full h-8 w-8'
              alt='user profile display'
              src={imgUrl}
            />
            <p className='capitalize text-gray-500 text-14 font-bold ml-1'>
              {firstname} {lastname }
            </p>
            <MdKeyboardArrowDown className='text-gray-500 text-14'/>
          </div>
          { openTab === 'chat' && 
            <Chat 
              handleNavTab={handleNavTab}
            />
          }
          { openTab === 'notification' && 
            <Notification
              handleNavTab={handleNavTab}
            /> 
          }
          { openTab === 'user profile' && 
            <UserProfile 
              handleNavTab={handleNavTab}
            /> 
          }
        </div>
      </div>
    );
  }

  return renderComponent();
}

export default NavBarComponent;













// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { BsChatLeft } from 'react-icons/bs';
// import { RiNotification3Line } from 'react-icons/ri';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import NavButton from '../NavButton';
// // import Chat from '../Chat';
// // import Notification from '../Notification';
// import UserProfile from '../UserProfile';

// const NavBarComponent = () => {

//   const handleClick = (item) => {}

//   const renderComponent = () => {
//     const user = {
//       imgUrl: `${process.env.PUBLIC_URL}/assets/portal/images/user4.png`,
//       firstname: 'star',
//       lastname: 'arnold'
//     }

//     const currentColor = 'purple'; /** from store */

//     const { imgUrl, firstname, lastname } = user;

//     return (
//       <div className='flex justify-between p-2 md:mx-6 relative'>
//         <NavButton
//           btnColor={currentColor}
//           icon={<AiOutlineMenu />}
//           title={'Menu'}
//           toggleMenu={() => {}}
//         />
//         <div className='flex items-center'>
//           <NavButton
//             btnColor={currentColor}
//             icon={<BsChatLeft />}
//             title={'Chat'}
//             toggleMenu={() => handleClick('chat')}
//             dotColor={'#03C907'}
//           />
          
//           <NavButton
//             btnColor={currentColor}
//             icon={<RiNotification3Line />}
//             title={'Notification'}
//             toggleMenu={() => handleClick('notification')}
//             dotColor={'orange'}
//           />

//           <TooltipComponent
//             content='Profile'
//             position='BottomCenter'
//           >
//             <div
//               className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
//               onClick={() => handleClick('userProfile')}
//             >
//               <img
//                 className='rounded-full h-8 w-8'
//                 alt='user profile display'
//                 src={imgUrl}
//               />
//               <p className='capitalize text-gray-500 text-14 font-bold ml-1'>
//                 {firstname} {lastname }
//               </p>
//               <MdKeyboardArrowDown className='text-gray-500 text-14'/>
//             </div>
//           </TooltipComponent>
//           {/* <Chat /> */}
//           {/* <Notification /> */}
//           <UserProfile />
//         </div>
//       </div>
//     );
//   }

//   return renderComponent();
// }

// export default NavBarComponent;
