import AppRouter from './App.routes'
import './sass/main.scss';

const App = () => {
    return (
        <div data-testid="appFrame">
            <AppRouter />
        </div>
    )
}

export default App
