export const THEME_SETTING_TYPE = 'THEME_SETTING_TYPE';

export const themeSettingsAction = (isThemeBarOpen) => ({
  type: THEME_SETTING_TYPE,
  payload: isThemeBarOpen,
});
