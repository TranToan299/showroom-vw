export class ScenceModel{
    image: string
    label: string
    scene: string
    index: number
    type: string = ''
    constructor(img: string, label: string, scene: string, index: number, type: string = ''){
      this.image = img
      this.label = label 
      this.scene = scene
      this.index = index
    }
}