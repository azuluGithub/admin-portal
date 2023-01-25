export const SIDE_BAR_TYPE = 'SIDE_BAR_TYPE';

export const sideBarAction = (sideBarIsActive) => ({
  type: SIDE_BAR_TYPE,
  payload: sideBarIsActive,
});