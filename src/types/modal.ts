export interface ModalProps {
  isOpen: Readonly<boolean>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
}