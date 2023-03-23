import { useQuakes } from "../hooks/useQuakes";

import QuakesHero from "./QuakesHero";
import QuakesList from "./QuakesList";
import Loading from "./Loading";
import Error from "./Error";

export const Quakes = () => {
    const { quakes, heroQuake, loading, error, updateHeroQuake } = useQuakes();

    return (
        <section>
            <div className="max-w-screen-md mx-auto p-4 pt-6 flex flex-col gap-6 justify-between md:flex-row">
                {quakes && heroQuake && !loading && !error && (
                    <>
                        <QuakesHero heroQuake={heroQuake} />
                        <QuakesList quakes={quakes} updateHeroQuake={updateHeroQuake} />
                    </>
                )}
                {loading && <Loading />}
                {error && <Error />}
            </div>
        </section>
    );
};

export default Quakes;
