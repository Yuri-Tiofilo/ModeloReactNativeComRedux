import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as TodoActions from './store/actions/todos'
const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
    {todos.map(todo => (<Text onPress={() => markAsCompleted(todo.id)} key={todo.id} style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Text>))}
    <Button
      title={'Adionar todo'}
      onPress={addTodo}

    />
  </View>
)
const mapStateToProps = state => ({
  todos: state,
})
const mapDispatchToProps = dispatch => (
  bindActionCreators(TodoActions, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

