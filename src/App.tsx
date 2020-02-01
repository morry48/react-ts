import React from 'react';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <PokemonSearch name="Jone don"  numberOfPokemons={5} />
    </div>
  );
}

export default App;
