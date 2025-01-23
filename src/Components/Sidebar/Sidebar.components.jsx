import { Link, Route, Routes } from 'react-router-dom'
import { Button } from '../Button.components'
import HomeComponent from '../Home/HomeComponent';
import FeedComponent from '../Feed/FeedComponent';
import ReportComponent from "../Report/ReportComponent";
import DiscussComponent from '../Discuss/DiscussComponent';
import CalendarComponent from '../Calendar/CalendarComponent'
import ProjectComponent from '../Project/ProjectComponent';

export const SideBar = () => {
    const buttons = [
        { name: "home" },
        { name: "feed" },
        { name: "discuss"},
        { name: "report"},
        { name: "calendar"},
        { name: "project"}
      ];
      
          return(
            
        <div className='flex justify-start m-2 flex-col w-32 border border-black'>
      <h1 className='font-bold'>Projects</h1>
      {
          buttons.map((value)=> (
              
              <Link to={`/${value.name}`} key={value.name}>{value.name}</Link>
            ))
      }
    </div>
)
}
