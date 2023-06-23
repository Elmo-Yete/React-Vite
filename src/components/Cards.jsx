export default function Cards(props) {
  const content = props.content;
  return (
    <>
      <section className="cardContainer">
        <article>
          <div className="emojiContainer">
            <p>{props.emoji}</p>
          </div>
          <div className="subtitle">
            <p>{props.subtitle}</p>
          </div>
          <div className="subtitleText">
            <p>{props.text}</p>
          </div>
        </article>
      </section>
    </>
  );
}
