function activateLight(color) {
  document.querySelectorAll('.light').forEach(light => {
    light.classList.remove('active');
  });

 const selectedLight = document.getElementById(color);
  if (selectedLight) {
    selectedLight.classList.add('active');
  }
}

document.querySelectorAll('.light').forEach(light => {
  light.addEventListener('click', () => {
    activateLight(light.id);
  });
});
