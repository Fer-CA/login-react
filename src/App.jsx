import { useState } from "react";
import './App.css'
import Registro from './components/Registro'
import Alert from './components/Alert'

const App = () => {
  const [alert, setAlert] = useState({ error: "", msg: "", color: ""})
  return (
    <>
      <Registro obtenerAlert={setAlert}/>
      {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  )
}

export default App
