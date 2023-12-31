import { ReactNode } from "react";

const ModalFooter = ({ children }) => {
  return (
    <footer className="flex items-center justify-end py-3 sm:px-6 sm:flex sm:flex-row-reverse  bg-gray-50 dark:bg-gray-700">
      {children}
    </footer>
  );
};

export default ModalFooter;
