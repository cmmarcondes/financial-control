export interface TableProps {
  title?: string;
  width?: TableWidthTypes;
  color?: ColorsType;
  textAlign?: TableTextAlignTypes;
}

type ColorsType = 'green' | 'red' | 'black';

type TableWidthTypes =
  | '10%'
  | '20%'
  | '30%'
  | '40%'
  | '50%'
  | '60%'
  | '70%'
  | '80%'
  | '90%'
  | '100%';

type TableTextAlignTypes = 'left' | 'right' | 'center';
