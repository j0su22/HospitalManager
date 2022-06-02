import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../../data/data';

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

    return (
        <>
            {diseases.map((disease, i) =>
                disease.state ?
                    <div key={i}>
                        <h2>#{disease.idDisease} • {disease.name}</h2>
                        <hr />
                        <p>¿Es hereditaria?: {yesOrNo(disease.inheritance)}</p>
                        <Link to={`/diseases/details?id=${disease.idDisease}`}>Ver detalles de la enfermedad</Link>
                    </div>
                    :
                    <div>Deshabilitado</div>
            )}
        </>)
}

export default Diseases;