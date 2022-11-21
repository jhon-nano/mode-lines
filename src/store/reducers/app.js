import { LOADING_PAGINA, MODE_THEME, STOP_LOADING_PAGINA, VALUE_TAB } from "./../types";

const initialState = {
  loading_pag: false,
  mode: "light",
  tabValue: 0

};

export default function app(state = initialState, action) {
  switch (action.type) {
    case VALUE_TAB:
      return {
        ...state,
        tabValue: action.tabValue,
      };
    case LOADING_PAGINA:
      return {
        ...state,
        loading_pag: true,
        loading_pag_message: action.loading_pag_message,
      };
    case STOP_LOADING_PAGINA:
      return {
        ...state,
        loading_pag: false,
        loading_pag_message: "COMPLETADO",
      };
    case MODE_THEME:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
}
