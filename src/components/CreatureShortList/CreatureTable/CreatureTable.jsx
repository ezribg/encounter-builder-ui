import { useRef } from "react";
import CreatureItem from "../CreatureItem/CreatureItem";
import CreatureTableHeader from "../CreatureTableHeader/CreatureTableHeader";

const CreatureTable = ({monsterList, setCurrentMonster}) => {

    // // * Prop variables
    // let monsterList = props.monsterList;
    // let currentMonster = props.currentMonster;

    // // * Prop functions
    // let setCurrentMonster = props.setCurrentMonster;
    
    return (
        <div>
            <CreatureTableHeader/>
            {monsterList?.map((monster, index) => {
                return (
                    <CreatureItem
                        monster={monster}
                        striped={index % 2 === 0}
                        setCurrentMonster={setCurrentMonster}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default CreatureTable;