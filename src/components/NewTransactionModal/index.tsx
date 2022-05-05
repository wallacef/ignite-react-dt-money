import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import {
    Container,
    RadioBox,
    TransactionTypeContainer
} from "./styles";
import closeImg from 'assets/close.svg'
import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import { useTransactions } from "hooks/useTransactions";

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction({
            title,
            category,
            amount,
            type,
        });

        setTitle('');
        setCategory('');
        setType('deposit');
        setAmount(0);
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                className='react-modal-close'
                type="button"
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    type='number'
                    placeholder="Valor"
                    onChange={event => setAmount(Number(event.target.value))}
                    value={amount}
                />
                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                    placeholder="Categoria"
                    onChange={event => setCategory(event.target.value)}
                    value={category}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}