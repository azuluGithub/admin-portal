import NewsCard from '../../component/NewsCard';

import './News.style.scss';

const NewsComponent = ({ news, currentColor }) => {
  const renderComponent = () => {

    if (!news.length) {
      return (
        <div className='m-4 pt-8 text-center'>
          <p className='text-2xl uppercase font-extrabold text-gray-600 capitalize dark:text-gray-400'>
            {'No news where found'}
          </p>
        </div>
      )
    };

    return (
      <div className='News m-4'>
        {
          news.map((n) => {
            return (
              <div>
                <NewsCard
                  key={n.slug} 
                  news={n}
                  currentColor={currentColor}
                />
              </div>
              )
          })
        }
      </div>
    );
  }

  return renderComponent();
}

export default NewsComponent;


