import { useEffect, useState } from "react";
import axios from "axios";
import FormatDate from "../../utils/DateFormat";

const Stats = () => {
  const [states, setStates] = useState<any | null>(null);

  useEffect(() => {
    axios.get("/public/stats.json").then((res) => {
      setStates(res.data);
    });
  }, []);

  return (
    <div className="m-4">
      <div className="bg-white">
        <div className="p-5">
          <p className="text-xl font-semibold">
            Basic Information - Today | {FormatDate(Date())}
          </p>
          <div className="flex gap-10 mt-5">
            {states?.map((state: any, idx: number) => (
              <div key={idx}>
                <div className="bg-green-50 p-10 rounded-xl text-center w-72">
                  <p className="text-5xl font-bold">{state.value}</p>
                  <p>{state.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
