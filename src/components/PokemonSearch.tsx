import React, { Component } from 'react' 
import User from '../interfaces/User.interface'

interface SearchState{
  error: boolean,
  name: string,
  numberOfAbilites: number,
  baseExperience: number,
  imgUrl: string
}

export class PokemonSearch extends Component <User>{
  pokemonRef: React.refObject<HTMLInputElement>;
  constructor (props User){
    super(props);
    this.state = {
      name: '',
      numberOfAbilites: 0,
      baseExperience : 0,
      imgUrl:''
    }
    this.pokemonRef = React.createRef();
  }
  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value;
    fetch(`http://pokeapi.co/api/v2/pokemon/${inputValue}`)
    .then(res =>{
      if(res.status !== 200){
        this.setState({ error: true });
        return;
      }
      res.json().then(data => {
        this.setState({
          error: false,
          name: data.name,
          numberOfAbilites: data.abilities.length,
          baseExperience: data.base_experience,
          imgeUrl: data.sprites.front_default
        })
      })
    })
  }
  render(){
    const { name, numberOfPokemons } = this.props;
    const { error, name, numberOfAbilites, baseExperience, imageUrl } = this.state;
    let resultMarkup;

    if(error){
      resultMarkup = <p>Pokemon not found, please try agein</p>
    }else{
      resultMarkup = <div>
        <img src="{imageUrl}" alt="pokemon" className="pokemon-image" />
        <p>
          {name} hase {}
        </p>
      </div>
    }
    return (
      <div>
        <p>
          User {name}{' '} 
          {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}
        </p>
        <input type="text" ref={this.pokemonRef}/>
        <button onClick={this.onSearchClick} className="mybutton">Search</button>
      </div>
    )
  }
}

export default PokemonSearch