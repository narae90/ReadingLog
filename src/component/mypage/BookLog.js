import data from './data';


function Log(){
    return(
        <div>
            <h2>Title</h2>
            <table>
                <tbody>
                    {data.map(data =>(
                        <tr key={data.id}>
                            <td>{data.title}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Log;