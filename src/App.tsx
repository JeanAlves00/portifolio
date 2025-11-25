import Header from "./components/Header/Index"
import GlobalShapes from "./components/Shapes/GlobalShapes"
import Hero from "./profile/Hero/index"
import GlobalStyles from "./styles/GlobalStyles"

function App() {

  return (
    <>
      <Header />
      <GlobalStyles />
      <GlobalShapes>
        <Hero />
      </GlobalShapes>

    </>
  )
}

export default App
