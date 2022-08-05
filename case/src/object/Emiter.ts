// Topic 消息名称，不做约束
import {Observable, Subscriber} from 'rxjs'

export class Emiter<Topic extends string | number> {
  observers : Map<Topic,Array<Subscriber<any>>>
  // observers : Array<Array<Subscriber<any>>>

  constructor(){
    // 不会超过20个枚举了
    this.observers = new Map() 
  }

  addObserver(topic : Topic, observer : Subscriber<any>){
    if(!this.observers.get(topic)) {
      this.observers.set(topic,[])
    }
    const list = this.observers.get(topic)
    list?.push(observer)
  }

  removeObserver(topic : Topic, observer : Subscriber<any>) {
    const list = this.observers.get(topic)
    if(list && list.length > 0) {
      this.observers.set(topic,list.filter(x => x !== observer))
    }
  }


  on(topic : Topic | Topic[]) : Observable<any> {

    return new Observable<any>(observer => {

      const addedObservers : Array<[Topic, Subscriber<any>]> = []
      if(Array.isArray(topic)) {
        topic.forEach(t => {
          this.addObserver(t, observer)
          addedObservers.push([t,observer])
        })
      } else {
        this.addObserver(topic, observer)
        addedObservers.push([topic, observer])
      }


      return {
        unsubscribe: () => {
          addedObservers.forEach(
            x => this.removeObserver(x[0], x[1])
          )
          
        },
      }
    })
  }

  emit(topic :Topic , data? : any) :void {
    if(this.observers.get(topic)) {
      this.observers.get(topic)?.forEach(observer => {
        observer.next(data)
      })
    }
  }
}