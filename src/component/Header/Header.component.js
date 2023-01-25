import { Link } from "react-router-dom";

import Button from '../Button';

const HeaderComponent = ({ title, type, link, currentColor }) => {

  const renderAddButton = () => {
    return (
      <Link to={link}>
        <Button 
          color={'#FAFBFB'} 
          bgColor={currentColor}
          text="Add New" 
          borderRadius="4px"
        />
      </Link>
    );
  }

  const renderComponent = () => {
    return (
      <div className='bg-white container-shadow dark:bg-secondary-dark-bg rounded-md py-2 px-5 m-4 flex items-center justify-between'>
        <span className='text-xl font-extrabold capitalize dark:text-gray-200' style={{ color: currentColor }}>{ title }</span>
        <div>{ type === 'list' && renderAddButton() }</div>
      </div>
    );
  }

  return renderComponent();
}

export default HeaderComponent;
