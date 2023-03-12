// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
//FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
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
                    <Stack 
                        className='float-end'
                        direction='horizontal'
                        gap={1}
                    >
                       <Button
                            variant='primary'
                            onClick={props.infoHandler}
                       >
                            <FontAwesomeIcon icon={faCircleInfo} />
                       </Button>
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
                    </Stack>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}


export default Trait;
