import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import api from '../../services/api'
import { ConteudoMatch, TeamContainer, ContainerMatch, MatchContainer, X} from '../../styles/theme';

export function Match() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        api.get(`/match`).then((res: any) => {
            const sortedMatches = res.data.sort((a: any, b: any) => {
                const dateA = parseISO(a.date);
                const dateB = parseISO(b.date);
                return dateA.getTime() - dateB.getTime();
            });
            const formatMatches = sortedMatches.map((match: any) => ({
                ...match,
                date: format(parseISO(match.date), 'dd/MM/yyyy'),
            }));
            setMatches(formatMatches);
        })
    })
    
    return (
        <TeamContainer>
            <MatchContainer>
                {matches.map((match: any) => (
                    <ContainerMatch key={match.id}>
                            <ConteudoMatch>{`${match.host.name}`} <X>X</X> {`${match.visitor.name}`}</ConteudoMatch>
                        <ConteudoMatch>{match.date}</ConteudoMatch>
                    </ContainerMatch>
                ))}
            </MatchContainer>
        </TeamContainer>
    )
}