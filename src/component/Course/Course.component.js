import React, { PureComponent } from 'react';

import { COURSE_DETAILS, COURSE_MODULES } from './Course.config';
import './Course.style.scss';

class Course extends PureComponent {

    state = {
        isCourseDescriptionsOpen: false,
        activeDetails: COURSE_DETAILS,
        isModuleOpen: false,
        activeModule: null,
    }

    renderDivider() {
        return (
            <div className='my-8 w-full h-0.5 bg-gray-100 dark:bg-gray-700'></div>
        );
    }
    
    toggleCourseDescription(value) {
        this.setState({ isCourseDescriptionsOpen: value });
    }

    renderCourseDescriptions(description) {
        const { isCourseDescriptionsOpen } = this.state;

        return (
            <div className='text-gray-800 text-sm text-center px-5'>
                <span className='text-gray-500 dark:text-gray-400 text-sm'>
                    { description.substring(0, 500) }
                </span>
                {
                    isCourseDescriptionsOpen ?
                        <></>
                        :
                        <>
                            <br />
                            <button
                                className='capitalize text-sm mt-2 py-1 px-4 rounded-2xl bg-white dark:bg-gray-400 dark:text-black text-green-600'
                                onClick={() => this.toggleCourseDescription(true)}
                            >
                                {'read more'}
                            </button>
                        </>
                }
                { isCourseDescriptionsOpen &&
                    <span className='text-gray-500 dark:text-gray-400 text-sm'>
                        { description.substring(500, description.length) }
                    </span>
                } <br />
                {
                    isCourseDescriptionsOpen ?
                    <>
                        <br />
                        <button
                            className='capitalize text-sm mt-2 py-1 px-4 rounded-2xl bg-white dark:bg-gray-400 dark:text-black text-red-500'
                            onClick={() => this.toggleCourseDescription(false)}
                        >
                            {'read less'}
                        </button>
                    </>
                    : <></>
                }
            </div>
        );
    }

    renderEntryLevelRequirements(requirements) {
        return (
            <div className='flex flex-wrap px-5 justify-evenly'>
                {
                    requirements.map((req) => {
                        const { requirement, value } = req;
                        const finalValue = requirement === 'aps score' ? value :`${value}%`;

                        return (
                            <div className='text-center' style={{ width: 'fit-content'}}>
                                <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{requirement}</p>
                                <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{finalValue}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    renderCareerOpportunities(opportunities) {
        return (
            <div className='flex flex-wrap px-5 justify-evenly'>
                {
                    opportunities.map((opportunity) => {
                        return (
                            <div className='m-1'>
                                <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{`#${opportunity}`}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    handleActiveModule = (value, index) => {
        this.setState({ isModuleOpen: value });
        this.setState({ activeModule: index });
    }

    renderModulesButton = (idx) => {
        const { isModuleOpen, activeModule } = this.state;

        if (isModuleOpen && activeModule === idx) {
            return (
                <div
                    onClick={() => this.handleActiveModule(false, idx)}
                    className='items-center flex justify-center text-3xl text-red-500 cursor-pointer p-2 bg-white w-8 h-8' style={{ borderRadius: '50%' }}
                >
                    {'-'}
                </div>
            );
        }
        
        return (
            <div
                onClick={() => this.handleActiveModule(true, idx)}
                className='items-center flex justify-center text-3xl text-green-500 cursor-pointer p-2 bg-white w-8 h-8' style={{ borderRadius: '50%' }}
            >
                {'+'}
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
                    style={ activeDetails === COURSE_DETAILS ? { backgroundColor: currentColor, color: '#eee' } : { backgroundColor: 'transparent' } }            
                    onClick={() => this.handleActiveDetailsTab(COURSE_DETAILS)}
                >
                    <p className='text-lg font-bold'>{'Course Details'}</p>
                </div>
                <div
                    className='flex align-center justify-center p-5 cursor-pointer rounded-sm text-gray-500 dark:text-gray-200'
                    style={ activeDetails === COURSE_MODULES ? { backgroundColor: currentColor, color: '#ddd' } : { backgroundColor: 'transparent' } }
                    onClick={() => this.handleActiveDetailsTab(COURSE_MODULES)}
                >
                    <p className='text-lg font-bold'>{'Course Modules'}</p>
                </div>
            </div>
        );
    }

    renderTabInfo() {
        const { activeDetails } = this.state;

        switch(activeDetails) {
            case COURSE_MODULES:
                return this.renderCourseModules();
                
            default:
                return this.renderCourseDetails();
        }
    }

    toggleModuleDescription = (value) => {
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

    renderModules = (modules) => {
        const { isModuleOpen, activeModule } = this.state;

        return (
            <div className='mb-10'>
                {
                    modules.length ? modules.map((mod, idx) => {
                        const { code, moduleName, description, passPercentage, numberOfAssessments, assessments } = mod;

                        return (
                            <div className='mb-2'>
                                <div className='items-center flex justify-between bg-gray-100 dark:bg-gray-600 rounded-sm px-5 py-2'>
                                    <div className='items-center flex'>
                                        <p className="text-gray-600 mr-2 capitalize text-md dark:text-gray-400">{moduleName}</p>
                                        <p className="text-gray-500 capitalize text-md dark:text-gray-400">{`(${code})`}</p>
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
                            </div>
                        )
                    }) : <></>
                }
            </div>
        );
    }

    renderCourseModules() {
        const { course: { moduleStructure } } = this.props;

        return (
            <div className='bg-white container-shadow dark:bg-secondary-dark-bg w-full p-5 rounded-md'>
                {
                    moduleStructure.length && moduleStructure.map((structure) => {
                        const { year, semesters } = structure;

                        return (
                            <div className='mb-4' key={year}>
                                <p className="mb-2 text-gray-500 font-bold capitalize text-xl dark:text-gray-400">{year}</p>
                                {
                                    semesters.length && semesters.map((sem) => {
                                        const { _id, semester, modules } = sem;

                                        return (
                                            <div className='' key={_id}>
                                                <p className="mb-2 text-gray-500 capitalize text-md dark:text-gray-400">{semester}</p>
                                                { this.renderModules(modules) }
                                            </div>
                                        )
                                    })
                                }
                                { this.renderDivider() }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderCourseDetails() {
        const { currentColor, course: { studyMode, description, courseName, courseCode, qualification, faculty, imgUrl, price, duration, entryLevelRequirements, careerOpportunities } } = this.props;
    
        return (
            <div className='bg-white container-shadow dark:bg-secondary-dark-bg pb-4 w-full rounded-md'>
                <div className='w-full h-48 relative'>
                    <img
                        className="h-full w-full object-cover rounded-md"
                        src={imgUrl}
                        alt="course"
                    />
                </div>
                <p className='my-6 text-xl font-extrabold text-center capitalize dark:text-gray-200'>{courseName}</p>
                <div className='flex my-5 gap-5 px-5'>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'Code'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{courseCode}</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'qualification'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{qualification}</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'faculty'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{faculty}</p>
                    </div>
                </div>
                { this.renderDivider() }
                <div className='flex gap-5 px-5'>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'duration'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{duration}</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'study mode'}</p>
                        <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{studyMode}</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <p className="text-gray-500 capitalize text-sm font-semibold dark:text-gray-400">{'price'}</p>
                        <p className="text-gray-500 capitalize text-md dark:text-gray-400" style={{ color: currentColor }}>{`R ${price}`}</p>
                    </div>
                </div>
                { this.renderDivider() }
                <p className='text-center mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Course description'}</p>
                { description.length && this.renderCourseDescriptions(description) }
                { this.renderDivider() }
                <p className='text-center mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Entry level requirements'}</p>
                { entryLevelRequirements.length && this.renderEntryLevelRequirements(entryLevelRequirements) }
                { this.renderDivider() }
                <p className='text-center mb-4 text-lg px-5 font-extrabold capitalize dark:text-gray-200'>{'Career opportunities'}</p>
                { careerOpportunities.length && this.renderCareerOpportunities(careerOpportunities) }
            </div>
        );
    }

    renderCourse() {
        return (
            <>
                <div className='bg-white mb-4 container-shadow dark:bg-secondary-dark-bg w-full rounded-md'>
                    { this.renderDetailsTab() }
                </div>
                <div className=''>
                    { this.renderTabInfo() }
                </div>
            </>
        );
    }

    renderCard() {
        return (
            <div className='gap-5 mb-2 md:flex w-full'>
                <div className='w-full md:w-2/3'>
                    { this.renderCourse() }
                </div>
                <div className='w-full md:w-1/3'>
                    <div className='bg-white container-shadow dark:bg-secondary-dark-bg mb-4 py-5 w-full rounded-md'>
                       {'Edit '}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { course } = this.props;

        if (!course) {
            return <>Loading....</>
        }

        return this.renderCard();
    }
}

export default Course;
