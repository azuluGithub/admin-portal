import { THEME_COLOR_TYPE } from './ThemeColor.action';
import BrowserDatabase from '../../util/BrowserDatabase/BrowserDatabase';

//load from browser db : init color
const initThemeColor = () => {
    const storedColor = BrowserDatabase.getItem('theme-color');

    const currentColor = storedColor 
                        ? storedColor : 'rgb(26, 115, 232)';

    return { currentColor }
};

const setThemeColor = (color) => {
    BrowserDatabase.setItem('theme-color', color);
}

const initialThemeColorState = () => ({
    ...initThemeColor(),
});

export const themeColorReducer = (state = initialThemeColorState(), action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case THEME_COLOR_TYPE:
            setThemeColor(payload);

            return { 
                ...state,
                currentColor: payload,
            };

      default:
        return state;
    }
}

