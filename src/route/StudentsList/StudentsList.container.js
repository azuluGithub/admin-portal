import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { students } from './StudentsList.config';
import StudentsListComponent from './StudentsList.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class StudentsList extends PureComponent {
    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
            students,
        }
    }

    renderComponent() {
        return (
            <StudentsListComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);