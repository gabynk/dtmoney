import { Container } from './styles';

export function Transactions() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento web</td>
                        <td className="deposit">R$2.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td className="withdraw">- R$200</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}