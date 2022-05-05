import { Container } from "./styles";

import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import totalImg from 'assets/total.svg'
import { useTransactions } from "hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, curr) => {
        if(curr.type === 'deposit') {
            acc.deposits += curr.amount;
            acc.total += curr.amount;
        } else {
            acc.withdraw += curr.amount;
            acc.total -= curr.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt='' />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt='' />
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt='' />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}