import { type QuakesContractTypes } from "../types";

import QuakeData from "../elements/QuakeData";

interface QuakesListProps {
    quake: QuakesContractTypes;
    updateHeroQuake: (id: string) => void;
}

export const QuakesItem = ({ quake, updateHeroQuake }: QuakesListProps) => {
    const handleClick = () => {
        window.scrollTo(0, 0);
        updateHeroQuake(quake.id);
    };

    return (
        <li>
            <button className="border border-indigo-300 p-2 rounded w-full hover:bg-indigo-100" onClick={handleClick}>
                <QuakeData data={quake.magnitude} isSalient isInline />
                <QuakeData data={quake.date} isInline />
            </button>
        </li>
    );
};

export default QuakesItem;
