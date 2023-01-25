import { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from '../../component/Button';
import EventsCard from '../../component/EventsCard';

import './Events.style.scss';

const EventsComponent = ({ events, currentColor }) => {

const [ isViewModalOpen, setIsViewModalOpen ] = useState(false);
const [ event, setEvent ] = useState(null);

const renderViewModal = () =>  {
    const { date, content, title, startTime, endTime, location } = event;
    const displayDate = date.split(' ');

    return (
        <div className='themeSetting bg-half-transparent flex items-center justify-center w-screen h-full fixed top-0 right-0'>
            <div className='bg-white pt-5 pr-5 pb-5 pl-5 pb-10 container-shadow dark:bg-secondary-dark-bg rounded-md' style={{ width: '60%' }}>
                <div className='flex items-center justify-between' style={{ width: '100%' }}>
                    <div></div>
                    <div onClick={() => setIsViewModalOpen(false) }>
                        <Button
                            icon={<MdOutlineCancel />}
                            color={currentColor}
                            bgHoverColor="light-gray"
                            size="2xl"
                            borderRadius="50%"
                        />
                    </div>
                </div>
                <div className='text-center'>
                    <p className='font-semibold text-xl dark:text-gray-200 capitalize mb-4'>{ title }</p>
                    <p className='mb-2 font-bold text-gray-700 dark:text-gray-200'>
                        { displayDate[0] } { displayDate[1] } { displayDate[2] }
                    </p>
                    <p className='text-gray-500 dark:text-gray-400 text-sm mb-2'>{ content }</p>
                    <div className=''>
                        <p className='mb-1 text-gray-500 capitalize text-sm font-semibold dark:text-gray-400'>{ `${startTime} - ${endTime}` }</p>
                        <p className='text-gray-500 capitalize dark:text-gray-400'>{ location }</p>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  const renderComponent = () => {
    if (!events.length) {
      return (
        <div className='m-4 pt-8 text-center'>
          <p className='text-2xl uppercase font-extrabold text-gray-600 capitalize dark:text-gray-400'>
            {'No events where found'}
          </p>
        </div>
      )
    };

    return (
      <div className='Events m-4'>
        {
          events.map((event) => {
            return (
              <div key={event._id} >
                <EventsCard
                  event={event}
                  setEvent={setEvent}
                  currentColor={currentColor}
                  setIsViewModalOpen={setIsViewModalOpen}
                />
              </div>
              )
          })
        }
        { isViewModalOpen && renderViewModal() }
      </div>
    );
  }

  return renderComponent();
}

export default EventsComponent;

