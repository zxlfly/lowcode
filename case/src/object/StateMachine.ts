import { Emiter } from './Emiter';
type StateTransferFunc = (...args:Array<any>)=>void
export class StateMachine<
  S extends string | number,
  A extends string | number,
  Topic extends string | number
> extends Emiter<Topic> {
  private state : S
  // S => A => S
  private transferTable : Map<S,Map<A,[StateTransferFunc,S]>>
  constructor(initialState : S){
    super()
    this.state = initialState
    this.transferTable = new Map()
  }
  private addTransfer(from:S,to:S,action:A,fn:StateTransferFunc){
    if(!this.transferTable.has(from)){
      this.transferTable.set(from,new Map())
    }
    const table = this.transferTable.get(from)
    table?.set(action,[fn,to])
  }
  public register(from:S|S[],to:S,action:A,fn:StateTransferFunc){
    if(Array.isArray(from)){
      from.forEach(s=>{
        this.addTransfer(s,to,action,fn)
      })
    }else{
      this.addTransfer(from,to,action,fn)
    }
  }
  public dispatch(action:A,...date:Array<any>){
    const table = this.transferTable.get(this.state)
    const transger=table?.get(action)
    if(!transger){
      return false
    }
    if(!table?.has(action)) {
			return false
		}
    const [fn,next] = transger
    fn(...date)
    this.state=next
    // 自动转换 处理不需要转换函数的情况
    while(this.dispatch("<auto>" as A,...date))
    return true
  }
}