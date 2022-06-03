import { Fragment } from 'react'
import { Table as BTable } from 'react-bootstrap'

const Table = (props) => {
    const { items, columns } = props

    return (
        <BTable responsive>
            <thead>
                <tr>
                    {columns && columns.map((column, index) => (
                        <Fragment key={index}>
                            <td>{column.name}</td>
                        </Fragment>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items && items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.inheritance}</td>
                    </tr>
                ))}
            </tbody>
        </BTable>
    )
}

export default Table