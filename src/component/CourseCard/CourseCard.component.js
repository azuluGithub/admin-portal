import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './CourseCard.style.scss';

class CourseCard extends PureComponent {

    renderCard() {
        const { currentColor, course: { slug, imgUrl, courseName, duration, courseCode, faculty, description } } = this.props;

        return (
            <div className='bg-white text-center container-shadow dark:bg-secondary-dark-bg w-full rounded-md' key={slug}>
                <div className='w-full h-48 relative'>
                    <img
                        className="h-full w-full object-cover rounded-md"
                        src={imgUrl}
                        alt="course"
                    />
                    <Link
                        to={`/${slug}`}
                        className='container-shadow flex justify-center items-center absolute w-16 h-12'
                        style={{ backgroundColor: currentColor, top: '0', right: '0', borderTopRightRadius: '6px', borderBottomLeftRadius: '6px' }}
                    >
                        <p className=' rounded-full capitalize text-white text-center text-sm' style={{ lineHeight: '1' }}>{'view more'}</p>
                    </Link>
                </div>
                <div className='p-5'>
                    <p className='capitalize mb-1 font-bold text-gray-700 dark:text-gray-200'>{courseName.substring(0, 25)}</p>
                    <div className='flex my-5 gap-5 px-5'>
                        <div className='w-1/3'>
                            <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'code'}</p>
                            <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{courseCode.substring(0, 11)}</p>
                        </div>
                        <div className='w-1/3'>
                            <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'faculty'}</p>
                            <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{faculty.substring(0, 12)}</p>
                        </div>
                        <div className='w-1/3'>
                            <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'duration'}</p>
                            <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{duration.substring(0, 12)}</p>
                        </div>
                    </div>
                    <p className='text-gray-500 dark:text-gray-400 text-sm'>{ description.substring(0, 140) + ''}</p>
                </div>
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default CourseCard;