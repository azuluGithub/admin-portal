import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SideBarComponent from './SideBar.component';
import { sideBarAction } from '../../store/SideBar/SideBar.action';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({
    sideBarAction: (isActive) => dispatch(sideBarAction(isActive)),
});

class SideBar extends PureComponent {

    containerProps() {
        const { 
            sideBarIsActive, 
            sideBarLinks, 
            currentColor 
        } = this.props;

        return { 
            sideBarIsActive, 
            sideBarLinks, 
            currentColor 
        };
    }

    containerFunctions() {
        const { sideBarAction } = this.props;

        return {
            sideBarAction,
        }
    }

    renderComponent() {
        return (
            <SideBarComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);