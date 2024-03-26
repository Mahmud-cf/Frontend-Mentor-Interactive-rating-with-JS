var reating;
function reatingNumber(point) {
    reating = point.innerHTML
    point.style.backgroundColor = 'hsl(216, 12%, 54%)'
    point.style.color = '#fff'
}
function submitReating() {
  if (reating) {
    const reatingResult = document.getElementById("reating-result");
    const takeReating = document.getElementById("take-reating");
    const thankYouMessage = document.getElementById("thank-you");
    thankYouMessage.innerHTML = `You selected ${reating} out of 5`;
    reatingResult.style.display = "block";
    takeReating.style.display = "none";
  }else{
    alert('Please select a reating')
  }
}
