import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ApplicantProfileComponent from './ApplicantProfile.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({})

class ApplicantProfile extends PureComponent {

    containerProps() {
        const { applicant, currentColor } = this.props;

        return {
            applicant,
            currentColor,
        }
    }

    handleApplicantUpdate(applicant) {
        console.log('applicant on applicant card container: ', applicant);
        //tie to server
    }

    containerFunctions() {
        return {
            handleApplicantUpdate: this.handleApplicantUpdate.bind(this),
        }
    }

    renderApplicantProfile() {
        return (
            <ApplicantProfileComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderApplicantProfile();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantProfile);