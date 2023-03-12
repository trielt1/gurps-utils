export const sampleTraits = [
    {
        id: 1,
        name: 'Brachiator',
        description: 'You can travel by swinging on vines, tree branches, ropes, chandeliers, etc. You get +2 to Climbing skill, and can move at half your Basic Move while brachiating.',
        cost: 5,
        maxLevel:1,
        requires:[],
        forbids:[],
    },
    {
        id: 2,
        name: 'Breath-Holding',
        description: 'You are adept at holding your breath. Each level doubles the length of time you can do so (see Holding Your Breath, B351). Normal humans may not take this advantage - to be a world-record diver, learn Breath Control. Nonhumans and supers can combine this advantage with Breath Control!',
        cost: 2,
        maxLevel:0,
        requires:[],
        forbids:[],
    },
    {
        id: 3,
        name: 'Combat Reflexes',
        description: 'You have extraordinary reactions, and are rarely surprised for more than a moment. You get +1 to all active defense rolls (see Defending, B374), +1 to Fast-Draw skill, and +2 to Fright Checks (see Fright Checks, p. 360). You never “freeze” in a surprise situation, and get +6 on all IQ rolls to wake up, or to recover from surprise or mental “stun.” Your side gets +1 on initiative rolls to avoid a surprise attack – +2 if you are the leader. For details, see Surprise Attacks and Initiative (B393). Combat Reflexes is included in Enhanced Time Sense (B52). If you have ETS, you cannot also take Combat Reflexes.',
        cost: 15,
        maxLevel:1,
        requires:[],
        forbids:['Enhanced Time Sense'],
    }
];
