import { makeAutoObservable } from "mobx";

export enum EStatus {
  DEATH = 'Мёртвая',
  LIVE = 'Живая',
  LIFE = 'Жизнь',
}

export enum EText {
  DEATH = 'или прикидывается',
  LIVE = 'и шевелится!',
  LIFE = 'Ку-ку!',
}

type DEATH = {
  status: EStatus.DEATH,
  img: string,
  text: EText.DEATH
}

type LIVE = {
  status: EStatus.LIVE,
  img: string,
  text: EText.LIVE
}

type LIFE = {
  status: EStatus.LIFE,
  img: string,
  text: EText.LIFE
}

export type typeCell = DEATH | LIVE | LIFE;

const DEATH_CELL: DEATH = {
  status: EStatus.DEATH,
  img: '',
  text: EText.DEATH
}

const LIVE_CELL: LIVE = {
  status: EStatus.LIVE,
  img: '',
  text: EText.LIVE
}

const LIFE_CELL: LIFE = {
  status: EStatus.LIFE,
  img: '',
  text: EText.LIFE
}

class Cells {

  listCells: typeCell[] = [];
  isTwice = 0;

  constructor(){
    makeAutoObservable(this)
  }

  createCell(){
    const random = Math.random();
    if(random>0.5){
      this.listCells.push(LIVE_CELL)
      this.isTwice++;
    } else {
      this.listCells.push(DEATH_CELL)
      this.isTwice = 0;
    }

    if(this.isTwice === 2){
      let isFirst = true;
      this.listCells = this.listCells.map(item=>{
        if (item.status === EStatus.LIVE && isFirst) {
          isFirst = false;
          return LIFE_CELL;
        }
        return item;
      })
    }
  }
}

export default new Cells();