import { NAV_TAB_TYPE } from './NavTab.action';

const initNavTab = () => ({
    openTab: '',
});

const initialNavTabState = () => ({
    ...initNavTab(),
});

export const navTabReducer = (state = initialNavTabState(), action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case NAV_TAB_TYPE:
            return { 
                ...state,
                openTab: payload,
            };
    
        default:
            return state;
    }
}