"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6445],{6445:(h,r,i)=>{i.r(r),i.d(r,{MapPageModule:()=>m});var c=i(9808),u=i(4182),l=i(5649),d=i(501),e=i(2096);const g=["map"],f=[{path:"",component:(()=>{class o{constructor(t){this.router=t,this.infoWindows=[],this.markers=[{title:"alveera house!",latitute:"23.261267505231686",longitude:"77.37651274407781"},{title:"Bilal house!",latitude:"23.26224018090417",longitude:"77.37562265464621"},{title:"My house!",latitude:"23.25787579450996",longitude:"77.39703595344496"},{title:"Nani!",latitude:"23.258581127014818",longitude:"77.36505131839095"}]}ngOnInit(){}ionViewDidEnter(){this.showMap()}addMarkersToMap(t){for(let n of t){let s=new google.maps.LatLng(n.latitude,n.longitude),p=new google.maps.Marker({position:s,title:n.title,latitude:n.latitude,longitude:n.longitude});p.setMap(this.map),this.addInfoWindowToMarker(p)}}addInfoWindowToMarker(t){let s=new google.maps.InfoWindow({content:'<div id="content"><h2 style="font-size:30px" id="firstHeading" class"firstHeading">'+t.title+'</h2><ion-button color="success" id="discription"  expand="block"   >Discription  </ion-button></div>'});t.addListener("click",()=>{this.closeAllInfoWindows(),s.open(this.map,t)}),this.infoWindows.push(s)}closeAllInfoWindows(){for(let t of this.infoWindows)t.close()}showMap(){const n={center:new google.maps.LatLng(23.257701818913823,77.39733028644342),zoom:15};this.map=new google.maps.Map(this.mapRef.nativeElement,n),this.addMarkersToMap(this.markers)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-map"]],viewQuery:function(t,n){if(1&t&&e.Gf(g,5,e.SBq),2&t){let s;e.iGM(s=e.CRH())&&(n.mapRef=s.first)}},decls:7,vars:1,consts:[[1,"heading"],[3,"fullscreen"],["id","map"],["map",""]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),e._uU(3,"MAP"),e.qZA()()(),e.TgZ(4,"ion-content",1),e._UZ(5,"div",2,3),e.qZA()),2&t&&(e.xp6(4),e.Q6J("fullscreen",!0))},directives:[l.Gu,l.sr,l.wd,l.W2],styles:["ion-title[_ngcontent-%COMP%]{color:#fff;font-size:25px}.heading[_ngcontent-%COMP%]{background-color:#000}#map[_ngcontent-%COMP%]{height:100%}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(f)],d.Bz]}),o})(),m=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,u.u5,l.Pc,M]]}),o})()}}]);