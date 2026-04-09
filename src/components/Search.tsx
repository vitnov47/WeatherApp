import { Input, ConfigProvider } from "antd";
import { useWeather } from "../context/weatherContext";

export default function Search() {
  const { changeCity, isError } = useWeather();

  const handleSearch = (value: string) => {
    if (value.trim()) changeCity(value);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: isError
              ? "rgba(250, 58, 58, 0.42)"
              : "rgba(255, 255, 255, 0.3)",
            colorText: "#ffffff",
            colorTextPlaceholder: "rgba(255, 255, 255, 0.8)",

            colorBorder: "rgba(255, 255, 255, 0.3)",
            activeBorderColor: "rgba(255, 255, 255, 0.3)",
            hoverBorderColor: "rgba(255, 255, 255, 0.3)",
          },
          Button: {
            colorPrimary: isError
              ? "rgba(250, 58, 58, 0.61)"
              : "rgba(255, 255, 255, 0.42)",
            colorPrimaryHover: "rgba(255, 255, 255, 0.5)",
            colorPrimaryActive: "rgba(255, 255, 255, 0.6)",
          },
        },
      }}
    >
      <Input.Search
        allowClear
        enterButton
        placeholder={isError ? "Город не найден :(" : "Введите город..."}
        onSearch={handleSearch}
      />
    </ConfigProvider>
  );
}
