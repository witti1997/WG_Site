import React from "react";
import {getWeek} from "date-fns";
import PutzplanComponent from "./PutzplanComponent";

interface Rotation {
    task: string;
    person: string;
}

const PutzplanContainer: React.FC = () => {
    const tasks = ["Küche", "Bad", "Sonstiges"];
    const person = ["Andi", "Magda", "Juliana"];

    function getRotationForWeek(weekNumber: number): Rotation[] {
        return person.map((s_person, index) => ({
            task: tasks[(index + weekNumber) % person.length],
            person: s_person, //Läuft in der Art einfach andersrum durch
        }));
    }

    const currentWeek = getWeek(new Date(), { weekStartsOn: 1 })+4;
    const rotation = getRotationForWeek(currentWeek)
    console.log(rotation)

    return (
        <PutzplanComponent rotation={rotation}/>
    )
}

export {PutzplanContainer};