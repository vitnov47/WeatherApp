import { Card, Typography, Image, Flex } from "antd";
import type { Weather } from "../types";

const { Text, Title } = Typography;

interface WeatherNowCardProps {
  weather: Weather;
}

const WeatherNowCard = ({ weather }: WeatherNowCardProps) => {
  return (
    <>
      {weather && (
        <Card
          style={{
            width: 300,
            backgroundColor: "#8bdc66e1",
            padding: 30,
          }}
          size="small"
          variant="borderless"
        >
          <Flex vertical align="center" gap={12}>
            <Image
              width={100}
              height={100}
              src={weather.icon}
              style={{ display: "block" }}
              preview={false}
            />
            <Title level={3}>
              {weather.city}, {weather.country}
            </Title>
            <Text strong style={{ fontSize: 24 }}>
              {weather.temp.toFixed(0)} °C
            </Text>
            <Flex vertical align="flex-start" gap={10}>
              <Text strong style={{ fontSize: 20 }}>
                {weather.text}
              </Text>
              <Text style={{ fontSize: 16 }}>Ветер: {weather.wind} км/ч</Text>
              <Text style={{ fontSize: 16 }}>Осадки: {weather.precip} мм</Text>
              <Text style={{ fontSize: 16 }}>
                Влажность: {weather.humidity}%
              </Text>
            </Flex>
          </Flex>
        </Card>
      )}
    </>
  );
};

export default WeatherNowCard;
