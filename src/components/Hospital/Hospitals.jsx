import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../../data/data';

const Hospitals = () => {
    const [hospitals, setHospitals] = useState([{
        idHospital: 0,
        name: "",
        street: "",
        idCity: {
            idCity: 0,
            name: ""
        }
    }]);

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/hospital/getAll`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(res => setHospitals(res))
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
            {hospitals.map((hospital, i) =>
                <div key={i}>
                    <h2>#{hospital.idHospital} • {hospital.name}</h2>
                    <hr />
                    <p><b>Ubicado en:</b> {hospital.idCity.name} {hospital.street}</p>
                    <p><b>Calle:</b> {hospital.street}</p>
                    <Link to={`/hospitals/details?id=${hospital.idHospital}`}>Ver detalles del hospital</Link>
                </div>
            )}
        </>
    )
}

export default Hospitals;