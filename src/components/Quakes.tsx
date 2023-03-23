import { useQuakes } from "../hooks/useQuakes";

import QuakesHero from "./QuakesHero";
import QuakesList from "./QuakesList";

export const Quakes = () => {
    const { quakes, heroQuake, updateHeroQuake } = useQuakes();

    return (
        <section>
            <div className="max-w-screen-md mx-auto p-4 pt-6 flex flex-col gap-6 justify-between md:flex-row">
                {quakes && heroQuake && (
                    <>
                        <QuakesHero heroQuake={heroQuake} />
                        <QuakesList quakes={quakes} updateHeroQuake={updateHeroQuake} />
                    </>
                )}
            </div>
        </section>
    );
};

export default Quakes;
