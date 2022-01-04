import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

function App() {
  return (
    
    <PageWrapper>
      <Pelicula titulo="Oblivion (2012)" calificacion="8.1" director="Joss Whedon" actores="Robert Downey Jr., Chris Evans, Chris Hemsworth" fecha="1 May 2015" duracion="2h21’" clasificacion="PG-13" img="images/uploads/mv1.jpg">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
      </Pelicula>

      <Pelicula titulo="into the wild" calificacion="7.8" director="Joss Whedon" actores="Anthony Russo,Joe Russo, Chris Evans,Samuel L. Jackson,Scarlett Johansson" fecha="1 May 2015" duracion="2h21’" clasificacion="PG-13" img="images/uploads/mv2.jpg">
        As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
      </Pelicula>
    </PageWrapper>       
          

          
  );
}

export default App;
