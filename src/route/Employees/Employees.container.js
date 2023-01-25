import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { employees } from './Employees.config';
import EmployeesComponent from './Employees.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class Employees extends PureComponent {
    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
            employees,
        }
    }

    renderComponent() {
        return (
            <EmployeesComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);