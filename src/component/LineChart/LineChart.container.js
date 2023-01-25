import { PureComponent } from 'react';
import { connect } from 'react-redux';

import LineChartComponent from './LineChart.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class LineChart extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
        }
    }

    renderComponent() {
        return (
            <LineChartComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);