import { PureComponent } from 'react';
import { connect } from 'react-redux';

import StudentCreateComponent from './StudentCreate.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class StudentCreate extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <StudentCreateComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCreate);