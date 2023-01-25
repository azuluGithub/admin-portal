import { PureComponent } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import './EventsCard.style.scss';

class EventsCard extends PureComponent {

    handleViewModal() {
        const { event, setEvent, setIsViewModalOpen } = this.props;

        setEvent(event);
        setIsViewModalOpen(true);
    }

    renderViewProfile() {
        const { currentColor } = this.props;

        return (
            <div
                className='flex justify-end w-full'
                onClick={() => this.handleViewModal()}
            >
                <div 
                    className='flex justify-center cursor-pointer items-center rounded-md bg-gray-200 dark:bg-gray-400 w-8 h-8'
                >
                    <FaArrowRight style={{ fontSize: '16px', color: currentColor }} />
                </div>
            </div>
        );
    }

    renderUpcomingItem() {
        const { event: { date, content, title, startTime, endTime, location }, currentColor } = this.props;
        const displayDate = date.split(' ');

        return (
            <div className='relative bg-white flex p-5 container-shadow dark:bg-secondary-dark-bg w-full rounded-md'>
                <div className='w-1/3 relative'>
                    <div className='h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-400'>
                        <div className='text-center'>
                            <p className='pt-5 text-xl font-bold text-gray-700 dark:text-gray-200' style={{ color: currentColor }}>{ displayDate[0] }</p>
                            <p className='capitalize' style={{ color: currentColor }}>{ displayDate[1] }</p>
                        </div>
                    </div>
                    <div className='h-12 flex items-center justify-center' style={{ backgroundColor: currentColor }}>
                        <p className='text-white'>{ displayDate[2] }</p>
                    </div>
                    <div className='absolute top-2 left-0 right-0 flex justify-between px-2'>
                        <div className='w-3 h-3 rounded-full' style={{ backgroundColor: currentColor }}></div>
                        <div className='w-3 h-3 rounded-full' style={{ backgroundColor: currentColor }}></div>
                    </div>
                </div>
                <div className='w-2/3 pl-4'>
                    <p className='font-semibold text-md dark:text-gray-200 capitalize mb-4'>{ title.substring(0, 22) }</p>
                    <p className='text-gray-500 dark:text-gray-400 text-sm'>{ content.substring(0, 48) + '...' }</p>
                    <div className=''>
                        <p className='mt-4 mb-1 text-gray-500 capitalize text-sm font-semibold dark:text-gray-400'>{ `${startTime} - ${endTime}` }</p>
                        <p className='text-gray-500 capitalize dark:text-gray-400' style={{ fontSize: '15px' }}>{ location.substring(0, 22) }</p>
                    </div>
                </div>
                <div className='absolute bottom-2 right-2'>
                    {this.renderViewProfile() }
                </div>
            </div>
        )
    }

    render() {
        return this.renderUpcomingItem();
    }
}

export default EventsCard;