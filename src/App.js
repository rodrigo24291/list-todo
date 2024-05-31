import { Provider } from "react-redux";
import generatestore from "./redux/reducer";
import Tareas from "./componente/lista";

function App() {
const store=generatestore()
  return (
    <Provider store={store}>
<Tareas />
    </Provider>
  );
}

export default App;
