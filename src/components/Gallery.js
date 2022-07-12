import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import GalleryModal from './GalleryModal';
export default function Gallery() {
  const galleries = [
    { image: 'bed.jpg' },
    { image: 'bathroom.jpg' },
    { image: 'domek.jpg' },
    { image: 'boat.jpg' },
    { image: 'balcony.jpg' },
    { image: 'living.jpg' }
  ];
  const [modal, setModal] = useState(NaN);

  const handleBtnNext = () => {
    if (modal === 0) setModal(1);
    else if (modal === 1) setModal(2);
    else if (modal === 2) setModal(3);
    else if (modal === 3) setModal(4);
    else if (modal === 4) setModal(5);
    else if (modal === 5) setModal(0);
    else setModal(NaN);
  };
  const handleBtnPrev = () => {
    if (modal === 0) setModal(3);
    else if (modal === 1) setModal(0);
    else if (modal === 2) setModal(1);
    else if (modal === 3) setModal(4);
    else if (modal === 4) setModal(5);
    else if (modal === 5) setModal(0);
    else setModal(NaN);
  };

  return (
    <div class="w-[90%] lg:w-[60%] lg:min-h-[90vh] mx-auto  flex flex-col">
      <SectionTitle text="Galeria" />
      <section class="overflow-hidden text-gray-700 mt-16">
        <div class="container mx-auto">
          <div class="flex flex-wrap m-1 lg:-m-2">
            {galleries.map((gallery, index) => {
              return (
                <div
                  class="w-1/2 lg:w-1/3 p-1 lg:p-2 cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  onClick={(e) => setModal(index)}
                  key={index}
                >
                  <img
                    id={`gallery${index}`}
                    alt={`gallery${index}`}
                    class="block object-cover  object-center w-full h-full opacity-100 hover:opacity-80 transition duration-300 ease-in-out"
                    src={gallery.image}
                  />
                </div>
              );
            })}
            <div
              class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="staticBackdrop1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none min-w-[100vw] m-0">
                <div class="modal-content border-none shadow-lg relative flex flex-col h-full w-full pointer-events-auto bg-clip-padding  outline-none text-current">
                  <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 ">
                    {/* <button
                      type="button"
                      class="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setModal(NaN)}
                    ></button> */}
                  </div>
                  <div class="modal-body relative p-4 flex flex-row justify-around flex-wrap items-center m-auto w-[90%] ">
                    <div
                      class="text-[30px] fixed top-[50%] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline left-0 transition duration-300 ease-in-out"
                      type="button"
                      onClick={handleBtnPrev}
                    >
                      <BsChevronLeft color="white" />
                    </div>
                    <GalleryModal index={modal} />
                    <div
                      class="text-[30px] fixed top-[50%] cursor-pointer items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline hover:text-gray-600 focus:outline-none focus:no-underline right-0 transition duration-300 ease-in-out"
                      type="button"
                      onClick={handleBtnNext}
                    >
                      <BsChevronRight color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
