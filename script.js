(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    answer.innerHTML = "Loading..."
    let list = document.createElement('ul')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        for (let i = 0; i < array.length; i++) {
          let item = document.createElement('li')
          item.innerHTML = "userID: " + array[i].userId + " id: " + array[i].id + " title: " + array[i].title
          list.appendChild(item)
        }
      })
    answer.innerHTML = ""
    answer.appendChild(list)
  })

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
