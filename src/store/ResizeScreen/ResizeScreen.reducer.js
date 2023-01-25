import { RESIZE_SCREEN_TYPE } from './ResizeScreen.action';

const initResizeScreen = () => ({
    screenSize: undefined,
});


const initialResizeScreenState = () => ({
    ...initResizeScreen(),
});

export const resizeScreenReducer = (state = initialResizeScreenState(), action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case RESIZE_SCREEN_TYPE:
            return { 
                ...state,
                screenSize: payload,
            };

      default:
        return state;
    }
}

