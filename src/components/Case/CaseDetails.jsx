import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from '../../data/data';

const CaseDetails = () => {
    const [cases, setCases] = useState({
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
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Hacemos el fetch para buscar la enfermedad por la ID
    const fetchData = () => {
        // Obtenemos la ID requerida desde la URL
        const idCase = searchParams.get('id');
        if (!idCase) {
            // Esto para evitar ver esta vista sin tener el parametro 'id' en la URL o tenerlo como '?id='
            navigate('/cases');
            return;
        }
        let url = new URL(`${API_URL}/case/find`);
        url.search = new URLSearchParams({ id: idCase });
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(res => setCases(res))
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
            <h2>#{cases.idCase} • {cases.idAccount.username}</h2>
            <hr />
            <p><b>Enfermedad:</b> {cases.idDisease.name}</p>
            <p><b>Ciudad del caso:</b> {cases.idHospital.idCity.name}</p>
            <p><b>Registrado en el hospital:</b> {cases.idHospital.name} - {cases.idHospital.street}</p>
            <p><Link to={`/diseases/details?id=${cases.idDisease.idDisease}`}>Ver detalles de la enfermedad</Link></p>
            <p><Link to={`/hospitals/details?id=${cases.idHospital.idHospital}`}>Ver detalles del hospital</Link></p>
        </div>
    )
}

export default CaseDetails;