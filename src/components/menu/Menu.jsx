import React from 'react'
import './Menu.css';
import dd from "../../assets/images/menu/dd.svg";
import ddr from "../../assets/images/menu/ddr.svg";
import hydraulics from "../../assets/images/menu/hydraulics.svg";
import pvt from "../../assets/images/menu/pvt.svg";
import tally from "../../assets/images/menu/tally.svg";
import traces from "../../assets/images/menu/traces.svg";
import logo from "../../assets/images/menu/Logo.svg";

export const Menu = () => {
  const imagesList = [
    {
      name: "logo",
      src: logo,
      alt: "Logo",
    },
    {
      name: "TRACES",
      src: traces,
      alt: "TRACES",
    },
    {
      name: "DD",
      src: dd,
      alt: "DD",
    },
    {
      name: "PVT",
      src: pvt,
      alt: "PVT",
    },
    {
      name: "DDR",
      src: ddr,
      alt: "DDR",
    },
    {
      name: "TALLY",
      src: tally,
      alt: "TALLY",
    },
    {
      name: "HYDRAULICS",
      src: hydraulics,
      alt: "HYDRAULICS",
    },
  ];
  return (
    <div className='menu container-fluid w-100 h-100 d-flex flex-column ' >
      {imagesList.map((image, index) => (
        <div className='d-flex flex-column justify-content-between align-items-center w-100 p-2'>
          <img key={image.name} src={image.src} alt={image.alt} />
       { index>0 &&<p>{image.name}</p>}
        </div>
      ))}

    </div>
  )
}
