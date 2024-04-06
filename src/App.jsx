import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";



export default function App() {
  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      {/* <Routes>
      </Routes> */}
    </Container>
  )
}

