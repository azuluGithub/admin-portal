import { PureComponent } from 'react';
import { connect } from 'react-redux';

import EmployeeCreateComponent from './EmployeeCreate.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class EmployeeCreate extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <EmployeeCreateComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);