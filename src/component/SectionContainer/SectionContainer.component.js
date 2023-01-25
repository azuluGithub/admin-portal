import { Link } from 'react-router-dom';

import Button from '../Button';

import './SectionContainer.style.scss';

const SectionContainerComponent = ({ children, currentColor, title, link, type }) => {

  const renderAddButton = () => {
    return (
      <Link to={link}>
        <Button 
          color={currentColor} 
          bgColor='#FAFBFB'
          text="Add New" 
          borderRadius="10px" 
          // width="full" 
        />
      </Link>
    );
  }
  const renderComponent = () => {
    return (
      <div className='SectionContainer'>
        <div className='SectionContainer-Top relative py-8 px-4'>
          <div className='SectionContainer-TopMoved' style={{ backgroundColor: currentColor }}>
            <span className='text-white text-lg font-bold'>{ title }</span>
            <div>{ type === 'list' && renderAddButton() }</div>
          </div>
        </div>
        {/* dark:bg-secondary-dark-bg*/}
        <div className='SectionContainer-Bottom bg-white'> 
          <div className='h-6'></div>
          { children }
        </div>
      </div>
    );
  }

  return renderComponent();
}

export default SectionContainerComponent;

