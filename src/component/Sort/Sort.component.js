import './Sort.style.scss';

const SortComponent = ({ sort, setSort }) => {

  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  }

  const onChangeArrow = () => {
    if (sort.order === 'asc') {
      setSort({ sort: sort.sort, order: 'desc' });
    } else {
      setSort({ sort: sort.sort, order: 'asc' });
    }
  }

  return (
    <div className="">
      <p className='text-gray-500 mb-2 text-md dark:text-gray-400'>{'SortBy: '}</p>
      <div className="flex gap-2 items-center">
        <select
          className='w-4/5 h-8 border outline-none cursor-pointer p-1'
          defaultValue={sort.sort}
          onChange={onSelectChange}
        >
          <option value='year'>Year</option>
          <option value='age'>Age</option>
        </select>
        <div className='w-1/5'>
          <button 
            className='rounded-sm border cursor-pointer outline-none w-full h-8 flex items-center justify-center' 
            onClick={onChangeArrow}
          >
            <p className='font-bold text-black dark:text-gray-200' style={{ fontSize: '18px' }}>&uarr;</p>
            <p className='font-bold text-black dark:text-gray-200' style={{ fontSize: '18px' }}>&darr;</p>
          </button>
        </div>
      </div>
    </div>
  );

}

export default SortComponent;
