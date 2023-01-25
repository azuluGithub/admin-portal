import { PureComponent } from 'react';
import { connect } from 'react-redux';

import UserProfileComponent from './UserProfile.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class UserProfile extends PureComponent {

    containerProps() {
        const { currentColor, handleNavTab } = this.props;

        return {
            currentColor,
            handleNavTab,
        }
    }

    renderComponent() {
        return (
            <UserProfileComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);