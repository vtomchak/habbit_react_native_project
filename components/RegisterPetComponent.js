import React, { useState } from 'react';

import BlinkingText from './BlinkingTextComponent';

const RegisterPetComponent = (props) => {

    const [text, setText] = useState('');
    const {setPetName} = props;

    const setName = (value) => {
        setText(value)
        setPetName(value);
    }

        return ( 
            <>
                <BlinkingInputWrapper>
                <StyledTextInput 
                    placeholder="Name me..." 
                    placeholderTextColor='ghostwhite' 
                    onChangeText={text => setName(text)} 
                    defaultValue={text}>
                </StyledTextInput>
                    <BlinkingText text="|" />
                </BlinkingInputWrapper>
                <PetImage 
                    source={require('../assets/images/boi1_egg.png')}
                    resizeMode='contain'>
                </PetImage>
            </>
         );
    }
 
export default RegisterPetComponent;
