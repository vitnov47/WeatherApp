import { Flex } from "antd";
import type { Weather } from "../types";
import ForecastCard from "./ForecastCard";
import { useState } from "react";

interface SectionCardsProps {
  forecast: Weather[];
}

const SectionCards = ({ forecast }: SectionCardsProps) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <Flex gap={15} justify="space-around" vertical>
      {forecast &&
        forecast.map((day) => {
          const isExtend = hoveredCardId === day.id;
          const isShrink = hoveredCardId !== null && hoveredCardId !== day.id;
          return (
            <ForecastCard
              weather={day}
              key={day.id}
              isExtend={isExtend}
              isNotShrink={isShrink}
              onHover={() => {
                setHoveredCardId(day.id);
              }}
              onLeave={() => setHoveredCardId(null)}
            />
          );
        })}
    </Flex>
  );
};

export default SectionCards;
