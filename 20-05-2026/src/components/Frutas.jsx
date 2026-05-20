export default function Frutas({ frutas }) {
    return (
        <ul>
            {frutas.map((fruta) => (
                <li key={fruta.id}>
                    <p>Nome: {fruta.nome}</p>
                    <p>Quantidade: {fruta.quantidade}</p>
                </li>
            ))}
        </ul>
    )
}