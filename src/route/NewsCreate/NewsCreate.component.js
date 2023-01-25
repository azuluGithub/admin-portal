import NewsCreate from "../../component/NewsCreate";

const NewsCreateComponent = () => {
  const renderComponent = () => {
    return (
      <div className='NewsCreate mt-6 ml-4 mr-4 mb-4'>
        <NewsCreate />
      </div>
    );
  }

  return renderComponent();
}

export default NewsCreateComponent;

