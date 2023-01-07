import Container from '@mui/material/Container'
import Header from './components/Header/Header'
import Posts from './pages/Posts'

function App() {
    return (
        <>
            <Header />
            <Container maxWidth="xl" fixed>
                <Posts />
            </Container>
        </>
    )
}

export default App
