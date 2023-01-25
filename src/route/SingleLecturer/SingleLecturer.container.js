import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SingleLecturerComponent from './SingleLecturer.component';
import { lecturer, modules, students } from './SingleLecturer.config';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class SingleLecturer extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;
        
        return {
            currentColor,
            lecturer,
            modules,
            students
        }
    }

    renderComponent() {

        return (
            <SingleLecturerComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleLecturer);