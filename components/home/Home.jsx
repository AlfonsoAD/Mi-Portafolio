import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Start = () => {
  const el = useRef(null);

  useEffect(() => {
    new Typed(el.current, {
      strings: ["soy Alfonso"],
      typeSpeed: 500,
      startDelay: 400,
      backSpeed: 500,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1700,
      loop: true,
      loopCount: true,
      showCursor: false,
    });
  }, []);

  return (
    <div className="mt-38 flex flex-wrap justify-center items-center">
      <h1 className="m-auto text-7xl text-zinc-100 font-bold">
        Hola bienvenido <span ref={el} />
      </h1>
    </div>
  );
};

export default Start;
