import './Panel.css';

function Panel({ id, eyebrow, title, description, children }) {
  return (
    <section className="panel" id={id}>
      <div className="panel__header">
        {eyebrow ? <div className="panel__eyebrow">{eyebrow}</div> : null}
        <h2 className="panel__title">{title}</h2>
        {description ? <p className="panel__desc">{description}</p> : null}
      </div>
      <div className="panel__content">{children}</div>
    </section>
  );
}

export default Panel;

