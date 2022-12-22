import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ja from "../public/ja.png";
import MenuHamburger from "../components/MenuHamburger";
import ButtonClose from "../components/ButtonClose";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const clickMenu = (e) => {
    setNavbar(true);
    setNavbar(false);
  };

  return (
    <div>
      <nav className="w-full bg-marine fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-start md:flex md:px-8">
          <div>
            <div className="flex flex-nowrap justify-between p-4 md:block">
              <Link href="/">
                <Image src={ja} height="118" width="98" alt="ja" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-zinc-100 rounded-md outline-none focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <ButtonClose /> : <MenuHamburger />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pt-6 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar
                  ? "pt-8 md:p-0 block bg-marine-600"
                  : "hidden bg-transparent"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-4 text-3xl font-bold text-zinc-100 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-zinc-400  md:hover:text-zinc-400 md:hover:bg-transparent">
                  <Link href="#start" onClick={clickMenu}>
                    Inicio
                  </Link>
                </li>
                <li className="pb-4 text-3xl font-bold text-zinc-100 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-zinc-400  md:hover:text-zinc-400 md:hover:bg-transparent">
                  <Link href="#about" onClick={clickMenu}>
                    Yo
                  </Link>
                </li>
                <li className="pb-4 text-3xl font-bold text-zinc-100 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-zinc-400  md:hover:text-zinc-400 md:hover:bg-transparent">
                  <Link href="#projects" onClick={clickMenu}>
                    Proyectos
                  </Link>
                </li>
                <li className="pb-4 text-3xl font-bold text-zinc-100 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-zinc-400  md:hover:text-zinc-400 md:hover:bg-transparent">
                  <Link href="#techs" onClick={clickMenu}>
                    Tecnologías
                  </Link>
                </li>
                <li className="pb-4 text-3xl font-bold text-zinc-100 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-zinc-400  md:hover:text-zinc-400 md:hover:bg-transparent">
                  <Link href="#contact" onClick={clickMenu}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
