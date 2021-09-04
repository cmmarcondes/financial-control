export interface RowProps {
  description?: DescriptionTypes;
}

export type DescriptionTypes = 'expense' | 'income' | 'none';

export const Description: { [key in DescriptionTypes]: string } = {
  expense: 'red',
  income: 'green',
  none: 'transparent',
};
