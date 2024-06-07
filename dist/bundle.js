(()=>{"use strict";var e={780:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,o){this.src=e,this.title=t,this.reviews=o}},734:(e,t)=>{var o,r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoyaltyUser=t.Permissions=void 0,function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(o||(t.Permissions=o={})),function(e){e.GOLD_USER="GOLD_USER",e.SILVER_USER="SILVER_USER",e.BRONZE_USER="BRONZE_USER"}(r||(t.LoyaltyUser=r={}))},156:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(185),a=o(734),n=r(o(780)),s=document.querySelector(".properties"),l=document.querySelector(".reviews"),c=document.querySelector(".container"),u=document.querySelector("button"),d=document.querySelector(".footer"),m=[{name:"Sheila",stars:5,loyaltyUser:a.LoyaltyUser.GOLD_USER,date:"01-04-2021"},{name:"Andrzej",stars:3,loyaltyUser:a.LoyaltyUser.BRONZE_USER,date:"28-03-2021"},{name:"Omar",stars:4,loyaltyUser:a.LoyaltyUser.SILVER_USER,date:"27-03-2021"}],y={firstName:"Bobby",lastName:"Brown",permissions:a.Permissions.ADMIN,isReturning:!0,age:35,stayedAt:["florida-home","oman-flat","tokyo-bungalow"]},p=[{image:"images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[0x662d15b891a9,"marywinkle@gmail.com"],isAvailable:!0},{image:"images/poland-property.jpg",title:"Polish Cottage",price:30,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[0x49cbdd420724e,"garydavis@hotmail.com"],isAvailable:!1},{image:"images/london-property.jpg",title:"London Flat",price:25,location:{firstLine:"flat 15",city:"London",code:"SW4 5XW",country:"United Kingdom"},contact:[34829374892553,"andyluger@aol.com"],isAvailable:!0},{image:"images/malaysian-hotel.jpeg",title:"Malia Hotel",price:35,location:{firstLine:"Room 4",city:"Malia",code:45334,country:"Malaysia"},contact:[60349822083,"lee34@gmail.com"],isAvailable:!1}];(0,i.showReviewTotal)(m.length,m[0].name,m[0].loyaltyUser),(0,i.populateUser)(y.isReturning,y.firstName);for(var v=0;v<p.length;v++){var g=document.createElement("div");g.classList.add("card"),g.innerHTML=p[v].title;var f=document.createElement("img");f.setAttribute("src",p[v].image),g.appendChild(f),(0,i.showDetails)(y.permissions,g,p[v].price),s.appendChild(g)}var L=0;u.addEventListener("click",(function(){return function(e){if(!L){L++;for(var t=(0,i.getTopTwoReviews)(e),o=0;o<t.length;o++){var r=document.createElement("div");r.classList.add("review-card"),r.innerHTML=t[o].stars+" stars from "+t[o].name,l.appendChild(r)}c.removeChild(u)}}(m)}));var h=["London","11.03",17];d.innerHTML=h[0]+" "+h[1]+" "+h[2]+"°";var R=new n.default("images/italian-property.jpg","Italian House",[{name:"Olive",stars:5,loyaltyUser:a.LoyaltyUser.GOLD_USER,date:"12-04-2021"}]),S=document.querySelector(".main-image"),U=document.createElement("img");U.setAttribute("src",R.src),S.appendChild(U)},185:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTopTwoReviews=t.makeMultiple=t.showDetails=t.populateUser=t.showReviewTotal=void 0;var r=document.querySelector("#reviews"),i=document.querySelector("#returning-user"),a=document.querySelector("#user"),n=o(734);function s(e){return e>1||0==e?"s":""}t.showReviewTotal=function(e,t,o){var i=n.LoyaltyUser.GOLD_USER?"⭐":"";r.innerHTML=e.toString()+" review"+s(e)+" | last reviewed by "+t+" "+i},t.populateUser=function(e,t){e&&(i.innerHTML="back"),a.innerHTML=t},t.showDetails=function(e,t,o){if(e){var r=document.createElement("div");r.innerHTML=o.toString()+"/night",t.appendChild(r)}},t.makeMultiple=s,t.getTopTwoReviews=function(e){return e.sort((function(e,t){return t.stars-e.stars})).slice(0,2)}}},t={};!function o(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}(156)})();