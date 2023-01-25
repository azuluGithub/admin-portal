import { PureComponent } from 'react';
import { connect } from 'react-redux';

import PieChartComponent from './PieChart.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class PieChart extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
        }
    }

    renderComponent() {
        return (
            <PieChartComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);