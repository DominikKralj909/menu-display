import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/Homepage";

function App() {

	return (
		<>
			<BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
		</>
	);
}

export default App
