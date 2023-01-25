import { PureComponent } from 'react';

import LecturerProfileComponent from './LecturerProfile.component';

class LecturerProfile extends PureComponent {

    containerProps() {
        const {
            currentColor,
            lecturer,
            modules,
            students
        } = this.props;

        return {
            currentColor,
            lecturer,
            modules,
            students,
        }
    }

    containerFunctions() {}

    renderLecturerProfile() {
        return (
            <LecturerProfileComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderLecturerProfile();
    }
}

export default LecturerProfile;