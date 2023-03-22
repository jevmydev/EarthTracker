import { useEffect, useState } from "react";
import { getAllQuakes } from "../services/quakes";
import { type ListQuakesContract } from "../types";

export const useQuakes = () => {
    const [quakes, setQuakes] = useState<ListQuakesContract | null>(null);

    const updateQuakes = async () => {
        try {
            const newQuakes = await getAllQuakes();
            setQuakes(newQuakes);
        } catch (err) {
            throw new Error(`Fetching to quakes API: ${err}`);
        }
    };

    useEffect(() => {
        const execQuakes = async () => await updateQuakes();
        execQuakes();
    }, []);

    return { quakes, updateQuakes };
};
