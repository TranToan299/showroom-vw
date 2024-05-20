import { Component, OnInit } from "@angular/core";
import { CarModel, LocationModel, LocationStore } from "./deposit.model";
import { MessageService } from 'primeng/api';
@Component(
    {
        selector: 'deposit',
        templateUrl: './deposit.component.html',
        styleUrls: ['./deposit.component.css']
    }
)
export class DepositComponent implements OnInit {
    public prodCategory = [
        'Tiguan', 'Polo', 'Teramont'
    ]
    public prodVersion = [
        'Version 1.0', 'Version 1.2'
    ]
    public prodColor = [
        '#fff', '#C2CACF', '#E4002C', '#001E50', '#000'
    ]

    public locations: LocationModel[] = [
        new LocationModel({ name: '--Chọn--', value: -1 }),
        new LocationModel({ name: 'Hồ Chí Minh', value: 1 }),
        new LocationModel({ name: 'Hà Nội', value: 2 })
    ]

    storeSelect!: LocationStore
    locationSelect: string = 'Hồ Chí Minh'

    public detailLocationSelect: LocationStore[] = []


    //Customer
    public firstNameCustomer: string = ''
    public lastNameCustomer: string = ''
    public addressCustomer: string = ''
    public mobileCustomer: string = ''
    public emailCustomer: string = ''
    public nameCustomer: string = ''
    public message: string = ''

    public carSelect: CarModel = new CarModel({
        name: 'Polo',
        version: 'version 1.0',
        color: '#C2CACF'
    })
    public detailLocation: LocationStore[] = [
        new LocationStore({
            storeName: 'VW An Phu',
            distance: '1.19 km',
            address: 'Số 6 Trường Chinh, p. 15',
            location: 'Hồ Chí Minh'
        }),
        new LocationStore({
            storeName: 'VW Sai Gon',
            distance: '3.6 km',
            address: 'Số 6 Trường Chinh, p. 15',
            location: 'Hồ Chí Minh'
        }),
        new LocationStore({
            storeName: 'VW Thuan An',
            distance: '9.15 km',
            address: 'Số 6 Trường Chinh, p. 15',
            location: 'Hồ Chí Minh'
        })
    ]

    constructor(private messageService: MessageService) {

    }

    ngOnInit(): void {

    }

    public categorySelect: string = ''

    changeCategory(category: string) {
        this.categorySelect = category
    }

    changeLocation(location: any) {
        this.detailLocationSelect = this.detailLocation.filter(d => d.location === location.name)
    }

    selectStore(store: LocationStore) {
        this.storeSelect = store
    }

    saveRequest() {
        if (this.checkCondition()) {
            const model = {
                customer: {
                    name: this.nameCustomer,
                    address: this.addressCustomer,
                    email: this.emailCustomer,
                    mobile: this.mobileCustomer,
                },
                locationStore: this.storeSelect,
                carModel: this.carSelect
            }
            localStorage.setItem('customers', JSON.stringify(model));
            this.messageService.add({ severity: 'success', summary: 'Gửi yêu cầu', detail: 'Gửi yêu cầu thành công!!!' });
        } else {
            this.messageService.add({ severity: 'warning', summary: 'Service Message', detail: 'Bạn chưa hoàn thành form đăng ký!!' });
        }
    }

    checkCondition(): boolean {
        let condition: boolean = false
        if (this.nameCustomer != ''
            && this.addressCustomer != ''
            && this.mobileCustomer != ''
            && this.emailCustomer != ''
            && this.selectStore != null
        ) {
            condition = true;
        }
        return condition;
    }

}