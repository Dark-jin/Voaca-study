import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch("http://localhost:3001/days");

    if(days.length === 0) {
        return <span>Loading...</span> // 인터넷이 느릴 시
    }

    return ( 
         <ul className="list_day">
             {days.map(day => (
                 <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
         </ul>
    );
}