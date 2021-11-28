//var React=require('react')
import React from 'react'
//var ReactDOM = require('react-dom')
import ReactDOM from 'react-dom'
import "./index.css"
const name = "picturehub"
const img1 = "https://picsum.photos/240/100/"
const img2 = "https://picsum.photos/260/100/"
const img3 = "https://picsum.photos/250/100/"
const img4 = "https://picsum.photos/270/100/"
const img5 = "https://picsum.photos/id/1003/200/300"

ReactDOM.render( 
  <>
    <h1 className="heading" > Welcome to {name}</h1>
    <nav class="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<section>
    <div class="container">
  <div class="row">
    <div class="col">
    <div class="card" >
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> first Picture</h5>
    <p class="card-text">“The whole point of taking pictures is so that you don’t have to explain things with words.”</p>
    <a href="#" class="btn btn-primary">show more pictures</a>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card" >
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Second Picture</h5>
    <p class="card-text">“There are always two people in every picture: the photographer and the viewer.”</p>
    <a href="#" class="btn btn-primary">show more pictures</a>
  </div>
</div>
    </div>
    <div class="col">
       <div class="card" >
  <img src={img3} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title"> Third Picture</h5>
    <p class="card-text">“We are making photographs to understand what our lives mean to us.”</p>
    <a href="https://picsum.photos/200" class="btn btn-primary"> show more pictures</a>
  </div>
</div>
    </div>
  </div>
</div>
</section>
          </>,
          document.getElementById('root'))
