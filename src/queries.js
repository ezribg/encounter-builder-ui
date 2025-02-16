export const GET_MONSTERS = `
    query Monster(order: $order) {
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
    query Monster($index: String) {
        monster(index: $index) {,
            index
            name,
            size,
            type,
            subtype,
            alignment,
            armor_class {
              value
            }
          hit_points
          hit_dice
          speed {
            walk
            burrow
            climb
            fly
            hover
            swim
          }
          strength
          dexterity
          constitution
          intelligence
          wisdom
          charisma
          proficiencies {
            proficiency {
              reference {
                ... on Skill {
                  index
                }
                ... on AbilityScore {
                  name
                }
              }
              type
            }
            value
          }
          damage_vulnerabilities
          damage_resistances
          damage_immunities
          condition_immunities {
            name
          }
          senses {
            blindsight
            darkvision
            tremorsense
            truesight
            passive_perception
          }
          languages
          challenge_rating
          xp
          special_abilities {
            name
            desc
          }
          actions {
            name
            desc
          }
          reactions {
            name
            desc
          }
          legendary_actions {
            name
            desc
          }
        }
    }
`;