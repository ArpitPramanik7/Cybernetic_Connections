import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";
import { FieldError } from "src/components/ui/Form/Form";

export const Input = forwardRef(function Input(
  { label, type = "text", className, prefix, noLabel, ...props },
  ref
) {
  return (
    <label>
      {!noLabel && (
        <span className="block text-sm font-medium dark:text-white mb-2">
          {label}
        </span>
      )}

      <div className="flex">
        {prefix && (
          <span className="bg-gray-50 dark:bg-gray-700  shadow-sm border border-r-0 dark:border-gray-500 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 dark:text-gray-100 sm:text-sm">
            {prefix}
          </span>
        )}
        <input
          className={clsx(
            "w-full transition duration-500 ease-in-out border-2 border-gray-300 dark:border-gray-600 shadow-sm dark:bg-gray-800   focus:border-brand-600 focus:ring-blue-300 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20 rounded-md disabled:cursor-not-allowed bg-gray-50",
            className,
            prefix && "flex-grow block w-full min-w-0 rounded-none rounded-r-md"
          )}
          type={type}
          ref={ref}
          {...props}
        />
      </div>

      <FieldError name={props.name} />
    </label>
  );
});
