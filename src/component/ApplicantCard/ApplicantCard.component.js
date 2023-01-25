import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './ApplicantCard.style.scss';

class ApplicantCard extends PureComponent {
    
    renderImage() {
        const { applicant: { imgUrl } } = this.props;
        
        return (
            <div className='flex justify-center items-center'>
                <div className=''>
                    <img
                        className="rounded-full w-16 h-16"
                        src={imgUrl}
                        alt="applicant"
                    />
                </div>
            </div>
        );
    }

    renderNames() {
        const { applicant: { firstname, lastname } } = this.props;
        const fullName = `${firstname} ${lastname}`;

        return (
            <div className='my-2 flex justify-center items-center'>
                <p className='mr-2 font-extrabold capitalize dark:text-gray-200' style={{ fontSize: '16px'}}>{ fullName.substring(0, 12)}</p>
            </div>
        );
    }

    renderAppliedFor() {
        const { applicant: { appliedFor, yearApplied } } = this.props;


        return (
            <div className='mb-4 text-center'>
                <p className='text-gray-500 dark:text-gray-400 text-md mb-1 font-bold text-sm capitalize'>{appliedFor.substring(0, 22)}</p>
                <p className='text-gray-400 text-sm capitalize'>{yearApplied}</p>
            </div>
        );
    }

    renderButton() {
        const { applicant: { _id }, currentColor } = this.props;

        return (
            <div className='flex justify-center'>
                <Link
                    to={`/${_id}`}
                    className='container-shadow flex justify-center items-center rounded-md px-2 py-1' 
                    style={{ backgroundColor: currentColor, width: 'fit-content' }}
                >
                    <p className='capitalize text-white text-center' style={{ fontSize: '13px'}}>{'view profile'}</p>
                </Link>
            </div>
        );
    }

    renderCard() {
        return (
            <div className='bg-white dark:bg-secondary-dark-bg rounded-md py-4 px-2'>
                { this.renderImage() }
                { this.renderNames() }
                { this.renderAppliedFor() }
                { this.renderButton() }
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default ApplicantCard;