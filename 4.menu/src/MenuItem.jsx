const MenuItem = ({ img, title, rating, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{rating}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
