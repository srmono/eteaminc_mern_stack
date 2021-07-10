import React, {useContext} from 'react'
import { UserContext, EteamContext } from '../App'

function ComponentE() {

    const user = useContext(UserContext);
    const eteam = useContext(EteamContext);

    return (
        <div>
            { user } - { eteam }
        </div>
    )
}

export default ComponentE
