import { type ListQuakesContract } from "../types";

import QuakesItem from "./QuakesItem";

interface QuakesListProps {
    quakes: ListQuakesContract;
    updateHeroQuake: (id: string) => void;
}

export const QuakesList = ({ quakes, updateHeroQuake }: QuakesListProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-5xl">Recientes</h2>
            <ul className="flex flex-col gap-2 pt-6 overflow-auto max-h-96 pr-2">
                {quakes.map((quake) => {
                    return <QuakesItem key={quake.id} quake={quake} updateHeroQuake={updateHeroQuake} />;
                })}
            </ul>
        </div>
    );
};

export default QuakesList;
