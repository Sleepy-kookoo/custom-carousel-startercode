import { useState } from "react";

export const useCarousel = (carouselImages) => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const handleBoundary = (idx) => (idx + carouselImages.length) % carouselImages.length

  const handleNxt = () => setCarouselIdx(prevIdx => handleBoundary(prevIdx + 1))
  const handlePrev = () => setCarouselIdx(prevIdx => handleBoundary(prevIdx - 1))

  return { handleNxt, handlePrev, carouselIdx, carouselLen: carouselImages.length }
}