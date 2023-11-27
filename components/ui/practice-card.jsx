import Image from "next/image";

function PracticeCard(props) {
  const { title, thumbnail } = props;
  return (
    <div className="flex md:w-80 items-stretch rounded-l-full rounded-r-full justify-between gap-4 px-2 border-4 border-solid border-gray-200">
      <Image
        src={thumbnail}
        alt="Hero Image"
        width={125}
        height={125}
        className="rounded-full"
        loading="lazy"
      />
      <div className="text-primaryAccent w-3/4 md:w-36 text-lg self-center mx-auto my-auto">
        {title}
      </div>
    </div>
  );
}

export default PracticeCard;
