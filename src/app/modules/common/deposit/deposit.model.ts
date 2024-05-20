
export class LocationStore {
    storeName: string = ''
    address: string = ''
    distance: string = ''
    location: string = ''
    constructor(data: any) {
        this.storeName = data.storeName
        this.address = data.address
        this.distance = data.distance
        this.location = data.location
    }
}


export class CarModel {
    name: string
    version: string
    color: string

    constructor(data: any) {
        this.name = data.name
        this.version = data.version
        this.color = data.color
    }
}

export class LocationModel {
    name: string = ''
    value: number = -1
    constructor(data: any) {
        this.name = data.name
        this.value = data.value
    }
}