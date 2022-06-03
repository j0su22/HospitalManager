import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../data/data'
import Table from 'react-bootstrap/Table'

const Diseases = () => {
     const [diseases, setDiseases] = useState([{ idDisease: 0, name: '', inheritance: 0, state: 0 }]);
     const [error, setError] = useState('');
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
         fetch(`${API_URL}/disease/getAll`)
             .then((res) => {
                 if (res.ok) {
                     return res.json();
                 }
                 throw res;
             })
             .then(res => setDiseases(res))
             .catch(error => setError(error))
             .finally(() => setIsLoading(false));
     }, []);

     const yesOrNo = (bool) => bool ? 'Si' : 'No';

     if (isLoading) {
         return <p>Cargando...</p>
     }

     if (error.length > 0) {
         return <p>{error}</p>
     }

     const columns = [
         {name: 'id'},
         {name: 'name'},
         {name: 'inheritance'},
         {name: 'details'}
     ]

    return (
        <>
        <Table responsive>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>inheritance</td>
                    <td>details</td>
                </tr>
            </thead>
            <tbody>
                    {diseases.map((disease, i) =>
                        <tr>
                            <td>{disease.idDisease}</td>
                            <td>{disease.name}</td>
                            <td>{yesOrNo(disease.inheritance)}</td>
                            <td> <Link to={`/diseases/details?id=${disease.idDisease}`}>See more</Link></td>
                        </tr>
                    )} 
                
            </tbody>
        </Table>
        </>)
}

export default Diseases