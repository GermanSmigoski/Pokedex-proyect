export default function Preview({
  name,
  image,
  types,
  attack,
  defense,
  hp,
  height,
  speed,
  weight,
}) {

    console.log(image)
  return (
    <div>
      <div className={`pokemon-card `}>
        <h2 className="pokemon-name">{name}</h2>
        <div className="pokemon-image">
          <img src={`${image}`}alt="" />
        </div>
        <h2 className="pokemon-types">{types}</h2>
        <div className="pokemon-stats">
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
          <p>Hp: {hp}</p>
          <p>Height: {height}</p>
          <p> Weight: {weight}  </p>
          <p>Speed: {speed}</p>
        </div>
      </div>
    </div>
  );
}
