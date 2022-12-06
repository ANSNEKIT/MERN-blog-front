import Container from '@mui/material/Container'
import Header from './components/Header/Header'

function App() {
    return (
        <>
            <Header />
            <Container maxWidth="xl" fixed>
                <h2>Hello world</h2>
            </Container>
        </>
    )
}

export default App
