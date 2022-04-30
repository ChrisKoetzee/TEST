var images;


images = ['https://images.unsplash.com/photo-1651230018117-d0ddbe1e363d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1651222292853-845aee5f155a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1651219469237-9b5eff513fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1651260356667-c6a41767ded2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1651269067392-ead5c6d72789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1651299125026-dedb19ef106d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'];
let element_pics = document.getElementById('pics');
element_pics.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  element_pics2.replaceChildren();
  element_pics2.setAttribute("src", images[0]);
  images.push(images.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics3 = document.getElementById('pics');
  element_pics3.replaceChildren();
  element_pics3.setAttribute("src", images.slice(-1)[0]);
  images.unshift(images.pop());

});