import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SortComponent from './Sort.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Sort extends PureComponent {

    containerProps() {
        const { sort, setSort } = this.props;

        return { sort, setSort };
    }

    renderComponent() {
        return (
            <SortComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);