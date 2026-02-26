import Slider from "@mui/material/Slider";

const minDistance = 10;

interface RangeSliderProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  min?: number;
  max?: number;
}

export default function RangeSlider({
  priceRange,
  setPriceRange,
  min = 0,
  max = 1000,
}: RangeSliderProps) {

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return;

    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ]);
    }
  };

  return (
    <Slider
      getAriaLabel={() => "price"}
      value={priceRange}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={(value) => `${value} $`}
      valueLabelFormat={(value) => `${value} $`}
      disableSwap
      min={min}
      max={max}
      sx={{
        color: "#39b2bf",
        "& .MuiSlider-thumb": {
          "&:hover, &.Mui-focusVisible": {
            boxShadow: "0 0 0 8px rgba(57, 178, 191, 0.16)",
          },
        },
      }}
    />
  );
}