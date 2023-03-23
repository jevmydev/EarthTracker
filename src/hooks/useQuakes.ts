import { useEffect, useState } from "react";
import { getAllQuakes } from "../services/quakes";
import { type QuakesContractTypes, type ListQuakesContract } from "../types";

export const useQuakes = () => {
    const [quakes, setQuakes] = useState<ListQuakesContract | null>(null);
    const [heroQuake, setHeroQuake] = useState<QuakesContractTypes | null>(null);

    const updateHeroQuake = (id: string) => {
        const selectedQuake = quakes?.filter((quake) => quake.id === id)?.at(0);
        if (!selectedQuake || !id) return;

        setHeroQuake(selectedQuake);
    };

    const updateQuakes = async () => {
        try {
            const newQuakes = await getAllQuakes();
            const defaultHeroQuake = newQuakes?.at(0) ?? null;

            setQuakes(newQuakes);
            setHeroQuake(defaultHeroQuake);
        } catch (err) {
            throw new Error(`Fetching to quakes API: ${err}`);
        }
    };

    useEffect(() => {
        const execQuakes = async () => await updateQuakes();
        execQuakes();
    }, []);

    return { quakes, heroQuake, updateQuakes, updateHeroQuake };
};
