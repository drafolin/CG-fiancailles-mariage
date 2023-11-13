import ArrowForward from "./assets/arrow-forward.png";
import ArrowBackwards from "./assets/arrow-backwards.png";
import { useState } from "react";

export default function App() {
	const [shown, setShown] = useState(0);

	const onNext = () => {
		setShown(1);
	};

	const onPrevious = () => {
		setShown(0);
	};

	return (
		<div className="root">
			<h1>Les fiançailles et le mariage</h1>
			<div className="content">
				<button disabled={shown === 0} onClick={onPrevious}><img src={ArrowBackwards} alt="Précédent" /></button>
				<div className="scroller">
					<div className={`sections ${shown === 0 ? "" : "second"}`}>
						<section className="fiancailles">
							<h2>Les fiançailles</h2>
						</section>
						<section className="mariage">
							<h2>Le mariage</h2>
						</section>
					</div>
				</div>
				<button disabled={shown === 1} onClick={onNext}><img src={ArrowForward} alt="Suivant" /></button>
			</div>
		</div>
	);
}
