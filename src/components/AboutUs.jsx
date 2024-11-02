import { useEffect, useState } from "react";

import image from "../assets/test4.jpg";
import "../AboutUs.scss";

const invitees = [
  { name: "Petar Franjic", title: "Dragi Petre" },
  { name: "Jurica Mijatovic", title: "Dragi Jurice" },
  { name: "Marin Kranjcevic", title: "Dragi Marine" },
  { name: "Borna Majstorovic", title: "Dragi Borna" },
  { name: "Ivan Zivkovic", title: "Dragi Ivane" },
  { name: "Irena Bionda", title: "Draga Irena" },
  { name: "Marija Bozinovic", title: "Draga Mama" },
];

const AboutUs = ({ isValid, currentPerson }) => {
  if (!isValid) {
    return (
      <div className="about-us-inner">
        <div className="about-us-content">
          <h2>Niste pozvani</h2>
          <p>
            Drago nam je da ste pronašli ovu stranicu, no pozivnica je
            personalizirana te njoj pristupate preko nevažećeg linka.
          </p>

          <p>
            Slobodno nastavite pregledavati stranicu i istražite kako smo je
            osmislili.
          </p>

          <p>
            Hvala što ste posjetili našu online pozivnicu i nadamo se da vam se
            sviđa. :)
          </p>
        </div>

        <div className="photo-container">
          <img src={image}></img>
        </div>
      </div>
    );
  }

  return (
    <div className="about-us-inner">
      <div className="about-us-content">
        <h2>{currentPerson.title}</h2>
        <p>
          Ovim putem Vas želimo pozvati na proslavu naše ljubavi koja će se
          održati 19.9.2025. u Riu Tintu u Atlixcu u Mexicu.
        </p>

        <p>
          {" "}
          Znamo da je odlazak u Meksiko veliki zadatak i razumijemo ako bilo tko
          ne želi ili ne može doći.
        </p>

        <p>
          Za sve za koje se odluče na dolazak ćemo biti zauvijek zahvalni i
          cijeniti vašu voljnost
        </p>

        <p>
          Vaš dolazak i prisustvo će nam biti najveći mogući poklon, tako da Vas
          molim da nam osim toga ne poklanjate ništa :)
        </p>

        <p>
          Detaljnije informacije o putu, smještaju i sličnom nalaze se niže na
          stranici
        </p>
      </div>

      <div className="photo-container">
        <img src={image}></img>
      </div>
    </div>
  );
};

export default AboutUs;
