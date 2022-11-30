import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
  //logica para criar e mostrar calendario
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // logica para criar e mostrar as options
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  //logica para mostrar itens das opçoes
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headercontainer listMode" : "headercontainer"}>
        <div className="headerlist">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Quartos</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de Carros</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atrações</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Ponto de taxis</span>
          </div>
        </div>

        { type !== "list" && 
          <>
            <h1 className="headertitle">
              Uma vida inteira de descontos? é genial.
            </h1>
            <p className="headerDesc">
              Seja recompensado por suas viagens - desbloqueie economia
              instantânea de 10% ou mais com uma conta RenerHoteis gratuita.
            </p>
            <button className="headerBtn">Login / Registrar</button>

            <div className="headerSearch">
              <div className="headersearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Para onde voce vai?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headersearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} até ${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {/* calendario */}
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              <div className="headersearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} adultos - ${options.children} Crianças -  ${options.room} Quartos`}
                </span>

                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adultos</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Crianças</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Quartos</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headersearchItem">
                <button className="headerBtn">Procurar</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
