import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
@Component({
    selector: 'vr-studio',
    templateUrl: './vr-studio.component.html',
    styleUrls: ['./vr-studio.component.css']
})
export class VrStudioComponent implements OnInit {
    @ViewChild('canvas') private canvasRef!: ElementRef

    ngOnInit(): void {
        this.init();
    }


    camera: any
    scene: any;
    renderer: any;
    stats: any;

    grid: any;
    controls: any;

    wheels: any[] = [];

    init() {
        let that = this
        let container = document.getElementById('container');
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setAnimationLoop(() => { this.render(); });
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 0.85;
        container!.appendChild(this.renderer.domElement);

        window.addEventListener('resize', () => { this.onWindowResize(); });

        this.stats = Stats();
        container!.appendChild(this.stats!.dom);

        //

        this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(4.25, 1.4, - 4.5);

        this.controls = new OrbitControls(this.camera, container!);
        this.controls.target.set(0, 0.5, 0);
        this.controls.update();

        const pmremGenerator = new THREE.PMREMGenerator(this.renderer);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xeeeeee);
        this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;
        this.scene.fog = new THREE.Fog(0xeeeeee, 10, 50);

        this.grid = new THREE.GridHelper(100, 40, 0x000000, 0x000000);
        this.grid.material.opacity = 0.1;
        this.grid.material.depthWrite = false;
        this.grid.material.transparent = true;
        this.scene.add(this.grid);

        // materials

        const bodyMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xff0000, metalness: 0.6, roughness: 0.4, clearcoat: 0.05, clearcoatRoughness: 0.05
        });

        const detailsMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff, metalness: 1.0, roughness: 0.5
        });

        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff, metalness: 0, roughness: 0.1, transmission: 0.9, transparent: true
        });

        // const bodyColorInput = document.getElementById('body-color');
        // bodyColorInput!.addEventListener('input', function () {

        //     bodyMaterial.color.set(this.value);

        // });

        // const detailsColorInput = document.getElementById('details-color');
        // detailsColorInput!.addEventListener('input', function () {

        //     detailsMaterial.color.set(this.value);

        // });

        // const glassColorInput = document.getElementById('glass-color');
        // glassColorInput!.addEventListener('input', (value) => {

        //     glassMaterial.color.set(value!);

        // });

        // Car

        const shadow = new THREE.TextureLoader().load('assets/3d/gltf/ferrari_ao.png');

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('assets/3d/libs/draco/gltf/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);
        loader.load('assets/3d/gltf/ferrari.glb', function (gltf) {
            let carModel: any = gltf.scene.children[0];
            carModel.getObjectByName('body').material = bodyMaterial;

            carModel.getObjectByName('rim_fl').material = detailsMaterial;
            carModel.getObjectByName('rim_fr').material = detailsMaterial;
            carModel.getObjectByName('rim_rr').material = detailsMaterial;
            carModel.getObjectByName('rim_rl').material = detailsMaterial;
            carModel.getObjectByName('trim').material = detailsMaterial;

            carModel.getObjectByName('glass').material = glassMaterial;

            that.wheels.push(
                carModel.getObjectByName('wheel_fl'),
                carModel.getObjectByName('wheel_fr'),
                carModel.getObjectByName('wheel_rl'),
                carModel.getObjectByName('wheel_rr')
            );

            // shadow
            const mesh = new THREE.Mesh(
                new THREE.PlaneGeometry(0.655 * 4, 1.3 * 4),
                new THREE.MeshBasicMaterial({
                    map: shadow, blending: THREE.MultiplyBlending, toneMapped: false, transparent: true
                })
            );
            mesh.rotation.x = - Math.PI / 2;
            mesh.renderOrder = 2;
            carModel.add(mesh);

            that.scene.add(carModel);

        });

    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        const time = - performance.now() / 1000;
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].rotation.x = time * Math.PI;
        }
        this.grid.position.z = - (time) % 5;
        this.renderer.render(this.scene, this.camera);
        this.stats.update();
    }

}