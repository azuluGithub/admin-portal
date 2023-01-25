const NavButton = (props) => {

  const renderComponent = () => {
    const { dotColor, btnColor, icon, title, tab,  handleNavTab } = props;

    return (
      <button
        type='button'
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
        style={{ color: btnColor }}
        onClick={() => handleNavTab(tab)}
      >
        <span
          style={{ background: dotColor }}
          className='absolute inline-flex  rounded-full h-2 w-2 right-2 top-2'
        />
        { icon }
      </button>
    );
  }

  return renderComponent();
}

export default NavButton;
