import React from "react";
import Image from "next/image";
import imgAlfonso from "../../public/alfonso.jpg";

const MyCard = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:max-w-xl bg-marine shadow-2xl">
        <div className="p-6 flex flex-col justify-start">
          <p className="text-zinc-200 text-base mb-4">
            Estudiante del Instituto Tecnológico de Nuevo Laredo. Curso la
            carrera de ingeniería en sistemas computacionales con especialidad
            en desarrollo avanzado de aplicaciones, he trabajado en proyectos
            personales y académicos.
          </p>
          <div className="flex flex-wrap justify-end items-end">
            <h5 className="text-marine-400 text-lg font-medium mr-4 pb-2">
              Jesús Alfonso
            </h5>
            <Image
              src={imgAlfonso}
              height="44"
              width="44"
              alt="avatar"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
