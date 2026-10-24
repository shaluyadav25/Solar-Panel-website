import { useEffect, useId, useState } from "react";

const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
};

const SqueezeCarousel = ({
  slides,
  defaultIndex = 0,
  onIndexChange,
  duration = 800,
  hoverGrow = true,
  autoplay = false,
  interval = 6000,
  controls = true,
  label = "Featured",
}) => {
  const carouselId = useId();
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(() =>
    slides.length ? Math.min(Math.max(defaultIndex, 0), slides.length - 1) : 0,
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const visualIndex = hoveredIndex ?? activeIndex;
  const transitionDuration = reducedMotion ? "0ms" : `${duration}ms`;

  useEffect(() => {
    onIndexChange?.(activeIndex);
  }, [activeIndex, onIndexChange]);

  useEffect(() => {
    if (!autoplay || paused || reducedMotion || slides.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoplay, interval, paused, reducedMotion, slides.length]);

  if (!slides.length) return null;

  const selectSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
    setHoveredIndex(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectSlide(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectSlide(activeIndex - 1);
    }
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setHoveredIndex(null);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {controls && slides.length > 1 && (
        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Previous solution"
            onClick={() => selectSlide(activeIndex - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#dce5d5] bg-white text-[#183327] transition hover:border-[#183327] hover:bg-[#183327] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b8e45]"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Next solution"
            onClick={() => selectSlide(activeIndex + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#dce5d5] bg-white text-[#183327] transition hover:border-[#183327] hover:bg-[#183327] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b8e45]"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}

      <div
        role="tablist"
        aria-label={label}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="flex h-[260px] w-full gap-2 overflow-hidden rounded-[1.5rem] sm:h-[320px] sm:gap-3 lg:h-[380px]"
      >
        {slides.map((slide, index) => {
          const isOpen = visualIndex === index;
          const isSelected = activeIndex === index;

          return (
            <button
              key={slide.id ?? slide.title}
              id={`${carouselId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${carouselId}-panel`}
              aria-label={
                slide.imageAlt
                  ? `${slide.title}: ${slide.imageAlt}`
                  : slide.title
              }
              tabIndex={isSelected ? 0 : -1}
              onClick={() => selectSlide(index)}
              onMouseEnter={() => {
                if (hoverGrow && !reducedMotion) setHoveredIndex(index);
              }}
              className="group relative isolate min-w-[38px] flex-1 cursor-pointer overflow-hidden rounded-[1.25rem] bg-[#183327] text-left outline-none transition-[flex-grow,flex-basis] ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-[#6b8e45] focus-visible:ring-offset-2 sm:min-w-[52px]"
              style={{
                flex: isOpen ? "1 1 0%" : "0 1 64px",
                transitionDuration,
              }}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 ${
                  isOpen ? "scale-105" : "scale-100"
                }`}
                style={{
                  backgroundImage: slide.image
                    ? `linear-gradient(to top, rgb(7 27 21 / 0.76), transparent 72%), url("${slide.image}")`
                    : slide.background,
                }}
              />
              <span className="absolute inset-0 z-[1] bg-gradient-to-t from-[#071b15]/70 via-transparent to-black/10" />
              <span
                className={`absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-4 text-white transition-opacity sm:p-6 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDuration }}
                aria-hidden={!isOpen}
              >
                <span className="mb-3 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm sm:text-xs">
                  {slide.overlay ?? slide.label ?? slide.title}
                </span>
                <span className="text-lg font-semibold leading-tight sm:text-2xl">
                  {slide.title}
                </span>
              </span>
              {!isOpen && (
                <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90 [writing-mode:vertical-rl] sm:bottom-5 sm:text-xs">
                  {slide.overlay ?? slide.label ?? slide.title}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        id={`${carouselId}-panel`}
        role="tabpanel"
        aria-labelledby={`${carouselId}-tab-${activeIndex}`}
        aria-live="polite"
        className="mt-6 flex flex-col gap-5 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b8e45]">
            {slides[activeIndex].overlay ??
              slides[activeIndex].label ??
              slides[activeIndex].title}
          </p>
          <p className="mt-2 max-w-3xl text-base leading-7 text-[#66736a] sm:text-lg">
            {slides[activeIndex].description}
          </p>
        </div>
        {slides[activeIndex].action && (
          <a
            href={slides[activeIndex].href ?? "#contact"}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#183327] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#284a37] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b8e45] sm:self-center"
          >
            {slides[activeIndex].action}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default SqueezeCarousel;
