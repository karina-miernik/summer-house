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
  const services = [
    {title: "2 Duże Pokoje", text: "odpowiednio 40m2 i 20m2. W jednym TV i wyjście na taras", icon: <BiBed size="40" class="mx-auto mb-4"/>},
    {title: "Kuchnia", text: "w pełni wyposażona (lodówka, płyta, czajnik, naczynia, radio)", icon: <GiKitchenScale size="40" class="mx-auto mb-4"/>},
    {title: "Łazienka i WC", text: "łazienka z prysznicem", icon: <BiBath size="40" class="mx-auto mb-4"/>},
    {title: " Pościel", text: "zapewniona", icon: <GiPillow size="40" class="mx-auto mb-4"/>},
    {title: "5 Osobowa Łódka", text: "wioślarska w cenie", icon: <GiBoatFishing size="40" class="mx-auto mb-4"/>},
    {title: "Duża Posesja", text: "ogrodzona, z parkingiem, ogniskiem i możliwością grillowania", icon: <GiPineTree size="40" class="mx-auto mb-4"/>},
    {title: "Dostęp Do Jeziora", text: "i pomostu w odległości 50 m", icon: <GiBoatHorizon size="40" class="mx-auto mb-4"/>},
    {title: "Psy", text: "akceptowane, koty nie", icon: <GiSittingDog size="40" class="mx-auto mb-4"/>},
  ]
  return (
    <div class="w-[90%] md:w-[60%] md:h-[90vh] mx-auto my-26 flex flex-col break-words">
      <SectionTitle text="Udogodnienia"/>
      <div class="flex flex-row flex-wrap w-full h-auto gap-8 items-start text-center justify-center md:flex-row mt-16 mb-8">
        {services.map((service, index) => {
          return (
            <div key={index} class="font-lato  flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
            {service.icon}
            <span class="font-lato font-[500] tracking-wider leading-[35px] text-[18px] md:text-[20px]">
              {service.title}
            </span>
            <p class="italic text-[16px] tracking-wide font-lato font-[300]">{service.text}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}