import { SCREEN } from './_actions';

const initState = {
  stars: null,
};

export const recall = (state = initialState, action) => {
  switch (action.type) {
    case SCREEN.SET_STAR:
      return {
        ...state,
        stars: action.payload.stars,
      };

    default: {

    }
  }
}