import Header from "./components/Header";
import Quakes from "./components/Quakes";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Quakes />
            </main>
            <Footer />
        </>
    );
};

export default App;
