import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineX } from "react-icons/hi";
import { Heading } from "./Heading";
import { GradientBar } from "./GradientBar";
import * as React from "react";
export function Overlay({ open, setOpen, children, overlayTitle }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 " onClose={setOpen}>
        <div className="absolute inset-0 ">
          <Dialog.Overlay className="absolute inset-0  " />

          <div className="fixed inset-y-0 top-[4.5rem] right-0 pl-10 max-w-full flex  z-20">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md rounded overflow-hidden">
                <GradientBar color="indigo" />
                <div className="h-full  z-30 flex flex-col py-6 bg-white dark:bg-gray-800 shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title
                        as={Heading}
                        className="text-lg font-bold text-gray-900"
                        size="h4"
                      >
                        {overlayTitle}{" "}
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className=" rounded-md text-gray-400 hover:text-gray-500 "
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 ">{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
