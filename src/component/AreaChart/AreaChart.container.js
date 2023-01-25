import { PureComponent } from 'react';
import { connect } from 'react-redux';

import AreaChartComponent from './AreaChart.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class AreaChart extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
        }
    }

    renderComponent() {
        return (
            <AreaChartComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaChart);