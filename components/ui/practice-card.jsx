import Image from "next/image";
import Link from "next/link";

function PracticeCard(props) {
  const { name, title, thumbnail } = props;
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
      <div className="w-3/4 md:w-36 text-lg self-center mx-auto my-auto">
        <Link className="text-primaryAccent hover:text-secondaryDark" href={`/practices/${name}`}>{title}</Link>
      </div>
    </div>
  );
}

export default PracticeCard;
