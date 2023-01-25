import { PureComponent } from 'react';
import { connect } from 'react-redux';

import AdminComponent from './Admin.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Admin extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <AdminComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);