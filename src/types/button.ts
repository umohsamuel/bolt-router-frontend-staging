export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: Readonly<string>;
  link?: Readonly<string>;
  icon?: Readonly<React.ReactNode>;
  target?: React.HTMLAttributeAnchorTarget;
  className?: Readonly<string>;
  isLoading?: Readonly<boolean>;
  loader?: Readonly<React.ReactNode>;
  isGradient?: Readonly<boolean>;
}
