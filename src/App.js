import AppNavbar from './components/AppNavbar.js';
import NewTrait from './components/NewTrait.js';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <>
        <AppNavbar />
        <Stack gap={1} style={{padding: '10px'}}>
            <NewTrait />
            <NewTrait />          
        </Stack>
    </>
  );
}

export default App;
