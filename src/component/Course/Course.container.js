import { PureComponent } from 'react';

import CourseComponent from './Course.component';

class Course extends PureComponent {

    containerProps() {
        const { course, currentColor } = this.props;

        return {
            course,
            currentColor,
        }
    }

    containerFunctions() {}

    renderCourse() {
        return (
            <CourseComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderCourse();
    }
}

export default Course;