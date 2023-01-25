import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SingleStudentComponent from './SingleStudent.component';
import { student } from './SingleStudent.config';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class SingleStudent extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;
        
        return {
            student,
            currentColor,
        }
    }

    renderComponent() {

        return (
            <SingleStudentComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);