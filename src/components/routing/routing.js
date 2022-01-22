import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import { routes } from "./routes";
import HafezFaal from "../../pages/hafezFaal";
import Ganjineh from "../../pages/ganjineh";
function Routing() {
    const { home , hafezFaal , ganjineh} = routes;
    return (
        <BrowserRouter>
     <Routes>
                <Route exact path={home} element={<Home />} />
                <Route exact path={hafezFaal} element={ <HafezFaal />} />
                <Route exact path={ganjineh} element={ <Ganjineh />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
