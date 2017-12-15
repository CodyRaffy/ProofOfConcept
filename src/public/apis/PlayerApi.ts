import axios from 'axios';

export const fetchAllPlayers = axios.get("./api/players");