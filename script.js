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
    //TODO
  })

  cw2.addEventListener("click", function() {
    answer.innerHTML = "Loading..."
    let table = document.createElement('table')
    table.innerHTML = "<tr><th>userID</th><th>id</th><th>title</th></tr>"
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        for (let i = 0; i < array.length; i++) {
          let item = document.createElement('tr')
          item.innerHTML = `<td>${array[i].userId}</td><td>${array[i].id}</td><td>${array[i].title}</td>`
          table.appendChild(item)
        }
      })
    answer.innerHTML = ""
    answer.appendChild(table)
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
