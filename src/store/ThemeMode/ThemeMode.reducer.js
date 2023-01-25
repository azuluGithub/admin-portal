import { THEME_MODE_TYPE } from './ThemeMode.action';
import BrowserDatabase from '../../util/BrowserDatabase/BrowserDatabase';

const initThemeMode = () => {
    const dbMode = BrowserDatabase.getItem('theme-mode');
    const currentMode = dbMode ? dbMode : 'Light';

    return { currentMode }
};

const setThemeMode = (mode) => {
    BrowserDatabase.setItem('theme-mode', mode);
}

const initialThemeModeState = () => ({
    ...initThemeMode(),
});

export const themeModeReducer = (state = initialThemeModeState(), action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case THEME_MODE_TYPE:
            setThemeMode(payload);

            return { 
                ...state,
                currentMode: payload,
            };

      default:
        return state;
    }
}

