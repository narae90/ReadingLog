import { useParams } from "react-router-dom";
import dummy from "../DB/BoardData.json";



function Day() {

    const {id} = useParams();
    const wordList = dummy.words.filter(word => word.id === Number(id));


    return (
        <div>
            <h2>Day {id}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr>
                            <td>글제목 {word.eng}</td>
                            <td>글내용 {word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}





export default Day;