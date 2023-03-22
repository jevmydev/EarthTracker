import { type ListQuakesContract } from "../types";

import QuakeData from "../elements/QuakeData";

interface QuakesListProps {
    quakes: ListQuakesContract;
}

export const QuakesList = ({ quakes }: QuakesListProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-5xl">Recientes</h2>
            <ul className="flex flex-col gap-2 pt-6">
                {quakes.map((quake) => {
                    return (
                        <li key={quake.id}>
                            <article className="border border-indigo-300 p-2 rounded w-full">
                                <QuakeData data={quake.magnitude} isSalient isInline />
                                <QuakeData data={quake.date} isInline />
                            </article>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default QuakesList;
