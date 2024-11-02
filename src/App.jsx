import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import CountdownTimer from "./components/CountdownTimer";
import AboutUs from "./components/AboutUs";
import RSVP from "./components/RSVP";
import photo from "./assets/test-hero-new.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:name" element={<Home />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const invitees = [
  { name: "Petar Franjic", title: "Dragi Petre" },
  { name: "Jurica Mijatovic", title: "Dragi Jurice" },
  { name: "Marin Kranjcevic", title: "Dragi Marine" },
  { name: "Borna Majstorovic", title: "Dragi Borna" },
  { name: "Ivan Zivkovic", title: "Dragi Ivane" },
  { name: "Irena Bionda", title: "Draga Irena" },
  { name: "Marija Bozinovic", title: "Draga Mama" },
];

function Home() {
  const { name } = useParams();
  const wrapperRef = useRef();
  const imgRef = useRef();
  const heroRef = useRef();
  const flowerRef = useRef();

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          markers: true,
        },
      })
      .to(
        imgRef.current,
        {
          scale: 3.5,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        0
      )
      .fromTo(
        flowerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 0.5, ease: "power1.inOut" },
        0
      )
      .to(
        heroRef.current,
        {
          scale: 1.5,
          opacity: 1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);

  const [isValid, setIsValid] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(null);

  useEffect(() => {
    const checkValidity = () => {
      const nameToCompare = name.split("-").join(" ").toUpperCase();
      const person = invitees.find(
        (invitee) => invitee.name.toUpperCase() === nameToCompare
      );

      if (person) {
        setIsValid(true);
        setCurrentPerson(person);
      } else {
        setIsValid(false);
        setCurrentPerson(null);
      }
    };

    checkValidity();
  }, []);

  return (
    <div ref={wrapperRef} className="wrapper">
      <div className="content">
        <section ref={heroRef} className="section hero underlying-graphic">
          <h1>
            Kristijan <br /> +<br /> Vanessa <br />
          </h1>
          <img ref={flowerRef} src={photo} alt="flower" />
        </section>
        <section className="section countdown-container">
          <CountdownTimer />
        </section>
        <section className="section gradient about-us">
          <AboutUs isValid={isValid} currentPerson={currentPerson} />
        </section>
        <section className="section gradient RSVP">
          <RSVP isValid={isValid} currentPerson={currentPerson} />
        </section>
      </div>
      <div className="image-container overlay-image">
        <img ref={imgRef} src="/invi-overlay.svg" alt="text" />
      </div>
    </div>
  );
}

export default App;
