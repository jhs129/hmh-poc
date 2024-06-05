import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function CardCTA(props) {
  const { imageUrl, title, description, linkUrl } = props;
  const [showOverlay, setShowOverlay] = useState(true);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div
      id="card"
      className="flex flex-col rounded-lg border-2 border-gray-200 w-80 lg:w-60 relative mx-2 md:mx-0"
      onMouseEnter={toggleOverlay}
      onMouseLeave={toggleOverlay}
    >
      <Image
        src={
          imageUrl ||
          "https://cdn.builder.io/api/v1/image/assets/TEMP/5f857d682f0cdbbb5dc62f5100da7e4d6ba5681b66a172c6d91e91b0a3ab007f?apiKey=54c717f8636e46ba922cd8efa50c4277&"
        }
        alt="Card Image"
        className="rounded-lg w-full object-cover"
        width={300}
        height={300}
      />
      <div
        id="overlay"
        className={`absolute bottom-0 left-0 w-full p-4 h-20 rounded-lg backdrop-blur-[7.5px] bg-neutral-800 bg-opacity-40 ${
          showOverlay ? "" : "hidden"
        }`}
      >
        <div className="text-xl text-primaryLight">{title}</div>
      </div>
      <div
        id="overlay-desc"
        className={`absolute bottom-0 left-0 w-full p-4 h-48 rounded-lg bg-primaryLight text-primaryDark ${
          showOverlay ? "hidden" : ""
        }`}
      >
        <Link href={linkUrl}>
        
          <div className="text-xl text-primaryDark">{title}</div>
          <div
            className="pt-2 text-primaryDark line-clamp-4"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default CardCTA;
