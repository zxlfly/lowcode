import { FormDSL } from "./form.types"
const useForm:FormDSL = {
  type:'form',
  children:[{
    type:'form',
    children:[{
      type:'input',
      path:['basic','username'],
    },{
      type:'single-choice',
      path:['basic','sex'],
      props:{
        selection:[
          {value:'male',label:'男'},
          {value:'female',label:'女'}
        ]
      }
    }]
  },{
    type:'form',
    children:[{
      type:'text',
      path:['product','detail'],
    },{
      type:'branch',
      children:[{
        type:'color',
        path:['product','color'],
        props:{
          selection:[
            {value:'red',label:'红色'},
            {value:'blue',label:'蓝色'}
          ]
        }
      },{
        type:'shape',
        path:['product','shape'],
        props:{
          selection:[
            {value:'box',label:'方形'},
            {value:'circle',label:'原型'}
          ]
        }
      }]
    }]
  }]
}
export default useForm