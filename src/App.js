
import './App.css';
import Card from './Components/Card.js'
import img from './imgs/download.jpg'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
            <Card
            title="Tiger"
            imgUrl={img}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
            />
        </li>
        <li>
          <Card
          title="Tiger"
          imgUrl={img}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
          />
        </li>
        <li>
          <Card
          title="Tiger"
          imgUrl={img}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
          />
        </li>
      </ul>
    </div>
  );
}

export default App;
