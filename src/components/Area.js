import React, { useState } from 'react';
import AreaModal from './AreaModal';
import SectionTitle from './SectionTitle';
export default function Area() {
  const [hover, setHover] = useState('');

  return (
    <div class="w-[90%] min-h-[90vh] mx-auto my-26 flex flex-col">
      <SectionTitle text="Poznaj okolicę" />
      <div class="flex flex-col md:flex-row flex-wrap w-full justify-center items-center gap-1">
        <div
          id="activity1"
          onMouseLeave={() => setHover('')}
          onMouseEnter={(e) => setHover(e.target.id)}
          class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
          style={{ backgroundPosition: '50%' }}
        >
          <img
            class="max-w-lg h-full"
            src="https://images.unsplash.com/photo-1600135931576-12b378c95f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="activity"
          />
         <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed hover:bg-black/60 bg-transparent">
            <div
              id="activity1"
              class="cursor-pointer group flex flex-col  justify-center items-c enter h-full first-letter"
              onMouseLeave={() => setHover('')}
              onMouseEnter={(e) => setHover(e.target.id)}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter1"
            >
              <AreaModal index="1"
                text="Zbiornik posiada 5 wysp, których największa ma powierzchnię około 4ha. Dno jest muliste, miejscami piaszczyste i kamienisto-piaszczyste. W płytkich partiach wody zarośnięte roślinnością. Jezioro jest dobrze dostępne praktycznie ze wszystkich stron. Bardzo dobry dostęp w okolicznych miejscowościach: Wikno, Jabłonka, Natać Wielka, Natać Mała. Brzegi są wysokie, miejscami niskie i płaskie. Najbliższe otoczenie to lasy iglaste i zabudowania okolicznych miejscowości. Bezpośrednio nad brzegami dominuje olcha z niewielkim udziałem brzozy i wierzby. Wokół brzegów, pas roślinności szuwarowej o szerokości od kilku do kilkunastu metrów. Dominuje trzcina oraz pałka wąskolistna i szerokolistna. Występuje tu leszcz, krąp, ukleja oraz inne gatunki ryb w mniejszym stopniu."
                title="Plażowanie"
                image="https://images.unsplash.com/photo-1600135931576-12b378c95f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <p class="relative text-white font-bold font-lato tracking-wides text-[30px] text-center justify-center mb-0 flex">
             Plażowanie
              </p>
              </div>
              </div>
        </div>
        <div
          id="activity2"
          onMouseLeave={() => setHover('')}
          onMouseEnter={(e) => setHover(e.target.id)}
          class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
          style={{ backgroundPosition: '50%' }}
        >
          <img
            src="https://images.unsplash.com/photo-1511849321901-49c2a745fbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            class="max-w-lg h-full"
            alt="activity"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed hover:bg-black/60 bg-transparent">
            <div
              id="activity2"
              class="cursor-pointer group flex flex-col  justify-center items-c enter h-full first-letter"
              onMouseLeave={() => setHover('')}
              onMouseEnter={(e) => setHover(e.target.id)}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter2"
            >
              <AreaModal index="2"
                text="Szlak Wokół Omulewa - poprowadzi nas dookoła jeziora Omulew, częsciowo po drogach gruntowych, częsciowo po drogach asfaltowych lub utwardzonych. Przebiega przez cztery wsie turystyczne, dzięki czemu jest łatwo dostępny. Szlak jest dwustronny i zaprojektowany w formie pętli, dlatego też można z niego korzystać z każdego punktu i w dowolną stronę a po przebyciu całej trasy doprowadzi do miejsca startu z drugiej strony.
                Na trasie warto zwrócić uwagę przede wszystkim na piękne widoki i niezanieczyszczone srodowisko przyrodnicze. Po drodze szlak zbliża się do brzegu jeziora Omulew oraz Trzcinowego, można tam znaleźć miejsca, gdzie da się wygodnie zatrzymać na odpoczynek lub nawet kąpiel w jeziorze. Na trasie szlaku są bardzo niewielkie przewyższenia, dochodzące do zaledwie kilku metrów. Szlak należy zaliczyć do tras krótkich, nadający się na krótkie wycieczki zarówno rekreacyjne, rodzinne jak i treningowe. Jest on skomunikowany ze scieżką przyrodniczą w rezerwacie Koniuszanka II, szlakiem pieszym żółtym w okolicy Wikna oraz szlakiem spacerowym w okolicy Jabłonki, wszystkie te trzy szlaki dostępne są dla rowerów.
                Szlak pieszy - żółty prowadzi przez wies Wikno oraz obszary lesne. Na trasie szlaku znajduje się restauracja 'Zajazd Mysliwski' oraz Pensjonat Gawra, po drodze można odwiedzić scieżkę dydaktyczną i odpocząć nad lesnym jeziorkiem Zdręczno. Większa częsć szlaku prowadzi lesnymi drogami. Szlak należy zaliczyć do tras krótkich, jest to szlak lesny nadający się na krótkie wycieczki zarówno rekreacyjne jak i treningowe, jednakże spacer rodzinny można zaplanować na szlaku nawet na cały dzień. Szlak rozpoczyna się i kończy przy placu zabaw i przystanku autobusowym w Wiknie."
                title="Trasy turystyczne"
                image="https://images.unsplash.com/photo-1511849321901-49c2a745fbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <p class="relative text-white font-bold font-lato tracking-wides text-[30px] text-center justify-center mb-0 flex">
              Trasy turystyczne
              </p>
              </div>
          </div>
        </div>
        <div
          onMouseLeave={() => setHover('')}
          onMouseEnter={(e) => setHover(e.target.id)}
          class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
          style={{ backgroundPosition: '50%' }}
        >
          <img
            src="https://images.unsplash.com/photo-1505158374250-786ae44de696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            class="max-w-lg h-full"
            alt="activity"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed hover:bg-black/60 bg-transparent">
            <div
              id="activity3"
              class="cursor-pointer group flex flex-col  justify-center items-c enter h-full first-letter"
              onMouseLeave={() => setHover('')}
              onMouseEnter={(e) => setHover(e.target.id)}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter3"
            >
              <AreaModal index="3"
                text="Puszcza Napiwodzko-Ramucka (1130 km2) to pozostałość dawnej Puszczy Galindzkiej. Obszar położony między Olsztynem, Szczytnem a Nidzicą to nieprzebyte lasy z licznym starodrzewem, ciekawe zjawiska przyrodnicze (sufozja, erozja wsteczna), rezerwaty przyrody, dziewicze rzeki i jeziora. Puszcza Napiwodzko-Ramucka to także rzadkie drapieżniki – wilki i rysie oraz liczne łasicowate. Ten potężny kompleks leśny w sierpniu roku 1914 był areną zmagań tzw. bitwy tannenberskiej. Piękna przyroda i wielka historia zaprasza do serca puszczy!
                Atrakcje na trasie:
                Rezerwat przyrody Koniuszanka II – ścieżka dydaktyczna
                Chroni malowniczy przełom rzeki Koniuszanka oraz lasy występujące na terenie kompleksu – w rezerwacie rośnie około 80 pomników przyrody, w tym przepiękne daglezje i Dąb Cesarza Wilhelma. Spacerując ścieżką zobaczymy i poznamy historię pomnikowych dębów, zjawisko sukcesji naturalnej, efekty pracy bobrów, obumarłe drzewo i cykl życia z nim związany oraz inne zjawiska przyrodnicze.
                Schrony bierne tzw. pozycji olsztyneckiej
                Rezerwat Koniuszanka I – chroni obszary ze zjawiskiem sufozji obserwowanym na strumieniu Koniuszanka, który zanika, by „wypłynąć” ponownie 2 km dalej ze źródeł wysiękowych. Szlak cieku podziemnego znaczą osuwiska, tzw. leje sufozyjne.
                Rzeka Omulew – prawy dopływ Narwi. Od jeziora Omulew do ujścia do Narwi rzeka jest oznakowanym szlakiem kajakowym."
                title="Trasy rowerowe"
                image="https://images.unsplash.com/photo-1505158374250-786ae44de696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <p class="relative text-white font-bold font-lato tracking-wides text-[30px] text-center justify-center mb-0 flex">
                Trasy rowerowe
              </p>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs" style={{ backgroundPosition: '50%' }}>
          <img
            src="https://images.unsplash.com/photo-1468221296755-1c53a9dbcd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            class="h-full max-w-lg"
            alt="activity"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed hover:bg-black/60 bg-transparent">
            <div
              id="activity4"
              class="cursor-pointer group flex flex-col  justify-center items-c enter h-full first-letter"
              onMouseLeave={() => setHover('')}
              onMouseEnter={(e) => setHover(e.target.id)}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter4"
            >
              <AreaModal
                index="4"
                text="Dla miłośników sportów wodnych i wędkarstwa swoje uroki odkrywa jezioro Omulew, którego tajemnice
                opisała K.Siesicka w swojej książce dla młodzieży „Jezioro Osobliwości”. Warto opłynąć jego tajemnicze
                brzegi i wyspy, aby następnie rozpocząć kajakiem spływ rzeką Omulwią, która wpływa do Narwii tuż pod
                Ostrołęką czy też zapolować na dorodną rybkę: sandacza, szczupaka, okonia, lina czy choćby
                krasnopiórkę. Wędkarze bez problemu zaopatrzą się też w niezbędne akcesoria wędkarskie: robaki,
                spławiki, zanęty."
                title="Sporty wodne"
                image="https://images.unsplash.com/photo-1468221296755-1c53a9dbcd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <p class="relative text-white font-bold font-lato tracking-wides text-[30px] text-center justify-center mb-0 flex">
                Sporty wodne
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
