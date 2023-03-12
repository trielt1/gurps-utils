// Bootstrap imports
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// Local imports
import Trait from './Trait.js';
// Object/function imports
import {useState} from 'react';
import {sampleTraits} from '../samples/traits_sample.js';

function TraitList(){
    const [traits, setTraits] = useState([])

    const deleteTraitHandler = id => setTraits(
        traits.filter(t => t.id !== id)
    )    

    const editTraitHandler = trait => {
        alert("I'll figure this out eventually")
    }

    const infoTraitHandler = trait => {
        alert("I'll figure this out eventually")
    }

    return (
        <>
            <Stack gap={2}> 
                <Button onClick={() => setTraits(sampleTraits)}>
                    Generate
                </Button>
                {
                    traits.map(it => (
                            <Trait 
                                key={it.id} 
                                trait={it} 
                                infoHandler={() => infoTraitHandler(it)}
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

export default TraitList;
