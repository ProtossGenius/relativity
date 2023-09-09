import './App.css';
import { Canvas2D } from './Canvas2D';

function App() {

  return (
    <div className="App">
      <div className="left">
        <div className="modle">
        </div>
        <div className="property">
          <table width={'100%'}>
            <tr>
              <td>Property</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td><input type="" /></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="camera">
        <Canvas2D backgroundColor={"#000"} width={1632} height={923} ></Canvas2D>
      </div>
    </div >
  );
}

export default App;
