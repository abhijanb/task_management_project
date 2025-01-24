import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SideBar } from './Components/Sidebar/Sidebar.components'
import { Navbar } from './Components/Navbar/Navbar.components'
import HomeComponent from './Components/Home/HomeComponent';
import FeedComponent from './Components/Feed/FeedComponent';
import DiscussComponent from './Components/Discuss/DiscussComponent';
import ReportComponent from './Components/Report/ReportComponent';
import ProjectComponent from './Components/Project/ProjectComponent';
import CalendarComponent from './Components/Calendar/CalendarComponent';
import DashboardComponent from './Components/Dashboard/DashboardComponent';
import TasksComponent from './Components/Tasks/TasksComponent';
import IssueComponent from './Components/Issue/IssueComponent';
import MilestoneComponent from './Components/Milestone/MilestoneComponent';
import IssuesComponent from './Components/IssuesComponent/IssuesComponent';
import DocumentsComponent from './Components/DocumentsComponent/DocumentsComponent';
import FinanceComponent from './Components/FinanceComponent/FinanceComponent';
import ForumComponent from './Components/ForumComponent/ForumComponent';
import PagesComponent from './Components/PagesComponent/PagesComponent';
import UsersComponent from './Components/UsersComponent/UsersComponent';

function App() {
  const combinedArray = [
    { name: "home", element: <HomeComponent /> },
    { name: "feed", element: <FeedComponent /> },
    { name: "discuss", element: <DiscussComponent /> },
    { name: "report", element: <ReportComponent /> },
    { name: "calendar", element: <CalendarComponent /> },
    { name: "project", element: <ProjectComponent /> },
    { name: "dashboard", element: <DashboardComponent /> },
    { name: "tasks", element: <TasksComponent /> },
    { name: "issue", element: <IssueComponent /> },
    { name: "milestone", element: <MilestoneComponent /> },
    { name: "issues", element: <IssuesComponent /> },
    { name: "documents", element: <DocumentsComponent /> },
    { name: "finance", element: <FinanceComponent /> },
    { name: "form", element: <ForumComponent /> },
    { name: "pages", element: <PagesComponent /> },
    { name: "users", element: <UsersComponent /> }
  ];

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-row'>
          <SideBar />
          <div className='flex flex-col'>

            <div className='w-[1150px]  h-full m-3' >
              <Navbar className="m-2" />
            </div>
            <div>
              <Routes>
                {combinedArray.map((value) => (
                  <Route key={`/${value.name}`} path={`/${value.name}`} element={value.element} />
                ))
                }
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
