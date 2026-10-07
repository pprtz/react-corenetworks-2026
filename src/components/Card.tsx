export default function Card({titulo, descripcion}: {titulo: string, descripcion: string}) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    );
}