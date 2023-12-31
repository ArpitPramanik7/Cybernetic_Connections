import clsx from "clsx";
import { forwardRef, ComponentProps } from "react";
import { FieldError } from "../Form/Form";

export const TextArea = forwardRef(function TextArea(
  { label, className, ...props },
  ref
) {
  return (
    <label>
      <div className="mb-1 font-medium dark:text-white ">{label}</div>
      <textarea
        className={clsx(
          "w-full transition duration-500 ease-in-out bg-gray-50 border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 rounded-md dark:text-gray-200 border h-28 focus:border-brand-600 focus:ring-blue-300 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20",
          className
        )}
        ref={ref}
        {...props}
      />

      <FieldError name={props.name} />
    </label>
  );
});
