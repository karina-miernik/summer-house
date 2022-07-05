import React from 'react';
// modal for activitiess
export default function AreaModal({title, image, text, index}) {
  return (
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" 
data-bs-backdrop="static" data-bs-keyboard="false"  data-keyboard="false" data-backdrop="static"
id={`exampleModalCenter${index}`} tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog !max-w-[70%] h-[50%] modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding  outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 ">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
          {title}
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div class="modal-body relative p-4 flex flex-row justify-around flex-wrap w-full">
        <div class="flex flex-col w-[40%]">
        <img src={image} class="max-w-full max-h-[300px] m-auto h-auto" alt="..." />
        </div>
        <div class="flex flex-col w-[45%]">
          <div>{text}</div>
         
        </div>
      </div>

    </div>
  </div>
</div>
  );
}
