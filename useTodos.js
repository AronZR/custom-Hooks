import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        //en localstorage solo se pueden grabar strigns
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const handleNewTodo = (todo) => {
        const action ={
            type: '[TODO] add todo',
            payload: todo
        };


        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id,
        });
    };
    
    
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id,
        });
    };
    // mi solucion xd
    // const todosCount = () => {
    //     return todos.length
    // }
  
    // const todosPending = () => {
    //     return todos.filter(todo => !todo.done).length
    // }
    return {
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        //la solucion del profesor
        todosCount: todos.length,
        todosPending: todos.filter(todo => !todo.done).length,
        //
        todos
    };
};
