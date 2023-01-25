import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { lecturers } from './LecturersList.config';
import LecturersListComponent from './LecturersList.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});
class LecturersList extends PureComponent {
    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
            lecturers,
        }
    }

    renderComponent() {
        return (
            <LecturersListComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturersList);