import MakeCarousel from "./UI/Carousel";

const Body = (props) => {
  return (
    <div className={props.className}>
      <div>
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
        <MakeCarousel />
      </div>
    </div>
  );
};

export default Body;
