import React, { useState } from 'react';
export default function GalleryModal({ index, handleOnNext }) {
  // eslint-disable-next-line no-unused-vars
  const [modal, setModal] = useState(index);
  const galleries = [
    {
      title: 'Plażowanie',
      image: 'bed.jpg'
    },
    {
      title: 'Trasy turystyczne',
      image: 'bathroom.jpg'
    },
    {
      title: 'Trasy rowerowe',
      image: 'domek.jpg'
    },
    {
      title: 'Sporty wodne',
      image: 'boat.jpg'
    },
    {
      title: 'Sporty wodne',
      image: 'balcony.jpg'
    },
    {
      title: 'Sporty wodne',
      image: 'living.jpg'
    }
  ];
  return (
    <>
      <div class="flex flex-col w-[80%] md:w-[90%] m-auto h-full relative">
        <button
          type="button"
          class="absolute top-[-3%] z-5 right-[-1%] bg-white rounded-full btn-close box-content bg-[length:30%] w-3 h-3 p-1 text-white border-none opacity-100 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-95 hover:no-underline"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => setModal(NaN)}
        ></button>
        <div class="flex flex-row h-[90%] gap-16">
          <div class="flex flex-col w-full m-auto border-4 border-white" data-interval="false">
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
