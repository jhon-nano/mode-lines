import * as types from "../types";

export const loadingPagina = (message) => {
  return {
    type: types.LOADING_PAGINA,
    loading_pag_message: message,
  };
};
export const stopLoadingPagina = (message) => ({
  type: types.STOP_LOADING_PAGINA,
  loading_pag_message: message,
});

export const modeTheme = (mode) => ({
  type: types.STOP_LOADING_PAGINA,
  mode: mode,
});

export const valueTabs = (tabValue) => ({
  type: types.VALUE_TAB,
  tabValue: tabValue,
});

