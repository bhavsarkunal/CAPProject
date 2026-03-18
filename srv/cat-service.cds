using { teams as my } from '../db/schema';
service main {
    entity IndianTeam  as projection on my.Team1;
}