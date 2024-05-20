import { Component, OnInit } from "@angular/core";
import { listProduct } from "src/app/mocks/listProduct";
import { createRange } from "src/app/lib/myLib";
import { CommonService } from "src/app/services/apis/common.service";
import { formatMoney } from "src/app/lib/myLib";
@Component({
    selector: 'product-compare',
    templateUrl: 'product-compare.component.html',
    styleUrls: ['./product-compare.component.scss']
})
export class ProductCompareComponent implements OnInit {
    constructor(
        private commonService: CommonService
    ) { }
    ngOnInit(): void {
        window.scrollTo({ top: 0, })
        // send view
        this.commonService.getIp().subscribe((data: any) => {
            let ip = data.ip
            this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
            })
        })

        // get product
        this.commonService.getProduct().subscribe((data: any) => {
            data = data.Items
            data.forEach((item: any) => item.isChoosed = false)
            console.log('data', data)
            this.listProduct = data
        })
        // get key table
        this.commonService.getProductAttributes(13).subscribe((data: any) => {
            data.forEach((item: any) => {
                if (this.objKeyTable[item.Code]) {
                    this.objKeyTable[item.Code].push(item.Name)
                } else {
                    this.objKeyTable[item.Code] = [item.Name]
                }
            })
            console.log(' this.objKeyTable', this.objKeyTable)
        })


    }


    showModalChooseCar: boolean = false
    listProduct: any[] = []
    listProductChoosed: any = []
    orderChoose: number = 0
    objProductChoosed: any = {}
    objProductChoosedAttributes: any = {}
    objKeyTable: any = {}

    formatMoney = formatMoney
    createRange = createRange
    openModalChooseCar(order: number) {
        this.showModalChooseCar = true
        this.orderChoose = order
    }
    chooseCar(e: any) {
        let { id, index } = e.target.dataset
        console.log({ id, index })
        index = parseInt(index)
        id = parseInt(id)
        this.listProduct[index].isChoosed = true
        this.objProductChoosed[this.orderChoose] = this.listProduct[index]
        this.showModalChooseCar = false
        this.getProductAttributes(id)
    }
    removeCar(order: number) {
        let id = this.objProductChoosed[order].Id
        console.log(id)
        for (let i = 0; i < this.listProduct.length; i++) if (this.listProduct[i].Id == id) this.listProduct[i].isChoosed = false
        this.objProductChoosed[order] = null
        this.objProductChoosedAttributes[order] = null

    }
    getProductAttributes(id: number) {
        this.commonService.getProductAttributes(id).subscribe((data: any) => {
            this.objProductChoosedAttributes[this.orderChoose] = data
        })
    }
    findValueFromKey(objProductChoosedAttribute: any, key: string) {
        return objProductChoosedAttribute.find((item: any) => item.Name == key).Value
    }


}