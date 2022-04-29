import Swal from 'sweetalert2'

const initialState = {
    favorites: [],
    result: [],
  }
  
const rootReducer=(state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITES':
         
        Swal.fire(action.post.title + " agregado a favoritos")
          
        return {
          ...state,
          favorites: [...state.favorites, action.post]
        }
      case 'ADD_RESULT':
        return {
          ...state,
          result: action.post,
          
        }
      case 'REMOVE_FAVORTIES':
        return {
          ...state,
          favorites: state.favorites.filter(x => x.id !== action.post.id)
        }
    case 'REMOVE_RESULT':
        return {
          ...state,
          result: [],
        }
      default:
        return {...state}
    }
  }
export default rootReducer