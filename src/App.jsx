import { Routes, Route } from "react-router";
import styled from "styled-components";
import NoMatch from "./components/NoMatch";
import SharerPage from "./pages/SharerPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Container className="">
      <Routes>
        <Route path="*" element={<NoMatch />} />{" "}
        <Route path="" element={<HomePage />} />{" "}
        <Route path=":streamId" element={<SharerPage />} />{" "}
      </Routes>{" "}
    </Container>
  );
}
export default App;
const Container = styled.div`
  background: black;
  color: white;
  font-weight: 600;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 20px;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 40px;
  margin: auto;
`;
