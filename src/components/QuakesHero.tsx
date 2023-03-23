import { type QuakesContractTypes } from "../types";

import QuakeData from "../elements/QuakeData";

interface QuakesHeroProps {
    heroQuake: QuakesContractTypes;
}

export const QuakesHero = ({ heroQuake }: QuakesHeroProps) => {
    return (
        <div>
            <article className="flex flex-col gap-6">
                <header className="flex flex-col items-start gap-2 sm:items-center sm:flex-row">
                    <h2 className="font-bold text-5xl">Último sismo</h2>
                    <span className="animate-ping p-1 rounded-full bg-indigo-300"></span>
                </header>
                <section>
                    <QuakeData title="Magnitud" data={heroQuake.magnitude} isSalient />
                </section>
                <footer>
                    <QuakeData title="Profundidad" data={heroQuake.depth} isInline />
                    <QuakeData title="Fecha" data={heroQuake.date} isInline />
                    <QuakeData title="Referencia geográfica" data={heroQuake.geoRef} isInline />
                </footer>
            </article>
        </div>
    );
};

export default QuakesHero;
