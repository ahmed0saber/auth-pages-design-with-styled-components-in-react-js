import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NoPage from "./components/NoPage"

const AuthPagesWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #F7F7F7;
  background: #0093E9 linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    font-family: 'Bitter', sans-serif;
  }
`

const AuthPagesContainer = styled.div`
  width: 96%;
  max-width: 500px;
  background-color: #F7F7F7;
  padding: 12px;
  box-shadow: 0px 0px 2px 2px #32323212;
  border-radius: 2px;
`

function App() {
  return (
    <BrowserRouter>
      <AuthPagesWrapper>
        <GlobalStyle/>
        <AuthPagesContainer>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="*" element={<NoPage/>} />
          </Routes>
        </AuthPagesContainer>
      </AuthPagesWrapper>
    </BrowserRouter>
  )
}

export default App
