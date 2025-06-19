function changeColor(){
  const colors = [ 'red', 'blue', 'green', 'purple', 'orange', 'pink', 'brown', 'black', 'white', 'gray', 'silver', 'gold', 'cyan', 'magenta']
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;
}
