import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from '../../data/data';

const HospitalDetails = () => {
    const [hospital, setHospital] = useState({
        idHospital: 0,
        name: "",
        street: "",
        idCity: {
            idCity: 0,
            name: ""
        }
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Hacemos el fetch para buscar la enfermedad por la ID
    const fetchData = () => {
        // Obtenemos la ID requerida desde la URL
        const idHospital = searchParams.get('id');
        if (!idHospital) {
            // Esto para evitar ver esta vista sin tener el parametro 'id' en la URL o tenerlo como '?id='
            navigate('/hospitals');
            return;
        }
        let url = new URL(`${API_URL}/hospital/find`);
        url.search = new URLSearchParams({ id: idHospital });
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(res => setHospital(res))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }

    // Ejecutamos la funcion para buscar datos
    useEffect(() => {
        fetchData();
        return;
    });

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if (error.length > 0) {
        return <p>{error}</p>
    }

    // Esta es la vista que retorna si no hay ningún problema
    return (
        <div>
            <h2>#{hospital.idHospital} • {hospital.name}</h2>
            <hr />
            <p><b>Ubicado en:</b> {hospital.idCity.name} {hospital.street}</p>
            <p><b>Calle:</b> {hospital.street}</p>
        </div>
    )
}

export default HospitalDetails;