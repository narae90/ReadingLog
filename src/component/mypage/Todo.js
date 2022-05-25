import React,{ useReducer, useState } from 'react';
import Content from './Content';
import SideBar from './Sidebar';


const reducer = (state, action) => {
    switch(action.type){
        case 'add-content':
            const todo = action.payload.todo;
            const newContent ={
                id: Date.now(),
                todo,
                isHere: false,
            };
            return {
                count : state.count + 1,
                contents: [...state.contents, newContent],
            };
        case 'delete-content':
            return {
                count: state.count -1,
                contents: state.contents.filter(
                    (content) => content.id !== action.payload.id
                ),
            };
        case 'mark-content':
            return {
                count: state.count,
                contents: state.contents.map((content) =>{
                    if (content.id === action.payload.id){
                        return{ ...content, isHere: !content.isHere};
                    }
                    return content;
                }),
            };
        default:
            return state;
    }
};

const initialState ={
	count: 0,
	contents: [],
};

function Todo(){
	const [todo, setTodo] = useState('');
	const [contentInfo, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
            <SideBar />
			<h1>To Do List</h1>            
			<p>To Do 갯수 : {contentInfo.count}</p>
			<input
				type="text"
				placeholder="할일을 적어주세요"
				value={todo}
				onChange={ (e) => setTodo(e.target.value)}
			/>
			<button onClick={()=>{
                dispatch({type: 'add-content', payload: {todo}})
            }}>추가</button>
			{contentInfo.contents.map(content =>{
				return (
                    <Content 
                        key={content.id} 
                        todo={content.todo}
                        dispatch={dispatch}
                        id={content.id}
                        isHere={content.isHere}
                    />)
		})}
		</div>


	);
}

export default Todo;