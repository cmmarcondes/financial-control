import { DescriptionTypes } from '../../components/Table/Row/config';

export interface BudgetData {
  product: string;
  value: string;
  description: DescriptionTypes;
  [key: string]: string | DescriptionTypes;
}
