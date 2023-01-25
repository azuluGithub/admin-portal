const AreaChartComponent = (props) => {
  const { currentMode } = props;

  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-xl">
      <span className='dark:text-white text-lg font-bold'>{ "Attendance Overview" }</span>
      <div className="w-full bg-green-500" style={{ height: '200px' }}>
        
      </div>
    </div>
  );
};

export default AreaChartComponent;