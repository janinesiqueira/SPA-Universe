const routes = {
  "/": "/pags/home.html",
  "/universo": "/pags/universo.html",
  "/exploracao": "/pags/exploracao.html",
  404: "/pags/404.html",
}

function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle(){
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route).then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })

  changeImage()
}

handle()
window.onpopstate = () => handle()
window.route = () => route()

function changeImage(){
  const {pathname} = window.location
  if(pathname == "/universo"){
    document.body.style.backgroundImage = 'url(./img/universo.svg)'
  } else if (pathname == "/exploracao"){
    document.body.style.backgroundImage = 'url(./img/exploração.svg)'
  } else {
    document.body.style.backgroundImage = 'url(./img/home.svg)'
  }
}