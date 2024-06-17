import React from 'react';
import SectionTitle from './SectionTitle';

export default function About(props) {
  return (
    <div className="w-full md:w-[90%] lg:w-[60%] h-auto mx-auto flex flex-col ">
      <div
        className="text-base flex items-center min-h-[80vh] font-lato text-center font-light leading-[32px] font-italic bg-cover bg-no-repeat bg-center bg-fixed mx-auto"
        style={{ backgroundImage: "url('forest-pond.png')" }}
      >
        <div className="bg-white m-auto h-fit text-black p-4 lg:p-8 w-[90%] lg:w-[60%] mx-auto mt-8 mb-8 lg:mt-0 md-mb-0 flex flex-col text-[14px] lg:text-base">
          <div className="border-t-2 border-c-third-2 w-[10%] mx-auto my-2"></div>
          <SectionTitle text="O nas" />
          Domek położony jest nad jeziorem Omulew na terenie puszczy Napiwodzko-Ramuckiej, na działce o powierzchni 9
          ar w cichej okolicy (kolonia). Położony jest na skraju miejscowości Jabłonka, której historia sięga XV wieku. 
          W odległości 50 metrów znajduje się jezioro oraz pomost. Do lasu jest około
          500 m. Do plaży wiejskiej około 1200 m. W pobliżu znajduje się sklep, restauracja oraz profesjonalna<a className="text-c-third-2 hover:text-c-secondary" target="_blank" href="https://turystyka-omulew.pl/" rel="noreferrer">wypożyczalnia sprzętu
          wodnego, rowerowego z GPS (Natać Mała 5km)</a>
        </div>
      </div>
    </div>
  );
}
