const scenarios = [
    {
        id: 1,
        text: "May 14, 1607. You have selected a site on a marshy peninsula. The water is deep enough to dock the ships, but the air is thick with mosquitoes. The council awaits your first command.",
        image: "images/scene_01.jpg", 
        choices: [
            {
                text: "Build the Fort immediately (Safety first)",
                outcome: { wood: -20, morale: 5, nextId: 2 },
                log: "The men grumble but the palisade walls go up."
            },
            {
                text: "Dig wells for fresh water (Health first)",
                outcome: { wood: -5, morale: 10, nextId: 2 },
                log: "The river water is brackish. Fresh water raises spirits."
            },
            {
                text: "Search for Gold (Greed)",
                outcome: { food: -10, morale: -5, nextId: 2 },
                log: "No gold is found. Time was wasted."
            }
        ]
    },
    {
        id: 2,
        text: "Week 2. The stores from the ships are depleting. A group of Powhatan warriors watches from the tree line. They do not approach.",
        image: "images/scene_02.jpg",
        choices: [
            {
                text: "Send a trade delegation",
                outcome: { food: 20, wood: -5, nextId: 1 }, // Looping back to 1 for testing!
                log: "They trade corn for copper and beads."
            },
            {
                text: "Fire a warning shot",
                outcome: { morale: -10, nextId: 1 },
                log: "They scatter, but war drums beat in the distance."
            }
        ]
    }
];
