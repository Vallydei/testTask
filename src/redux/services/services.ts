import { makeOperation, returnInput } from "../../api/fakeApi";


export class ValueService {
   static async getValue({value, additional}: {value:number, additional:number}): Promise<number> {
      const response = await makeOperation(value, additional);
        return response;
    }
}

export class InputService {
  static async getInput(input:number): Promise<number> {
    const response = await returnInput(input);
    return response;
   }
}

