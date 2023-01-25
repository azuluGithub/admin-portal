import { PureComponent } from 'react';
import { FaEnvelope, FaPhone, FaPen } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { PERSONAL_DETAILS, COURSE, COURSE_STATUS_OPTIONS } from './StudentCard.config';
import Button from '../Button';

import './StudentCard.style.scss';

class StudentCard extends PureComponent {
    
    state = {
        activeDetails: PERSONAL_DETAILS,
        isModuleOpen: false,
        activeModule: null,
        isEditModalOpen: false,
        isCertificatePreviewModalOpen: false,
    }

    renderImage() {
        const { student: { imgUrl }, currentColor } = this.props;
        
        return (
            <div className='mt-2 mb-5 flex justify-center items-center'>
                <div className='w-24 h-24 flex justify-center items-center'style={{ borderRadius: '50%', border: `2px solid ${currentColor}` }}>
                    <img
                        className="rounded-full w-20 h-20"
                        src={imgUrl}
                        alt="student"
                    />
                </div>
            </div>
        );
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

    toggleEditModal(value) {
        this.setState({ isEditModalOpen: value });
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

    renderNames() {
        const { student: { firstname, lastname } } = this.props;

        return (
            <div className='mb-2 flex justify-center'>
                <p className='mr-2 font-extrabold text-xl capitalize dark:text-gray-200'>{firstname}</p>
                <p className='font-extrabold text-xl capitalize dark:text-gray-200'>{lastname}</p>
            </div>
        );
    }

    renderStudyDuration() {
        const { student: { year } } = this.props;

        return (
            <div className='mb-4 flex justify-center'>
                <p className='mr-1 text-gray-400 text-sm capitalize'>{year}</p>
                <p className='text-gray-400 text-sm capitalize'>{' student'}</p>
            </div>
        );
    }

    renderContacts() {
        const { student: { phoneNumber, email }, currentColor } = this.props;

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

    renderStudies() {
        const { student: { course: { courseName }, campus, fullTimeOrPartTime } } = this.props;

        return (
            <div className='mb-4 px-4'>
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Studies'}</p>
                <div className='bg-gray-100 dark:bg-gray-600 rounded-lg p-5'>
                    <p className='capitalize mb-1 font-bold text-gray-700 dark:text-gray-200'>{courseName}</p>
                    <div className='flex'>
                        <p className='mr-4 capitalize text-gray-400 dark:text-gray-400'>{fullTimeOrPartTime}</p>
                        <p className='capitalize text-gray-400 dark:text-gray-300'>{campus}</p>
                    </div>
                </div>
            </div>
        );
    }

    renderFullContactDetails() {
        const { currentColor, student: { phoneNumber, email, address: { streeAddress, town, province, country, postalCode} } } = this.props;

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
        const { student: { firstname, othernames, lastname } } = this.props;
        
        return (
            <div className='flex w-full mb-4 px-5'>
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
        const { student: { age, dateOfBirth, gender } } = this.props;

        return (
            <div className='flex w-full mb-4 px-5'>
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
        const { student: { nationality } } = this.props;

        return (
            <div className='px-5'>
                <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'nationality'}</p>
                <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{nationality}</p>
            </div>
        );
    }

    renderUploadedDocuments() {
        const { student: { academicProfile: { schools }, identityDocument }  } = this.props;

        return (
            <div className='px-5'>
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

    renderAcademicProfile() {
        const { student: { academicProfile: { schools, highestQualification } } } = this.props;

        return (
            <div className='px-5'>
                <div className='mb-4'>
                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Highest qualification'}</p>
                    <p className='capitalize text-gray-400 text-sm'>{highestQualification}</p>
                </div>
                <div className=''>
                    {
                        schools ? schools.map((school) => (
                            <div className='mb-4 bg-gray-100 dark:bg-gray-600 rounded-lg p-5'>
                                <div className='mb-4'>
                                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Institution'}</p>
                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{school.institution}</p>
                                </div>
                                <div className='mb-4'>
                                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Duration'}</p>
                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{school.duration}</p>
                                </div>
                                <div className='mb-4'>
                                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Qualification'}</p>
                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{school.qualification}</p>
                                </div>
                            </div>
                        )) : ''
                    }
                </div>
            </div>
        );
    }

    handleActiveDetailsTab(value) {
        this.setState({ activeDetails: value });
    }

    renderDetailsTab() {
        const { activeDetails } = this.state;
        const { currentColor } = this.props;

        return (
            <div className='flex w-full'>
                <div
                    className='flex align-center justify-center p-5 cursor-pointer rounded-sm text-gray-500 dark:text-gray-200'
                    style={ activeDetails === PERSONAL_DETAILS ? { backgroundColor: currentColor, color: '#eee' } : { backgroundColor: 'transparent' } }            
                    onClick={() => this.handleActiveDetailsTab(PERSONAL_DETAILS)}
                >
                    <p className='text-lg font-bold'>{'Personal Details'}</p>
                </div>
                <div
                    className='flex align-center justify-center p-5 cursor-pointer rounded-sm text-gray-500 dark:text-gray-200'
                    style={ activeDetails === COURSE ? { backgroundColor: currentColor, color: '#ddd' } : { backgroundColor: 'transparent' } }
                    onClick={() => this.handleActiveDetailsTab(COURSE)}
                >
                    <p className='text-lg font-bold'>{'Course'}</p>
                </div>
            </div>
        );
    }

    toggleModuleDescription(value) {
        this.setState({ isModuleDescriptionsOpen: value });
    }

    handleActiveModule = (value, index) => {
        this.setState({ isModuleOpen: value });
        this.setState({ activeModule: index });
    }

    renderModulesButton(idx) {
        const { isModuleOpen, activeModule } = this.state;

        if (isModuleOpen && activeModule === idx) {
            return (
                <div
                    onClick={() => this.handleActiveModule(false, idx)}
                    className='items-center flex justify-center text-2xl text-red-500 cursor-pointer p-2 bg-white w-8 h-8' style={{ borderRadius: '50%' }}
                >
                    {'-'}
                </div>
            );
        }
        
        return (
            <div
                onClick={() => this.handleActiveModule(true, idx)}
                className='items-center flex justify-center text-2xl text-green-500 cursor-pointer p-2 bg-white w-8 h-8' style={{ borderRadius: '50%' }}
            >
                {'+'}
            </div>
        );
        
    }

    renderModules() {
        const { student: { modules } } = this.props;
        const { isModuleOpen, activeModule } = this.state;

        return (
            <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 p-5 w-full rounded-md'>
                <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Modules'}</p>
                {
                    modules.length ? modules.map((mod, idx) => {
                        const { code, moduleName, assessments, passPercentage } = mod;

                        return (
                            <div className='mb-4'>
                                <div className='items-center flex justify-between bg-gray-100 dark:bg-gray-600 rounded-sm p-5'>
                                    <div className=''>
                                        <p className="text-gray-500 capitalize text-md font-semibold dark:text-gray-400">{moduleName}</p>
                                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{code}</p>
                                    </div>
                                    { this.renderModulesButton(idx) }
                                </div>
                                {
                                    isModuleOpen && activeModule === idx ?
                                    <div className='pt-4'>
                                        {
                                            assessments.length ? 
                                            <div className='p-5'>
                                                <div className='flex mb-4 items-center'>
                                                    <p className="text-lg mr-4 font-extrabold capitalize dark:text-gray-200">{'Assessments'}</p>
                                                    <p className="text-gray-500 capitalize text-lg dark:text-gray-400">{`[${assessments.length}]`}</p>
                                                </div>
                                                {
                                                    assessments.map((assessment, i) => {
                                                        const { title, mark } = assessment;
                                                        let markBg = '#e5333c';

                                                        if (mark > 50 && mark < passPercentage) {
                                                            markBg = 'orange'
                                                        }

                                                        if (mark >= passPercentage) {
                                                            markBg = '#5ece7b'
                                                        }

                                                        return (
                                                            <div className='py-3 px-5'>
                                                                <div className='mb-2 px-4 flex justify-between'>
                                                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{title}</p>
                                                                    <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{`${mark}%`}</p>
                                                                </div>
                                                                <div className='relative h-3 rounded-full w-full bg-gray-100'>
                                                                    <div
                                                                        style={{ backgroundColor: markBg, width: `${mark}%` }}
                                                                        className='w-full h-3 rounded-full absolute top-0 left-0'
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div> : <></>
                                        }
                                    </div> : <></>
                                }
                            </div>
                        )
                    }) : <></>
                }
            </div>
        );
    }

    renderCourseDetails() {
        const { currentColor, student: { course: { slug, courseStatus, courseName, courseCode, qualification, faculty, imgUrl } } } = this.props;
        let statusStyle = '#333';
        
        if (courseStatus === 'in progress') {
            statusStyle = '#5ece7b'
        }

        if (courseStatus === 'complete') {
            statusStyle = '#e5333c'
        }

        return (
            <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 w-full rounded-md'>
                <div className='w-full h-48 relative'>
                    <img
                        className="h-full w-full rounded-md object-cover"
                        src={imgUrl}
                        alt="course"
                    />
                    <Link
                        to={`/${slug}`}
                        className='container-shadow flex justify-center items-center rounded-lg absolute w-16 h-12' 
                        style={{ backgroundColor: currentColor, bottom: '-1.5rem', right: '2rem' }}
                    >
                        <p className=' rounded-full capitalize text-white text-center text-sm' style={{ lineHeight: '1' }}>{'view more'}</p>
                    </Link>
                </div>
                <p className='mb-4 my-5 text-lg font-extrabold text-center capitalize dark:text-gray-200'>{courseName}</p>
                <div className='flex my-5 gap-5 px-5'>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Code'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{courseCode}</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'qualification'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{qualification}</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'faculty'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{faculty}</p>
                    </div>
                </div>
                <div className='px-5 py-3 flex items-center bg-gray-200 dark:bg-gray-600' style={{ width: 'fit-content'}}>
                    <p className='text-sm mr-2 font-bold capitalize dark:text-gray-200'>{'course status:'}</p>
                    <p className='text-sm capitalize dark:text-gray-200' style={{ color: statusStyle }}>{courseStatus}</p>
                </div>
            </div>
        );
    }

    renderCourseStatusOptions(courseOption) {
        const { _id, name } = courseOption;
    
        return (
            <option 
                key={_id} 
                value="name"
                className='capitalize'
                >
                    {name}
            </option>
        );
    }

    renderCourseStatusSelect() {
        return (
          <div className='mb-4'>
            <label className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Update course status'}</label>
            <select 
              className='Select w-full' 
              value="" 
              placeholder='' 
              onChange={() => {}}
            >
              { COURSE_STATUS_OPTIONS.map(this.renderCourseStatusOptions) }
            </select>
          </div>
        )
    }

    
    renderCertificatePreviewModal() {
        const { currentColor } = this.props;

        return (
            <div className='themeSetting bg-half-transparent w-screen h-full fixed top-0 right-0'>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg dark:text-gray-200">Certificate</p>
                    <div onClick={() => this.toggleCertificatePreviewModal(false) }>
                        <Button
                            icon={<MdOutlineCancel />}
                            color={currentColor}
                            bgHoverColor="light-gray"
                            size="2xl"
                            borderRadius="50%"
                        />
                    </div>
                </div>
                {'Certificate'}
            </div>
        );
    }

    toggleCertificatePreviewModal(value) {
        this.setState({ isCertificatePreviewModalOpen: value });
    }

    renderCertificatePreview() {
        const { currentColor } = this.props;

        return (
            <div
                onClick={() => this.toggleCertificatePreviewModal(true)}
            >
            <Button
                color="white" 
                bgColor={currentColor} 
                text="Preview Certificate" 
                borderRadius="10px" 
                width="auto" 
            />
        </div>
        )
    }

    renderCourseActions() {
        return (
            <div className='bg-white container-shadow p-5 dark:bg-secondary-dark-bg mb-4 w-full rounded-md'>
                <p className='mb-4 text-lg font-extrabold capitalize dark:text-gray-200'>{'Course Actions'}</p>
                { this.renderCourseStatusSelect() }
                { this.renderCertificatePreview() }
            </div>
        )
    }

    renderCourse() {
        return (
            <>
                { this.renderCourseDetails() }
                { this.renderModules() }
                { this.renderCourseActions() }
            </>
        )
    }

    renderTabInfo() {
        const { activeDetails } = this.state;

        switch(activeDetails) {
            case COURSE:
                return this.renderCourse();
                
            default:
                return this.renderPersonalDetails();
        }
    }

    renderPersonalDetails() {
        return (
            <>
                <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-4 w-full rounded-md'>
                    <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Personal Info'}</p>
                    { this.renderFullNames() }
                    { this.renderFullAge() }
                    { this.renderNationality() }
                </div>
                <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-4 w-full rounded-md'>
                    <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Academic Profile'}</p>
                    { this.renderAcademicProfile() }
                </div>
                <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-4 w-full rounded-md'>
                    <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Uploaded Documents'}</p>
                    { this.renderUploadedDocuments() }
                </div>
            </>
        );
    }

    renderCard() {
        const { isEditModalOpen, isCertificatePreviewModalOpen } = this.state;

        return (
            <div className='gap-5 mb-2 md:flex w-full'>
                <div className='w-full md:w-1/3'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                        { this.renderEditProfile() }
                        { this.renderImage() }
                        { this.renderNames() }
                        { this.renderStudyDuration() }
                        { this.renderContacts() }
                    </div>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-4 w-full rounded-md'>
                        { this.renderStudies() }
                    </div>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-4 w-full rounded-md'>
                        { this.renderFullContactDetails() }
                    </div>
                </div>
                <div className='w-full md:w-2/3 rounded-md'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 w-full rounded-md'>
                        { this.renderDetailsTab() }
                    </div>
                    <div className=''>
                        { this.renderTabInfo() }
                    </div>
                </div>
                { isEditModalOpen && this.renderEditModal() }
                { isCertificatePreviewModalOpen && this.renderCertificatePreviewModal() }
            </div>
        );
    }

    render() {
        const { student } = this.props;

        if (!student) {
            return <>Loading....</>
        }

        return this.renderCard();
    }
}

export default StudentCard;
