import React from 'react';
import SectionTitle from './SectionTitle';

export default function About(props) {
  return (
    <div class="w-[60%] h-auto mx-auto my-32 flex flex-col ">
      <div
        class="text-base flex min-h-[80vh] font-lato text-center font-light leading-[32px] font-italic bg-contain bg-no-repeat bg-center bg-fixed mx-auto"
        style={{ backgroundImage: "url('about-1.jpeg')" }}
      >
        <div class="bg-white text-black p-8 w-[60%] m-auto flex flex-col">
          <div class="border-t-2 border-teal-800 w-[10%] m-auto"></div>
          <SectionTitle text="O nas" />
          Domek położony jest nad jeziorem Omulew na terenie puszczy Napiwodzko-Ramuckiej, na działce o powierzchni 9
          ar w cichej okolicy (kolonia). Położony jest na skraju miejscowości Jabłonka, której historia sięga XV wieku. 
          W odległości 50 metrów znajduje się jezioro oraz pomost. Do lasu jest około
          500 m. Do plaży wiejskiej około 1200 m. W pobliżu znajduje się sklep, profesjonalna wypożyczalnia sprzętu
          wodnego, rowerowego z GPS (Natać Mała 5km)
        </div>
      </div>
    </div>
  );
}
