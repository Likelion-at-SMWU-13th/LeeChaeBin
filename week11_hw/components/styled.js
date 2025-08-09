import styled from "styled-components";

export const WeatherContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const WeatherCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const WeatherTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const WeatherInfo = styled.p`
  margin: 6px 0;
  font-size: 15px;
`;

export const WeatherList = styled.div`
  display: grid;
  row-gap: 8px;
`;

export const WeatherRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  .k {
    color: #555;
  }
  .v {
    font-weight: 600;
  }
`;
