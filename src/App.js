import React, { useEffect } from "react";
import { FinalCart, Header } from "./components";
import { MainContainer, CreateContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import {AboutPage} from './components';
import {Questionnaire} from './components'
export const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col">
        <Header />
        <main className="mt-20 md:mt-24  px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ques" element={<Questionnaire /> } />
            <Route path="/pay" element={<FinalCart /> } />


          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
