import { Link } from 'react-router-dom';
import data from './data';
import './Grid.css';

function GridList(){
    return(
        <ul className="grid-container">
            {data.map(log =>(
                <li key={log.id}>
                    <Link to="/mypage/log">{log.title}</Link>
                </li>
            ))}
        </ul>
    );
}


export default GridList;