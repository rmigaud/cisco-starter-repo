import { IP } from "./IP";
import { Latency } from "./Latency";

const Exhibit = () => {
  return (
    <div className="card-container">
      <IP />
      <Latency />
    </div>
  );
};

export { Exhibit };
