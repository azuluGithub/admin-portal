import { PureComponent } from 'react';

import CourseCardComponent from './CourseCard.component';

class CourseCard extends PureComponent {

    containerProps() {
        const { course, currentColor } = this.props;

        return {
            course,
            currentColor,
        }
    }

    containerFunctions() {}

    renderCourseCard() {
        return (
            <CourseCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderCourseCard();
    }
}

export default CourseCard;