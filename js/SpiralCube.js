$(document).ready(function(){
  console.log('ready');
  //example of three.js

  var WIDTH = $('#main').width()-20,
    HEIGHT = $(document).height();

  var FOV = 75,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 2000;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);

  camera.position.z = 5;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(WIDTH, HEIGHT);
  $('#content').append(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ffff
  });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
  };

  animate();
})

function displayCube(){}
