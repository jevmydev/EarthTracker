import { type QuakesContractTypes } from "../types";

import QuakeData from "../elements/QuakeData";

interface QuakesHeroProps {
    lastQuake: QuakesContractTypes;
}

export const QuakesHero = ({ lastQuake }: QuakesHeroProps) => {
    return (
        <div>
            <article className="flex flex-col gap-6">
                <header className="flex items-center gap-2">
                    <h2 className="font-bold text-5xl">Último sismo</h2>
                    <span className="animate-ping p-1 rounded-full bg-indigo-300"></span>
                </header>
                <section>
                    <QuakeData title="Magnitud" data={lastQuake.magnitude} isSalient />
                </section>
                <footer>
                    <QuakeData title="Profundidad" data={lastQuake.depth} isInline />
                    <QuakeData title="Fecha" data={lastQuake.date} isInline />
                    <QuakeData title="Referencia geográfica" data={lastQuake.geoRef} isInline />
                </footer>
            </article>
        </div>
    );
};

export default QuakesHero;
