import { Line, ChartData } from "react-chartjs-2";
import chartjs from "chart.js";
import { core } from "../../core/core";

type props = {
	actualPath: chartjs.ChartPoint[];
	expectedPath: chartjs.ChartPoint[];
};

export function Field({ actualPath, expectedPath }: props) {
	const data: ChartData<chartjs.ChartData> = {
		labels: core.positions,
		datasets: [
			{
				label: "Actual Path",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,193,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#0080FF",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 3,
				pointHitRadius: 10,
				data: actualPath,
			},
			{
				label: "Expected Path",
				fill: false,
				lineTension: 0.2,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 3,
				pointHitRadius: 10,
				data: expectedPath,
			},
		],
	};

	return (
		<>
			<div className="max-w-full max-h-full">
				<Line data={data} />
			</div>
		</>
	);
}
