import { PureComponent } from 'react';
import { connect } from 'react-redux';

import PaginationComponent from './Pagination.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Pagination extends PureComponent {

    containerProps() {
        const { page, total, limit, setPage } = this.props;

        return { page, total, limit, setPage };
    }

    renderComponent() {
        return (
            <PaginationComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);