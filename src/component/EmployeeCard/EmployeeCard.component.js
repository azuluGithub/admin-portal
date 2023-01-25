import { PureComponent } from 'react';
import { FaEnvelope, FaPhone, FaPen } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md';

import Button from '../Button';
import './EmployeeCard.style.scss';

class EmployeeCard extends PureComponent {

    state  = {
        isEditModalOpen: false,
    }

    renderImage() {
        const { employee: { imgUrl } } = this.props;

        return (
            <div className='mb-5 flex justify-center'>
                <img
                    className="rounded-full w-20 h-20"
                    src={imgUrl}
                    alt="employee"
                />
            </div>
        );
    }

    renderNames() {
        const { employee: { firstname, lastname } } = this.props;

        return (
            <div className='mb-2 flex justify-center'>
                <p className='mr-2 font-extrabold text-xl capitalize dark:text-gray-200'>{firstname}</p>
                <p className='font-extrabold text-xl capitalize dark:text-gray-200'>{lastname}</p>
            </div>
        );
    }

    renderWorkDuration() {
        const { employee: { workDuration } } = this.props;

        return (
            <div className='mb-4 flex justify-center'>
                <p className='mr-2 text-gray-400 text-sm capitalize'>{'Worked for '}</p>
                <p className='text-gray-400 text-sm capitalize'>{workDuration}</p>
            </div>
        );
    }

    renderContacts() {
        const { employee: { phoneNumber, email }, currentColor } = this.props;

        return (
            <div className='my-2 flex justify-center'>
                <a href={`tel:${email}`} className='rounded-full bg-gray-200 p-2 mr-2'>
                    <FaEnvelope style={{ fontSize: '16px', color: currentColor }}/>
                </a>
                <a href={`tel:${phoneNumber}`} className='rounded-full bg-gray-200 p-2 mr-2'>
                    <FaPhone  style={{ fontSize: '16px', color: currentColor }} />
                </a>
            </div>
        );
    }

    renderWorksAs() {
        const { employee: { worksAs, campus, temporaryOrPermanent } } = this.props;

        return (
            <div className='mb-4 px-4'>
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Works As'}</p>
                <div className='bg-gray-100 dark:bg-gray-600 rounded-lg p-5'>
                    <p className='capitalize mb-1 font-bold text-gray-700 dark:text-gray-200'>{worksAs}</p>
                    <div className='flex'>
                        <p className='mr-4 capitalize text-gray-400 dark:text-gray-400'>{temporaryOrPermanent}</p>
                        <p className='capitalize text-gray-400 dark:text-gray-300'>{campus}</p>
                    </div>
                </div>
            </div>
        );
    }

    renderFullContactDetails() {
        const { currentColor, employee: { phoneNumber, email, address: { streeAddress, town, province, country, postalCode} } } = this.props;

        return (
            <div className='px-5'>
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Contact details'}</p>
                <div className='flex align-center p-2'>
                    <div className='w-1/6 flex justify-center items-center mr-2'>
                        <div className='flex justify-center items-center rounded-full bg-gray-200 w-8 h-8'>
                            <FaEnvelope style={{ fontSize: '16px', color: currentColor }}/>
                        </div>
                    </div>
                    <div className='w-5/6'>
                        <p className="font-semibold dark:text-gray-200 capitalize">{'email'}</p>
                        <p className="text-gray-500 text-sm dark:text-gray-400"> {email} </p>
                    </div>
                </div>
                <div className='flex align-center p-2'>
                    <div className='w-1/6 flex justify-center items-center mr-2'>
                        <div className='flex justify-center items-center rounded-full bg-gray-200 w-8 h-8'>
                            <FaPhone  style={{ fontSize: '16px', color: currentColor }} />
                        </div>
                    </div>
                    <div className='w-5/6'>
                        <p className="font-semibold dark:text-gray-200 capitalize">{'Phone Number'}</p>
                        <p className="text-gray-500 text-sm dark:text-gray-400"> {phoneNumber} </p>
                    </div>
                </div>
                <div className='flex align-center p-2'>
                    <div className='w-1/6 flex justify-center items-center mr-2'>
                        <div className='flex justify-center items-center rounded-full bg-gray-200 w-8 h-8'>
                            <HiLocationMarker  style={{ fontSize: '16px', color: currentColor }} />
                        </div>
                    </div>
                    <div className='w-5/6'>
                        <p className="font-semibold dark:text-gray-200 capitalize">{'Address'}</p>
                        <p className="text-gray-500 text-sm dark:text-gray-400 capitalize">
                            { streeAddress }
                            { town } {", "}
                            { province } {", "}
                            { country } {", "}
                            { postalCode }
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    renderFullNames() {
        const { employee: { firstname, othernames, lastname } } = this.props;
        
        return (
            <div className='flex w-full mb-4'>
                <div className='w-1/3'>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'first name'}</p>
                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{firstname}</p>
                </div>
                {
                    othernames.length ?
                    <div className='w-1/3'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'other names'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{othernames}</p>
                    </div> : <div className='w-1/3'></div>
                }
                <div className='w-1/3'>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'last name'}</p>
                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{lastname}</p>
                </div>
            </div>
        );
    }

    renderFullAge() {
        const { employee: { age, dateOfBirth, gender } } = this.props;

        return (
            <div className='flex w-full mb-4'>
                <div className='w-1/3'>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'gender'}</p>
                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{gender}</p>
                </div>
                <div className='w-1/3'></div>
                <div className='w-1/3'>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'date of birth'}</p>
                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400">
                        {dateOfBirth} 
                        <p className='text-gray-400'>{'('}{age}{'yrs old)'}</p>
                    </p>
                </div>
            </div>
        );
    }

    renderNationality() {
        const { employee: { nationality } } = this.props;

        return (
            <div className=''>
                <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'nationality'}</p>
                <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{nationality}</p>
            </div>
        );
    }

    renderPersonalDetails() {
        return (
            <div className='p-5'>
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Personal Details'}</p>
                { this.renderFullNames() }
                { this.renderFullAge() }
                { this.renderNationality() }
            </div>
        );
    }

    renderUploadedDocuments() {
        const { employee: { identityDocument }  } = this.props;

        return (
            <div className='mb-4 px-5'>
                <div className=''>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Identity Document'}</p>
                    <a href={`${identityDocument}`}  download>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{'Click to download'}</p>
                    </a>
                </div>
            </div>
        );
    }

    toggleEditModal(value) {
        this.setState({ isEditModalOpen: value });
    }

    renderEditModal() {
        const { currentColor } = this.props;

        return (
            <div className='themeSetting bg-half-transparent w-screen h-full fixed top-0 right-0'>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg dark:text-gray-200">Edit Profile</p>
                    <div onClick={() => this.toggleEditModal(false) }>
                        <Button
                            icon={<MdOutlineCancel />}
                            color={currentColor}
                            bgHoverColor="light-gray"
                            size="2xl"
                            borderRadius="50%"
                        />
                    </div>
                </div>
                {'Edit PROFILE'}
            </div>
        );
    }

    renderEditProfile() {
        const { currentColor } = this.props;

        return (
            <div className='flex justify-end w-full'>
                <div 
                    className='flex justify-center mr-5 cursor-pointer items-center rounded-full bg-gray-200 w-8 h-8'
                    onClick={() => this.toggleEditModal(true) }
                >
                    <FaPen style={{ fontSize: '16px', color: currentColor }}/>
                </div>
            </div>
        );
    }

    renderCard() {
        const { isEditModalOpen } = this.state;

        return (
            <div className='mb-2 md:flex gap-5'>
                <div className='w-full'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                        { this.renderEditProfile() }
                        { this.renderImage() }
                        { this.renderNames() }
                        { this.renderWorkDuration() }
                        { this.renderContacts() }
                    </div>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg py-5 w-full rounded-md'>
                        { this.renderPersonalDetails() }
                    </div>
                </div>
                <div className='w-full'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                        { this.renderWorksAs() }
                    </div>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                        { this.renderFullContactDetails() }
                    </div>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg py-5 w-full rounded-md'>
                        <p className='mb-4 px-5 text-lg font-extrabold capitalize dark:text-gray-200'>{'Uploaded Documents'}</p>
                        { this.renderUploadedDocuments() }
                    </div>
                </div>
                { isEditModalOpen && this.renderEditModal() }
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default EmployeeCard;