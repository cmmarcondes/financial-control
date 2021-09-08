/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Table from 'components/Table';
import Header from 'components/Header';
import { Container } from './styles';
import { BudgetData } from './config';

const Home: React.FC = () => {
  const { control, getValues, handleSubmit } = useForm<BudgetData>({
    mode: 'onChange',
    defaultValues: {
      product: '',
      value: '',
      description: 'none',
    },
  });
  const { fields, append, remove } = useFieldArray<BudgetData>({
    control,
    name: 'budget',
  });
  const [total, setTotal] = useState<number[]>([0]);

  function onSubmit() {
    append({
      product: getValues().product,
      value: getValues().value,
      description: getValues().description,
    });
    handleGetTotal();
  }

  function onRemove(index: number) {
    remove(index);
    handleGetTotal();
  }

  function handleGetTotal() {
    const updatedTotal = [...total];
    updatedTotal.push(Number(getValues().value));
    setTotal(updatedTotal);
  }

  return (
    <Container>
      <Header title="Budget" />
      <Table title="Balanço" head>
        <Table.Row>
          <Table.Head title="Proventos" color="green" width="50vw">
            {total.reduce((previous, current) => previous + current)}
          </Table.Head>
          <Table.Head title="Gastos" color="red" width="50vw">
            400
          </Table.Head>
        </Table.Row>
      </Table>
      <Table title="Histórico" body>
        {fields.map((budget, index) => (
          <Table.Row key={budget.id} description={budget.description}>
            <Table.Data width="80vw">{budget.product}</Table.Data>
            <Table.Data width="10vw" textAlign="right">
              {budget.value}
            </Table.Data>
            <Table.Data width="10vw" textAlign="right">
              <i className="fas fa-edit" />
              <i className="fas fa-trash-alt" onClick={() => onRemove(index)} />
            </Table.Data>
          </Table.Row>
        ))}
      </Table>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="product"
          rules={{ required: true }}
          render={({ onChange, value, ref }) => (
            <input
              name="product"
              placeholder="product"
              ref={ref}
              onChange={(e) => onChange(e.target.value)}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="value"
          rules={{ required: true }}
          render={({ onChange, value, ref }) => (
            <input
              name="value"
              placeholder="value"
              ref={ref}
              onChange={(e) => onChange(e.target.value)}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          rules={{ required: true }}
          render={({ onChange, value, ref }) => (
            <input
              name="description"
              placeholder="description"
              ref={ref}
              onChange={(e) => onChange(e.target.value)}
              value={value}
            />
          )}
        />

        <button type="submit">adicionar</button>
      </form>
    </Container>
  );
};

export default Home;
