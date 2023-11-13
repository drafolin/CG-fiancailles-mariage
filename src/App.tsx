import ArrowForward from "./assets/arrow-forward.png";
import ArrowBackwards from "./assets/arrow-backwards.png";
import ManIcon from "./assets/man.png";
import WomanIcon from "./assets/woman.png";
import HeartIcon from "./assets/heart.png";
import HeartBreak from "./assets/heartbreak.png";
import { useState } from "react";

export default function App() {
	const [shown, setShown] = useState(0);
	const [areEngaged, setEngaged] = useState(true);

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
				<div className="scroller">
					<div className="header">
						<button disabled={shown === 0} onClick={onPrevious}><img src={ArrowBackwards} alt="Précédent" /></button>
						<h2>{shown === 0 ? "Les fiançailles" : "Le mariage"}</h2>
						<button disabled={shown === 1} onClick={onNext}><img src={ArrowForward} alt="Suivant" /></button>
					</div>
					<div className={`sections ${shown === 0 ? "" : "second"}`}>
						<section className="fiancailles">
							<p>
								Les fiançailles sont une promesse de mariage entre deux individus.
								C'est un avant-goût des problèmes.
							</p>
							<div className="state">
								<img className="partie" src={ManIcon} alt="Homme"/>
								<button onClick={()=>setEngaged(!areEngaged)}
								className={areEngaged ? "" : "broken"}>
									<img src={areEngaged ? HeartIcon : HeartBreak}
										 alt={areEngaged ? "Fiancés" : "Plus fiancés"}/>
								</button>
								<img src={WomanIcon} alt="Femme" className="partie"/>
							</div>
							{areEngaged ? <>
								<p>
									On peut concrétiser cette promesse de diverses manières, comme un échange d'alliances ou
									une vie commune.
									Il n'est pas nécessaire d'être majeur pour se fiancer, mais il faut être capable de discernement.
								</p>
								<p>
									Les fiançailles n'impliquent pas forcément une cérémonie gênante devant 200 personnes.
									Il s'agit simplement d'une promesse.
								</p>
							</> : <>
								<p>
									Si l'une des deux parties a une élan de lucidité, elle peut rompre les fiançailles à
									n'importe quel moment, mais l'autre partie peut exiger un dédommagement des frais occasionnés.
									Chaque partie peut demander le retour des cadeaux, si elle le souhaite.
								</p>
								<p>
									En cas de décès accidentel de l’un des fiancés, l’autre peut, en principe, obtenir une
									indemnité pour tort moral et une indemnité pour perte de soutien auprès du responsable de l’accident.
								</p>
							</>}
						</section>
						<section className="mariage">
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
