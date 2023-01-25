import { PureComponent } from 'react';
import { connect } from 'react-redux';

import NotificationComponent from './Notification.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class Notification extends PureComponent {

    containerProps() {
        const { currentColor, handleNavTab } = this.props;

        return {
            currentColor,
            handleNavTab,
        }
    }

    renderComponent() {
        return (
            <NotificationComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);