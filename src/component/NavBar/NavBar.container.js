import { PureComponent } from 'react';
import { connect } from 'react-redux';

import NavBarComponent from './NavBar.component';
import { navTabAction } from '../../store/NavTab/NavTab.action';
import { sideBarAction } from '../../store/SideBar/SideBar.action';

const mapStateToProps = (state) => ({
    openTab: state.navTabReducer.openTab,
    currentColor: state.themeColorReducer.currentColor,
    sideBarIsActive: state.sideBarReducer.sideBarIsActive,
});

const mapDispatchToProps = (dispatch) => ({
    navTabAction: (openTab) => dispatch(navTabAction(openTab)),
    sideBarAction: (isActive) => dispatch(sideBarAction(isActive)),
});

class NavBar extends PureComponent {

    containerProps() {
        const { 
            openTab, 
            currentColor,
            sideBarIsActive,
        } = this.props;

        return {
            openTab,
            currentColor,
            sideBarIsActive,
        }
    }

    handleNavTab(value) {
        const { navTabAction } = this.props;
        const { openTab } = this.props;
        
        if (openTab.length && openTab === value) {
            navTabAction('');
            return ;
        }
        navTabAction(value);
    }
    
    containerFunctions() {
        const { sideBarAction } = this.props;

        return {
            sideBarAction,
            handleNavTab: this.handleNavTab.bind(this),
        }
    }

    renderComponent() {
        return (
            <NavBarComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);