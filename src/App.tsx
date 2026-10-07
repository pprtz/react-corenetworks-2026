import Titulo from './components/Titulo'
import Card from './components/Card'

export default function App() {
    return (
        <main style={{ padding: '24' }}>
            <Titulo />
            <h2>Ejemplo de componentes</h2>
            <Card titulo="Card 1" descripcion="Esta es la descripción de la Card 1" />
            <Card titulo="Card 2" descripcion="Esta es la descripción de la Card 2" />
            <Card titulo="Card 3" descripcion="Esta es la descripción de la Card 3" />
        </main>
    );
}