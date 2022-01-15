import * as ACTION_TYPES from './type';

const initialState = {
  status: {
    slogan: -1
  },
  slogan: "",
  error: null
};

export function user(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SITE_SETTING_SLOGAN_REQUESTED:
      return {
        ...state,
        status: {
          ...state.status,
          slogan: 0,
        },
        error: null,
      };

    case ACTION_TYPES.SITE_SETTING_SLOGAN_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          slogan: 1,
        },
        slogan: payload.data.slogan,
      };

    case ACTION_TYPES.SITE_SETTING_SLOGAN_FAILED:
      return {
        ...state,
        status: {
          ...state.status,
          slogan: 2,
        },
        error,
      };
    default:
      return state;
  }
}