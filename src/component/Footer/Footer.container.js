import { PureComponent } from 'react';
import { connect } from 'react-redux';

import FooterComponent from './Footer.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Footer extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <FooterComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);