import CreatureItem from "../CreatureItem/CreatureItem";
import CreatureTableHeader from "../CreatureTableHeader/CreatureTableHeader";

const CreatureTable = ({monsterList}) => {

    return (
        <div>
            <CreatureTableHeader/>
            {monsterList?.map((m, index) => {
                return (
                    <CreatureItem monster={m}/>
                )
            })}
        </div>
    )
}

export default CreatureTable;