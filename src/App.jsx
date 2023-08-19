import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Redux Counter</h1>
			<div className="card">
				<button className="num">count is {count}</button>

				<hr />

				<div className="btn-action">
					<button onClick={() => setCount((count) => count + 1)}>
						Increase (+)
					</button>
					<button onClick={() => setCount((count) => count - 1)}>
						Decrease (-)
					</button>
				</div>
			</div>

			<p className="read-the-docs">Redux counter practice</p>
		</>
	);
}

export default App;
