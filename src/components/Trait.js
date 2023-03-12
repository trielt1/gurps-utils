// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faGear, faClose, faCheck } from '@fortawesome/free-solid-svg-icons'
//Object/function imports
import {useState} from 'react'

function Trait({trait, ...props}){
    return (
        <Card>
            <Card.Body>
                <Card.Title>{trait.name}</Card.Title>
                <Card.Text>{trait.description}</Card.Text>
                <Card.Footer>
                    <span>
                        Cost: {trait.cost} pts 
                        {trait.maxLevel !== 1 ? '/lvl' : ''}
                    </span>
                    <ButtonGroup className='float-end'>
                       <Button 
                            variant='success' 
                            onClick={props.editHandler}
                       >
                            <FontAwesomeIcon icon={faGear} />
                       </Button>
                       <Button 
                            variant='danger' 
                            onClick={props.deleteHandler}
                       >
                            <FontAwesomeIcon icon={faTrash} />
                       </Button>
                    </ButtonGroup>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}


export default Trait;
