import { PureComponent } from 'react';

import StudentCardComponent from './StudentCard.component';

class StudentCard extends PureComponent {

    containerProps() {
        const { 
            student,
            currentColor,
        } = this.props;

        return {
            student,
            currentColor,
        }
    }

    containerFunctions() {}

    renderStudentCard() {
        return (
            <StudentCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderStudentCard();
    }
}

export default StudentCard;