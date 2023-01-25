import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SingleApplicantComponent from './SingleApplicant.component';

import { applicant } from './SingleApplicant.config';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class SingleApplicant extends PureComponent {

    containerProps() {
        return {
            applicant
        }
    }

    renderComponent() {
        return (
            <SingleApplicantComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleApplicant);