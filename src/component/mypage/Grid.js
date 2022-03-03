import { Link } from 'react-router-dom';
import data from './data.json';
import './Grid.css';

function GridList(){
    return(
        <ul className="grid-container">
            {data.map(list =>(
                <li key={list.id}>
                    <Link to="/log">{list.title}</Link>
                </li>
            ))}
        </ul>
    );
}


export default GridList;