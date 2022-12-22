import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, image, project, repo, logosTechs }) => {
  return (
    <div className=" flex justify-center max-w-sm rounded-xl overflow-hidden shadow-2xl m-1 bg-marine-400">
      <div classNameName="h-28 w-28 rounded-2xl m-3">
        <Image
          className="w-full m-3"
          src={image}
          height="98"
          width="98"
          alt="image"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <Link href={project}>
          <button
            type="button"
            className="text-gray-900 bg-zinc-100 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-zinc-100 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Visitar
          </button>
        </Link>
        <Link href={repo}>
          <button
            type="button"
            className="text-gray-900 bg-zinc-100 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-zinc-100 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Repositorio
          </button>
        </Link>
        <div className="flex flex-wrap justify-center">
          {logosTechs.map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                height="32"
                width="32"
                alt="logo"
                className="m-2"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
