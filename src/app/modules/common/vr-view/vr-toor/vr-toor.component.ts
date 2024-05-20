import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { DOCUMENT } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { ScenceModel } from './model';
@Component({
  selector: 'app-vr-toor',
  templateUrl: './vr-toor.component.html',
  styleUrls: ['./vr-toor.component.scss'],
})
export class VrToorComponent implements OnInit, AfterViewInit {
  public isUserInteracting = false;
  public onPointerDownMouseX = 0;
  public onPointerDownMouseY = 0;
  public lon = 0;
  public onPointerDownLon = 0;
  public lat = 0;
  public onPointerDownLat = 0;
  public phi = 0;
  public theta = 0;
  public camera: any;
  public scene: any;
  public renderer: any;
  public material: any;
  public loader = new THREE.TextureLoader()
  public index: number = 1;
  public isPlay = true
  public isLoading = false
  public geometry: any
  public isDay: boolean = true
  public sceneCategory = ['MẶT TIỀN', 'KHU VỰC LỄ TÂN', 'KHU VỰC CHỜ', 'KHU VỰC LIFESTYLE - PHỤ KIỆN - PHỤ TÙNG',
    'KHU VỰC GARAGE', 'KHU VỰC MÀU SƠN', 'KHU VỰC TRƯNG BÀY']
  public sceneSelect: string = 'MẶT TIỀN'
  public lstScene: ScenceModel[] = [
    new ScenceModel('day.png', '', 'MẶT TIỀN', 1, 'day'),
    new ScenceModel('night.png', 'night', 'MẶT TIỀN', 1, 'night'),
    new ScenceModel('C0_day.png', 'day', 'MẶT TIỀN', 2, 'day'),
    new ScenceModel('C0_night.png', 'night', 'MẶT TIỀN', 2, 'night'),
    new ScenceModel('C1.png', '', 'KHU VỰC LỄ TÂN', 1),
    new ScenceModel('C2.png', '', 'KHU VỰC TRƯNG BÀY', 1),
    new ScenceModel('C3.png', '', 'KHU VỰC CHỜ', 1),
    new ScenceModel('C4.png', '', 'KHU VỰC LIFESTYLE - PHỤ KIỆN - PHỤ TÙNG', 1),
    new ScenceModel('C5.png', '', 'KHU VỰC LIFESTYLE - PHỤ KIỆN - PHỤ TÙNG', 2),
    new ScenceModel('C6.png', '', 'KHU VỰC LIFESTYLE - PHỤ KIỆN - PHỤ TÙNG', 3),
    new ScenceModel('C7.png', '', 'KHU VỰC GARAGE', 1),
    new ScenceModel('C8.png', '', 'KHU VỰC MÀU SƠN', 1),
    new ScenceModel('C9.png', '', 'KHU VỰC CHỜ', 2),
    new ScenceModel('C10.png', '', 'KHU VỰC CHỜ', 3),
    new ScenceModel('C11.png', '', 'KHU VỰC CHỜ', 4),
    new ScenceModel('C12.png', '', 'KHU VỰC CHỜ', 5),
    new ScenceModel('C13.png', '', 'KHU VỰC TRƯNG BÀY', 2),
    new ScenceModel('C14.png', '', 'KHU VỰC TRƯNG BÀY', 3),
    new ScenceModel('C15.png', '', 'KHU VỰC TRƯNG BÀY', 4),
    new ScenceModel('C16.png', '', 'KHU VỰC TRƯNG BÀY', 5),
    new ScenceModel('C17.png', '', 'KHU VỰC TRƯNG BÀY', 6),
    new ScenceModel('C18.png', '', 'KHU VỰC TRƯNG BÀY', 7),
  ]

  public mesh: any;

  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('annotation', { static: true }) annotation!: ElementRef;

  constructor(private route: Router) {
    // this.container = doc.getElementById('container');
  }

  goHome() {
    this.route.navigateByUrl('homepage')
  }
  // autoRotate() {
  //   this.isPlay = !this.isPlay;
  // }

  changeSun() {
    this.isDay = !this.isDay
  }

  changeScene(scene: string) {
    this.sceneSelect = scene;
    console.log(scene)
    this.index = 1;
    const image = this.lstScene.filter(s => s.scene === scene && s.index == 1)[0].image
    console.log(image)
    this.isLoading = true
    this.updateScene(image)
  }

  nextClick() {
    console.log('next click');
    const maxImage = this.lstScene.filter(s => s.scene == this.sceneSelect)
    if (this.index == maxImage.length) return
    else {
      this.index++
      this.isLoading = true
      console.log(this.sceneSelect, this.index)
      const image = this.lstScene.filter(s => s.scene == this.sceneSelect && s.index == this.index)[0].image;
      this.updateScene(image);
    }
  }
  prevClick() {
    console.log('prev click');
    if (this.index == 0) return
    else {
      this.index--;
      this.isLoading = true
      const image = this.lstScene.filter(s => s.scene == this.sceneSelect && s.index == this.index)[0].image;
      this.updateScene(image);
    }
  }

  updateScene(image: string) {
    let that = this
    this.loader.load(
      `./assets/textures/${image}`, function (tex) {
        that.isLoading = false
        console.log('after render', that.index)
        that.material.map = tex;
        that.scene.add(that.mesh);
        switch (image) {
          case 'C2.png':
            console.log('update camera')
            break;
          default:
            break;
        }
      });
  }

  ngAfterViewInit(): void {
    console.log('after view')
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1100
    );

    this.scene = new THREE.Scene();
    this.geometry = new THREE.SphereGeometry(15, 60, 40, 600);
    // let geometry = new THREE.SphereGeometry(15, 60, 40, 0);
    // invert the geometry on the x-axis so that all of the faces point inward
    this.geometry.scale(-1, 1, 1);
    let texture = this.loader.load(
      `./assets/textures/${this.lstScene[0].image}`, function () {
        that.isLoading = false
      }
    );

    console.log(texture);

    this.material = new THREE.MeshBasicMaterial({ map: texture });

    // this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.mesh);



    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    console.log(this.container.nativeElement);
    console.log('-----');

    this.container.nativeElement.appendChild(this.renderer.domElement);
    this.container.nativeElement.style.touchAction = 'none';
    // this.container.nativeElement.addEventListener('pointerdown', this.onPointerDown);

    /**
     * Annotation
     */

    this.loadAnnotation();

    let that = this

    this.container.nativeElement.addEventListener('pointerdown', function (event: any) {
      console.log('onpointermouse')
      that.onPointerDown(event);
    })
    document.addEventListener('wheel', function (event) {
      console.log('wheel');
      that.onDocumentMouseWheel(event);
    });
    document.addEventListener('dragover', function (event) {
      event.preventDefault();
      event.dataTransfer!.dropEffect = 'copy';
    });
    document.addEventListener('dragenter', function () {
      document.body.style.opacity = '0.5';
    });
    document.addEventListener('dragleave', function () {
      document.body.style.opacity = '1';
    });
    document.addEventListener('drop', function (event) {
      event.preventDefault();
      const reader = new FileReader();
      reader.addEventListener('load', function (e) {
        that.material.map.image = e.target?.result;
        that.material.map.needsUpdate = true;
      });
      reader.readAsDataURL(event?.dataTransfer!.files[0]);

      document.body.style.opacity = '1';
    });

    //

    window.addEventListener('resize', function (event) {
      that.onWindowResize();
    });
    this.animate();
  }

  ngOnInit(): void {
    this.isLoading = true
  }

  loadAnnotation() {
    const vector = new THREE.Vector3(250, 250, 250)
    vector.project(this.camera)

    vector.x = Math.round((0.5 + vector.x / 2) * (this.renderer.domElement.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 + vector.y / 2) * (this.renderer.domElement.height / window.devicePixelRatio));


    this.annotation.nativeElement.style.top = `${vector.y}px`
    this.annotation.nativeElement.style.left = `${vector.x}px`

    // const numberTexture = new THREE.CanvasTexture()
    // const spriteMaterial
  }


  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onPointerDown(event: any) {
    console.log(event);
    // console.log('pointdown')
    if (event.isPrimary === false) return;

    this.isUserInteracting = true;

    this.onPointerDownMouseX = event.clientX;
    this.onPointerDownMouseY = event.clientY;

    this.onPointerDownLon = this.lon;
    this.onPointerDownLat = this.lat;

    let that = this
    this.container.nativeElement.addEventListener('pointermove', function (e: any) {
      console.log('mouse move click')
      that.onPointerMove(e);
    });
    this.container.nativeElement.addEventListener('pointerup', function (e: any) {
      console.log('pointer up')
      that.onPointerUp(e);
    });
  }
  onPointerMove(event: any) {
    // console.log('pointer-move')
    // console.log(event, this.isUserInteracting)
    if (event.isPrimary === false || this.isUserInteracting == false) return;

    this.lon =
      (this.onPointerDownMouseX - event.clientX) * 0.1 + this.onPointerDownLon;
    this.lat =
      (event.clientY - this.onPointerDownMouseY) * 0.1 + this.onPointerDownLat;
  }

  onPointerUp(event: any) {
    this.isUserInteracting = false;
    // console.log('pointer-up');
    if (event.isPrimary === false) return;
  }

  onDocumentMouseWheel(event: any) {
    console.log('mouse wheel');
    const fov = this.camera.fov + event.deltaY * 0.05;

    this.camera.fov = THREE.MathUtils.clamp(fov, 10, 75);

    this.camera.updateProjectionMatrix();
  }

  animate() {
    let that = this;
    requestAnimationFrame(function () {
      that.animate();
    });
    this.update();
  }

  update() {
    // if (this.isPlay) {
    if (this.isUserInteracting === false) {
      // this.lon += 0.1;
    }

    this.lat = Math.max(-85, Math.min(85, this.lat));
    this.phi = THREE.MathUtils.degToRad(90 - this.lat);
    this.theta = THREE.MathUtils.degToRad(this.lon);

    const x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
    const y = 500 * Math.cos(this.phi);
    const z = 500 * Math.sin(this.phi) * Math.sin(this.theta);

    this.camera.lookAt(x, y, z);
    this.renderer.render(this.scene, this.camera);
    // }
  }
}