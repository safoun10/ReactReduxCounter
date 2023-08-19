import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	decrementByAmount,
	multiplyByAmount,
} from "./redux/counter";
import "./App.css";

function App() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	console.log(count);


	return (
		<>
			<h1>Redux Counter</h1>
			<div className="card">
				<button className="num">Count is {count}</button>

				<hr />

				<div className="btn-action">
					<div className="gap-2">
						<button onClick={() => dispatch(increment())}>
							Increase (+)
						</button>
						<button onClick={() => dispatch(decrement())}>
							Decrease (-)
						</button>
					</div>

					<div className="gap-2">
						<button onClick={() => dispatch(incrementByAmount(10))}>
							Decrease by 10
						</button>
						<button onClick={() => dispatch(decrementByAmount(10))}>
							Decrease by 10
						</button>
					</div>
					<div>
						<button onClick={() => dispatch(multiplyByAmount(10))}>
							Multiply by 10
						</button>
					</div>
				</div>
			</div>

			<p className="read-the-docs">Redux counter practice</p>
		</>
	);
}

export default App;
