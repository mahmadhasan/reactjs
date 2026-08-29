export function DataGridDemo(props){
    return(
        <table className="table caption-top table-hover">
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                Object.keys(props.data[0]).map(key=> <th key={key}>{key}</th>)
                    }
                </tr>
            </thead>

        </table>
    )
}