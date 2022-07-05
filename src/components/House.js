import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function House() {
  const [hover, setHover] = useState('');

  return (
    <div class="w-[60%] min-h-[90vh] mx-auto my-26 flex flex-col">
      <SectionTitle text="Informacje" />
      <div class="flex flex-col md:flex-row flex-wrap w-full justify-center gap-1">
        <div
          id="button1"
          onMouseLeave={() => setHover('')}
          onMouseEnter={(e) => setHover(e.target.id)}
          class="
        h-full w-[21%] min-h-[50vh] bg-cover bg-no-repeat flex bg-fixed
        bg-[url('https://images.unsplash.com/photo-1590203886781-c98a3075399e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]"
        >
          <div
            class={`${
              hover === 'button1' ? 'hidden opacity-0' : 'flex opacity-100'
            } transition duration-300 ease-in-out text-white font-lato text-base text-center h-full m-auto items-center justify-center w-[80%]`}
          >
            Zniżki
          </div>
          <div
            class={`${
              hover === 'button1' ? 'flex opacity-100' : 'hidden opacity-0'
            } text-base transition duration-300 ease-in-out text-white font-lato text-center h-full m-auto items-center justify-center w-[80%]`}
          >
            zniżki za pobyt powyżej 6 dób. Polecamy zarezerwować z wyprzedzeniem, na następny rok - obowiązuje zniżka
            5%.
          </div>
        </div>
        <div
          id="button2"
          onMouseLeave={() => setHover('')}
          onMouseEnter={(e) => setHover(e.target.id)}
          class="
        h-full w-[21%] min-h-[50vh] bg-cover bg-no-repeat flex bg-fixed
        bg-[url('https://images.unsplash.com/photo-1590203886781-c98a3075399e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]"
        >
          <div
            class={`${
              hover === 'button2' ? 'hidden opacity-0' : 'flex opacity-100'
            } transition duration-300 ease-in-out text-white font-lato text-base text-center h-full m-auto items-center justify-center w-[80%]`}
          >
            Pokoje
          </div>
          <div
            class={`${
              hover === 'button2' ? 'flex opacity-100' : 'hidden opacity-0'
            } transition duration-300 ease-in-out text-white font-lato text-base text-center h-full m-auto flex items-center justify-center w-[80%]`}
          >
            Domek jest w pełni wyposażony. Pomieści wygodnie 5 osób w dwóch pokojach odpowiednio 40m2 i 20m2. Jeden
            pokój (duży) posiada wyjście na taras.
          </div>
        </div>
        <div
          id="button3"
          onMouseLeave={() => setHover('')}
          onMouseEnter={(e) => setHover(e.target.id)}
          class="
        h-full w-[21%] min-h-[50vh] bg-cover bg-no-repeat flex bg-fixed
        bg-[url('https://images.unsplash.com/photo-1590203886781-c98a3075399e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]"
        >
          <div
            class={`${
              hover === 'button3' ? 'hidden opacity-0' : 'flex opacity-100'
            } transition duration-300 ease-in-out text-white font-lato text-base text-center h-full m-auto items-center justify-center w-[80%]`}
          >
            Okolica
          </div>
          <div
            class={`${
              hover === 'button3' ? 'flex opacity-100' : 'hidden opacity-0'
            } transition duration-300 ease-in-out text-white font-lato text-base text-center h-full m-auto flex items-center justify-center w-[80%]`}
          >
            zniżki za pobyt powyżej 6 dób. Polecamy zarezerwować z wyprzedzeniem, na następny rok - obowiązuje zniżka
            5%.
          </div>
        </div>
        <div
          id="button4"
          onMouseLeave={() => setHover('')}
          onMouseEnter={(e) => setHover(e.target.id)}
          class="
        h-full w-[21%] min-h-[50vh] bg-cover bg-no-repeat flex bg-fixed
        bg-[url('https://images.unsplash.com/photo-1590203886781-c98a3075399e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]"
        >
          <div
            class={`${
              hover === 'button4' ? 'hidden opacity-0' : 'flex opacity-100'
            } transition duration-300 ease-in-out text-white font-lato text-base text-center h-full m-auto items-center justify-center w-[80%]`}
          >
            Okolica
          </div>

          <div
            class={`${
              hover === 'button4' ? 'flex opacity-100' : 'hidden opacity-0'
            } transition duration-300 ease-in-out text-white font-lato text-base text-center h-full m-auto flex items-center justify-center w-[80%]`}
          >
            zniżki za pobyt powyżej 6 dób. Polecamy zarezerwować z wyprzedzeniem, na następny rok - obowiązuje zniżka
            5%.
          </div>
        </div>
      </div>
    </div>
  );
}
