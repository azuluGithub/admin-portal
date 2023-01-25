import { PureComponent } from 'react';
import { connect } from 'react-redux';

import EmployeeCardComponent from './EmployeeCard.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});
  
const mapDispatchToProps = (dispatch) => ({});
  

class EmployeeCard extends PureComponent {

    containerProps() {
        const { employee, currentColor } = this.props;

        return {
            employee,
            currentColor,
        }
    }

    containerFunctions() {}

    renderEmployeeCard() {
        return (
            <EmployeeCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderEmployeeCard();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EmployeeCard);