import { Link, Route, Routes } from 'react-router-dom'
import { Button } from '../Button.components'
export const SideBar = () => {
    const buttons = ["home","feed","discuss","report","calender","project"]
    return(
        <div className='flex justify-start m-2 flex-col w-32 border border-black'>
      <h1 className='font-bold'>Projects</h1>
      {
          buttons.map((value)=> (
              
              <Link to={`/${value}`} key={value}>{value}</Link>
            ))
      }
      <Routes>
        {buttons.map((value)=>(
            <Route key={value} path={`/${value}`} element={
                <Button 
                value={value}
                className="mr-2"
                />
            }
            />
        )
    )
}
      </Routes>
    </div>
)
}
