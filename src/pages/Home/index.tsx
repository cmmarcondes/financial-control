import React from 'react';
import Table from 'components/Table';
import Header from 'components/Header';
import { Container } from './styles';
import { BudgetData } from './config';

const Home: React.FC = () => {
  const initialValues: BudgetData[] = [
    {
      product: 'Cervejinha',
      value: 'R$ 10,00',
      description: 'expense',
    },
    {
      product: 'Coxinhas',
      value: 'R$ 30,00',
      description: 'income',
    },
  ];
  return (
    <Container>
      <Header title="Budget" />
      <Table title="Balanço">
        <Table.Row>
          <Table.Head title="Proventos" color="green">
            1000
          </Table.Head>
          <Table.Head title="Gastos" color="red">
            400
          </Table.Head>
        </Table.Row>
      </Table>
      <Table title="Histórico">
        {initialValues.map(({ description, product, value }) => (
          <>
            <Table.Row description={description}>
              <Table.Data width="80%">{product}</Table.Data>
              <Table.Data width="10%" textAlign="right">
                {value}
              </Table.Data>
              <Table.Data width="10%" textAlign="right">
                <i className="fas fa-edit" />
                <i className="fas fa-trash-alt" />
              </Table.Data>
            </Table.Row>
          </>
        ))}
      </Table>
    </Container>
  );
};

export default Home;
