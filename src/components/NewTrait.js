import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoremIpsum from 'react-lorem-ipsum';

function NewTrait() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="newtrait-collapse-text"
                        aria-expanded={open}
                    >
                        New Trait
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <Collapse in={open}>
                        <Card>
                            <Card.Title>New Trait</Card.Title>
                            <Card.Body><LoremIpsum p={1} /></Card.Body>
                        </Card>
                    </Collapse>
                </Col>
            </Row>
        </Container>
    );
}

export default NewTrait;
