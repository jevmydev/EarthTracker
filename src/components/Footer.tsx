import { ChileIcon } from "../elements/Icons";

export const Footer = () => {
    return (
        <footer>
            <div className="max-w-screen-md mx-auto p-4 pt-6">
                <p className="flex gap-2 items-center">
                    Datos proveídos para
                    <ChileIcon />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
