import { PureComponent } from 'react';
import { connect } from 'react-redux';

import YearsComponent from './Years.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Years extends PureComponent {

    containerProps() {
        const { years, filterYear, setFilterYear } = this.props;

        return { years, filterYear, setFilterYear };
    }

    renderComponent() {
        return (
            <YearsComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Years);