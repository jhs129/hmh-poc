import Link from "next/link";
import React from "react";

function IconCTA(props) {
  const { title, desc, icon, url, label } = props;

  return (
    <div className="bg-primaryLight border rounded-lg border-gray-100 flex flex-col items-center w-60 hover:shadow-2xl hover:bg-gradient-to-r from-blue-100 to-blue-200 via-50%">
      <div className="flex flex-col items-center py-8">
        <div className="flex bg-tertiaryDark h-20 w-20 rounded-full items-center justify-center">
          <i
            className={`text-primaryLight fa fa-2xl ${icon}`}
            aria-hidden="true"
          />
        </div>

        <div className="text-center text-lg font-bold leading-6 mt-6 w-40">
          {title || "[title]"}
        </div>
        <div
          className={`${
            desc ? "" : "hidden"
          } text-neutral-600 mx-auto text-center h-20 text-base leading-6 self-stretch w-60 mt-5`}
        >
          {desc}
        </div>
        {/* <div className={`${label ? "" : "hidden"}`}></div>
          <button className="text-primaryLight text-center text-base leading-6 capitalize whitespace-nowrap rounded bg-tertiaryDark hover:bg-secondaryDark hover:text-primaryDark self-stretch items-center my-4 px-6 py-4 max-md:mb-10">
            {label || "[label]"}
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default IconCTA;
