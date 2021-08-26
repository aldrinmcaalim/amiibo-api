
export default function AmiiboTable(props:{name:string, gameSeries:string, amiiboSeries:string}) {

    return(

        <table>
            <thead><th>Name</th><th>Game Series</th><th>Amiibo Series</th></thead>
            <tbody>
                <tr><td>{props.name}</td><td>{props.gameSeries}</td><td>{props.amiiboSeries}</td></tr>
            </tbody>
        </table>
    )
}