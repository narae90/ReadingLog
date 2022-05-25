import React from 'react';

const Content = ({todo, dispatch, id, isHere}) => {
	return (
		<div>
			<span
                style={{
                    textDecoration: isHere ? 'line-through' : 'none',
                    color: isHere ? 'gray' : 'black',
                }}
                onClick={()=>{
                    dispatch({ type: 'mark-content', payload: { id }});
                }}
            >{todo}</span>
			<button onClick={()=>{
                dispatch({ type: 'delete-content', payload: { id } });
            }}>삭제</button>
		</div>
	);
};

export default Content;