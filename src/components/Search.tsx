import { Input, ConfigProvider } from "antd";
import { useWeather } from "../context/weatherContext";

export default function Search() {
  const { changeCity } = useWeather();

  const handleSearch = (value: string) => {
    changeCity(value);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "rgba(255, 255, 255, 0.3)",
            colorText: "#ffffff",
            colorTextPlaceholder: "rgba(255, 255, 255, 0.8)",

            colorBorder: "rgba(255, 255, 255, 0.3)",
            activeBorderColor: "rgba(255, 255, 255, 0.3)",
            hoverBorderColor: "rgba(255, 255, 255, 0.3)",
          },
          Button: {
            colorPrimary: "rgba(255, 255, 255, 0.3)",
            colorPrimaryHover: "rgba(255, 255, 255, 0.5)",
            colorPrimaryActive: "rgba(255, 255, 255, 0.6)",
          },
        },
      }}
    >
      <Input.Search
        allowClear
        enterButton
        placeholder="Введите город..."
        onSearch={handleSearch}
      />
    </ConfigProvider>
  );
}
