import { PureComponent } from 'react';
import { connect } from 'react-redux';

import HeaderComponent from './Header.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Header extends PureComponent {

    containerProps() {
        const {
            currentColor,
            title,
            link,
            type,
        } = this.props;

        return {
            currentColor,
            title,
            link,
            type,
        }
    }

    renderComponent() {
        return (
            <HeaderComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);