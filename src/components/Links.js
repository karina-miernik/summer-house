import React from 'react'
import { Link } from 'react-scroll';

export default function Links  ({handleOnClose}) {
  return (
    <>
        <li class="cursor-pointer">
          <Link
            class=" transition ease-in-out duration-300"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick= {handleOnClose}
          >
            Strona Główna
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link
            class=" transition ease-in-out duration-300"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            onClick= {handleOnClose}
            duration={500}
          >
            O nas
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link
            class=" transition ease-in-out duration-300"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            onClick= {handleOnClose}
            duration={500}
          >
            Udogodnienia
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link
            class=" transition ease-in-out duration-300"
            activeClass="active"
            to="offer"
            spy={true}
            smooth={true}
            offset={0}
            onClick= {handleOnClose}
            duration={500}
          >
            Oferta
          </Link>
        </li>

        <li class="cursor-pointer">
          <Link
            class=" transition ease-in-out duration-300"
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-100}
            onClick= {handleOnClose}
            duration={500}
          >
            Galeria
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link
            class=" transition ease-in-out duration-300"
            activeClass="active"
            to="area"
            spy={true}
            smooth={true}
            offset={-100}
            onClick= {handleOnClose}
            duration={500}
          >
            Okolica
          </Link>
        </li>
        <li class="cursor-pointer">
          <Link
            class=" transition ease-in-out duration-300"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            onClick= {handleOnClose}
            duration={500}
          >
            Kontakt
          </Link>
        </li>
    </>
  )
}