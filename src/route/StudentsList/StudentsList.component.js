import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// import Header from '../../component/Header';
import Button from '../../component/Button';
import UserCard from '../../component/UserCard';
import Pagination from '../../component/Pagination';
import Sort from '../../component/Sort';
import Search from '../../component/Search';
import Years from '../../component/Years';

import './StudentsList.style.scss';

const StudentsListComponent = ({ students, currentColor }) => {
  const [ obj, setObj ] = useState({});
  const [ page, setPage ] = useState(1);
  const [ search, setSearch ] = useState('');
  const [ sort, setSort ] = useState({ sort: 'createAt', order: 'desc' });
  const [ filterYear, setFilterYear ] = useState([]);

  useEffect(() => {
    const getAllStudents = async() => {
      try {
        const url = `${process.env.REACT_APP_ENDPOINT_PORT}/students/get-students?
                      page=${page}
                      &sort=${sort.sort},${sort.order}
                      &year=${filterYear.toString()}
                      &search=${search}`;

        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch(err) {
        console.error('Get All Students Error ----> ' + err)
      }
    }

    getAllStudents();
  }, [sort, page, search, filterYear]);

  const renderAddButton = () => {
    return (
      <Link to='/create-student'>
        <Button 
          color={'#FAFBFB'} 
          bgColor={currentColor}
          text="Add New" 
          borderRadius="4px"
        />
      </Link>
    );
  }

  const renderComponent = () => {
    if (!students.length) {
      return (
        <div className='m-4 pt-8 text-center'>
          <p className='text-2xl uppercase font-extrabold text-gray-600 capitalize dark:text-gray-400'>
            {'No students where found'}
          </p>
        </div>
      )
    };

    return (
      <>
        {/* <Header
          type={'list'}
          title={'Students'}
          link={'/create-student'}
          currentColor={currentColor}
        /> */}
        <div className='flex gap-5 m-4'>
          <div className='Students w-3/4'>
            {
              //obj.students
              students.map((student) => {
                const user = {  
                  ...student, 
                  role: student.course.courseName, 
                  yearsActive: `${student.year}`
                };
                
                return (
                  <div key={student._id} >
                    <UserCard
                      user={user}
                      currentColor={currentColor}
                    />
                  </div>
                  )
              })
            }
          </div>
          <div className='w-1/4'>
            <div className='p-5 mb-4 flex items-center justify-between bg-white container-shadow dark:bg-secondary-dark-bg rounded-md'>
              <span className='text-xl font-extrabold capitalize dark:text-gray-200' style={{ color: currentColor }}>{ 'Students' }</span>
              { renderAddButton() }
            </div>
            <div className='p-5 mb-4 bg-white container-shadow dark:bg-secondary-dark-bg rounded-md'>
              <Search 
                setSearch={(search) => setSearch(search)}
              />
            </div>
            <div className='p-5 mb-4 bg-white container-shadow dark:bg-secondary-dark-bg rounded-md'>
              <Sort 
                sort={sort} 
                setSort={(sort) => setSort(sort)} 
              />
            </div>
            <div className='p-5 bg-white container-shadow dark:bg-secondary-dark-bg rounded-md'>
              <Years 
                filterYear={filterYear} 
                years={obj.years ? obj.years : [ 'first year', 'second year', 'third year', 'fourth year' ] } 
                setFilterYear={(year) => setFilterYear(year)}
              />
            </div>
          </div>
        </div>
        <Pagination
          page={page}
          limit={obj.limit ? obj.limit : 0}
          total={obj.total ? obj.total : 0}
          setPage={(page) => setPage(page)}
        />
      </>
    );
  }

  return renderComponent();
}

export default StudentsListComponent;

