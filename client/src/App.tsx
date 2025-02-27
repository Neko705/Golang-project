import { Container, Stack } from '@chakra-ui/react'
import Navbar from './comp/Navbar'
import TodoForm from './comp/TodoForm'
import TodoList from './comp/TodoList'

export const BASE_URL = 'http://localhost:5000/api'
function App() {
  return (
    <Stack h="100vh">
      <Navbar/>
      <Container>
         <TodoForm />
         <TodoList />
      </Container>
    </Stack>
    
  )
}

export default App
