import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter";
import "./App.css";

function App() {
	const { count } = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	console.log(count);

	return (
		<>
			<h1>Redux Counter</h1>
			<div className="card">
				<button className="num">count is {count}</button>

				<hr />

				<div className="btn-action">
					<button onClick={() => dispatch(increment())}>
						Increase (+)
					</button>
					<button onClick={() => dispatch(decrement())}>
						Decrease (-)
					</button>
				</div>
			</div>

			<p className="read-the-docs">Redux counter practice</p>
		</>
	);
}

export default App;
