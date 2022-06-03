import React from 'react'

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido al registro de enfermedades</h1>
            <p>Da <Link to='/diseases'>click aquí</Link> para ver las enfermedades registradas en nuestra base de datos</p>
        </div>
    )
}

export default Home;