//Exportacion normal
// export const heroes = [
    //Exportacion por defecto (2)
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Exportacion normal
// export const owners = ['DC' , 'Marvel'];
const owners = ['DC' , 'Marvel'];

//(2)Se puede realizar una exportacion por defecto si en este caso lo único que vamos a hacer en este archivo será exportar heroes, se hace asi:
// export default heroes;

//Si queremos exportar ambas de una sola vez, cada una de un tipo:
export {
    heroes as default,
    owners
}





