interface PokemonCardProps {
	pokemon: { name: string; imgSrc?: string };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
		<>
			<figure>
				{pokemon.imgSrc !== undefined ? (
					<img src={pokemon.imgSrc} alt={pokemon.name} />
				) : (
					<p>????</p>
				)}
			</figure>
			<figcaption>{pokemon.name}</figcaption>
		</>
	);
}

export default PokemonCard;
