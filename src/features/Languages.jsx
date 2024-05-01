import { MainContext } from "../context/context";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { React, useContext } from "react";

function Languages() {
  const { t, i18n, lngs } = useContext(MainContext);

  return (
    <div className="d-flex justify-content-end mb-2">
      <button
        style={{ height: "30px", width: "30px" }}
        className="fi fi-gb rounded-circle m-1"
        onClick={() => i18n.changeLanguage("en")}
      ></button>
      <button
        style={{ height: "30px", width: "30px" }}
        className="fi fi-es rounded-circle m-1"
        onClick={() => i18n.changeLanguage("es")}
      ></button>
      <button
        style={{ height: "30px", width: "30px" }}
        className="fi fi-es-ct rounded-circle m-1"
        onClick={() => i18n.changeLanguage("ca")}
      ></button>
    </div>
  );
}

export default Languages;
