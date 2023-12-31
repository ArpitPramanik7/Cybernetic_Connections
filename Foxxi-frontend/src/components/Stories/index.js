import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "../ui/Link";

export const StoryBar = () => {
  const [stories, setStories] = useState([]);

  const getAllStories = async () => {
    let tempStories;

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/story`,
      {
        headers: {
          cookies: document.cookie,
        },
      }
    );

    tempStories = response.data;

    // get stories by unique story.author.username
    tempStories.reduce((acc, story) => {
      if (!acc[story.author.username]) {
        acc[story.author.username] = story;
      }
      return acc;
    }, {});

    setStories(tempStories);
  };

  useEffect(() => {
    getAllStories();
  }, []);

  return stories && stories.length > 0 ? (
    <>
      <div className="bg-white/70 dark:bg-black backdrop-blur-md mx-4 sm:px-4 md:px-6 lg:px-10 xl:px-12 z-10 pb-2 truncate">
        <div className="mx-auto max-w-7xl relative flex justify-start py-1 xl:grid xl:grid-cols-10 overflow-x-scroll scrollbar-hide">
          <div className="flex-shrink-0">
            <Link href={`/stories/new`} className="no-underline">
              <div className="flex-shrink-0 mx-1 ">
                <HiOutlinePlus className="h-12 w-12 rounded-full ring-2 ring-red-500" />
              </div>
            </Link>
          </div>
          {stories &&
            stories.length > 0 &&
            stories.map((story, index) => {
              return (
                <div key={index} className="flex-shrink-0">
                  <Link
                    href={`/stories/${story.author.username}`}
                    className="no-underline"
                  >
                    <div className="flex-shrink-0 mx-1 ">
                      <img
                        className="h-12 w-12 rounded-full ring-2 ring-red-500"
                        src={story.author.image}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  ) : null;
};
