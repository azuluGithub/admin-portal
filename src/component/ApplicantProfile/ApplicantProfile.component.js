import React, { PureComponent } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

import Button from '../Button';
import './ApplicantProfile.style.scss';

class ApplicantProfile extends PureComponent {
    state = {
        isCoverLetterOpen: false,
        statusCode: '',
        isRejectModalOpen: false,
        reasonForRejection: ''
    }

    setStatusCode() {
        const { applicant: { status : { statusCode }  } } = this.props;
        this.setState({ statusCode }); 
    }

    componentDidUpdate() {
        this.setStatusCode();
    }

    componentDidMount() {
        this.setStatusCode();
    }

    renderImage() {
        const { applicant: { imgUrl }, currentColor } = this.props;
        
        return (
            <div className='mt-2 mb-5 flex justify-center items-center'>
                <div className='w-24 h-24 flex justify-center items-center'style={{ borderRadius: '50%', border: `2px solid ${currentColor}` }}>
                    <img
                        className="rounded-full w-20 h-20"
                        src={imgUrl}
                        alt="applicant"
                    />
                </div>
            </div>
        );
    }

    renderNames() {
        const { applicant: { firstname, lastname } } = this.props;

        return (
            <div className='mb-2 flex justify-center'>
                <p className='mr-2 font-extrabold text-xl capitalize dark:text-gray-200'>{firstname}</p>
                <p className='font-extrabold text-xl capitalize dark:text-gray-200'>{lastname}</p>
            </div>
        );
    }

    renderApplied() {
        const { applicant: { dateApplied } } = this.props;

        return (
            <div className='mb-4 flex justify-center'>
                <p className='mr-2 text-gray-400 text-sm capitalize'>{'Applied'}</p>
                <p className='text-gray-400 text-sm capitalize'>{dateApplied}</p>
            </div>
        );
    }

    renderContacts() {
        const { applicant: { phoneNumber, email }, currentColor } = this.props;

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

    renderAppliedFor() {
        const { applicant: { appliedFor, campus, fullTimeOrPartTime } } = this.props;

        return (
            <div className='mb-4 px-4'>
                <p className='my-2 text-gray-400 capitalize dark:text-gray-200'>{'Applied for'}</p>
                <div className='bg-gray-100 dark:bg-gray-600 rounded-lg p-5'>
                    <p className='capitalize mb-1 font-bold text-gray-700 dark:text-gray-200'>{appliedFor}</p>
                    <div className='flex'>
                        <p className='mr-4 capitalize text-gray-400 dark:text-gray-400'>{fullTimeOrPartTime}</p>
                        <p className='capitalize text-gray-400 dark:text-gray-300'>{campus}</p>
                    </div>
                </div>
            </div>
        );
    }

    renderApplicationStatus() {
        const { applicant: { status: { statusCode, statusColor } } } = this.props;

        return (
            <div className='flex justify-between m-5 border-solid border-1 border-gray-200 dark:border-gray-600 rounded-lg p-4'>
                <span className='text-gray-500 capitalize'>{'status'}</span>
                <span className='capitalize font-bold' style={{ color: statusColor }}>{statusCode}</span>
            </div>
        );
    }

    renderDivider() {
        return (
            <div className='my-6 w-full h-0.5 bg-gray-100 dark:bg-gray-700'></div>
        );
    }

    renderFullContactDetails() {
        const { currentColor, applicant: { phoneNumber, email, address: { streeAddress, town, province, country, postalCode} } } = this.props;

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
        const { applicant: { firstname, othernames, lastname } } = this.props;
        
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
        const { applicant: { age, dateOfBirth, gender } } = this.props;

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
        const { applicant: { nationality } } = this.props;

        return (
            <div className=''>
                <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'nationality'}</p>
                <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{nationality}</p>
            </div>
        );
    }

    toggleCoverLetter(value) {
        this.setState({ isCoverLetterOpen: value });
    }

    renderCoverLetter() {
        const { applicant: { academicProfile: { coverLetter } } } = this.props;
        const { isCoverLetterOpen } = this.state;

        return (
            <div className='text-gray-800 text-sm'>
                <span className='text-gray-500 dark:text-gray-400 text-sm'>
                    { coverLetter.substring(0, 500) }
                </span>
                {
                    isCoverLetterOpen ?
                        <></>
                        :
                        <>
                            <br />
                            <button
                                className='capitalize text-sm mt-4 py-1 px-4 rounded-2xl bg-white dark:bg-gray-400 dark:text-black text-green-600'
                                onClick={() => this.toggleCoverLetter(true)}
                            >
                                {'read more'}
                            </button>
                        </>
                }
                { isCoverLetterOpen &&
                    <span className='text-gray-500 dark:text-gray-400 text-sm'>
                        { coverLetter.substring(500, coverLetter.length) }
                    </span>
                } <br />
                {
                    isCoverLetterOpen ?
                    <>
                        <br />
                        <button
                            className='capitalize text-sm mt-4 py-1 px-4 rounded-2xl bg-white dark:bg-gray-400 dark:text-black text-red-500'
                            onClick={() => this.toggleCoverLetter(false)}
                        >
                            {'read less'}
                        </button>
                    </>
                    : <></>
                }
            </div>
        );
    }

    renderAcademicProfile() {
        const { applicant: { academicProfile: { schools, highestQualification } } } = this.props;

        return (
            <div className='mb-4'>
                <div className='mb-4'>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Highest qualification'}</p>
                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{highestQualification}</p>
                </div>
                <div className=''>
                    {
                        schools ? schools.map((school) => (
                            <div className='mb-4' key={school.name}>
                                <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{school.name}</p>
                                <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{school.duration}</p>
                            </div>
                        )) : ''
                    }
                </div>
            </div>
        );
    }

    handleInputChange(e) {
        const { name, value } = e.target
    
        this.setState({ [ name ]: value  });
    }

    handleAccept() {
        const { handleApplicantUpdate } = this.props;
        const { applicant } = this.props;
        
        const newStatus = {
            statusCode: 'accepted',
            statusColor: 'green',
        }

        const updateApplicant = {
            ...applicant, 
            status: newStatus,
        }

        handleApplicantUpdate(updateApplicant);
        this.setState({ statusCode: 'accepted' });
    }

    toggleRejectModal(value) {
        this.setState({ isRejectModalOpen: value});
    }

    handleReject() {
        const { handleApplicantUpdate } = this.props;
        const { applicant } = this.props;
        const { reasonForRejection } = this.state;
        
        const newStatus = {
            reason: reasonForRejection,
            statusCode: 'rejected',
            statusColor: 'red',
        }

        const updateApplicant = {
            ...applicant, 
            status: newStatus,
        }

        handleApplicantUpdate(updateApplicant);
        this.setState({ statusCode: 'rejected' });
        this.toggleRejectModal(false);
    }

    renderRejectionModal() {
        const { currentColor } = this.props;
        const { reasonForRejection } = this.props;

        return (
          <div
            className='themeSetting bg-half-transparent w-screen h-full flex items-center justify-center fixed nav-item top-0 right-0'
          >
            <div className='bg-white p-5 rounded-md dark:text-gray-200 dark:[#484852] dark:bg-secondary-dark-bg w-400'>
                <div>
                    <div className='mb-6 '>
                        <label className='capitalize text-gray-400 mb-2 text-bold'>reason for rejection:</label>
                        <input
                            required
                            className='FormInputBottom'
                            type="text" 
                            name="reasonForRejection"
                            value={reasonForRejection}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </div>
                    <div  onClick={() => this.handleReject()}>
                        <Button
                            color="white" 
                            bgColor={currentColor} 
                            text="Reject" 
                            borderRadius="10px"
                            // width="full" 
                        />
                    </div>
                </div>
            </div>
          </div>
        );
    }

    renderAcceptOrReject() {
        const { statusCode } = this.state;
        
        if (statusCode === 'accepted' || statusCode === 'rejected') {
            return <></>;
        }

        return (
            <div className='flex justify-center'>
                <button onClick={() => this.toggleRejectModal(true) } className='capitalize mr-4 py-1 px-6 rounded-2xl bg-red-500 text-red'>{'reject'}</button>
                <button onClick={() => this.handleAccept() } className='capitalize py-1 px-6 rounded-2xl bg-green-500 text-white'>{'accept'}</button>
            </div> 
        );
    }

    renderRequiredDocuments() {
        const { applicant: { academicProfile: { schools }, identityDocument }  } = this.props;

        return (
            <div className='mb-4'>
                <div className='mb-4'>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Identity Document'}</p>
                    <a href={`${identityDocument}`}  download>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{'Click to download'}</p>
                    </a>
                </div>
                <div className=''>
                    {
                        schools ? schools.map((school) => (
                            <div className='mb-4' key={school.name}>
                                <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{`${school.qualification}`}</p>
                                <a href={`${school.qualificationDocument}`}  download>
                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{'Click to download'}</p>
                                </a>
                            </div>
                        )) : ''
                    }
                </div>
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
                { this.renderDivider() }
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Cover Letter'}</p>
                { this.renderCoverLetter() }
                { this.renderDivider() }
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Education'}</p>
                { this.renderAcademicProfile() }
                { this.renderDivider() }
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Required Documents'}</p>
                { this.renderRequiredDocuments() }
            </div>
        );
    }

    renderCard() {
        const { isRejectModalOpen } = this.state;

        return (
            <div className='gap-5 mb-2 md:flex w-full'>
                <div className='w-full md:w-1/3'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                        { this.renderImage() }
                        { this.renderNames() }
                        { this.renderApplied() }
                        { this.renderContacts() }
                        { this.renderDivider() }
                        { this.renderAcceptOrReject() }
                        { this.renderDivider() }
                        { this.renderAppliedFor() }
                        { this.renderApplicationStatus() }
                        { this.renderDivider() }
                        { this.renderFullContactDetails() }
                    </div>
                </div>
                <div className='w-full md:w-2/3 rounded-md'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                        { this.renderPersonalDetails() }
                    </div>
                </div>
                { isRejectModalOpen && this.renderRejectionModal() }
            </div>
        );
    }

    render() {
        const { applicant } = this.props;

        if (!applicant) {
            return <>Loading....</>
        }

        return this.renderCard();
    }
}

export default ApplicantProfile;