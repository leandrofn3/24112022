import React from 'react';
import Styled from 'styled-components'
import { SectionQarto, DivQarto, Quartoh3, QuartoP, img } from './ComponentsQuartos/index'


export default function QuartosCard() {
    return (
        <>
        <SectionQarto>
            <DivQarto>
                <img src={img} />
                <Quartoh3>
                    Lorem
                </Quartoh3>
                <QuartoP>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, neque quos quis repellat nam non mollitia aperiam. Unde, saepe explicabo dignissimos est placeat veniam ipsam sapiente possimus necessitatibus non rem?
                </QuartoP>
            </DivQarto>

            <DivQarto>
                <Quartoh3>
                    Lorem
                </Quartoh3>
                <QuartoP>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, neque quos quis repellat nam non mollitia aperiam. Unde, saepe explicabo dignissimos est placeat veniam ipsam sapiente possimus necessitatibus non rem?
                </QuartoP>
            </DivQarto>

            <DivQarto>
                <Quartoh3>
                    Lorem
                </Quartoh3>
                <QuartoP>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, neque quos quis repellat nam non mollitia aperiam. Unde, saepe explicabo dignissimos est placeat veniam ipsam sapiente possimus necessitatibus non rem?
                </QuartoP>
            </DivQarto>
        </SectionQarto>
        
        </>
    );
}
