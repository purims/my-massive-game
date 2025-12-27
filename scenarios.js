const scenarios = [
    {
        id: 1,
        text: "May 14, 1607. You stand on the shore of the James River. The air is thick, humid, and buzzing with insects. The men are exhausted from the voyage, but the Council demands action. Where do we break ground?",
        image: "images/scene_01.jpg", 
        choices: [
            {
                text: "The Lowland Peninsula (Defensible but swampy)",
                outcome: { wood: 0, morale: -5, nextId: 2 },
                log: "You chose the peninsula. Ships can dock close, but the water tastes salt."
            },
            {
                text: "Further Upriver (Healthy but exposed)",
                outcome: { wood: -10, morale: 5, nextId: 2 },
                log: "The air is clearer here, but we are far from the ships."
            }
        ]
    },
    {
        id: 2,
        text: "Week 2. We need shelter. Captain Newport urges us to hunt for gold, but the sky threatens rain and the nights are cold.",
        image: "images/scene_02.jpg",
        choices: [
            {
                text: "Construct the Palisade Fort (Costs 40 Wood)",
                outcome: { wood: -40, morale: 5, nextId: 3 },
                log: "The triangular fort rises. The men are tired, but safe."
            },
            {
                text: "Build Cabins first (Costs 20 Wood)",
                outcome: { wood: -20, morale: 10, nextId: 3 },
                log: "Comfortable beds raise spirits, but we have no walls."
            },
            {
                text: "Send men to dig for Gold",
                outcome: { wood: 0, morale: -10, nextId: 3 },
                log: "No gold. And now we sleep in the rain."
            }
        ]
    },
    {
        id: 3,
        text: "Week 4. A man has been caught stealing extra rations of barley. He claims he is starving. Mutiny whispers in the tents.",
        image: "images/scene_03.jpg",
        choices: [
            {
                text: "Hang him as an example",
                outcome: { population: -1, morale: -20, nextId: 4 },
                log: "The colony watches in silence. Order is restored, but fear rules."
            },
            {
                text: "Flog him and reduce rations",
                outcome: { morale: -5, nextId: 4 },
                log: "He screams under the lash. The men are uneasy."
            },
            {
                text: "Forgive him",
                outcome: { food: -20, morale: 5, nextId: 4 },
                log: "You show mercy. Others see this as permission to steal. Food disappears."
            }
        ]
    },
    {
        id: 4,
        text: "Week 6. The Summer Sickness. The heat is unbearable and the water is bad. Men are burning with fever.",
        image: "images/scene_04.jpg",
        choices: [
            {
                text: "Ration the clean water (Saves Water, hurts Morale)",
                outcome: { morale: -15, population: -2, nextId: 5 },
                log: "Men die of thirst, but the sickness slows."
            },
            {
                text: "Brew beer from the grain (Costs Food)",
                outcome: { food: -50, morale: 10, nextId: 5 },
                log: "The alcohol kills the germs. The colony is drunk, but alive."
            }
        ]
    },
    {
        id: 5,
        text: "Week 8. A arrows flies from the treeline and strikes a worker! The Powhatan are testing our defenses.",
        image: "images/scene_02.jpg",
        choices: [
            {
                text: "Fire the Cannons (Scare tactic)",
                outcome: { morale: 10, nextId: 1 }, // Loops back to 1 for now
                log: "The thunder of the cannons scares them off."
            },
            {
                text: "Retreat inside",
                outcome: { morale: -10, population: -1, nextId: 1 },
                log: "We hide. They burn a cabin before leaving."
            }
        ]
    }
];
