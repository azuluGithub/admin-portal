import { PureComponent } from 'react';
import { FaCommentAlt, FaTags, FaUser } from 'react-icons/fa';

class NewsProfile extends PureComponent {

    renderMetaData() {
        const { news: { author, commentsCount, category }, currentColor } = this.props;

        return (
            <div className='flex items-center'>
                <div className='flex items-center mr-5'>
                    <div className='flex items-center'>
                        <FaUser style={{ fontSize: '16px', color: currentColor }} />
                        <span className='mx-1 text-gray-500 capitalize text-sm font-semibold dark:text-gray-400'>{ 'By' }</span>
                    </div>
                    <div className='text-gray-500 capitalize text-sm dark:text-gray-400'>
                        { author } 
                    </div>
                </div>
                <div className='flex items-center mr-5'>
                    <FaTags className='mr-1' style={{ fontSize: '16px', color: currentColor }} />
                    <div className='text-gray-500 capitalize text-sm dark:text-gray-400'>
                        { category } 
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaCommentAlt className='mr-1' style={{ fontSize: '16px', color: currentColor }} />
                    <div className='text-gray-500 capitalize text-sm dark:text-gray-400'>
                        <span className=''>{ '(' }{ commentsCount }{ ')'}</span>  { ' Comments' } 
                    </div>
                </div>
            </div>
        );
    }

    renderDivider() {
        const { currentColor } = this.props;

        return (
            <div className='h-1 w-20 mt-5 rounded-full'style={{ backgroundColor: currentColor }}></div>
        );
    }

    renderCardImage() {
        const { news: { date, imgUrl }, currentColor } = this.props;
        const day = date.split(' ');

        return (
            <div className='relative'>
                <img
                    className='w-full object-cover h-72 rounded-md' 
                    src={imgUrl} 
                    alt='news' 
                />
                <div className='absolute left-0 bottom-0'>
                    <div className='px-5 py-4 text-center text-white font-bold' style={{ backgroundColor: currentColor }}>
                        { day[0] } {' '} { day[1] }
                    </div>
                    <div className='px-5 py-4 text-center font-bold bg-gray-200 dark:bg-gray-300' style={{ color: currentColor }}>
                        { day[2] }
                    </div>
                </div>
            </div>
        );
    }

    renderContent() {
        const { news: { content } } = this.props;

        return (
            <div className='text-gray-500 dark:text-gray-400 text-sm pt-5'>
                { content }
            </div>
        );
    }

    renderCard() {
        const { news: { title } } = this.props;

        return (
            <div className='bg-white container-shadow dark:bg-secondary-dark-bg w-full rounded-md'>
                { this.renderCardImage() }
                <div className='p-5'>
                    <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>
                        {title}
                    </p>
                    { this.renderMetaData() }
                    { this.renderDivider() }
                    { this.renderContent() }
                </div>
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default NewsProfile;