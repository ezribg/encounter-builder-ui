export const GET_MONSTERS = `
    query Monster {
        monsters {
            alignment
            index
            name
            size
            type
        }
    }
`;

export const GET_MONSTER = `
    query Monster {
        monster {,
            actions {
            name
            desc
            }
            alignment
            armor_class {
            type
            value
            }
            challenge_rating
            charisma
            condition_immunities {
            name
            }
            constitution
            damage_immunities
            damage_resistances
            damage_vulnerabilities
            dexterity
            hit_points
            index
            intelligence
            languages
            legendary_actions {
            name
            desc
            }
            name
            reactions {
            desc
            name
            }
            senses {
            blindsight
            darkvision
            passive_perception
            tremorsense
            truesight
            }
            size
            speed {
            burrow
            climb
            fly
            hover
            swim
            walk
            }
            strength
            subtype
            type
            wisdom
            xp
        }
    }
`;