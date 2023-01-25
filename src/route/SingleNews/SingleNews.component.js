import NewsProfile from "../../component/NewsProfile";

const SingleNewsComponent = (props) => {
  const renderComponent = () => {
    return (
      <div className='mt-6 ml-4 mr-4 mb-4 flex'>
        <NewsProfile 
            { ...props }
        />
      </div>
    );
  }

  return renderComponent();
}

export default SingleNewsComponent;

