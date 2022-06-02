import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../../data/data';

const Case = () => {
    const [cases, setCases] = useState([{
        idCase: 0,
        idDisease: {
            idDisease: 0,
            name: "",
            inheritance: 0,
            state: 0
        },
        idAccount: {
            idAccount: 0,
            username: "",
            password: "",
            isAdmin: 0,
            state: 0
        },
        idHospital: {
            idHospital: 0,
            name: "",
            street: "",
            idCity: {
                idCity: 0,
                name: ""
            }
        }
    }]);

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/case/getAll`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(res => setCases(res))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if (error.length > 0) {
        return <p>{error}</p>
    }

    return (
        <>
            {cases.map((c, i) =>
                <div key={i}>
                    <h2>#{c.idCase} • {c.idAccount.username} ({c.idDisease.name})</h2>
                    <hr />
                    <p><b>Registrado en el hospital:</b> {c.idHospital.name} ({c.idHospital.idCity.name})</p>
                    <Link to={`/cases/details?id=${c.idCase}`}>Ver detalles del caso</Link>
                </div>
            )}
        </>)
}

export default Case;