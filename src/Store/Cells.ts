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

  constructor(){
    makeAutoObservable(this)
  }

  createCell(){
    const random = Math.random();
    if(random>0.5){
      this.listCells.push(LIVE_CELL)
    } else {
      this.listCells.push(DEATH_CELL)
    }
  }
}

export default new Cells();