import { useEffect, useState } from "react";
import { getAllQuakes } from "../services/quakes";
import { type QuakesContractTypes, type ListQuakesContract } from "../types";

export const useQuakes = () => {
    const [quakes, setQuakes] = useState<ListQuakesContract | null>(null);
    const [heroQuake, setHeroQuake] = useState<QuakesContractTypes | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const updateHeroQuake = (id: string) => {
        const selectedQuake = quakes?.filter((quake) => quake.id === id)?.at(0);
        if (!selectedQuake || !id) return;

        setHeroQuake(selectedQuake);
    };

    const updateQuakes = async () => {
        try {
            setLoading(true);

            const newQuakes = await getAllQuakes();
            const defaultHeroQuake = newQuakes?.at(0) ?? null;

            setQuakes(newQuakes);
            setHeroQuake(defaultHeroQuake);
        } catch (err) {
            setError(`Fetching to quakes API: ${err}`);
            throw new Error(`Fetching to quakes API: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const execQuakes = async () => await updateQuakes();
        execQuakes();
    }, []);

    return { quakes, heroQuake, loading, error, updateQuakes, updateHeroQuake };
};
