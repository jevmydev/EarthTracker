export const parseDate = (date: string) => {
    const newDate = new Date(date);
    const parsedDate = Intl.DateTimeFormat("es", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(newDate);

    return parsedDate;
};

export const parseDepth = (depth: string) => {
    return `${depth} km`;
};
