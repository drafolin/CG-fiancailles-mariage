import ArrowForward from "./assets/arrow-forward.png";
import ArrowBackwards from "./assets/arrow-backwards.png";
import ManIcon from "./assets/man.png";
import WomanIcon from "./assets/woman.png";
import HeartIcon from "./assets/heart.png";
import HeartBreak from "./assets/heartbreak.png";
import RingsIcon from "./assets/rings.png";
import { useState } from "react";

export default function App() {
	const [shown, setShown] = useState(0);
	const [areEngaged, setEngaged] = useState(true);
	const [currentMarriedMenu, setMarriedMenu] = useState(0);

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
							<p>
								Le mariage en Suisse unit officiellement une femme et un homme, soumis à des conditions
								telles que la majorité légale, la capacité de discernement, l'absence de mariage préexistant,
								et l'évitement des liens de parenté rapprochés.
							</p>
							<div className="section">
								<img src={RingsIcon} alt="Alliances"/>
								<div className="selector">
									<button
										onClick={() => setMarriedMenu(0)}
										className={currentMarriedMenu === 0 ? "active" : ""}>
										Promesse
									</button>
									<button
										onClick={() => setMarriedMenu(1)}
										className={currentMarriedMenu === 1 ? "active" : ""}>
										Échange des consentements
									</button>
									<button
										onClick={() => setMarriedMenu(2)}
										className={currentMarriedMenu === 2 ? "active" : ""}>
										Annulation
									</button>
								</div>
							</div>
							{
								currentMarriedMenu === 0 ? <>
									<p>
										La validation de la promesse de mariage se fait à l'Office d'état civil,
										marquant l'engagement en vue du mariage.
										Le choix du lieu de célébration est libre.
									</p>
								</>: currentMarriedMenu === 1 ? <>
									<p>
										La cérémonie, devant l'officier d'état civil et deux témoins,
										doit avoir lieu dans les trois mois suivant la promesse.
										Le mariage religieux suit obligatoirement le mariage civil.
									</p>
									<p>
										Malgré ce qu'on dit à l'église, aucune opposition n'est
										possible lors de la cérémonie religieuse.
									</p>
								</>: <>
									<p>
										Le juge peut annuler automatiquement le mariage en cas de bigamie,
										incapacité mentale durable, parenté proche, ou mariage blanc.
										Sur demande, l'annulation peut également intervenir en cas d'erreur, tromperie,
										menace, ou incapacité temporaire.
									</p>
								</>
							}
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
