export interface TableProps {
  title?: string;
  width?: TableWidthTypes;
  color?: ColorsType;
  textAlign?: TableTextAlignTypes;
  head?: boolean;
  body?: boolean;
  footer?: boolean;
}

type ColorsType = 'green' | 'red' | 'black';

type TableWidthTypes =
  | '10vw'
  | '20vw'
  | '30vw'
  | '40vw'
  | '50vw'
  | '60vw'
  | '70vw'
  | '80vw'
  | '90vw'
  | '100vw';

type TableTextAlignTypes = 'left' | 'right' | 'center';
