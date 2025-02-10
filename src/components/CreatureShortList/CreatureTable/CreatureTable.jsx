import CreatureItem from "../CreatureItem/CreatureItem";
import CreatureTableHeader from "../CreatureTableHeader/CreatureTableHeader";

const CreatureTable = ({
    monsters,
    setCurrentMonsterID
}) => {

    return (
        <div>
            <CreatureTableHeader />
            {monsters?.map((monster, index) => {
                return (
                    <CreatureItem
                        monster={monster}
                        striped={index % 2 === 0}
                        setCurrentMonsterID={setCurrentMonsterID}
                        key={monster?.index}
                    />
                )
            })}
        </div>
    )
}

export default CreatureTable;