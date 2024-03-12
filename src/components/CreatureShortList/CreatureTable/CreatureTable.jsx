import CreatureItem from "../CreatureItem/CreatureItem";

const CreatureTable = ({monsterList}) => {

    return (
        <div>
            {monsterList?.map((m, index) => {
                return (
                    <CreatureItem monster={m}/>
                )
            })}
        </div>
    )
}

export default CreatureTable;