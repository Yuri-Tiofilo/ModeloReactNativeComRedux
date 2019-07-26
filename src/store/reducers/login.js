const INITIAL_STATE = {
  username: null,
  error: false
};
//lembrand que este são nossos reducers
export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.tron.log('utilizando reducer');
      console.tron.log(action.payload);
      return { ...state, username: action.payload.username, error: false };
    case 'LOGIN_FAILURE':
      return { ...state, error: true };
    default:
      return state;
  }
}
