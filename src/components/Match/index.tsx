import { ConteudoMatch, TeamContainer, ContainerMatch, MatchContainer, X} from '../../styles/theme';
import { useContexto } from '../../hooks'

export function Match() {
    const {matches} = useContexto()
    const formatDat = (date:string) => {
        const [data,] = new Date(date).toLocaleDateString('pt-BR',{timeZone:'America/Sao_Paulo'}).split(',');
        return data
    }
    
    return (
        <TeamContainer>
            <MatchContainer>
                {matches.map((match: any) => (
                    <ContainerMatch key={match.id}>
                            <ConteudoMatch>{`${match.host.name}`} <X>X</X> {`${match.visitor.name}`}</ConteudoMatch>
                        <ConteudoMatch>{formatDat(match.date)}</ConteudoMatch>
                    </ContainerMatch>
                ))}
            </MatchContainer>
        </TeamContainer>
    )
}