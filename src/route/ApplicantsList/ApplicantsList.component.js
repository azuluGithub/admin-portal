import { PureComponent } from 'react';

import ApplicantCard from '../../component/ApplicantCard';

class ApplicantsListComponent extends PureComponent {

  state = {
    accepted: [],
    rejected: [],
    waitingList: [],
    recieved: [],
  }

  setApplicants() {
    const { applicants } = this.props;
    let acceptedApplicants = [];
    let rejectedApplicants = [];
    let waitingApplicants = [];
    let recievedApplicants = [];

    if (applicants.length) {
      for (let applicant of applicants) {
        if (applicant.status.statusCode === 'waiting list') {
          waitingApplicants.push(applicant);
        }
        
        if (applicant.status.statusCode === 'recieved') {
          recievedApplicants.push(applicant);
        }
        
        if (applicant.status.statusCode === 'rejected') {
          rejectedApplicants.push(applicant);
        }

        if (applicant.status.statusCode === 'accepted') {
          acceptedApplicants.push(applicant);
        }
      }

      this.setState({
        accepted: [ ...this.state.accepted, ...acceptedApplicants ],
        rejected: [ ...this.state.rejected, ...rejectedApplicants ],
        recieved: [ ...this.state.recieved, ...recievedApplicants ],
        waitingList: [ ...this.state.waitingList, ...waitingApplicants ],
      });
    }
  }

  componentDidMount() {
    this.setApplicants();
  }

  // componentDidUpdate(prevProps) {
  //   this.setApplicants();
  // }
  renderStatusTab(list, heading, statusColor) {
    return (
      <div className='w-1/4'>
        <div className='flex items-center justify-center p-5 bg-gray-200 container-shadow dark:bg-secondary-dark-bg rounded-md'>
          <p className='capitalize mr-2 text-center font-bold' style={{ color: statusColor }}>{heading}</p>
          <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{`(${list.length})`}</p>
        </div>
        <div className='bg-gray-100 dark:bg-gray-700 p-2'>
        {
          list.length ?
            list.map((applicant) => {
              return (
                <div className='mt-2'>
                  <ApplicantCard 
                    key={applicant._id}
                    applicant={applicant}
                  />
                </div>
              )
            })
          : <></>
        }
        </div>
      </div>
    )
  }

  renderComponent () {
    const { recieved, accepted, waitingList, rejected } = this.state;
    return (
      <div className='m-4 gap-5 flex'>
        { this.renderStatusTab(recieved, 'recieved', 'orange') }
        { this.renderStatusTab(waitingList, 'waiting list', 'blue') }
        { this.renderStatusTab(rejected, 'rejected', 'red') }
        { this.renderStatusTab(accepted, 'accepted', 'green') }
      </div>
    );
  }

  render () {
    return this.renderComponent();
  }
}

export default ApplicantsListComponent;
