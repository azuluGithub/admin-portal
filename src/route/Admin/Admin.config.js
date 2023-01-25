import { FaUsers, FaUser } from 'react-icons/fa';
import { MdPeople, MdBook } from 'react-icons/md';

export const dashData = [
    {
      icon: <FaUser />,
      amount: '349',
      url: '/lecturers',
      title: 'Lecturers',
      iconColor: '#fff',
      iconBg: 'tomato',
    },
    {
      icon: <FaUsers />,
      amount: '976',
      url: '/students',
      title: 'Students',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
    },
    {
      icon: <MdBook />,
      amount: '339',
      url: '/courses',
      title: 'Courses',
      iconColor: '#fff',
      iconBg: '#ff5c8d80',
    },
    {
      icon: <MdPeople />,
      amount: '64',
      title: 'Employees',
      url: '/employees',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: '#9d92cf',
    },
    {
      icon: <FaUsers />,
      amount: '3030',
      title: 'Applicants',
      url: '/applicants',
      iconColor: '#fff',
      iconBg: 'rgba(26, 115, 232, 0.4)',
    },
];

