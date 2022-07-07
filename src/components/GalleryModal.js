import React from 'react';
export default function GalleryModal({ index, handleOnNext }) {
  const galleries = [
    {
      title: 'Plażowanie',
      image:
        'bed.jpg'
    },
    {
      title: 'Trasy turystyczne',
      image:
        'bathroom.jpg'
    },
    {
      title: 'Trasy rowerowe',
      image:
        'domek.jpg'
    },
    {
      title: 'Sporty wodne',
      image:
        'boat.jpg'
    },
    {
      title: 'Sporty wodne',
      image:
        'balcony.jpg'
    },
    {
      title: 'Sporty wodne',
      image:
        'living.jpg'
    }
  ];
  return (
    <>
     
        <div class="flex flex-col w-[90%] m-auto h-full">
          <div class="flex flex-row h-[90%] gap-16">
          <div class="flex flex-col w-full m-auto" data-interval="false">
            <div class="w-full overflow-hidden">
              {galleries.map((gallery, i) => {
                return (
                  <>
                    <div id={i} class={`carousel-item ${i === index ? 'active' : ''} relative float-left w-full`}>
                      <img src={gallery.image} class="block w-full max-h-[700px] object-contain" alt="..." />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          </div>
        </div>
    </>
  );
}
