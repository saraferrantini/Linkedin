import { USER_LOGIN } from '../actions/user'

const initialState = {
  name: '',
  password: '',
  isLoggedIn: false,
}


const checkPassword = function (password) {
    
    if ( password === "epicode" 
    ) {
        return true
      } else {
        return false
      }
}

// state rappresenta lo stato corrente, action rappresenta l'azione appena "dispatchata"
const userReducer = function (state = initialState, action) {
  // "state" al primo avvio dell'app sarà undefined, perchè l'applicativo si è appena caricato
  // nel caso state sia undefined, gli diamo come valore di default "initialState"
  // il reducer è il CUORE di Redux
  // si tratta di una funzione PURA, ovvero di una funzione che non muta MAI i propri parametri,
  // NON effettua nessun'operazione verso l'esterno (es. fetch) e che fornita dello stesso INPUT
  // restituisce sempre lo stesso OUTPUT

  switch (action.type) {
    // ora che abbiamo cominciato a "dispatchare" le azioni, è necessario ISTRUIRE il nostro reducer
    // sul cosa fare quando le intercetta!

    case USER_LOGIN:
      return {
        // come sempre, creo il nuovo stato dell'applicativo
        ...state, // non mi perdo le altre proprietà di user!
        name: action.payload,
        checkPassword: checkPassword(action.payload),
        isLoggedIn: true,
      }

    default:
      // il default entra in gioco quando i "case" precedenti non vengono attivati
      // il default come tutti i case deve RITORNARE il nuovo stato dell'applicativo
      return state
    // nel caso del default il nuovo stato è UGUALE a quello vecchio! per non fare danni...
    // NON dovete ritornare {}, null, undefined
  }
}

export default userReducer