import React from 'react'

import Img1 from "../../../assets/images/1.jpg";
import Img2 from "../../../assets/images/2.jpg";
import Img3 from "../../../assets/images/3.jpg";
import Img4 from "../../../assets/images/4.jpg";

export default function Content() {
  return (
    <div>
      <div className="font-sans text-3xl font-bold p-5">
        Hola, GMO Solutions 👏
      </div>
      <div className="flex flex-row p-5">
        <div className="bg-[#d4f3e6] w-[22%] mr-[4%] rounded-2xl">
          <img src={Img4} alt="" className="mx-auto mt-[50px]" />
          <div className="text-2xl font-bold text-center mt-5">Empresa</div>
          <div className="text-center mt-5 mb-[30px]">Datos basicos</div>
        </div>
        <div className="bg-[#d5f6fa] w-[22%] mr-[4%] rounded-2xl">
          <img src={Img1} alt="" className="mx-auto mt-[50px]" />
          <div className="text-2xl font-bold text-center mt-5">Personal</div>
          <div className="text-center mt-5 mb-[30px]">Nomina de personal de la empresa</div>
        </div>
        <div className="bg-[#fff2d5] w-[22%] mr-[4%] rounded-2xl">
          <img src={Img2} alt="" className="mx-auto mt-[50px]" />
          <div className="text-2xl font-bold text-center mt-5">Vehiculos</div>
          <div className="text-center mt-5 mb-[30px]">Nomina de vehiculos de la empresa</div>
        </div>
        <div className="bg-[#ffe5dd] w-[22%] rounded-2xl">
          <img src={Img3} alt="" className="mx-auto mt-[50px]" />
          <div className="text-2xl font-bold text-center mt-5">Maquinaria</div>
          <div className="text-center mt-5 mb-[30px]">Nomina de maquinaria de la empresa</div>
        </div>
      </div>
    </div>
  )
}
