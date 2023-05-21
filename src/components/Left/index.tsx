import { Titulos } from "../../styles/theme";
import { Match } from "../Match";
import { useContexto } from '../../hooks'


function Left() {
  const {team} = useContexto();
  return (
      <div>
          <Titulos>Partidas {team ? `- ${team.name}`: '' }</Titulos>
          <Match />
      </div>
  )
}

export default Left;