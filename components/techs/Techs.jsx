import Image from "next/image";
import { logos } from "../../utils/logoTechs";

const Techs = () => {
  return (
    <div className="flex flex-wrap justify-center pb-32">
      {logos.map((item, index) => {
        return (
          <Image
            key={index}
            src={item}
            height="98"
            width="98"
            alt="logo"
            className="m-2 p-2 shadow-xl hover:animate-bounce bg-marine-400"
          />
        );
      })}
    </div>
  );
};

export default Techs;
