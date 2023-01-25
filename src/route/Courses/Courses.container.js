import { PureComponent } from 'react';
import { connect } from 'react-redux';

import CoursesComponent from './Courses.component';
import { courses } from './Courses.config';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class Courses extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;

        return {
            courses,
            currentColor,
        }
    }

    renderComponent() {
        return (
            <CoursesComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);