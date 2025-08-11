import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";

const SERVICE_KEY = import.meta.env.VITE_KMA_SERVICE_KEY;

const BASE_DATE = "20250809";
const BASE_TIME = "1700";
const DISPLAY_TIME = "1900";
const NX = 60,
  NY = 126;

const displayTimeFormatted =
  DISPLAY_TIME.slice(0, 2) + ":" + DISPLAY_TIME.slice(2);

const Weather = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const url = "/kma/1360000/VilageFcstInfoService_2.0/getVilageFcst";
        const params = {
          serviceKey: SERVICE_KEY,
          numOfRows: 1000,
          pageNo: 1,
          dataType: "JSON",
          base_date: BASE_DATE,
          base_time: BASE_TIME,
          nx: NX,
          ny: NY,
        };
        const res = await axios.get(url, { params });
        const items = res.data?.response?.body?.items?.item ?? [];

        const pick = ["TMP", "REH", "POP", "WSD"];
        const cur = {};
        for (const it of items) {
          if (
            it.fcstDate === BASE_DATE &&
            it.fcstTime === DISPLAY_TIME &&
            pick.includes(it.category)
          ) {
            cur[it.category] = it.fcstValue;
          }
        }
        setData(cur);
      } catch (e) {
        setErr(e?.message || "API 오류");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div style={{ padding: 20 }}>로딩 중…</div>;
  if (err) return <div style={{ padding: 20, color: "red" }}>에러: {err}</div>;

  const fields = [
    { key: "TMP", label: "기온", unit: "℃" },
    { key: "REH", label: "습도", unit: "%" },
    { key: "POP", label: "강수확률", unit: "%" },
    { key: "WSD", label: "풍속", unit: "m/s" },
  ];

  const hasData = fields.some((f) => data?.[f.key] != null);

  return (
    <S.WeatherContainer>
      <S.WeatherCard>
        <S.WeatherTitle>
          {BASE_DATE} {displayTimeFormatted} 날씨
        </S.WeatherTitle>
        {!hasData ? (
          <S.WeatherInfo>표시할 데이터가 없습니다.</S.WeatherInfo>
        ) : (
          <S.WeatherList>
            {fields.map(({ key, label, unit }) => (
              <S.WeatherRow key={key}>
                <span className="k">{label}</span>
                <span className="v">
                  {data[key] ?? "-"}
                  {data[key] != null ? unit : ""}
                </span>
              </S.WeatherRow>
            ))}
          </S.WeatherList>
        )}
      </S.WeatherCard>
    </S.WeatherContainer>
  );
};

export default Weather;
