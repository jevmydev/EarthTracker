interface QuakeDataProps {
    title?: string;
    data: string;
    isSalient?: boolean;
    isInline?: boolean;
}

export const QuakeData = ({ title, data, isSalient, isInline }: QuakeDataProps) => {
    const isInlineContainer = isInline ? "flex flex-wrap items-center gap-2" : "";
    const isSalientData = isSalient ? "font-bold text-6xl text-indigo-600" : "text-xl";

    return (
        <div className={isInlineContainer}>
            {title && <h3 className="font-medium text-2xl">{title}</h3>}
            <span className={isSalientData}>{data}</span>
        </div>
    );
};

export default QuakeData;
