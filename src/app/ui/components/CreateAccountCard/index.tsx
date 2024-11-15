import React from 'react';
import { PiPlusLight } from "react-icons/pi";
import Body from '../Body';
import Title from '../Title';
import './style.scss';

interface Account {
    accountNumber: number;
    amount: number;
}

interface CreateAccountCardProps {
    accounts?: Account[];
}

const CreateAccountCard: React.FC<CreateAccountCardProps> = ({ accounts = [] }) => {
    return (
        <div className='create-account-card'>
            {accounts.map((account) => (
                <div key={account.accountNumber} className='create-account-card_content'>
                    <Title as="h4" className='create-account-card_title'>
                        <b className='create-account-card_label'>N° de cuenta:</b> {account.accountNumber}
                    </Title>
                    <Title as="h5" className='create-account-card_title'>
                        <b className='create-account-card_label'>Saldo disponible:</b> $U{account.amount}
                    </Title>
                </div>
            ))}

            <div className='create-account-card_new-content'>
                <PiPlusLight size={30} color='#d1d1d1' />
                <Title as="h4" className='create-account-card_empty-title'>Crear una nueva cuenta</Title>
                <Body className='create-account-card_empty-description'>
                    Puedes tener varias cuentas para organizar tus gastos y ahorrar dinero.
                </Body>
            </div>
        </div>
    );
};

export default CreateAccountCard;
