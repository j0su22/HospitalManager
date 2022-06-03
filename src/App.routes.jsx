import { useRoutes } from 'react-router-dom'

import routesCollections from './routes'

const AppRouter = () => {
    const element = useRoutes(routesCollections.appRoutes)

    return element
}

export default AppRouter