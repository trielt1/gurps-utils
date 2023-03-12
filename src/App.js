// Bootstrap imports
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// Local imports
import AppNavbar from './components/AppNavbar.js';
import TraitList from './components/TraitList.js';
//import TraitEditor from './components/TraitEditor.js';
// Object/function imports
import {useState} from 'react';
import {sampleTraits} from './samples/traits_sample.js';

//temporary imports
import {Modal,Form,ButtonGroup} from 'react-bootstrap';
//FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faCheck } from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <>
            <AppNavbar />
            <TraitList />
        </>
    );
}

export default App;
