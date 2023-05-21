import { Conteudo, TeamContainer, Titulo } from '../../styles/theme'
import { useContexto } from '../../hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export function Right() {
    const {teams, team,setTeam,theme} = useContexto()
    console.log(team)
    return (
        <TeamContainer>
            <Titulo>Times</Titulo>
            {teams.map((t: any) => ( 
                        <Conteudo key={t.id}  onClick={()=> setTeam(t) }> {t.name} {t.id === team?.id ? ( <FontAwesomeIcon icon={theme.name === 'light' ? faCheck : faSquareCheck}/>):(<> </>)}</Conteudo>
                ))}
            </TeamContainer>
    )
}