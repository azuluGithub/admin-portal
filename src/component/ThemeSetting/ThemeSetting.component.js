import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';

import { themeColors } from './ThemeSetting.config';

const ThemeSettingComponent = (props) => {
  
  const renderSettingsHeader = () => {
    const { handleThemeBar } = props;

    return (
      <div className='flex items-center justify-between p-4 ml-4'>
        <p className='font-semibold text-xl'>Settings</p>
        <button
          type='button'
          onClick={() => handleThemeBar(false)}
          style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
    );
  }

  const renderThemeOptions = () => {
    const { currentMode, handleThemeMode } = props;

    return (
      <div className='flex-col border-t-1 border-color p-4 ml-4'>
        <p className='font-semibold text-lg'>Theme Options</p>
        <div className='mt-4'>
          <input
            type='radio'
            id='light'
            name='theme'
            value='Light'
            className='cursor-pointer'
            onChange={() => handleThemeMode('Light')}
            checked={currentMode === 'Light'}
          />
          <label
            htmlFor='light'
            className='ml-2 text-md cursor-pointer'
          >Light</label>
        </div>
        <div className='mt-4'>
          <input
            type='radio'
            id='dark'
            name='theme'
            value='Dark'
            className='cursor-pointer'
            onChange={() => handleThemeMode('Dark')}
            checked={currentMode === 'Dark'}
          />
          <label
            htmlFor='dark'
            className='ml-2 text-md cursor-pointer'
          >Dark</label>
        </div>
      </div>
    );
  }

  const themeColor = ({ name, color }, idx) => {
    const { currentColor, handleThemeColor } = props;

    return (
      <button 
        type='button'
        onClick={() => handleThemeColor(color)}
        className='flex justify-center items-center h-10 w-10 rounded-full cursor-pointer' 
        style={{ backgroundColor: color }}
      >
        <BsCheck
          className={`text-2xl text-white ${color === currentColor ? 'block' : 'hidden'}`}
        />
      </button>
    );
  }

  const renderThemeColors = () => {
    return (
      <div className='flex-col border-t-1 border-color p-4 ml-4'>
        <p className='font-semibold text-lg'>Theme Colors</p>
        <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
          { themeColors.map(themeColor) }
        </div>
      </div>
    );
  }

  const renderComponent = () => {
    return (
      <div className='themeSetting bg-half-transparent w-screen fixed nav-item top-0 right-0'>
        <div className='bg-white dark:text-gray-200 dark:[#484852] dark:bg-secondary-dark-bg h-screen float-right w-400'>
          { renderSettingsHeader() }
          { renderThemeOptions() }
          { renderThemeColors() }
        </div>
      </div>
    );
  }

  return renderComponent();
}

export default ThemeSettingComponent;
