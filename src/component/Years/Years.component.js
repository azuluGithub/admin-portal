import './Years.style.scss';

const Years = ({ years, filterYear, setFilterYear }) => {

  const handleChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterYear, input.value];
      setFilterYear(state);
    } else {
      const state = filterYear.filter((val) => val !== input.val);
      setFilterYear(state);
    }
  }

  return (
    <div className="">
      <p className='text-gray-500 mb-2 text-md dark:text-gray-400'>{'Filter By Year: '}</p>
      <div className=''>
        {
          years.map((year) => (
            <div className='flex items-center my-1' key={year}>
              <input
                className=''
                value={year}
                type='checkbox'
                onChange={handleChange}
              />
              <label className='text-gray-400 text-sm capitalize ml-2'>{year}</label>
            </div>
          ))
        }
      </div>
    </div>
  );

}

export default Years;
