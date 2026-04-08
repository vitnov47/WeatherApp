import { Card, Typography, Image, Flex } from "antd";
import type { Weather } from "../types";
import { transformToWeekday } from "../utils";

const { Text } = Typography;

interface ForecastProps {
  weather: Weather;
  isExtend: boolean;
  isNotShrink: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ForecastCard = ({
  weather,
  isExtend,
  isNotShrink: isShrink,
  onHover,
  onLeave,
}: ForecastProps) => {
  const height = isExtend ? 200 : isShrink ? 92 : 110;
  const backgroundColor = isExtend
    ? "#8bdc66ff"
    : isShrink
      ? "#8bdc66af"
      : "#8bdc66e1";
  return (
    <>
      {weather && (
        <Card
          style={{
            width: 200,
            height: height,
            backgroundColor: backgroundColor,
            transition: "height 0.3s ease, background-color 0.5s ease",
            overflow: "hidden",
          }}
          size="small"
          variant="borderless"
          hoverable
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          styles={{ body: { height: "100%" } }}
        >
          <Flex
            vertical
            align="center"
            justify="center"
            style={{ height: "100%" }}
          >
            <div
              style={{
                opacity: isShrink ? 0 : 1,
                height: isShrink ? 0 : 40,
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
            >
              <Image
                width={40}
                src={weather.icon}
                style={{ display: "block" }}
              />
            </div>
            <Text>{transformToWeekday(weather.date.getDay())}</Text>
            <Text strong>{weather.temp.toFixed(0)} °C</Text>
            {isExtend && (
              <Flex vertical align="flex-start">
                <Text strong>{weather.text}</Text>
                <Text>Ветер: {weather.wind} км/ч</Text>
                <Text>Осадки: {weather.precip} мм</Text>
                <Text>Влажность: {weather.humidity}%</Text>
              </Flex>
            )}
          </Flex>
        </Card>
      )}
    </>
  );
};

export default ForecastCard;
