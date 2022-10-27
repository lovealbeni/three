import * as T from 'three';

const scene = new T.Scene();
const camera = new T.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new T.WebGLRenderer();

renderer.setClearColor( new T.Color( 0xffffff ) );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;

const BoxGeo = new T.BoxGeometry( 1, 1, 1 );
const BoxMat = new T.MeshLambertMaterial( { color: 0x329CEE } );
const Box = new T.Mesh( BoxGeo, BoxMat );
Box.castShadow = true;
Box.position.set( 4, 4, 4 );

const PlaneGeo = new T.PlaneGeometry( 50, 50,1,1 );
const PlaneMat = new T.MeshLambertMaterial( { color: 0xEC6968 } );
const Plane = new T.Mesh( PlaneGeo, PlaneMat );
Plane.receiveShadow = true;
Plane.rotation.x = -0.5 * Math.PI;
Plane.position.set( 15, 0, 0 );

scene.add( Box );
scene.add( Plane );

camera.position.set( -30, 40, 30 );
camera.lookAt( Box.position );

const spotLight = new T.SpotLight( 0xffffff );
spotLight.position.set( 10, 20, -5 );
spotLight.castShadow = true;
scene.add( spotLight );

// scene.add(new T.SpotLightHelper(spotLight));
scene.add( new T.AxesHelper( 20 ) );

renderer.render( scene, camera );

renderer.setAnimationLoop( animation );

document.body.appendChild( renderer.domElement );


// animation

function animation( time ) {

	spotLight.position.set(Math.sin(time/1000)*20, 40, Math.cos(time/1000)*20);

	renderer.render( scene, camera );

}