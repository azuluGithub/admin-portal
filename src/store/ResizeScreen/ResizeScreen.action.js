export const RESIZE_SCREEN_TYPE = 'RESIZE_SCREEN_TYPE';

export const setScreenSizeAction = (width) => ({
  type: RESIZE_SCREEN_TYPE,
  payload: width,
});
