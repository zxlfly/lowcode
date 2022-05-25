import { Form } from "./Form";
import { FormDSL } from "./form.types";

export class FormNode{
  private children:FormNode[]
  private form : Form
  constructor(private dsl:FormDSL,form:Form){
    this.children=[]
    if(dsl.children){
      this.children = dsl.children.map(d=>new FormNode(d,form))
    }
  }
  onDataChange(value:any){
    this.form.onDataChange(this.dsl.path!,value)
  }
  static fromDSL(del:FormDSL,form:Form){
    return new FormNode(del,form)
  }
}