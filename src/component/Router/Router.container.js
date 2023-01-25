import { PureComponent } from 'react';
import { connect } from 'react-redux';

import RouterComponent from './Router.component';
import { themeSettingsAction } from '../../store/ThemeSetting/ThemeSetting.action';
import { sideBarAction } from '../../store/SideBar/SideBar.action';
import { setScreenSizeAction } from '../../store/ResizeScreen/ResizeScreen.action';

const mapStateToProps = (state) => ({
  isThemeBarOpen: state.themeSettingReducer.isThemeBarOpen,
  currentColor: state.themeColorReducer.currentColor,
  currentMode: state.themeModeReducer.currentMode,
  sideBarIsActive: state.sideBarReducer.sideBarIsActive,
});

const mapDispatchToProps = (dispatch) => ({
  openThemeBar: (isOpen) => dispatch(themeSettingsAction(isOpen)),
  sideBarAction: (isActive) => dispatch(sideBarAction(isActive)),
  resizeScreen: (width) => dispatch(setScreenSizeAction(width)),
});

class RouterContainer extends PureComponent {

  handleResize = () => {
    const { resizeScreen, sideBarAction } = this.props;
    const width = window.innerWidth;

    resizeScreen(width);

    if (width <= 900) {
      sideBarAction(false);
    } else {
      sideBarAction(true);
    }
  }

  constructor(props) {
    super(props);
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  containerProps() {
    const { 
      isThemeBarOpen, 
      currentColor,
      currentMode,
      sideBarIsActive,
    } = this.props;

    return {
      isThemeBarOpen,
      currentColor,
      currentMode,
      sideBarIsActive,
    }
  }

  handleThemeBar(isThemeBarOpen) {
    const { openThemeBar } = this.props;
    
    openThemeBar(isThemeBarOpen);
}

  containerFunctions() {
    return {
      handleThemeBar: this.handleThemeBar.bind(this),
    }
  }

  renderRouter() {
    return (
      <RouterComponent 
        { ...this.containerProps() }
        { ...this.containerFunctions() }
      />
    );
  }

  render() {
    return this.renderRouter();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterContainer);
