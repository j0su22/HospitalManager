import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from '../../data/data';

const DiseaseDetails = () => {
    const [disease, setDisease] = useState({ idDisease: 0, name: '', inheritance: 0, state: 0 });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Hacemos el fetch para buscar la enfermedad por la ID
    const fetchData = () => {
        // Obtenemos la ID requerida desde la URL
        const idDisease = searchParams.get('id');
        if (!idDisease) {
            // Esto para evitar ver esta vista sin tener el parametro 'id' en la URL o tenerlo como '?id='
            navigate('/diseases');
            return;
        }
        let url = new URL(`${API_URL}/disease/find`);
        url.search = new URLSearchParams({ id: idDisease });
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(res => setDisease(res))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }

    // Ejecutamos la funcion para buscar datos
    useEffect(() => {
        fetchData();
        return;
    });

    const yesOrNo = (bool) => bool ? 'Si' : 'No';

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if (error.length > 0) {
        return <p>{error}</p>
    }

    // Esta es la vista que retorna si no hay ningún problema
    return (
        <div>
            <h2>#{disease.idDisease} • {disease.name}</h2>
            <hr />
            <p>¿Es hereditaria?: {yesOrNo(disease.inheritance)}</p>
            <p>¿Esta activa?: {yesOrNo(disease.state)}</p>
        </div>
    )
}

export default DiseaseDetails;