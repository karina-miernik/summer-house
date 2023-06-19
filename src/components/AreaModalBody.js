import React from 'react';
export default function AreaModalBody({ index }) {
  const activities = [
    {
      text: 'Jezioro posiada posiada 5 wysp, których największa ma powierzchnię około 4ha. Dno jest muliste, miejscami piaszczyste i kamienisto-piaszczyste. W płytkich partiach wody zarośnięte roślinnością. Jezioro jest dobrze dostępne praktycznie ze wszystkich stron. Bardzo dobry dostęp w okolicznych miejscowościach: Wikno, Jabłonka, Natać Wielka, Natać Mała. \n Najbliższe plaże: plaża w Jabłonce - ok.2 km, plaża w Nataci Małej - ok.5 km, plaża w Wiknie - ok.4 km',
      title: 'Plażowanie',
      image:
        'beach.jpg'
    },
    {
      text: "Szlak Wokół Omulewa prowadzi dookoła jeziora Omulew, częściowo po drogach gruntowych, częsciowo po drogach asfaltowych lub utwardzonych. Przebiega przez cztery wsie turystyczne, dzięki czemu jest łatwo dostępny. Szlak jest dwustronny i zaprojektowany w formie pętli, dlatego też można z niego korzystać z każdego punktu i w dowolną stronę a po przebyciu całej trasy doprowadzi do miejsca startu z drugiej strony. Na trasie warto zwrócić uwagę przede wszystkim na piękne widoki i niezanieczyszczone srodowisko przyrodnicze. Po drodze szlak zbliża się do brzegu jeziora Omulew oraz Trzcinowego, można tam znaleźć miejsca, gdzie da się wygodnie zatrzymać na odpoczynek lub nawet kąpiel w jeziorze. Na trasie szlaku są bardzo niewielkie przewyższenia, dochodzące do zaledwie kilku metrów. Szlak należy zaliczyć do tras krótkich, nadający się na krótkie wycieczki zarówno rekreacyjne, rodzinne jak i treningowe. Jest on skomunikowany ze scieżką przyrodniczą w rezerwacie Koniuszanka II, szlakiem pieszym żółtym w okolicy Wikna oraz szlakiem spacerowym w okolicy Jabłonki, wszystkie te trzy szlaki dostępne są dla rowerów.",
      title: 'Trasy turystyczne',
      image:
        'forest.jpg'
    },
    {
      text: 'Puszcza Napiwodzko-Ramucka (1130 km2) to pozostałość dawnej Puszczy Galindzkiej. Jest to idealne miejsce na wycieczki rowerowe. Warto wybrać się szlakiem rowerowym dookoła jeziora Omulew. W pobliżu znajdują się również takie atrakcje jak aleja 600-letnich dębów (Wikno - 4km), żeremia bobrów (Wikno - 4km), skansen i manufaktura i huta szkła (Olsztynek 33km), Garncarska Wioska (Kamionka - 26km k/Nidzicy), zamki w Nidzicy i Olsztynie',
      title: 'Trasy rowerowe',
      image:
        'bike.jpeg'
    },
    {
      text: 'Dla miłośników sportów wodnych i wędkarstwa swoje uroki odkrywa jezioro Omulew. Warto opłynąć jego tajemnicze brzegi i wyspy, aby następnie rozpocząć kajakiem spływ rzeką Omulwią. Jest to idelane miejsce dla wędkarzy. Spotkac tu można takie ryby jak okonie, a w płytszych rejonach jeziora płocie, ukleje, krąpie, liny, czy węgorze',
      title: 'Sporty wodne',
      image:
        'sport.jpeg'
    }
  ];
  return (
    <>
        <div class="flex flex-col w-[80%] lg:w-[90%] m-auto h-full">
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
          <div class="flex h-[90%] lg:flex-row gap-16 lg:gap-0 flex-wrap">
            <div class="flex flex-col w-full lg:w-[45%] m-auto" data-interval="false">
              <div class="w-full overflow-hidden">
                {activities.map((activity, i) => {
                  return (
                    <>
                      <div key={i} id={i} class={`carousel-item ${i === index ? 'active' : ''} relative float-left w-full`}>
                        <img src={activity.image} class="block w-full" alt="..." />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div 
            className="flex flex-col w-full lg:w-[45%] m-auto text-lg font-lato font-light">
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
