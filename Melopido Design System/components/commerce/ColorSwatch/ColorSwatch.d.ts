export interface ColorSwatchProps {
  /** One of the 7 named colorways (Marfil, azulpavoreal, topo, granate, grisazulado, azulnavy, negro) or any CSS color */
  color: string;
  active?: boolean;
  disabled?: boolean;
  size?: number;
  onClick?: () => void;
}
