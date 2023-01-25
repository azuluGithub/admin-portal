import { PureComponent } from 'react';
import { FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './UserCard.style.scss';

class UserCard extends PureComponent {

    renderImage() {
        const { user: { imgUrl }, currentColor } = this.props;
        
        return (
            <div className='mb-5 flex justify-center items-center'>
                <div className='flex justify-center items-center'style={{ borderRadius: '50%', border: `2px solid ${currentColor}` }}>
                    <img
                        className="rounded-full w-24 h-24"
                        src={imgUrl}
                        alt="user"
                    />
                </div>
            </div>
        );
    }

    renderViewProfile() {
        const { currentColor, user: {_id} } = this.props;

        return (
            <Link to={`/${_id}`} className='flex justify-end w-full'>
                <div 
                    className='flex justify-center mr-5 cursor-pointer items-center rounded-full bg-gray-200 w-8 h-8'
                >
                    <FaArrowRight style={{ fontSize: '16px', color: currentColor }} />
                </div>
            </Link>
        );
    }

    renderNames() {
        const { user: { firstname, lastname } } = this.props;
        const fullName = `${firstname} ${lastname}`;

        return (
            <div className='mb-2 flex justify-center items-center'>
                <p className='mr-2 font-extrabold capitalize dark:text-gray-200' style={{ fontSize: '16px'}}>{ fullName.substring(0, 12)}</p>
            </div>
        );
    }

    renderUserRole() {
        const { user: { role, yearsActive } } = this.props;

        return (
            <div className='mb-4 text-center'>
                <p className='text-gray-500 dark:text-gray-400 text-md mb-1 font-bold text-sm capitalize'>{role.substring(0, 22)}</p>
                <p className='text-gray-400 text-sm capitalize'>{yearsActive}</p>
            </div>
        );
    }

    renderContacts() {
        const { user: { phoneNumber, email }, currentColor } = this.props;

        return (
            <div className='my-2 flex justify-center'>
                <a href={`tel:${email}`} className='rounded-md bg-gray-200 p-2 mr-2'>
                    <FaEnvelope style={{ fontSize: '16px', color: currentColor }}/>
                </a>
                <a href={`tel:${phoneNumber}`} className='rounded-md bg-gray-200 p-2 mr-2'>
                    <FaPhone  style={{ fontSize: '16px', color: currentColor }} />
                </a>
            </div>
        );
    }

    renderCard() {

        return (
            <div className='bg-white container-shadow dark:bg-secondary-dark-bg py-5 w-full rounded-md'>
                { this.renderViewProfile() }
                { this.renderImage() }
                { this.renderNames() }
                { this.renderUserRole() }
                { this.renderContacts() }
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default UserCard;
