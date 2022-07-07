import React from 'react';
export default function AreaModalBody({ index, handleOnNext }) {
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
  return (
    <>
        <div class="flex flex-col w-[90%] m-auto h-full">
        <div className="uppercase font-lato font-light tracking-widest flex flex-row w-full text-[42px] h-[10%] text-center justify-center mb-16">
            {index === 0
              ? activities[0].title
              : index === 1
              ? activities[1].title
              : index === 2
              ? activities[2].title
              : index === 3
              ? activities[3].title
              : ''}
          </div>
          <div class="flex flex-row h-[90%] gap-16">
          <div class="flex flex-col w-1/2 m-auto" data-interval="false">
            <div class="w-full overflow-hidden">
              {activities.map((activity, i) => {
                return (
                  <>
                    <div id={i} class={`carousel-item ${i === index ? 'active' : ''} relative float-left w-full`}>
                      <img src={activity.image} class="block w-full" alt="..." />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col w-1/2 m-auto text-lg font-lato font-light">
            {index === 0
              ? activities[0].text
              : index === 1
              ? activities[1].text
              : index === 2
              ? activities[2].text
              : index === 3
              ? activities[3].text
              : ''}
          </div>
          </div>
        </div>
    </>
  );
}
