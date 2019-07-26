const INITIAL_STATE = [
  { id: 1, text: 'Fazer café', complete: false },
  { id: 2, text: 'Estudar React Native', completed: true },
  { id: 3, text: 'Algo a mais', complete: false }
]
//lembrand que este são nossos reducers
export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,
      { id: Math.random(), text: action.payload.text, completed: false }]
    case 'MARK_AS_COMPLETED':
      return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
    default:
      return state
  }

}

