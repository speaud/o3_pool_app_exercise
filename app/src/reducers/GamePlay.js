import {
  FSA_META_REQUEST,
  FSA_META_RECEIVE,

	REQUEST_GAME_NEW,

REQUEST_GAME_PLAYER,
RECEIVE_GAME_PLAYER,


    REQUEST_GAMEPLAY_RESET,
    RECEIVE_GAMEPLAY_RESET  
} from '../constants/index.js'

const initialState = {
  opponents: [],
  active: false
}

const GamePlay = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GAME_NEW:
    case REQUEST_GAME_PLAYER:
		//case REQUEST_GAMEPLAY_RESET:
      return {
        ...state,
        active: action.payload || true,
        //opponents: [],
        meta: FSA_META_REQUEST
      }

    case RECEIVE_GAME_PLAYER:
      return {
        ...state,
        opponents: [...state.opponents, action.payload],
        meta: FSA_META_RECEIVE
      }

		case RECEIVE_GAMEPLAY_RESET:      
      return {
        ...state,
        opponents: [],
        meta: FSA_META_RECEIVE
      }

    default:
      return state
  }
}

export default GamePlay;