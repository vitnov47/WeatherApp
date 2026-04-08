import Search from "./Search";
import SectionCards from "./SectionCards";
import backgroundImage from "../assets/background.jpg";
import { useWeather } from "../context/weatherContext";
import { Flex, Layout } from "antd";
import WeatherNowCard from "./WeatherNowCard";
const { Header, Content } = Layout;

export default function AppLayout() {
  const { weatherNow, forecast } = useWeather();

  return (
    <Layout
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header style={{ background: "transparent", border: "none" }}>
        <Search />
      </Header>
      <Content
        style={{
          textAlign: "center",
        }}
      >
        <Flex justify="space-around" align="center" style={{ marginTop: 20 }}>
          <WeatherNowCard weather={weatherNow} />
          <SectionCards forecast={forecast} />
        </Flex>
      </Content>
    </Layout>
  );
}
