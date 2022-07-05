import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-scroll';
export default function ArrowDown() {
  return (
    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
      <BsChevronDown class="cursor-pointer text-center animate-bounce w-6 h-6 m-auto mt-16" />
    </Link>
  );
}
