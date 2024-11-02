import React, { useState, useRef } from "react";
import "../RSVP.scss";
import { RiMailOpenFill as Icon } from "react-icons/ri";
import { FaExternalLinkAlt as External } from "react-icons/fa";
import { MdErrorOutline as Error } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Loading from "./Loading";
import Success from "./Success";

const RSVP = ({ isValid, currentPerson }) => {
  if (!isValid) {
    return (
      <div className="rsvp-inner">
        <div className="title-container">
          <Icon />
          <h1>Nevažeći link</h1>
        </div>
        <div className="error-container">
          <Error />
        </div>
      </div>
    );
  }
  const form = useRef();

  const [name, setName] = useState(currentPerson ? currentPerson.name : "");
  const [email, setEmail] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState("");
  const [remarks, setRemarks] = useState("");

  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const object = {
      name,
      plusOne,
      plusOneName,
      remarks,
    };

    console.log(object);

    emailjs
      .sendForm("KristijaniVanessa", "template_xxlnz0u", form.current, {
        publicKey: "rYLsJMYfLo1AqZsZM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  if (loading) {
    return (
      <div className="rsvp-inner">
        <div className="title-container">
          <Icon />
          <h1>Potvrdite Dolazak</h1>
        </div>
        <Loading />
      </div>
    );
  }

  if (sent) {
    return (
      <div className="rsvp-inner">
        <div className="title-container">
          <Icon />
          <h1>Potvrda uspješno poslana</h1>
        </div>

        <Success />

        <div className="success-info-container">
          <p>Hvala vam na potvrdi</p>
          <p>
            Dodatne informacije možete skinuti
            <span>
              <a
                className="document-link"
                target="_blank"
                href="https://kristijan-i-vanessa.tiiny.site/"
              >
                ovdje <External />
              </a>
            </span>
          </p>
          <p>Ili u povratnom mailu kojeg ste dobili</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rsvp-inner">
      <div className="title-container">
        <Icon />
        <h1>Potvrdite Dolazak</h1>
      </div>

      <div className="form-container">
        <form className="rsvp-form" ref={form} onSubmit={handleSubmitForm}>
          <label>
            Ime i prezime:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
              name="user_name"
            ></input>
          </label>

          <label>
            E-mail za potvrdu:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              name="user_email"
            ></input>
          </label>

          <label className="plus-one-label">
            Hoćete li povesti pratnju?
            <input
              type="checkbox"
              checked={plusOne}
              onChange={(e) => setPlusOne((prev) => !prev)}
            ></input>
          </label>

          {plusOne && (
            <label>
              Ime pratnje:
              <input
                type="text"
                value={plusOneName}
                onChange={(e) => setPlusOneName(e.target.value)}
                required={true}
                name="user_plusone"
              ></input>
            </label>
          )}

          <label>
            Dodatne napomene ili eventualni zahtjevi
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              name="user_remarks"
            ></textarea>
          </label>

          <div className="submit-container">
            <button type="submit">POŠALJI</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
