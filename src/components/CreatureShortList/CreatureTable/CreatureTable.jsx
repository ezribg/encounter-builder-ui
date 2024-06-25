import { useRef } from "react";
import CreatureItem from "../CreatureItem/CreatureItem";
import CreatureTableHeader from "../CreatureTableHeader/CreatureTableHeader";

const CreatureTable = ({monsterList, statBlockRef}) => {
    
    return (
        <div>
            <CreatureTableHeader/>
            {monsterList?.map((m, index) => {
                return (
                    <CreatureItem
                        monster={m}
                        striped={index % 2 === 0}
                        statBlockRef={statBlockRef}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default CreatureTable;