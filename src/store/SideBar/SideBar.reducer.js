import {
    SIDE_BAR_TYPE,
} from './SideBar.action';

const initSideBar = () => ({
    sideBarIsActive: true,
});

const initialSideBarState = () => ({
    ...initSideBar(),
});

export const sideBarReducer = (state = initialSideBarState(), action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case SIDE_BAR_TYPE:
            return { 
                ...state,
                sideBarIsActive: payload,
            };

      default:
        return state;
    }
}

