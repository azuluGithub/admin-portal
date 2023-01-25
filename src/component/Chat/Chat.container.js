import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ChatComponent from './Chat.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class Chat extends PureComponent {

    containerProps() {
        const { currentColor, handleNavTab } = this.props;

        return {
            currentColor,
            handleNavTab,
        }
    }

    renderComponent() {
        return (
            <ChatComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);