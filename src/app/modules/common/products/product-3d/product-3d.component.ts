import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import * as dat from 'lil-gui'
import { LoadingManager } from 'three'
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
@Component({
    selector: 'product-3d',
    templateUrl: './product-3d.component.html',
    styleUrls: ['./product-3d.component.css']
})
export class Product3DComponent implements AfterViewInit {
    @Input('model') model: string = ''
    @Input('carColors') carColors: string[] = []
    @ViewChild("name") name!: ElementRef
    @ViewChild("canvas") canvas!: ElementRef

    // public gui = new dat.GUI();
    public index: number = 0
    public loadingManager = new LoadingManager()
    public dracoLoader = new DRACOLoader()
    public gltfLoader: any
    public modelIndex: number = 0
    public scene = new THREE.Scene()
    public floor: any
    public ambientLight = new THREE.AmbientLight(0xffffff, 1)
    public directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    public sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    public flagOpenCar: boolean = false
    public camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
    // Controls
    public controls: any
    public clock = new THREE.Clock()
    public previousTime = 0
    public menus = [
        'info',
        'car',
        'car_inside',
        'driving',
        'dummy',
        'trunkloading',
        'xray'
    ]
    public mixer: any = null
    public action: any
    /**
     * Renderer
     */
    public renderer: any
    public car: any
    public raycaster: any;
    public mouse: any;
    constructor(private activedRoute: ActivatedRoute, private route: Router) {
        this.car = this.activedRoute.snapshot.paramMap.get('car');
        this.car = 'file car_'
    }

    tick() {
        const elapsedTime = this.clock.getElapsedTime()
        const deltaTime = elapsedTime - this.previousTime
        this.previousTime = elapsedTime

        // Update mixer
        // if (this.mixer !== null) {

        // console.log('logger', this.mixer);
        // this.mixer.update(deltaTime)
        // }

        // Update controls
        this.controls.update()

        // Render
        this.renderer.render(this.scene, this.camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(() => { this.tick() })
    }

    ngAfterViewInit(): void {
        this.dracoLoader.setDecoderPath('/draco/')
        this.gltfLoader = new GLTFLoader(this.loadingManager)
        this.gltfLoader.setDRACOLoader(this.dracoLoader)
        this.init();
        this.tick();
    }
    getColorBackground(car: string) {
        let color = '#000'
        switch (car) {
            case 'teramont':
                color = '#191919'
                break;
            case 'polo':
                color = '#001E50'
                break;
            case 'tiguan':
                color = '#1B1B1D'
                break;
            default:
                color = '#fff'
                break;
        }

        return color
    }
    goBack() {
        this.route.navigateByUrl('3d')
    }
    init() {
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2()

        const testSphere = new THREE.Mesh(
            new THREE.SphereBufferGeometry(1, 32, 32),
            new THREE.MeshBasicMaterial()
        )

        // this.scene.add(testSphere)
        // let color = this.getColorBackground(this.car);
        // this.floor = new THREE.Mesh(
        //     new THREE.PlaneGeometry(10, 10),
        //     new THREE.MeshStandardMaterial({
        //         color: '#fff',
        //         metalness: 0,
        //         roughness: 0.8
        //     })
        // )
        // this.floor.receiveShadow = true
        // this.floor.rotation.x = - Math.PI * 0.5
        // this.scene.add(this.floor)

        // const geometry = new THREE.SphereGeometry(500, 60, 40);
        //  invert the geometry on the x-axis so that all of the faces point inward
        // geometry.scale(- 1, 1, 1);

        // const texture = new THREE.TextureLoader().load('./assets/textures/background.jpg');
        // const material = new THREE.MeshBasicMaterial({ map: texture });

        // const background = new THREE.Mesh(geometry, material);

        // console.log('mesh', background)

        // this.scene.add(background)
        this.scene.add(this.ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 0.8)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        this.scene.add(pointLight)

        this.directionalLight.castShadow = true
        this.directionalLight.shadow.mapSize.set(1024, 1024)
        this.directionalLight.shadow.camera.far = 15
        this.directionalLight.shadow.camera.left = - 7
        this.directionalLight.shadow.camera.top = 7
        this.directionalLight.shadow.camera.right = 7
        this.directionalLight.shadow.camera.bottom = - 7
        this.directionalLight.position.set(5, 2, 5)

        const directionLight2 = this.directionalLight;
        directionLight2.position.set(-5, 2, 5)

        this.scene.add(this.directionalLight)
        this.scene.add(directionLight2)

        this.camera.position.set(-2, 2, 2)

        this.scene.add(this.camera)

        this.controls = new OrbitControls(this.camera, this.canvas.nativeElement)
        this.controls.target.set(0, 0.75, 0)
        this.controls.enableDamping = true

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas.nativeElement
        })
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        let that = this
        window.addEventListener('resize', () => {
            // Update sizes
            that.sizes.width = window.innerWidth
            that.sizes.height = window.innerHeight

            // Update camera
            that.camera.aspect = that.sizes.width / that.sizes.height
            that.camera.updateProjectionMatrix()

            // Update renderer
            that.renderer.setSize(that.sizes.width, that.sizes.height)
            that.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        // this.loadModel(this.car)
        this.gltfLoaderTest()
        // this.fbxLoader()
        // this.renderer.domElement.addEventListener('click', (event: any) => {

        //     event.preventDefault();

        //     that.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        //     that.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        //     that.raycaster.setFromCamera(that.mouse, that.camera);

        //     var intersects = that.raycaster.intersectObjects(that.scene.children, true);

        //     if (intersects.length > 0) {

        //         console.log('Intersection:', intersects[0]);

        //     }
        // }, false);

    }

    fbxLoader() {
        const loader = new FBXLoader();
        let that = this
        loader.load('./assets/3d/fbx/white_car.fbx', function (object) {
            object.scale.set(0.5, 0.5, 0.5)
            // object.traverse(function (child: any) {
            //     if (child.isMesh) {
            //         child.castShadow = true;
            //         child.receiveShadow = true;
            //     }
            // });
            that.scene.add(object);
        });
    }

    gltfLoaderTest() {
        let that = this
        this.gltfLoader.load(`/assets/3d/gltf/blue_car.glb`, (gltf: any) => {
            console.log('3d-model', gltf)
            // gltf.scene.traverse((node: any) => {
            //     if (node.isMesh) {
            //         node.material.flatShading = true;
            //     }
            // });
            that.scene.add(gltf.scene)
        })
    }



    loadModel(model: any) {
        let that = this
        this.gltfLoader.load(`/assets/3d/gltf/${model}.glb`, (gltf: any) => {
            console.log('3d-model', gltf)
            // const scale = 0.01
            // gltf.scene.scale.set(scale, scale, scale)

            // gltf.scene.rotation.x = Math.PI * 1.5
            // this.gui.add(gltf.scene.rotation, 'y')
            // this.gui.add(gltf.scene.rotation, 'x')
            // this.gui.add(gltf.scene.rotation, 'z')

            // gltf.scene.position.z = -1

            // gltf.scene.position.x = -3
            // gui.add(gltf.scene)

            // add animation

            // that.mixer = new THREE.AnimationMixer(gltf.scene)
            // this.action = that.mixer.clipAction(gltf.animations[0])
            // console.log(gltf.scene.getObjectByName('EXTERIOR'));
            // this.action.play()

            // gltf.scene.getObjectByName('EXTERIOR').addEventListener('click', () => {
            // that.action.play();
            // console.log('click')
            // that.flagOpenCar = !that.flagOpenCar
            // if (that.flagOpenCar) {
            // } else {
            //     that.action.pause();
            // }
            // })
            gltf.scene.traverse((node: any) => {
                if (node.isMesh) {
                    node.material.flatShading = true;
                }
            });
            that.scene.add(gltf.scene)

        })


    }

    onClick(event: any, pointer: any) {



    }

}