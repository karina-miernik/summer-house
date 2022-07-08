import React, { useState } from 'react';
import AreaModalBody from './AreaModalBody';
import SectionTitle from './SectionTitle';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
export default function Area() {
  const [modal, setModal] = useState(NaN);
  const activities = [
    {
      text: 'Zbiornik posiada 5 wysp, których największa ma powierzchnię około 4ha. Dno jest muliste, miejscami piaszczyste i kamienisto-piaszczyste. W płytkich partiach wody zarośnięte roślinnością. Jezioro jest dobrze dostępne praktycznie ze wszystkich stron. Bardzo dobry dostęp w okolicznych miejscowościach: Wikno, Jabłonka, Natać Wielka, Natać Mała. Brzegi są wysokie, miejscami niskie i płaskie. Najbliższe otoczenie to lasy iglaste i zabudowania okolicznych miejscowości. Bezpośrednio nad brzegami dominuje olcha z niewielkim udziałem brzozy i wierzby. Wokół brzegów, pas roślinności szuwarowej o szerokości od kilku do kilkunastu metrów. Dominuje trzcina oraz pałka wąskolistna i szerokolistna. Występuje tu leszcz, krąp, ukleja oraz inne gatunki ryb w mniejszym stopniu.',
      title: 'Plażowanie',
      image:
        'beach.jpeg'
    },
    {
      text: "Szlak Wokół Omulewa - poprowadzi nas dookoła jeziora Omulew, częsciowo po drogach gruntowych, częsciowo po drogach asfaltowych lub utwardzonych. Przebiega przez cztery wsie turystyczne, dzięki czemu jest łatwo dostępny. Szlak jest dwustronny i zaprojektowany w formie pętli, dlatego też można z niego korzystać z każdego punktu i w dowolną stronę a po przebyciu całej trasy doprowadzi do miejsca startu z drugiej strony. Na trasie warto zwrócić uwagę przede wszystkim na piękne widoki i niezanieczyszczone srodowisko przyrodnicze. Po drodze szlak zbliża się do brzegu jeziora Omulew oraz Trzcinowego, można tam znaleźć miejsca, gdzie da się wygodnie zatrzymać na odpoczynek lub nawet kąpiel w jeziorze. Na trasie szlaku są bardzo niewielkie przewyższenia, dochodzące do zaledwie kilku metrów. Szlak należy zaliczyć do tras krótkich, nadający się na krótkie wycieczki zarówno rekreacyjne, rodzinne jak i treningowe. Jest on skomunikowany ze scieżką przyrodniczą w rezerwacie Koniuszanka II, szlakiem pieszym żółtym w okolicy Wikna oraz szlakiem spacerowym w okolicy Jabłonki, wszystkie te trzy szlaki dostępne są dla rowerów. Szlak pieszy - żółty prowadzi przez wies Wikno oraz obszary lesne. Na trasie szlaku znajduje się restauracja 'Zajazd Mysliwski' oraz Pensjonat Gawra, po drodze można odwiedzić scieżkę dydaktyczną i odpocząć nad lesnym jeziorkiem Zdręczno. Większa częsć szlaku prowadzi lesnymi drogami. Szlak należy zaliczyć do tras krótkich, jest to szlak lesny nadający się na krótkie wycieczki zarówno rekreacyjne jak i treningowe, jednakże spacer rodzinny można zaplanować na szlaku nawet na cały dzień. Szlak rozpoczyna się i kończy przy placu zabaw i przystanku autobusowym w Wiknie.",
      title: 'Trasy turystyczne',
      image:
        'forest.jpeg'
    },
    {
      text: 'Puszcza Napiwodzko-Ramucka (1130 km2) to pozostałość dawnej Puszczy Galindzkiej. Obszar położony między Olsztynem, Szczytnem a Nidzicą to nieprzebyte lasy z licznym starodrzewem, ciekawe zjawiska przyrodnicze (sufozja, erozja wsteczna), rezerwaty przyrody, dziewicze rzeki i jeziora. Puszcza Napiwodzko-Ramucka to także rzadkie drapieżniki – wilki i rysie oraz liczne łasicowate. Ten potężny kompleks leśny w sierpniu roku 1914 był areną zmagań tzw. bitwy tannenberskiej. Piękna przyroda i wielka historia zaprasza do serca puszczy! Atrakcje na trasie: Rezerwat przyrody Koniuszanka II – ścieżka dydaktyczna Chroni malowniczy przełom rzeki Koniuszanka oraz lasy występujące na terenie kompleksu – w rezerwacie rośnie około 80 pomników przyrody, w tym przepiękne daglezje i Dąb Cesarza Wilhelma. Spacerując ścieżką zobaczymy i poznamy historię pomnikowych dębów, zjawisko sukcesji naturalnej, efekty pracy bobrów, obumarłe drzewo i cykl życia z nim związany oraz inne zjawiska przyrodnicze. Schrony bierne tzw. pozycji olsztyneckiej Rezerwat Koniuszanka I – chroni obszary ze zjawiskiem sufozji obserwowanym na strumieniu Koniuszanka, który zanika, by „wypłynąć” ponownie 2 km dalej ze źródeł wysiękowych. Szlak cieku podziemnego znaczą osuwiska, tzw. leje sufozyjne. Rzeka Omulew – prawy dopływ Narwi. Od jeziora Omulew do ujścia do Narwi rzeka jest oznakowanym szlakiem kajakowym.',
      title: 'Trasy rowerowe',
      image:
        'bike.jpeg'
    },
    {
      text: 'Dla miłośników sportów wodnych i wędkarstwa swoje uroki odkrywa jezioro Omulew, którego tajemnice opisała K.Siesicka w swojej książce dla młodzieży „Jezioro Osobliwości”. Warto opłynąć jego tajemnicze brzegi i wyspy, aby następnie rozpocząć kajakiem spływ rzeką Omulwią, która wpływa do Narwii tuż pod Ostrołęką czy też zapolować na dorodną rybkę: sandacza, szczupaka, okonia, lina czy choćby krasnopiórkę. Wędkarze bez problemu zaopatrzą się też w niezbędne akcesoria wędkarskie: robaki, spławiki, zanęty.',
      title: 'Sporty wodne',
      image:
        'sport.jpeg'
    }
  ];
  const handleBtnNext = () => {
    if (modal === 0) setModal(1);
    else if (modal === 1) setModal(2);
    else if (modal === 2) setModal(3);
    else if (modal === 3) setModal(0);
    else setModal(NaN);
  };
  const handleBtnPrev = () => {
    if (modal === 0) setModal(3);
    else if (modal === 1) setModal(0);
    else if (modal === 2) setModal(1);
    else if (modal === 3) setModal(2);
    else setModal(NaN);
  };
  return (
    <div class="w-[90%] min-h-[90vh] mx-auto my-28 flex flex-col">
      <SectionTitle text="Poznaj okolicę" />
      <div class="flex flex-col md:flex-row flex-wrap w-full justify-center items-center gap-1 mt-16">
        {activities.map((activity, index) => {
          return (
            <>
              <div
                type="button"
                class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                key={index}
              >
                <div
                  class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
                  style={{ backgroundPosition: '50%' }}
                >
                  <img class="max-w-[280px] md:max-w-lg h-full" src={activity.image} alt="activity" />
                  <div
                    onClick={(e) => setModal(index)}
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/30  hover:bg-black/60 transition duration-300 ease-in-out">
                    <div
                      id={`activity${index}`}
                      class="cursor-pointer group flex flex-col  justify-center items-c enter h-full first-letter"
                    >
                      <p class="relative text-white font-bold uppercase font-lato tracking-widest text-2xl md:text-[30px] text-center justify-center mb-0 flex">
                        {activity.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog relative w-auto pointer-events-none min-w-[100vw] m-0 min-h-[100vh]">
            <div class="modal-content min-h-[100vh] border-none shadow-lg relative flex flex-col h-full w-full pointer-events-auto bg-white bg-clip-padding  outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 ">
                <h5 class="text-xl font-medium leading-normal text-gray-800">

                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModal(NaN)}
                ></button>
              </div>
              <div class="modal-body relative p-4 flex flex-row justify-around flex-wrap w-full items-center">
                <div
                  class="text-[30px] fixed top-[50%] left-0 cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline transition duration-300 ease-in-out"
                  type="button"
                  onClick={handleBtnPrev}
                >
                  <BsChevronLeft />
                </div>
                <AreaModalBody index={modal} />
                <div
                  class="text-[30px] fixed top-[50%] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline right-0 transition duration-300 ease-in-out"
                  type="button"
                  onClick={handleBtnNext}
                >
                  <BsChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
