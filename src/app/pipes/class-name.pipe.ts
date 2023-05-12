import { Pipe, PipeTransform } from '@angular/core';

interface ClassNamesInput {
  [key: string]: string | boolean
}

interface ClassNamesOutput {
  [key: string]: boolean
}

@Pipe({
  name: 'className'
})
export class ClassNamePipe implements PipeTransform {

  transform(classNamesInput: ClassNamesInput,): ClassNamesOutput {
    const classNamesOutput: ClassNamesOutput = {}

    Object.entries(classNamesInput).forEach(([key, value]) => {
      if(typeof value === 'string'){
        if(!!value.length){
          classNamesOutput[value] = true
        }
      } else {
        classNamesOutput[key] = value
      }
    })

    return classNamesOutput
  }

}
