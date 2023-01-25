import { PureComponent } from 'react';
import { connect } from 'react-redux';

import LecturerCreateComponent from './LecturerCreate.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class LecturerCreate extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <LecturerCreateComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturerCreate);