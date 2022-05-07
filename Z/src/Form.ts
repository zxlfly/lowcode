import {Map} from 'immutable'
import { FormDSL } from './form.types'
import { FormNode } from './FormNode'
export class Form{
  private data : Map<string,any> = Map({})
  private root : FormNode
  constructor(dsl : FormDSL){
    this.root = FormNode.fromDSL(dsl,this)
  }
  onDataChange(path : (string | number)[], value : any){
    this.data = this.data.setIn(path, value)
  }
}
