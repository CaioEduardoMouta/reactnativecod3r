import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const r = props.route
    const numero = props.route 
    && props.route.params
     && props.route.params.numero 
     ? props.route.params.numero : 0
    
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C = {numero}
        </TextoCentral>
    )
}