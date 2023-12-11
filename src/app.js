class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription() {
    var addDescription_card = document.createElement('p');
    addDescription_card.setAttribute('id', 'blog-description');
    document.getElementById('card-text').appendChild(addDescription_card);
    addDescription_card.innerHTML +=this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
let toggle = true;
function helperAddPost() {
  if (toggle == true) {
    document.getElementById('popupContact').style.display = 'block';
    toggle = !toggle;
  } else {
    document.getElementById('popupContact').style.display = 'none';
    toggle = !toggle;
  }
}

function helperPost() {
  let title = document.getElementById('title').value;
  let discription = document.getElementById('detail').value;
  console.log(title);
  var blog = new Blog(title, discription);
  blog.addTitle();
  blog.addDescription();
  document.getElementById('popupContact').style.display = 'none';
}
