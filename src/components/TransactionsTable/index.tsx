import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Títuto</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>05/05/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdram">R$ 1.000,00</td>
                        <td>Casa</td>
                        <td>10/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}