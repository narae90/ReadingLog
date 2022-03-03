import data from './data.json';


function Log(){
    return(
        <div>
            <h2>Title</h2>
            <table>
                <tbody>
                    {data.map(data =>(
                        <tr key={data.log.id}>
                            <td>{data.log.title}</td>
                            <td>{data.log.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Log;