import { Link } from "react-router-dom";
import dummy from "../DB/BoardData.json";




function DayList() {

    return (

        <ul className="day-list">
            {dummy.boards.map(board =>(
                <li key={board.id}>
                    <Link to={`/board/${board.id}`}> {board.title} </Link>
                </li>
            ))}
        </ul>

    );
}





export default DayList;