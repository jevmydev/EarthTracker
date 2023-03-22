import { useQuakes } from "../hooks/useQuakes";

import QuakesHero from "./QuakesHero";
import QuakesList from "./QuakesList";

export const Quakes = () => {
    const { quakes } = useQuakes();
    const lastQuake = quakes?.at(0);

    return (
        <section>
            <div className="max-w-screen-md mx-auto p-4 pt-6 flex flex-col gap-6 justify-between md:flex-row">
                {quakes && lastQuake && (
                    <>
                        <QuakesHero lastQuake={lastQuake} />
                        <QuakesList quakes={quakes} />
                    </>
                )}
            </div>
        </section>
    );
};

export default Quakes;
