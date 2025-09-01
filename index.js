function buttonPress() {
  const name = document.getElementById("name").value
  console.log(name)
  alert(`This is your name ${name}`);
  document.getElementById("showName").innerHTML = name;
}