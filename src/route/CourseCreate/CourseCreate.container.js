import { PureComponent } from 'react';
import { connect } from 'react-redux';

import CourseCreateComponent from './CourseCreate.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class CourseCreate extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <CourseCreateComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseCreate);