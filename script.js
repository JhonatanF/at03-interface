
const METHOD_GET = "https://demo6589476.mockable.io/get";
const METHOD_POST = "https://demo6589476.mockable.io/post";
const METHOD_DELETE = "https://demo6589476.mockable.io/delete";
const METHOD_PUT = "https://demo6589476.mockable.io/put";

async function methodGet(data) {
  const x = await fetch(data, {
    method: "get"
  });
  return x.json();
}

function callGet() {
  methodGet(METHOD_GET)
    .then((data) => {
      sucess(data);
    }).catch(err => {
      error(err);
    });
}

async function methodPost(data) {
  const x = await fetch(data, {
    method: "post"
  });
  return x.json();
}

function callPost() {
  methodPost(METHOD_POST)
    .then((data) => {
      sucess(data);
    }).catch(err => {
      error(err);
    });
}

async function methodDelete(data) {
  const x = await fetch(data, {
    method: "delete"
  });
  return x.json();
}

function callDelete() {
  methodDelete(METHOD_DELETE)
    .then((data) => {
      sucess(data);
    }).catch(err => {
      error(err);
    });
}

async function methodPut(data) {
  const x = await fetch(data, {
    method: "put"
  });
  return x.json();
}

function callPut() {
  methodPut(METHOD_PUT)
    .then((data) => {
      sucess(data);
    }).catch(err => {
      error(err);
    });
}

function sucess(data) {
  var msg = document.createElement("p");
  msg.innerHTML = data.msg;
  msg.id = "response";
  document.getElementById("mensage").appendChild(msg);
  setTimeout(function () {
    var p = document.getElementById("response");
    p.parentNode.removeChild(p);
  }, 2000);
  console.log("Sucess!!");
}

function error(err) {
  var msg = document.createElement("p");
  msg.id = "response";
  msg.innerHTML = "A requisição deu error oh : " + err;
  document.getElementById("mensage").appendChild(msg);
  setTimeout(function () {
    var p = document.getElementById("response");
    p.parentNode.removeChild(p);
  }, 2000);
  console.log("error!!");
}