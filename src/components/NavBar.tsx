import Pokemon from "./PokemonCard";
import { Dispatch } from "react";



interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonName: Dispatch<React.SetStateAction<string>>;
    pokemonList: Pokemon[];
  }

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
    return(
    <nav>	 
        {pokemonList.map((pokemonItem) => (
			<button
			  key={pokemonItem.name}
			  type="button"
			  onClick={() => setPokemonName(pokemonItem.name)}
			>
			  {pokemonItem.name}
			</button>
		))}
    </nav>);
  }
  
export default NavBar;
export type { NavBarProps };


