import { Fragment } from 'react'
import Table from 'react-bootstrap/Table'
const Table = (props) => {
    const { diseases, columns } = props
    // const diseases = [
    //     {
    //         id: 1,
    //         name: 'Disease 1',
    //         cases: 10,
    //         incidence_city: 'City 1',
    //     }
    // ]
    return (
        <Table responsive>
            <thead>
                <tr>
                    {columns && columns.map(column => (
                        <Fragment key={column.id}>
                            <td>{column.name}</td>
                        </Fragment>
                    ))}
                </tr>
            </thead>
            <tbody>
                {diseases && diseases.map(disease => (
                    <tr key={disease.id}>
                        <td>{disease.name}</td>
                        <td>{disease.cases}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}