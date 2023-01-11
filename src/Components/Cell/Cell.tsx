import { EStatus, typeCell } from '../../Store/Cells'
import styles from './Cell.module.scss'

interface ICellProps {
  cell: typeCell
}

export const Cell = ({cell}:ICellProps) => {
  
  let color;
  let imogi;
  if(cell.status === EStatus.DEATH){
    color = styles.bg__DEATH;
    imogi = "💀";
  } else if(cell.status === EStatus.LIFE){
    color = styles.bg__LIFE;
    imogi = '🐣'
  } else {
    color = styles.bg__LIVE;
    imogi = '💥'
  }

  return (
    <div className={styles.cell}>
      <div className={[styles.img, color].join(' ')}>
        {imogi}
      </div>
      <div className={styles.status__wrapper}>
        <span className={styles.status}>{cell.status}</span>
        <span className={styles.some}>{cell.text}</span>
      </div>
    </div>
  )
}
