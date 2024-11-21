export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  link?: string;
  icon?: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}