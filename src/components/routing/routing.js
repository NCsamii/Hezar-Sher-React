import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import { routes } from "./routes";
import HafezFaal from "../../pages/hafezFaal";
function Routing() {
    const { home , hafezFaal} = routes;
    return (
        <BrowserRouter>
     <Routes>
                <Route exact path={home} element={<Home />} />
                <Route exact path={hafezFaal} element={ <HafezFaal />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
