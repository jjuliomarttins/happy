const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
};

const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

const map = L.map('mapid', options).setView([lat, lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([lat, lng], { icon })
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