function Breadcrumbs({ imgUrl, way }) {
  // console.log(imgUrl);
  // console.log(way);
  return (
    <div
      className="breadcrumbs d-flex align-items-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2>{way}</h2>
        <ol>
          <li>
            <a href="index">Головна</a>
          </li>
          <li>{way}</li>
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumbs;
