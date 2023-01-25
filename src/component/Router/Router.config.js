import { MdDashboard, MdPeople, MdSpeaker } from 'react-icons/md';
import { FaUsers, FaUser, FaBook } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

export const sideBarLinks = [
    {
        name: 'dashboard',
        url: '/',
        icon: <MdDashboard />,
    },
    {
        name: 'students',
        url: '/students',
        icon: <FaUsers />,
    },
    {
        name: 'lecturers',
        url: '/lecturers',
        icon: <FaUser />,
    },
    {
        name: 'events',
        url: '/events',
        icon: <FiCalendar />,
    },
    {
        name: 'applicants',
        url: '/applicants',
        icon: <FaUsers />,
    },
    {
        name: 'employees',
        url: '/employees',
        icon: <MdPeople />,
    },
    {
        name: 'news',
        url: '/news',
        icon: <MdSpeaker />,
    },
    {
        name: 'courses',
        url: '/courses',
        icon: <FaBook />,
    },
];
