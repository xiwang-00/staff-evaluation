import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./assets/style/main.scss"
import Modal from "./components/Modal";
import Header from "./containers/Header";
import HomePage from "./pages/HomePage"
import SinglePage from "./pages/SinglePage"

function App() {

  const [modalStatus, setModalStatus] = useState(false)
  const [userId, setUserId] = useState(0)
  const {single} = useParams()

  return (
    <div className="app">
      <Header />
      <h1>{single}</h1>
      <div className="container">
        <Modal modalStatus={modalStatus} userId={userId} setModalStatus={setModalStatus} />
        <Routes>
          <Route path="/" element={<HomePage setUserId={setUserId} userId={userId} modalStatus={modalStatus} setModalStatus={setModalStatus} />} />
          <Route path="/:single/:id" element={<SinglePage setUserId={setUserId} userId={userId} modalStatus={modalStatus} setModalStatus={setModalStatus} />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
