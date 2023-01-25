import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SingleCourseComponent from './SingleCourse.component';

import { course } from './SingleCourse.config';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class SingleCourse extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;

        return {
            course,
            currentColor,
        }
    }

    renderComponent() {
        return (
            <SingleCourseComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCourse);