import "./card.css";

function Card({ anime }) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <figure>
          <img
            src={anime.attributes.posterImage.large}
            alt={anime.attributes.canonicalTitle}
          />
        </figure>
        <div className="card-body">
          <h3>{anime.attributes.canonicalTitle}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
