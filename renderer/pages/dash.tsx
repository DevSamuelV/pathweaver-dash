import React, { useEffect, useState } from "react";
import { Field } from "../ui/charts/Field";
import { Client } from "wpilib-nt-client";
import { ChartPoint } from "chart.js";

const Dash = () => {
	var cli = new Client();

	const [APath, setAPath] = useState<ChartPoint[]>([]);
	const [XPath, setXPath] = useState<ChartPoint[]>([]);

	const conn = () => {
		cli.start((isConnected, err) => {
			// Displays the error and the state of connection
			console.log({ isConnected, err });

			// 			X,Y,Tangent X,Tangent Y,Fixed Theta,Reversed,Name
			// 0.8344635175323327,-3.8826743204924266,2.453746455494847,0.012648177605643962,true,false,
			// 4.6289167992253955,-2.984653710491735,1.1256878069022758,0.9486133204232656,true,false,
			// 6.209938999930838,-1.5174651082370842,2.0743011273255414,-0.3794453281693062,true,false,
			// 7.6771276021854895,-4.565675911197178,1.4839438227285602,-0.26411449009518445,false,false,
			// 9.06842713880628,-4.46449049035203,0.11383359845079077,-0.06324088802821759,true,false,

			setXPath([
				{ x: 0.8344635175323327, y: -3.8826743204924266 },
				{ x: 4.6289167992253955, y: -2.984653710491735 },
				{ x: 6.209938999930838, y: -1.5174651082370842 },
				{ x: 7.6771276021854895, y: -4.565675911197178 },
				{ x: 9.06842713880628, y: -4.46449049035203 },
			]);
			setAPath([{ x: 0, y: 0 }]);
		}, "10.2.33.2");

		cli.setReconnectDelay(1);
	};

	const addToX = (x: number, y: number) => {
		var _x = XPath;

		_x.push({ x: x, y: y });

		setXPath(_x);
	};

	const addToA = (x: number, y: number) => {
		var _a = APath;

		_a.push({ x: x, y: y });

		setAPath(_a);
	};

	useEffect(() => {
		conn();

		setXPath([
			{ x: 0, y: 0 },
			{ x: 0.8344635175323327, y: -3.8826743204924266 },
			{ x: 4.6289167992253955, y: -2.984653710491735 },
			{ x: 6.209938999930838, y: -1.5174651082370842 },
			{ x: 7.6771276021854895, y: -4.565675911197178 },
			{ x: 9.06842713880628, y: -4.46449049035203 },
		]);

		cli.addListener((k, v, vt, t, id) => {
			const label = k;

			console.log(k, v);

			if (label == "/datatable/inital-path") {
				const json = JSON.parse(v);

				const x = json.x;
				const y = json.y;

				addToX(x, y);
			}

			if (label == "/datatable/robo-pos") {
				const json = JSON.parse(v);

				const x = json.x;
				const y = json.y;

				addToA(x, y);
			}
		});
	}, []);

	return (
		<>
			<Field actualPath={APath} expectedPath={XPath} />

			<button
				onClick={() => conn()}
				type="button"
				className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Reconnect
			</button>
		</>
	);
};

export default Dash;
