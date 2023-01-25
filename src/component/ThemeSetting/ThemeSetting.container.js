import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ThemeSettingComponent from './ThemeSetting.component';
import { themeSettingsAction } from '../../store/ThemeSetting/ThemeSetting.action';
import { setThemeColorAction } from '../../store/ThemeColor/ThemeColor.action';
import { setThemeModeAction } from '../../store/ThemeMode/ThemeMode.action';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
    currentMode: state.themeModeReducer.currentMode,
});

const mapDispatchToProps = (dispatch) => ({
    closeThemeBar: (isOpen) => dispatch(themeSettingsAction(isOpen)),
    setThemeColorAction: (color) => dispatch(setThemeColorAction(color)),
    setThemeModeAction: (mode) => dispatch(setThemeModeAction(mode)),
});

class ThemeSetting extends PureComponent {
    containerProps() {
        const { 
            currentColor, 
            currentMode,
        } = this.props;

        return {
            currentColor,
            currentMode,
        }
    }

    handleThemeBar(isThemeBarOpen) {
        const { closeThemeBar } = this.props;
        
        closeThemeBar(isThemeBarOpen);
    }

    handleThemeColor(color) {
        const { 
            setThemeColorAction, 
            closeThemeBar 
        } = this.props;
        
        setThemeColorAction(color);
        closeThemeBar(false);
    }

    handleThemeMode(mode) {
        const { 
            setThemeModeAction, 
            closeThemeBar 
        } = this.props;
        
        setThemeModeAction(mode);
        closeThemeBar(false);
    }
    
    containerFunctions() {
        return {
          handleThemeBar: this.handleThemeBar.bind(this),
          handleThemeColor: this.handleThemeColor.bind(this),
          handleThemeMode: this.handleThemeMode.bind(this),
        }
    }

    renderComponent() {
        return (
            <ThemeSettingComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSetting);