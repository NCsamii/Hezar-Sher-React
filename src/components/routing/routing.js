import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
function Routing(props) {
    const { paths , page} = props;
    return (
        <BrowserRouter>
     <Routes>
                <Route exact path={paths} element={page} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
