import { Link } from 'react-router-dom';

import { dashData } from './Admin.config';

import './Admin.style.scss';

const AdminComponent = () => {

  const totalsCard = (item) => {
    const { url, amount, title, icon, iconBg, iconColor } = item;

    return (
      <Link to={url} key={title} className="flex items-center gap-4 bg-white w-full container-shadow dark:text-gray-200 dark:bg-secondary-dark-bg p-5 rounded-lg">
        <button
          type="button"
          style={{ color: iconColor, backgroundColor: iconBg }}
          className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
        >
          {icon}
        </button>
        <div className=''>
            <p className="text-lg font-semibold">{amount}</p>
            <p className="text-sm text-gray-400 mt-1">{title}</p>
        </div>
      </Link>
    )
  }

  const renderTotals = () => {
    return (
        <div className="Admin-Totals w-full">
          {dashData.map(totalsCard)}
        </div>
    );
  }

  return (
    <div className="Admin m-4">
      { renderTotals() }
    </div>
  );

};

export default AdminComponent;
