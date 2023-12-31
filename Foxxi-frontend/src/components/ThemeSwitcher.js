import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const currentTheme = theme;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <>
      <Switch.Group as="div" className="flex items-center justify-between">
        <Switch
          checked={theme === "dark"}
          onChange={toggleTheme}
          className={clsx(
            theme !== "dark" ? "bg-brand-500" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          )}
        >
          <span
            aria-hidden="true"
            className={clsx(
              theme !== "dark" ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
      </Switch.Group>
    </>
  );
}
