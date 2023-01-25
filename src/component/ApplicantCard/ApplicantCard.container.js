import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ApplicantCardComponent from './ApplicantCard.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({})

class ApplicantCard extends PureComponent {

    containerProps() {
        const { applicant, currentColor } = this.props;

        return {
            applicant,
            currentColor,
        }
    }

    containerFunctions() {}

    renderApplicantCard() {
        return (
            <ApplicantCardComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderApplicantCard();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantCard);