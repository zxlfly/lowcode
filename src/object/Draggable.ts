export class Draggable {
  private startX : number = 0
  private startY : number = 0
  private diffX : number = 0
  private diffY : number = 0
  start(){
    this.diffX = 0
    this.diffY = 0
  }
  update(e:DragEvent){
    this.diffX = e.clientX - this.startX
    this.diffY = e.clientY - this.diffY
  }
}