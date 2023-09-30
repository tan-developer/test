// your types here


interface ObjectGame {
  id : String ,
  color? : 'red' | 'green' | 'blue' | undefined,
  shape? : "square" | "circle"| "triangle"| undefined,
  pairId : String
}



export type {ObjectGame}
