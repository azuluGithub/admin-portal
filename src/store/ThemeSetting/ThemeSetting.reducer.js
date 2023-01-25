import {
    THEME_SETTING_TYPE,
} from './ThemeSetting.action';


const initThemeSetting = () => ({
    isThemeBarOpen: false,
});

const initialThemeSettingState = () => ({
    ...initThemeSetting(),
});


export const themeSettingReducer = (state = initialThemeSettingState(), action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case THEME_SETTING_TYPE:
            return { 
                ...state,
                isThemeBarOpen: payload,
            };

      default:
        return state;
    }
}

