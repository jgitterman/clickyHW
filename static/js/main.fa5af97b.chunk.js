(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,i,a){e.exports=a(16)},16:function(e,i,a){"use strict";a.r(i);var m=a(0),c=a.n(m),n=a(3),g=a.n(n),d=a(1),t=a(4),r=a(5),l=a(8),o=a(6),s=a(9),k=a(7),p=function(e){function i(){var e,a;Object(t.a)(this,i);for(var m=arguments.length,c=new Array(m),n=0;n<m;n++)c[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(o.a)(i)).call.apply(e,[this].concat(c)))).state={cardData:Object(d.a)(k),currentScore:0,topScore:0},a.handleCardClick=function(e){var i=!1,m=Object(d.a)(a.state.cardData);m.forEach(function(a){a.id===e&&(a.clicked||(i=!0,a.clicked=!0))}),i?a.handleCorrect(m):a.handleIncorrect(m)},a.handleCorrect=function(e){var i=e.sort(function(){return.5-Math.random()}),m=a.state.currentScore+1,c=a.state.topScore;m>c&&(c=m),a.setState({cardData:i,currentScore:m,topScore:c})},a.handleIncorrect=function(e){alert("YOU LOST!");var i=e.sort(function(){return.5-Math.random()});i.forEach(function(e){return e.clicked=!1}),a.setState({cardData:i,currentScore:0})},a}return Object(s.a)(i,e),Object(r.a)(i,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-dark bg-dark d-flex justify-space-between"},c.a.createElement("span",{className:"navbar-brand mb-0"},"Clicky Game"),c.a.createElement("span",{className:"scoreInfo text-light"},"Current Score: ",this.state.currentScore," || Top Score: ",this.state.topScore)),c.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-warning text-dark text-center"},c.a.createElement("h1",null,"Welcome to the clicky game!"),c.a.createElement("p",null,"Click on a card to get started. Don't click on the same card twice.")),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row align-items-center justify-content-between"},this.state.cardData.map(function(i){return c.a.createElement("div",{className:"col-12 col-sm-3 col-md-2",key:i.id},c.a.createElement("img",{src:i.image,alt:i.name,className:"img-fluid img-thumbnail rounded",onClick:function(){return e.handleCardClick(i.id)}}))}))))}}]),i}(m.Component),u=function(){return c.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports=[{id:1,name:"Mario",image:"./images/mario.jpg",clicked:!1},{id:2,name:"Donkey Kong",image:"./images/donkey.jpg",clicked:!1},{id:3,name:"Link",image:"./images/link.jpg",clicked:!1},{id:4,name:"Samus",image:"./images/samus.jpg",clicked:!1},{id:5,name:"Yoshi",image:"./images/yoshi.jpg",clicked:!1},{id:6,name:"Kirby",image:"./images/kirby.jpg",clicked:!1},{id:7,name:"Fox",image:"./images/fox.jpg",clicked:!1},{id:8,name:"Pikachu",image:"./images/pikachu.jpg",clicked:!1},{id:9,name:"Luigi",image:"./images/luigi.jpg",clicked:!1},{id:10,name:"Ness",image:"./images/ness.jpg",clicked:!1},{id:11,name:"Jigglypuff",image:"./images/jigglypuff.jpg",clicked:!1},{id:12,name:"Captain Falcon",image:"./images/captFalcon.jpg",clicked:!1},{id:13,name:"Peach",image:"./images/peach.jpg",clicked:!1},{id:14,name:"Bowser",image:"./images/bowser.jpg",clicked:!1},{id:15,name:"Zelda",image:"./images/zelda.jpg",clicked:!1},{id:16,name:"Sheik",image:"./images/sheik.jpg",clicked:!1},{id:17,name:"Ice Climbers",image:"./images/iceClimbers.jpg",clicked:!1},{id:18,name:"Young Link",image:"./images/youngLink.jpg",clicked:!1},{id:19,name:"Ganondorf",image:"./images/ganondorf.jpg",clicked:!1},{id:20,name:"Mewtwo",image:"./images/mewtwo.jpg",clicked:!1},{id:21,name:"Pichu",image:"./images/pichu.jpg",clicked:!1},{id:22,name:"Marth",image:"./images/marth.jpg",clicked:!1},{id:23,name:"Roy",image:"./images/roy.jpg",clicked:!1},{id:24,name:"Dr. Mario",image:"./images/drMario.jpg",clicked:!1},{id:25,name:"Mr. Game & Watch",image:"./images/mrGameAndWatch.jpg",clicked:!1},{id:26,name:"Falco",image:"./images/falco.jpg",clicked:!1},{id:27,name:"Meta Knight",image:"./images/metaKnight.jpg",clicked:!1},{id:28,name:"Pit",image:"./images/pit.jpg",clicked:!1},{id:29,name:"Zero Suit Samus",image:"./images/zeroSuitSamus.jpg",clicked:!1},{id:30,name:"Wario",image:"./images/wario.jpg",clicked:!1},{id:31,name:"Snake",image:"./images/snake.jpg",clicked:!1},{id:32,name:"Ike",image:"./images/ike.jpg",clicked:!1},{id:33,name:"Pokemon Trainer",image:"./images/pokemonTrainer.jpg",clicked:!1},{id:34,name:"Diddy Kong",image:"./images/diddy.jpg",clicked:!1},{id:35,name:"Lucas",image:"./images/lucas.jpg",clicked:!1},{id:36,name:"Sonic",image:"./images/sonic.jpg",clicked:!1},{id:37,name:"King Dedede",image:"./images/kingdedede.jpg",clicked:!1},{id:38,name:"Olimar",image:"./images/olimar.jpg",clicked:!1},{id:39,name:"Lucario",image:"./images/lucario.jpg",clicked:!1},{id:40,name:"ROB",image:"./images/rob.jpg",clicked:!1},{id:41,name:"Wolf",image:"./images/wolf.jpg",clicked:!1},{id:42,name:"Toon Link",image:"./images/toonLink.jpg",clicked:!1},{id:43,name:"Villager",image:"./images/villager.jpg",clicked:!1},{id:44,name:"Mega Man",image:"./images/megaman.jpg",clicked:!1},{id:45,name:"Wii Fit Trainer",image:"./images/wiiFitTrainer.jpg",clicked:!1},{id:46,name:"Rosalina & Luma",image:"./images/RosalinaAndLuma.jpg",clicked:!1},{id:47,name:"Little Mac",image:"./images/littleMac.jpg",clicked:!1},{id:48,name:"Greninja",image:"./images/greninja.jpg",clicked:!1},{id:49,name:"Mii Brawler",image:"./images/miiBrawler.jpg",clicked:!1},{id:50,name:"Mii Gunner",image:"./images/miiGunner.jpg",clicked:!1},{id:51,name:"Mii Swordfighter",image:"./images/miiSwordfighter.jpg",clicked:!1},{id:52,name:"Palutena",image:"./images/palutena.jpg",clicked:!1},{id:53,name:"Pac-man",image:"./images/pacMan.jpg",clicked:!1},{id:54,name:"Robin",image:"./images/robin.jpg",clicked:!1},{id:55,name:"Shulk",image:"./images/shulk.jpg",clicked:!1},{id:56,name:"Bowser Jr",image:"./images/bowserJr.jpg",clicked:!1},{id:57,name:"Duck Hunt",image:"./images/duckHunt.jpg",clicked:!1},{id:58,name:"Ryu",image:"./images/ryu.jpg",clicked:!1},{id:59,name:"Cloud",image:"./images/cloud.jpg",clicked:!1},{id:60,name:"Corrin",image:"./images/corrin.jpg",clicked:!1},{id:61,name:"Bayonetta",image:"./images/bayonetta.jpg",clicked:!1},{id:62,name:"Inkling",image:"./images/inkling.jpg",clicked:!1},{id:63,name:"Ridley",image:"./images/ridley.jpg",clicked:!1},{id:64,name:"Simon Belmont",image:"./images/simon.jpg",clicked:!1},{id:65,name:"King K. Rool",image:"./images/kingKRool.jpg",clicked:!1},{id:66,name:"Isabelle",image:"./images/isabelle.jpg",clicked:!1},{id:67,name:"Incineroar",image:"./images/incineroar.png",clicked:!1},{id:68,name:"Dark Samus",image:"./images/darkSamus.jpg",clicked:!1},{id:69,name:"Daisy",image:"./images/daisy.jpg",clicked:!1},{id:70,name:"Lucina",image:"./images/lucina.jpg",clicked:!1},{id:71,name:"Chrom",image:"./images/chrom.jpg",clicked:!1},{id:72,name:"Dark Pit",image:"./images/darkPit.jpg",clicked:!1},{id:73,name:"Richter Belmont",image:"./images/richter.jpg",clicked:!1},{id:74,name:"Ken",image:"./images/ken.jpg",clicked:!1}]}},[[10,1,2]]]);
//# sourceMappingURL=main.fa5af97b.chunk.js.map