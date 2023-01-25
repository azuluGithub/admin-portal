import { PureComponent } from 'react';
import { connect } from 'react-redux';

import NavButtonComponent from './NavButton.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class NavButton extends PureComponent {

    containerProps() {
        const { 
            dotColor, 
            btnColor, 
            icon, 
            title,
            handleNavTab, 
            tab 
        } = this.props;

        return { 
            dotColor, 
            btnColor, 
            icon, 
            title, 
            handleNavTab, 
            tab 
        };
    }

    renderComponent() {
        return (
            <NavButtonComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);