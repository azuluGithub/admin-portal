import './Pagination.style.scss';

const PaginationComponent = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  const handleClick = (newPage) => {
    setPage(newPage + 1);
  }

  if (total <= 0) {
    return <></>;
  }

  return (
    <div className="Pagination">
      { 
        totalPages > 0 && [...Array(totalPages)]
        .map((val, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={page === index + 1 ? 'Pagination-Button Pagination-Button_Active' : 'Pagination-Button'}
            >
              { index + 1 }
            </button>
          )
        })
      }
    </div>
  );

}

export default PaginationComponent;
