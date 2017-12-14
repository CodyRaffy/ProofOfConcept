import { IPlayer } from "./../../../shared/models/Player"

const getAllPlayers: () => IPlayer[] = () => {
    return [
        { firstName: 'Cody', lastName: "Raffy", id: "7777777777" },
        { firstName: 'Missy', lastName: "Flynn", id: "1313131313" },
    ]
}

module.exports.getAllPlayers = getAllPlayers; 