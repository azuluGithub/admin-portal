const Search = ({ setSearch }) => {

  const renderComponent = () => {
    return (
      <input
        input
        type='text'
        placeholder="Search.."
        className='p-2 rounded-md border w-full'
        style={{ outline: 'none' }}
        onChange={({ currentTarget: input }) => setSearch(input.value)}
      />
    );
  }

  return renderComponent();
}

export default Search;
