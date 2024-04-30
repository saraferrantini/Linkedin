// // css
import "../assets/css/style.css";
import React, { useState } from "react";
import { userLoginAction } from "../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// // Definiamo tre stati utilizzando il metodo useState:
// // username
// // password
// // rememberMe

// // USERNAME - variabile di stato chiamata username e inizializza il suo valore a una stringa vuota "",dato che non c'è un valore booleano predefinito.
// // setUsername è la funzione che consente di aggiornare questo stato. Quando viene chiamata, React aggiorna automaticamente la visualizzazione per riflettere il nuovo valore di username.

// // REMEMBER ME
// useState(false) viene utilizzato per inizializzare lo stato del checkbox "Ricordami" a false, il che significa che di default il checkbox non è spuntato.
// quando l'utente interagisce con il checkbox (ad esempio, cliccandoci sopra), viene chiamata la funzione setRememberMe passando il nuovo valore di !rememberMe,
// che cambia il valore di rememberMe da false a true o viceversa.

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const userLoggedIn = useSelector((state) => state.user.isLoggedIn); // inizialmente è false

  const userName = useSelector((state) => state.user.name);

  const userPassword = useSelector((state) => state.user.checkPassword); // true se "ciao"

  //La funzione handleLogin è chiamata quando viene cliccato il pulsante "Accedi".
  //Attualmente, questa funzione semplicemente registra i valori dell'username, della password e dello stato "Ricordami" nella console utilizzando console.log()
  const handleLogin = () => {
    // logica per effettuare il login
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    dispatch(userLoginAction(password));
    console.log("arey the logged in?", userPassword);
  };

  return (
    <div className="login-container mt-5 pt-5" id="sfondobianco">
      {userPassword === true && navigate("/home")}

      <div className="login-form">
        <img
          src="https://www.salvatorepumo.it/wp-content/uploads/2022/02/logo-linkedin-oggi.png"
          alt="LinkedIn Logo"
          className="logo"
        />
        <h2>Accedi</h2>
        <p>Username</p>
        <input
          type="text"
          placeholder="Inserisci il tuo Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Password</p>

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label className="form-check-label">Ricordami</label>
        </div>

        <div className="button-container">
          <button onClick={handleLogin}>Accedi</button>
          <button>Registrati</button>
        </div>

        <div className="additional-info mt-3">
          {userPassword === false && <p className="text-danger">Password sbagliata! Riprova, oppure:</p>}

          <p>
            <a href="#">Password dimenticata?</a>
          </p>
          <p>
            <a href="#">Nuovo su Linkedin? Iscriviti ora</a>
          </p>
        </div>
      </div>
      <div className="image-container d-none d-lg-block">
        <img
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" // l'URL
          alt="Image"
          className="image"
        />
      </div>
    </div>
  );
};

export default Login;
