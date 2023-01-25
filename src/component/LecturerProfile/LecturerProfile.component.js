import { PureComponent } from 'react';
import { FaEnvelope, FaPhone, FaPen } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { PERSONAL_DETAILS, STUDENTS, MODULES } from './LecturerProfile.config';
import Button from '../Button';

import './LecturerProfile.style.scss';

class LecturerProfile extends PureComponent {
    
    state = {
        activeDetails: PERSONAL_DETAILS,
        isModuleDescriptionsOpen: false,
        isModuleOpen: false,
        isStudentsModuleOpen: false,
        activeStudentModule: null,
        activeModule: null,
        isEditModalOpen: false,
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

    renderImage() {
        const { lecturer: { imgUrl } } = this.props;
        
        return (
            <div className='mt-2 mb-5 flex justify-center'>
                <img
                    className="rounded-full w-20 h-20"
                    src={imgUrl}
                    alt="lecturer"
                />
            </div>
        );
    }

    renderNames() {
        const { lecturer: { firstname, lastname } } = this.props;

        return (
            <div className='mb-2 flex justify-center'>
                <p className='mr-2 font-extrabold text-xl capitalize dark:text-gray-200'>{firstname}</p>
                <p className='font-extrabold text-xl capitalize dark:text-gray-200'>{lastname}</p>
            </div>
        );
    }

    renderWorkDuration() {
        const { lecturer: { workDuration } } = this.props;

        return (
            <div className='mb-4 flex justify-center'>
                <p className='mr-2 text-gray-400 text-sm capitalize'>{'Worked for '}</p>
                <p className='text-gray-400 text-sm capitalize'>{workDuration}</p>
            </div>
        );
    }

    renderContacts() {
        const { lecturer: { phoneNumber, email }, currentColor } = this.props;

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

    renderDivider() {
        return (
            <div className='my-6 w-full h-0.5 bg-gray-100 dark:bg-gray-700'></div>
        );
    }
    
    renderWorksAs() {
        const { lecturer: { worksAs, campus, temporaryOrPermanent } } = this.props;

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
        const { currentColor, lecturer: { phoneNumber, email, address: { streeAddress, town, province, country, postalCode} } } = this.props;

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
        const { lecturer: { firstname, othernames, lastname } } = this.props;
        
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
        const { lecturer: { age, dateOfBirth, gender } } = this.props;

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
        const { lecturer: { nationality } } = this.props;

        return (
            <div className=' px-5'>
                <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'nationality'}</p>
                <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{nationality}</p>
            </div>
        );
    }

    renderRequiredDocuments() {
        const { lecturer: { academicProfile: { schools }, identityDocument }  } = this.props;

        return (
            <div className='px-5 pb-5'>
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
        const { lecturer: { academicProfile: { schools, highestQualification } } } = this.props;

        return (
            <div className='mb-4 px-5'>
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

    renderExperience() {
        const { lecturer: { experience } } = this.props;

        return (
            <div className='px-5'>
                {
                    experience.length ? experience.map((exp) => {
                        return (
                            <div className='mb-4 bg-gray-100 dark:bg-gray-600 rounded-lg p-5'>
                                <div className='mb-4 items-center flex gap-5'>
                                    <p className="w-32 text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Institution'}</p>
                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{exp.institution}</p>
                                </div>
                                <div className='mb-4 items-center flex gap-5'>
                                    <p className="w-32 text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Duration'}</p>
                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{exp.duration}</p>
                                </div>
                                <div className='mb-4 items-center flex gap-5'>
                                    <p className="w-32 text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Position'}</p>
                                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{exp.position}</p>
                                </div>
                            </div>
                        )
                    }) : ''
                }
            </div>
        );
    }

    handleActiveDetailsTab(value) {
        this.setState({ activeDetails: value });
    }

    toggleModuleDescription(value) {
        this.setState({ isModuleDescriptionsOpen: value });
    }

    renderModuleDescriptions(description) {
        const { isModuleDescriptionsOpen } = this.state;

        return (
            <div className='text-gray-800 text-sm'>
                <span className='text-gray-500 dark:text-gray-400 text-sm'>
                    { description.substring(0, 500) }
                </span>
                {
                    isModuleDescriptionsOpen ?
                        <></>
                        :
                        <>
                            <br />
                            <button
                                className='capitalize text-sm mt-2 py-1 px-4 rounded-2xl bg-white dark:bg-gray-400 dark:text-black text-green-600'
                                onClick={() => this.toggleModuleDescription(true)}
                            >
                                {'read more'}
                            </button>
                        </>
                }
                { isModuleDescriptionsOpen &&
                    <span className='text-gray-500 dark:text-gray-400 text-sm'>
                        { description.substring(500, description.length) }
                    </span>
                } <br />
                {
                    isModuleDescriptionsOpen ?
                    <>
                        <br />
                        <button
                            className='capitalize text-sm mt-2 py-1 px-4 rounded-2xl bg-white dark:bg-gray-400 dark:text-black text-red-500'
                            onClick={() => this.toggleModuleDescription(false)}
                        >
                            {'read less'}
                        </button>
                    </>
                    : <></>
                }
            </div>
        );
    }


    renderDetailsTab() {
        const { activeDetails } = this.state;
        const { currentColor } = this.props;

        return (
            <div className='flex w-full mb-10'>
                <div
                    className='flex align-center justify-center p-5 cursor-pointer rounded-sm text-gray-500 dark:text-gray-200'
                    style={ activeDetails === PERSONAL_DETAILS ? { borderBottom: `2px solid ${currentColor}`, color: currentColor } : { borderBottom: '2px solid transparent' }}
                    onClick={() => this.handleActiveDetailsTab(PERSONAL_DETAILS)}
                >
                    <p className='text-lg font-bold'>{'Personal Details'}</p>
                </div>
                <div
                    className='flex align-center justify-center p-5 cursor-pointer rounded-sm text-gray-500 dark:text-gray-200'
                    style={ activeDetails === MODULES ? { borderBottom: `2px solid ${currentColor}`, color: currentColor } : { borderBottom: '2px solid transparent' }}
                    onClick={() => this.handleActiveDetailsTab(MODULES)}
                >
                    <p className='text-lg font-bold'>{'Modules'}</p>
                </div>
                <div
                    className='flex align-center justify-center p-5 cursor-pointer rounded-sm  text-gray-500 dark:text-gray-200'
                    style={ activeDetails === STUDENTS ? { borderBottom: `2px solid ${currentColor}`, color: currentColor } : { borderBottom: '2px solid transparent' }}
                    onClick={() => this.handleActiveDetailsTab(STUDENTS)}
                >
                    <p className='text-lg font-bold'>{'Students'}</p>
                </div>
            </div>
        );
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
                    className='items-center flex container-shadow justify-center text-2xl text-red-500 cursor-pointer p-2 bg-white w-8 h-8' style={{ borderRadius: '50%' }}
                >
                    {'-'}
                </div>
            );
        }
        
        return (
            <div
                onClick={() => this.handleActiveModule(true, idx)}
                className='items-center flex container-shadow justify-center text-2xl text-green-500 cursor-pointer p-2 bg-white w-8 h-8' style={{ borderRadius: '50%' }}
            >
                {'+'}
            </div>
        );
        
    }

    renderModules() {
        const { modules } = this.props;
        const { isModuleOpen, activeModule } = this.state;

        return (
            <div className='pb-2'>
                {
                    modules.length ? modules.map((mod, idx) => {
                        const { code, moduleName, description, passPercentage, numberOfAssessments, assessments } = mod;

                        return (
                            <div className='px-5'>
                                <div className='items-center flex justify-between rounded-sm px-5 py-2'>
                                    <div className='flex items-center'>
                                        <p className="text-gray-400 mr-2 capitalize text-md" style={{ fontWeight: '500'}}>{moduleName}</p>
                                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{`(${code})`}</p>
                                    </div>
                                    { this.renderModulesButton(idx) }
                                </div>
                                {
                                    isModuleOpen && activeModule === idx ?
                                    <div className='pt-4'>
                                        <div className='mb-4 px-5'>
                                            <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'pass percentage'}</p>
                                            <p className="text-gray-500 capitalize text-lg dark:text-gray-400">{`${passPercentage}%`}</p>
                                        </div>
                                        <div className='mb-4 px-5'>
                                            <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Number of assessments'}</p>
                                            <p className="text-gray-500 capitalize text-lg dark:text-gray-400 ">{numberOfAssessments}</p>
                                        </div>
                                        <div className='px-5'>
                                            <p className="text-gray-500 mb-4 capitalize text-sm font-semibold dark:text-gray-400">{'description'}</p>
                                            { this.renderModuleDescriptions(description) }
                                        </div>
                                        {
                                            assessments.length ? 
                                            <div className='p-5'>
                                                <div className='flex mb-5 items-center'>
                                                    <p className="text-lg mr-4 font-extrabold capitalize dark:text-gray-200">{'Assessments'}</p>
                                                    <p className="text-gray-500 capitalize text-lg dark:text-gray-400">{`[${assessments.length}]`}</p>
                                                </div>
                                                {
                                                    assessments.map((assessment, i) => {
                                                        const { title } = assessment;

                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className="text-gray-500 mr-4 capitalize text-sm font-semibold dark:text-gray-400">{`${i + 1}.`}</p>
                                                                <p className="text-gray-500 capitalize text-sm dark:text-gray-400 text-underline">{title}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div> : <></>
                                        }
                                    </div> : <></>
                                }
                                { this.renderDivider() }
                            </div>
                        )
                    }) : <></>
                }
            </div>
        );
    }

    handleActiveStudentModule = (value, index) => {
        this.setState({ isStudentsModuleOpen: value, activeStudentModule: index });
    }

    renderStudentModuleButton(idx) {
        const { isStudentsModuleOpen, activeStudentModule } = this.state;

        if (isStudentsModuleOpen && activeStudentModule === idx) {
            return (
                <div
                    onClick={() => this.handleActiveStudentModule(false, idx)}
                    className='items-center flex container-shadow justify-center text-4xl text-red-500 cursor-pointer p-2 bg-white w-10 h-10 rounded-full'
                >
                    {'-'}
                </div>
            );
        }
        
        return (
            <div
                onClick={() => this.handleActiveStudentModule(true, idx)}
                className='items-center flex container-shadow justify-center text-3xl text-green-500 cursor-pointer p-2 bg-white w-10 h-10 rounded-full'
            >
                {'+'}
            </div>
        );
        
    }

    renderStudents() {
        const { students, currentColor } = this.props;
        const { isStudentsModuleOpen, activeStudentModule } = this.state;

        return (
            <div className='py-5'>
              {
                students.length ? 
                students.map((student, idx) => {
                    const { _id, firstname, lastname, imgUrl, course: { courseName }, year, modules: studentModules } = student;

                    return (
                        <div className='px-5'>
                            <div className='items-center flex justify-between rounded-sm'>
                                <div className='flex justify-center items-center w-1/4'>
                                    <img
                                        className="object-cover rounded-full w-20 h-20"
                                        src={imgUrl}
                                        alt="student"
                                    />
                                </div>
                                <div className='w-1/2 flex justify-center'>
                                    <div className=''>
                                        <div className='flex gap-5 items-center'>
                                            <p className="text-gray-700 capitalize text-md dark:text-gray-400">{'name:'}</p>
                                            <p className="text-gray-400 capitalize text-sm dark:text-gray-300">{firstname} {lastname}</p>
                                        </div>
                                        <div className='flex gap-5 items-center'>
                                            <p className="text-gray-700 capitalize text-md dark:text-gray-400">{'course:'}</p>
                                            <p className="text-gray-400 capitalize text-sm dark:text-gray-300">{courseName}</p>
                                        </div>
                                        <div className='flex gap-5 items-center'>
                                            <p className="text-gray-700 capitalize text-md dark:text-gray-400">{'year:'}</p>
                                            <p className="text-gray-400 capitalize text-sm dark:text-gray-300">{year}</p>
                                        </div>
                                        <div className='mt-4'>
                                            <Link
                                                to={`/${_id}`}
                                                className='container-shadow flex justify-center items-center rounded-md px-4 py-1' 
                                                style={{ backgroundColor: currentColor, width: 'fit-content' }}
                                            >
                                                <p className='capitalize text-white text-center' style={{ fontSize: '13px'}}>{'view profile'}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-1/4 flex justify-center items-center'>
                                    { this.renderStudentModuleButton(idx) }
                                </div>
                            </div>
                            {
                                isStudentsModuleOpen && activeStudentModule === idx ?
                                    <div className='mt-4'>
                                        {
                                            studentModules.length && studentModules.map((mod) => {
                                                const { passPercentage, assessments, code, moduleName } = mod;

                                                return (
                                                    <div className='mb-4 py-2 bg-gray-200 dark:bg-gray-700'>
                                                        <div className='mt-5 mb-4 flex items-center px-5'>
                                                            <p className="text-gray-500 mr-2 capitalize text-md font-semibold dark:text-gray-400">{moduleName}</p>
                                                            <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{`(${code})`}</p>
                                                        </div>
                                                        {
                                                            assessments.map((assessment, i) => {
                                                                const { title, mark } = assessment;
                                                                let markBg = '#e5333c';

                                                                if (mark > 50 && mark < passPercentage) {
                                                                    markBg = 'orange';
                                                                }

                                                                if (mark >= passPercentage) {
                                                                    markBg = '#5ece7b';
                                                                }

                                                                return (
                                                                    <div className='py-3 px-5' key={i}>
                                                                        <div className='flex gap-5 items-center'>
                                                                            <div className='w-2/3'>
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
                                                                            <div className='w-1/3'>
                                                                                <p className='text-gray-500 capitalize text-sm dark:text-gray-400 mb-1' style={{ fontSize: '14px' }}>{'Update Mark: '}</p>
                                                                                <div className="flex gap-1">
                                                                                    <input
                                                                                        type='number'
                                                                                        min='0'
                                                                                        max='100'
                                                                                        // value={''}
                                                                                        onChange={() => {}}
                                                                                        className='w-2/3 h-8 border rounded-md outline-none cursor-pointer p-1'
                                                                                    />
                                                                                    <div className='w-1/3'>
                                                                                        <button 
                                                                                            className='rounded-md container-shadow cursor-pointer outline-none w-full h-8 flex items-center justify-center' 
                                                                                            onClick={() => {}}
                                                                                            style={{ backgroundColor: currentColor }}
                                                                                        >
                                                                                            <p className='text-white capitalize text-sm' style={{ fontSize: '13px' }}>
                                                                                                {'Update'}
                                                                                            </p>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )}
                                            )
                                        }
                                    </div>
                                :<></>
                            }
                            { this.renderDivider() }
                        </div>
                    )
                }) : ''
              }
            </div>
        );
    }

    renderTabInfo() {
        const { activeDetails } = this.state;

        switch(activeDetails) {
            case MODULES:
                return this.renderModules();
                
            case STUDENTS:
                return this.renderStudents();

            default:
                return this.renderPersonalDetails();
        }
    }

    renderPersonalDetails() {
        return (
            <>
                <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Personal Info'}</p>
                { this.renderFullNames() }
                { this.renderFullAge() }
                { this.renderNationality() }
                { this.renderDivider() }
                <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Academic Profile'}</p>
                { this.renderAcademicProfile() }
                { this.renderDivider() }
                <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Work Experience'}</p>
                { this.renderExperience() }
                { this.renderDivider() }
                <p className='mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Required Documents'}</p>
                { this.renderRequiredDocuments() }
            </>
        );
    }

    renderCard() {
        const { isEditModalOpen } = this.state;

        return (
            <div className='gap-5 mb-2 md:flex w-full'>
                <div className='w-full md:w-1/3'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                        { this.renderEditProfile() }
                        { this.renderImage() }
                        { this.renderNames() }
                        { this.renderWorkDuration() }
                        { this.renderContacts() }
                        { this.renderDivider() }
                        { this.renderWorksAs() }
                        { this.renderDivider() }
                        { this.renderFullContactDetails() }
                    </div>
                </div>
                <div className='w-full md:w-2/3 rounded-md'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 w-full rounded-md'>
                        { this.renderDetailsTab() }
                        { this.renderTabInfo() }
                    </div>
                </div>
                { isEditModalOpen && this.renderEditModal() }
            </div>
        );
    }

    render() {
        const { lecturer } = this.props;

        if (!lecturer) {
            return <>Loading....</>
        }

        return this.renderCard();
    }
}

export default LecturerProfile;