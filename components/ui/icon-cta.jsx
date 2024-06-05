import Link from "next/link";
import React from "react";

function IconCTA(props) {
  const { title, desc, icon, url, label } = props;

  return (
    <div className="bg-primaryLight flex flex-col items-center p-2 shadow-2xl shadow-black">
      <div className="flex bg-primaryAccent h-20 w-20 rounded-full mt-10 items-center justify-center">
        <i
          className={`text-primaryLight fa fa-2xl ${icon}`}
          aria-hidden="true"
        />
      </div>

      <div className="text-primaryDark text-center text-2xl leading-10 whitespace-nowrap mt-8">
        {title || "[title]"}
      </div>
      <div className="text-neutral-600 mx-auto text-center h-20 text-base leading-6 self-stretch w-60 mt-5">
        {desc ||
          "[desc field lorem ipsum dolor sit amet, consectetur adipiscing elit. ]"}
      </div>
      <button className="text-primaryLight text-center text-base leading-6 capitalize whitespace-nowrap rounded bg-primaryAccent hover:bg-secondaryDark hover:text-primaryDark self-stretch items-center w-64 mt-2 mb-14 px-6 py-4 max-md:mb-10">
        {label || "[label]"}
      </button>
    </div>
  );
}

export default IconCTA;
