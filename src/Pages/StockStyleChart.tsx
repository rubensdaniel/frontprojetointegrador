import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartItem {
  hora: string;
  preco: number;
}

interface Props {
  data: ChartItem[];
}

export default function StockStyleChart({ data }: Props) {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPreco" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#4a90e2" stopOpacity={0.4} />
              <stop offset="90%" stopColor="#4a90e2" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="hora" stroke="#999" tick={{ fontSize: 12 }} />
          <YAxis stroke="#999" tick={{ fontSize: 12 }} domain={["auto", "auto"]} />

          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />

          <Area
            type="monotone"
            dataKey="preco"
            stroke="#4a90e2"
            fillOpacity={1}
            fill="url(#colorPreco)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
