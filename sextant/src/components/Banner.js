let bannerText = document.title;

const Banner = () => {
  return (
    <div className="Banner">
      <h1>{bannerText}</h1>
      <img
        src={require("../resources/WiFicon-trans.png")}
        alt="cisco virtual experience program logo"
      />
    </div>
  );
};

export { Banner };
