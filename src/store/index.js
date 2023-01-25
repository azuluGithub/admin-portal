import { routeReducer } from './Route/Route.reducer';
import { navTabReducer } from './NavTab/NavTab.reducer';
import { sideBarReducer } from './SideBar/SideBar.reducer';
import { themeColorReducer } from './ThemeColor/ThemeColor.reducer';
import { themeModeReducer } from './ThemeMode/ThemeMode.reducer';
import { resizeScreenReducer } from './ResizeScreen/ResizeScreen.reducer';
import { themeSettingReducer } from './ThemeSetting/ThemeSetting.reducer';

const reducersObject = {
  routeReducer,
  themeSettingReducer,
  navTabReducer,
  themeColorReducer,
  themeModeReducer,
  sideBarReducer,
  resizeScreenReducer,
}

class InjectStaticReducers {
  registerReducers(store) {
    for (let reducerKey in reducersObject) {
      store.injectReducer(reducerKey, reducersObject[reducerKey]);
    }

    return store;
  }
}

export default new InjectStaticReducers();