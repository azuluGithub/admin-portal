import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ApplicantsListComponent from './ApplicantsList.component';
import { applicants } from './ApplicantsList.config';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class ApplicantsList extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
            applicants
        }
    }

    renderComponent() {
        return (
            <ApplicantsListComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsList);