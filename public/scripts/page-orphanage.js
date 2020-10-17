const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
};

const map = L.map('mapid', options).setView([-24.0179396, -46.5333159], 15);

const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([-24.0179396, -46.5333159], { icon })
  .addTo(map)

function selectImage(event) {
  const button = event.currentTarget;
  const buttons = document.querySelectorAll('.images button')
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  button.classList.add('active')

  imageContainer.src = image.src;
}