import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Card } from "../ui/Card";
import { GradientBar } from "../ui/GradientBar";
import { Heading } from "../ui/Heading";
import { CreatePost } from "./CreatePost";
import { CreateStory } from "./CreateStory";

export function Create({ currentUser }) {
  return (
    <Card className="max-w-3xl mx-auto my-20 overflow-hidden" rounded="lg">
      <GradientBar color="indigo" />
      <Card.Body className="mt-4" noPadding>
        <Heading className="px-3">Upload</Heading>
        <div className="sm:block">
          <Tab.Group>
            <Tab.List
              className="-mb-px flex border-b border-gray-200"
              aria-label="Tabs"
            >
              <Tab
                className={({ selected }) =>
                  clsx(
                    selected
                      ? "border-brand-500 text-brand-600"
                      : "border-transparent text-gray-500 hover:text-brand-700 hover:border-brand-700",
                    "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm flex-1"
                  )
                }
              >
                <p className="text-base font-medium">Post</p>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <CreatePost currentUser={currentUser} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Card.Body>
    </Card>
  );
}
export function CreateStoryLayout({ currentUser }) {
  return (
    <Card className="max-w-3xl mx-auto my-20 overflow-hidden" rounded="lg">
      <GradientBar color="indigo" />
      <Card.Body className="mt-4" noPadding>
        <Heading className="px-3">Upload</Heading>
        <div className="sm:block">
          <Tab.Group>
            <Tab.List
              className="-mb-px flex border-b border-gray-200"
              aria-label="Tabs"
            >
              <Tab
                className={({ selected }) =>
                  clsx(
                    selected
                      ? "border-brand-500 text-brand-600"
                      : "border-transparent text-gray-500 hover:text-brand-700 hover:border-brand-700",
                    "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm flex-1"
                  )
                }
              >
                <p className="text-base font-medium">Story</p>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <CreateStory currentUser={currentUser} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Card.Body>
    </Card>
  );
}
