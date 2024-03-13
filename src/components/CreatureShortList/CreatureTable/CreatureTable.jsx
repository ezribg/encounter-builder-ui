import CreatureItem from "../CreatureItem/CreatureItem";
import CreatureTableHeader from "../CreatureTableHeader/CreatureTableHeader";

const CreatureTable = ({monsterList, nameRef}) => {

    return (
        <div>
            <CreatureTableHeader/>
            {monsterList?.map((m, index) => {
                return (
                    <CreatureItem monster={m} striped={index % 2 === 0} nameRef={nameRef}/>
                )
            })}
        </div>
    )
}

export default CreatureTable;