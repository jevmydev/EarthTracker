import { FavIcon } from "../elements/Icons";

export const Header = () => {
    return (
        <header>
            <div className="max-w-screen-md mx-auto p-4">
                <h1>
                    <a className="flex items-center gap-2 font-bold text-xl text-indigo-600" href="/">
                        <FavIcon />
                        EarthTracker
                    </a>
                </h1>
            </div>
        </header>
    );
};

export default Header;
