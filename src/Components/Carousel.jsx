import { useCarousel } from "./useCarousel";

export const Carousel = ({ carouselImages }) => {
  const { handleNxt, handlePrev, carouselIdx } = useCarousel(carouselImages)

  return (
    <>
      <h1 style={{ textAlign: "center" }}> America's Custom React Carousel 🦄</h1>
      <img src={carouselImages[carouselIdx]} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handlePrev}>{"<"} Prev</button>
        <button onClick={handleNxt}>Next {">"}</button>
      </div>
    </>
  );
};
