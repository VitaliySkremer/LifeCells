import { observer } from 'mobx-react-lite'
import './App.scss'
import { Cell } from './Components/Cell/Cell'
import Cells from './Store/Cells'
import { Button } from './Components/UI/Button/Button'

function App() {

  const handleClick = () =>{
    Cells.createCell();
  }

  return (
    <div className='container'>
      <h1>Жизнь клеточек!</h1>
      {Cells.listCells.map((item,index)=>
        <Cell cell={item} key={index}/>  
      )}
      <Button onClick={handleClick}>зародить жизнь</Button>
    </div>
  )
}

export default observer(App)
