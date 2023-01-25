import { PureComponent } from 'react';
import { FaTags, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Button from '../Button';
import './NewsCard.style.scss';

class NewsCard extends PureComponent {

    renderMetaData() {
        const { news: { author, category }, currentColor } = this.props;

        return (
            <div className='flex items-center'>
                <div className='flex items-center mr-5'>
                    <div className='flex items-center'>
                        <FaUser style={{ fontSize: '16px', color: currentColor }} />
                        <span className='mx-1 text-gray-500 capitalize text-sm font-semibold dark:text-gray-400'>{ 'By' }</span>
                    </div>
                    <div className='text-gray-500 capitalize text-sm dark:text-gray-400'>
                        { author.substring(0, 10) } 
                    </div>
                </div>
                <div className='flex items-center mr-5'>
                    <FaTags className='mr-1' style={{ fontSize: '16px', color: currentColor }} />
                    <div className='text-gray-500 capitalize text-sm dark:text-gray-400'>
                        { category.substring(0, 10)  } 
                    </div>
                </div>
            </div>
        );
    }

    renderDivider() {
        const { currentColor } = this.props;

        return (
            <div className='h-1 w-10 mt-5 rounded-full'style={{ backgroundColor: currentColor }}></div>
        );
    }

    renderCardImage() {
        const { news: { date, imgUrl }, currentColor } = this.props;
        const day = date.split(' ');

        return (
            <div className='relative'>
                <img
                    className='w-full object-cover h-48 rounded-md' 
                    src={imgUrl} 
                    alt='news' 
                />
                <div className='absolute left-0 bottom-0'>
                    <div className='p-2 text-center text-white font-bold' style={{ backgroundColor: currentColor }}>
                        { day[0] } {' '} { day[1] }
                    </div>
                    <div className='p-2 text-center font-bold bg-gray-200 dark:bg-gray-300' style={{ color: currentColor }}>
                        { day[2] }
                    </div>
                </div>
            </div>
        );
    }

    renderContent() {
        const { news: { content } } = this.props;

        return (
            <div className='text-gray-500 dark:text-gray-400 text-sm pt-5 md:h-28'>
                { content.substring(0,140) }
            </div>
        );
    }

    renderTitle() {
        const { news: { title } } = this.props;

        return (
            <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200 md:h-16'>
                { title.substring(0, 42) }
            </p>
        );
    }

    renderButton() {
        const { currentColor, news: { slug } } = this.props;

        return (
            <Link to={`/${slug}`} className="mt-5">
                <Button 
                    color="white" 
                    bgColor={currentColor} 
                    text="View More" 
                    borderRadius="8px" 
                    width="full" 
                />
            </Link>
        );
    }

    renderCard() {
        return (
            <div className='bg-white container-shadow dark:bg-secondary-dark-bg w-full rounded-md'>
                { this.renderCardImage() }
                <div className='p-5'>
                    { this.renderTitle() }
                    { this.renderMetaData() }
                    { this.renderDivider() }
                    { this.renderContent() }
                    { this.renderButton() }
                </div>
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default NewsCard;