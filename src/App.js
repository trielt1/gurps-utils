// Bootstrap imports
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
// Local imports
import AppNavbar from './components/AppNavbar.js';
import Trait from './components/Trait.js';
//import TraitEditor from './components/TraitEditor.js';
// Object/function imports
import {useState} from 'react';
import {sampleTraits} from './samples/traits_sample.js';

//temporary imports
import {Modal,Form,ButtonGroup} from 'react-bootstrap';
//FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faCheck } from '@fortawesome/free-solid-svg-icons'

function TraitEditor () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup className='float-end'>
                        <Button 
                            variant='success' 
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </Button>
                        <Button 
                            variant='danger' 
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </Button>
                    </ButtonGroup>   
                </Modal.Footer>
            </Modal>
         </>
    )
}

function App() {
    const [traits, setTraits] = useState([])

    const deleteTraitHandler = id => setTraits(
        traits.filter(t => t.id !== id)
    )    

    const editTraitHandler = trait => {
        alert("I'll figure this out eventually")
    }

    return (
        <>
            <AppNavbar />
            <Stack gap={2} style={{padding: '10px'}}>
                <TraitEditor />
                <Button onClick={() => setTraits(sampleTraits)}>
                    Generate
                </Button>
                {
                    traits.map(it => (
                            <Trait 
                                key={it.id} 
                                trait={it} 
                                editHandler={() => editTraitHandler(it)}
                                deleteHandler={() => 
                                    deleteTraitHandler(it.id)}
                            />
                        )
                    )
                }
            </Stack>
        </>
    );
}

export default App;
