for (let i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", handleclick);

  function handleclick() {
    alert("i got click");
  }
}