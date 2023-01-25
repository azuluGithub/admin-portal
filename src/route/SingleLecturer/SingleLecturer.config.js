export const lecturer = {
            _id: 'ifekikkife',
            firstname: 'khwezi',
            lastname: 'mthimkhulu',
            othernames: 'neo',
            dateOfBirth: '01 February 1983',
            age: 40,
            gender: 'female',
            email: 'khwezimthimkhulu@star.com',
            phoneNumber: '+27 42 365 1189',
            nationality: 'South African',
            address: {
                streetAddress: '67 lemon avenue',
                town: 'marshall town',
                province: 'kwazulu natal',
                country: 'south africa',
                postalCode: '1800',
            },
            worksAs: 'Lecturer',
            workDuration: '2 years',
            imgUrl: '/assets/portal/images/user1.png',
            academicProfile: {
                highestQualification: 'PHD',
                schools: [
                    {
                        institution: 'havard university',
                        duration: '2021 - 2022',
                        qualification: 'PHD',
                        qualificationDocument: '/link to certificate',
                    },
                    {
                        institution: 'oxford university',
                        duration: '2015 - 2019',
                        qualification: 'BSC [Eng]',
                        qualificationDocument: '/link to certificate',
                    },
                ]
            },
            experience: [
                {
                    institution: 'UCT Lecturer',
                    duration: '2020 - 2022',
                    position: 'mathematics lecturer',
                },
                {
                    institution: 'star college',
                    duration: '2015 - 2019',
                    position: 'mathematics lecturer',
                },
                {
                    institution: 'private tutor',
                    duration: '2015 - 2016',
                    position: 'private math tutor',
                },
            ],
            campus: 'johannesburg',
            temporaryOrPermanent: 'full time',
            identityDocument: '/link to id OR passport',
            proofOfRes: '/link to proof of res',
        };

  export  const modules = [
            {
                code: 'A123E',
                moduleName: 'Intro to Engineering 1',
                description: 'Try React React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started. Online Playgrounds If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz. If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos. Add React to a Website You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets. Create a New React App When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up! As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how. Learn React People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful. If you prefer to learn by doing, start with our practical tutorial. If you prefer to learn concepts step by step, start with our guide to main concepts. Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it. First Examples The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result. React for Beginners If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done',
                passPercentage: 50,
                assessments: [
                    {
                        title: 'assessment 1',
                    },
                    {
                        title: 'population research project',
                    },
                    {
                        title: 'assessment 2',
                    },
                    {
                        title: 'final exam',
                    }
                ],
            },
            {
                code: 'EEE111E',
                moduleName: 'Engineering Mathematics 1',
                description: 'Try React React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started. Online Playgrounds If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz. If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos. Add React to a Website You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets. Create a New React App When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up! As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how. Learn React People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful. If you prefer to learn by doing, start with our practical tutorial. If you prefer to learn concepts step by step, start with our guide to main concepts. Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it. First Examples The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result. React for Beginners If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done',
                passPercentage: 60,
                assessments: [
                    {
                        title: 'assessment 1',
                    },
                    {
                        title: 'mid year exam',
                    },
                    {
                        title: 'final exam',
                    }
                ],
            },
        ];

  export  const students = [
            {
                _id: 'E43 4542 412 834D',
                firstname: 'marble',
                lastname: 'mayweather',
                imgUrl: '/assets/portal/images/user5.png',
                course: {
                    courseName: 'Chemical Engineering',
                },
                year: 'third year',
                modules: [
                    {
                        moduleName: 'Intro to Engineering 1',
                        passPercentage: 60,
                        code: 'A123E',
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 52,
                            },
                            {
                                title: 'population research project',
                                mark: 67,
                            },
                            {
                                title: 'assessment 2',
                                mark: 87,
                            },
                            {
                                title: 'final exam',
                                mark: 83,
                            }
                        ],
                    }
                ],
            },
            {
                _id: 'E43 4542 412 834D',
                firstname: 'tshidi',
                lastname: 'ngobese',
                imgUrl: '/assets/portal/images/user6.png',
                course: {
                    courseName: 'Mechanical Engineering',
                },
                year: 'third year',
                modules: [
                    {
                        moduleName: 'Intro to Engineering 1',
                        passPercentage: 60,
                        code: 'A123E',
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 90,
                            },
                            {
                                title: 'population research project',
                                mark: 93,
                            },
                            {
                                title: 'assessment 2',
                                mark: 97,
                            },
                            {
                                title: 'final exam',
                                mark: 98,
                            }
                        ],
                    }
                ],
            },
            {
                studentNumber: 'A00 000 000 000a',
                firstname: 'monica',
                lastname: 'mtshali',
                imgUrl: '/assets/portal/images/user3.png',
                course: {
                    courseName: 'Chartered Accounting',
                },
                year: 'third year',
                modules: [
                    {
                        moduleName: 'Intro to Engineering 1',
                        passPercentage: 60,
                        code: 'A123E',
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 52,
                            },
                            {
                                title: 'population research project',
                                mark: 87,
                            },
                            {
                                title: 'assessment 2',
                                mark: 47,
                            },
                            {
                                title: 'final exam',
                                mark: 73,
                            }
                        ],
                    }
                ],
            },
            {
                studentNumber: 'A43 000 412 914C',
                firstname: 'onkarabile',
                lastname: 'sibisi',
                imgUrl: '/assets/portal/images/user2.png',
                course: {
                    courseName: 'Actuarial Science',
                },
                year: 'third year',
                modules: [
                    {
                        moduleName: 'Intro to Engineering 1',
                        passPercentage: 60,
                        code: 'A123E',
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 72,
                            },
                            {
                                title: 'population research project',
                                mark: 87,
                            },
                            {
                                title: 'assessment 2',
                                mark: 77,
                            },
                            {
                                title: 'final exam',
                                mark: 83,
                            }
                        ],
                    }
                ],
            },
            {
                _id: 'E43 4542 412 834D',
                firstname: 'sithembiso',
                lastname: 'ntimande',
                imgUrl: '/assets/portal/images/user1.png',
                course: {
                    courseName: 'Nursing',
                },
                year: 'third year',
                modules: [
                    {
                        code: 'EEE111E',
                        moduleName: 'Engineering Mathematics 1',
                        passPercentage: 60,
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 46,
                            },
                            {
                                title: 'mid year exam',
                                mark: 54,
                            },
                            {
                                title: 'final exam',
                                mark: 65,
                            }
                        ],
                    }
                ],
            },
            {
                _id: 'E43 4542 412 834D',
                firstname: 'njunju',
                lastname: 'maseko',
                imgUrl: '/assets/portal/images/user1.png',
                course: {
                    courseName: 'Electrical Engineering',
                },
                year: 'third year',
                modules: [
                    {
                        code: 'EEE111E',
                        moduleName: 'Engineering Mathematics 1',
                        passPercentage: 60,
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 66,
                            },
                            {
                                title: 'mid year exam',
                                mark: 44,
                            },
                            {
                                title: 'final exam',
                                mark: 85,
                            }
                        ],
                    }
                ],
            },
            {
                studentNumber: 'A00 000 000 000a',
                firstname: 'sabelo',
                lastname: 'dubazana',
                imgUrl: '/assets/portal/images/user5.png',
                course: {
                    courseName: 'Software Engineering',
                },
                year: 'third year',
                modules: [
                    {
                        code: 'EEE111E',
                        moduleName: 'Engineering Mathematics 1',
                        passPercentage: 60,
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 66,
                            },
                            {
                                title: 'mid year exam',
                                mark: 44,
                            },
                            {
                                title: 'final exam',
                                mark: 50,
                            }
                        ],
                    }
                ],
            },
            {
                studentNumber: 'A43 000 412 914C',
                firstname: 'thubelihle',
                lastname: 'mthombeni',
                imgUrl: '/assets/portal/images/user2.png',
                course: {
                    courseName: 'Software Engineering',
                },
                year: 'third year',
                modules: [
                    {
                        code: 'EEE111E',
                        moduleName: 'Engineering Mathematics 1',
                        passPercentage: 60,
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 40,
                            },
                            {
                                title: 'mid year exam',
                                mark: 51,
                            },
                            {
                                title: 'final exam',
                                mark: 34,
                            }
                        ],
                    },
                    {
                        code: '111E',
                        moduleName: 'Engineering Electronics II',
                        passPercentage: 65,
                        assessments: [
                            {
                                title: 'assessment 1',
                                mark: 60,
                            },
                            {
                                title: 'assessment 1',
                                mark: 70,
                            },
                            {
                                title: 'mid year exam',
                                mark: 41,
                            },
                            {
                                title: 'final exam',
                                mark: 84,
                            }
                        ],
                    }
                ],
            }
        ];