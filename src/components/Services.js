import React from 'react'
import SectionTitle from './SectionTitle'
import { BiBed } from 'react-icons/bi';
import { GiBoatFishing } from 'react-icons/gi';
import { GiPineTree } from 'react-icons/gi';
import { GiBoatHorizon } from 'react-icons/gi';
import { BiBath } from 'react-icons/bi';
import { GiKitchenScale } from 'react-icons/gi';
import {GiPillow} from 'react-icons/gi'
import {GiSittingDog} from 'react-icons/gi'
export default function Services  (props) {
  return (
    <div class="w-[90%] md:w-[60%] md:h-[90vh] mx-auto my-26 flex flex-col break-words">
      <SectionTitle text="Udogodnienia"/>
      <div class="flex flex-row flex-wrap w-full h-auto gap-8 items-start text-center justify-center md:flex-row mt-16 mb-8">
        <div class="font-lato  flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <BiBed size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">
            2 Duże Pokoje
          </span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">odpowiednio 40m2 i 20m2. W jednym TV i wyjście na taras </p>
        </div>
        <div class="font-lato flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <GiKitchenScale size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">
          Kuchnia
          </span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">w pełni wyposażona (lodówka, płyta, czajnik, naczynia, radio)</p>
        </div>
        <div class="font-lato flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <BiBath size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">
            Łazienka i WC
          </span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">łazienka z prysznicem</p>

        </div>
        <div class="font-lato flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <GiPillow size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">
           Pościel
          </span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">zapewniona</p>

        </div>
        <div class="font-lato flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <GiBoatFishing size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">
            5 Osobowa Łódka
          </span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">wioślarska w cenie</p>

        </div>
        <div class="font-lato flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <GiPineTree size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">Duża Posesja</span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">ogrodzona, z parkingiem, ogniskiem i możliwością grillowania</p>
          
        </div>
        <div class="font-lato flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <GiBoatHorizon size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">Dostęp Do Jeziora</span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">i pomostu w odległości 50 m</p>
        </div>
        <div class="font-lato flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
          <GiSittingDog size="40" class="mx-auto mb-4" />
          <span class="font-lato font-[500] tracking-wider leading-[35px]">Psy</span>
          <p class="italic text-[16px] tracking-wide font-lato font-[300]">akceptowane, koty nie</p>
        </div>
      </div>
    </div>
  )
}