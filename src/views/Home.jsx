import React from 'react'

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { API_URL } from '../data/data'
import Table from 'react-bootstrap/Table'

const Home = () => {
    const [city, setCity] = useState([{ idCity: 0, name: '' }]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`${API_URL}/city/getAll`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p>Cargando...</p>
    }


   return (
       <>
       <Table responsive>
           <thead>
               <tr>
                   <td>id</td>
                   <td>name</td>
               </tr>
           </thead>
           <tbody>
                   {city.map((city, i) =>
                       <tr>
                           <td>{city.idCity}</td>
                           <td>{city.idNamey}</td>
                       </tr>
                   )} 
               
           </tbody>
       </Table>
       </>)
}

export default Home

