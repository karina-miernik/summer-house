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
    {title: "2 Duże Pokoje", text: "odpowiednio 40m2 i 20m2. W jednym TV i wyjście na taras", icon: <BiBed size="40" className="mx-auto mb-4"/>},
    {title: "Kuchnia", text: "w pełni wyposażona (lodówka, płyta, czajnik, naczynia, radio)", icon: <GiKitchenScale size="40" className="mx-auto mb-4"/>},
    {title: "Łazienka i WC", text: "2 x WC + prysznic", icon: <BiBath size="40" className="mx-auto mb-4"/>},
    {title: " Pościel", text: "zapewniona", icon: <GiPillow size="40" className="mx-auto mb-4"/>},
    {title: "5 Osobowa Łódka", text: "wioślarska w cenie (możliwość doczepienia silnika elektrycznego we własnym zakresiem), 3 kapoki", icon: <GiBoatFishing size="40" className="mx-auto mb-4"/>},
    {title: "Duża Posesja", text: "ogrodzona, z parkingiem, ogniskiem i możliwością grillowania", icon: <GiPineTree size="40" className="mx-auto mb-4"/>},
    {title: "Dostęp Do Jeziora", text: "i pomostu w odległości 50 m", icon: <GiBoatHorizon size="40" className="mx-auto mb-4"/>},
    {title: "Psy", text: "akceptowane, koty nie", icon: <GiSittingDog size="40" className="mx-auto mb-4"/>},
  ]
  return (
    <div className="w-[90%] lg:w-[60%] lg:h-[90vh] mx-auto  flex flex-col break-words max-w-[1440px]">
      <SectionTitle text="Udogodnienia"/>
      <div className="flex flex-row flex-wrap items-start justify-center w-full h-auto gap-8 mt-16 mb-8 text-center lg:flex-row">
        {services.map((service, index) => {
          return (
            <div key={index} className="font-lato  flex flex-col  text-[20px] font-light w-[30%] lg:w-[25%] ">
            {service.icon}
            <span className="font-lato font-[500] tracking-wider leading-[35px] text-[18px] lg:text-[20px]">
              {service.title}
            </span>
            <p className="italic text-[16px] tracking-wide font-lato font-[300]">{service.text}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}