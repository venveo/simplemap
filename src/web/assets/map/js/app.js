(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1c37":function(e,t,a){"use strict";a.r(t);var n=a("bfca"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.config.hideSearch?e._e():a("Search",{attrs:{service:e.config.geoService,"default-value":e.value.address,geo:e.geo},on:{selected:e.onSearchSelected}}),e.config.hideMap?e._e():a("Map",{attrs:{tiles:e.config.mapTiles,token:e.config.mapToken,latLng:{lat:e.value.lat,lng:e.value.lng},zoom:e.value.zoom},on:{change:e.onMapChange,zoom:e.onZoom}}),e.config.hideAddress?e._e():a("Address",{attrs:{value:e.value},on:{changed:e.onPartChange}}),e.config.isSettings?e._e():a("input",{attrs:{type:"hidden",name:this.config.name},domProps:{value:JSON.stringify(e.value)}}),e.config.isSettings?a("Fragment",[a("input",{attrs:{type:"hidden",name:this.config.name.replace("__settings__","lat")},domProps:{value:e.value.lat}}),a("input",{attrs:{type:"hidden",name:this.config.name.replace("__settings__","lng")},domProps:{value:e.value.lng}}),a("input",{attrs:{type:"hidden",name:this.config.name.replace("__settings__","zoom")},domProps:{value:e.value.zoom}})]):e._e()],1)},r=[],o=a("db0c"),s=a.n(o),i=(a("7f7f"),a("96cf"),a("3b8d")),c=a("d225"),l=a("b0b4"),u=a("308d"),p=a("6bb5"),d=a("4e2b"),h=a("013f"),g=a("bd86"),m=a("60a3"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vue-autosuggest",{ref:"self",attrs:{suggestions:e.suggestions,"render-suggestion":e.renderSuggestion,"get-suggestion-value":e.getSuggestionValue,"input-props":e.inputProps},on:{selected:e.onSelected}})},f=[],v=(a("386d"),a("2831"));function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return window.Craft.t("simplemap",e,t)}var w,_,j,k={Nominatim:"nominatim",Mapbox:"mapbox",GoogleMaps:"google",AppleMapKit:"apple"},O=k,x=a("795b"),M=a.n(x),S=a("cebc");a("6b54"),a("28a5");class C{constructor(e,t){switch(Object(g["a"])(this,"number",""),Object(g["a"])(this,"address",""),Object(g["a"])(this,"city",""),Object(g["a"])(this,"postcode",""),Object(g["a"])(this,"county",""),Object(g["a"])(this,"state",""),Object(g["a"])(this,"country",""),t){case O.Nominatim:this._nominatim(e);break;case O.Mapbox:this._mapbox(e);break;case O.GoogleMaps:this._google(e);break;default:return this}}static from(e){var t=new C;return t.number=e.number||"",t.address=e.address||"",t.city=e.city||"",t.postcode=e.postcode||"",t.county=e.county||"",t.state=e.state||"",t.country=e.country||"",t}_nominatim(e){this.number=this._join([e.house_number,e.address29,-1===["pedestrian","footway","path","road","neighbourhood","suburb","village","town","city_district","city"].indexOf(e.type)?e[e.type]:null]),this.address=this._join([e.pedestrian,e.footway,e.path,e.road,e.neighbourhood,e.suburb]),this.city=this._join([e.village,e.town,e.city_district,e.city]),this.postcode=e.postcode,this.county=e.county,this.state=this._join([e.state_district,e.state]),this.country=e.country}_mapbox(e){e=e.context.reduce((e,t)=>{var a=t.id.split(".")[0];return e[a]=t.text,e},{number:e.address,[e.place_type[0]]:e.text}),this.number=e.number,this.address=e.address,this.city=e.place,this.postcode=e.postcode,this.county=e.district,this.state=e.region,this.country=e.country}_google(e){e=e.reduce((e,t)=>{var a=t.types[0];return e[a]=t.long_name,e},{}),this.number=this._join([e.subpremise,e.premise,e.street_number]),this.address=this._join([e.route,e.neighborhood,e.sublocality_level_5,e.sublocality_level_4,e.sublocality_level_3,e.sublocality_level_2,e.sublocality_level_1,e.sublocality]),this.city=this._join([e.postal_town,e.locality]),this.postcode=e.postal_code||e.postal_code_prefix,this.county=e.administrative_area_level_2,this.state=e.administrative_area_level_1,this.country=e.country}_join(e){return e.filter(Boolean).join(", ")}}class A{constructor(e){var t=e.country,a=e.geoService,n=e.geoToken;Object(g["a"])(this,"country",null),Object(g["a"])(this,"service",null),Object(g["a"])(this,"token",null),Object(g["a"])(this,"google",{service:null,session:null}),Object(g["a"])(this,"apple",{Search:null}),this.country=t?t.toLowerCase():null,this.service=a,this.token=n,a===O.GoogleMaps?this.google={service:new window.google.maps.places.AutocompleteService,session:new window.google.maps.places.AutocompleteSessionToken,geocoder:new window.google.maps.Geocoder,places:new window.google.maps.places.PlacesService(document.createElement("div"))}:a===O.AppleMapKit&&(window.mapkit.init({authorizationCallback:e=>e(n)}),this.apple={Search:new window.mapkit.Search,Geocoder:new window.mapkit.Geocoder,Coordinate:window.mapkit.Coordinate})}search(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark(function a(){var n;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:if(e&&""!==e.trim()){a.next=2;break}return a.abrupt("return",[]);case 2:n=[],a.t0=t.service,a.next=a.t0===O.Nominatim?6:a.t0===O.Mapbox?10:a.t0===O.GoogleMaps?14:a.t0===O.AppleMapKit?18:22;break;case 6:return a.next=8,t.searchNominatim(e);case 8:return n=a.sent,a.abrupt("break",23);case 10:return a.next=12,t.searchMapbox(e);case 12:return n=a.sent,a.abrupt("break",23);case 14:return a.next=16,t.searchGoogle(e);case 16:return n=a.sent,a.abrupt("break",23);case 18:return a.next=20,t.searchApple(e);case 20:return n=a.sent,a.abrupt("break",23);case 22:throw new Error("Unknown geocoding service: "+t.service);case 23:return a.abrupt("return",n);case 24:case"end":return a.stop()}},a,this)}))()}searchNominatim(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark(function a(){var n,r;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=new URLSearchParams({q:e,format:"jsonv2",limit:5,addressdetails:1,countrycodes:t.country}).toString(),a.next=3,fetch("https://nominatim.openstreetmap.org/search?"+n).then(e=>e.json());case 3:return r=a.sent,a.abrupt("return",r.map(e=>({address:e.display_name,lat:e.lat,lng:e.lon,parts:new C(Object(S["a"])({},e.address,{type:e.type}),O.Nominatim)})));case 5:case"end":return a.stop()}},a,this)}))()}searchMapbox(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark(function a(){var n,r;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=new URLSearchParams({types:"address,country,postcode,place,locality,district,neighborhood",limit:5,access_token:t.token,country:t.country}).toString(),a.next=3,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e+".json?"+n).then(e=>e.json());case 3:return r=a.sent,a.abrupt("return",r.features.map(e=>({address:e.place_name,lat:e.center[1],lng:e.center[0],parts:new C(e,O.Mapbox)})));case 5:case"end":return a.stop()}},a,this)}))()}searchGoogle(e){return new M.a(t=>{this.google.service.getPlacePredictions({input:e,sessionToken:this.google.session,componentRestrictions:{country:this.country}},e=>{return t(e?e.map(e=>({__placeId:e.place_id,address:e.description})):[])})})}searchApple(e){return new M.a(t=>{this.apple.Search.autocomplete(e,(e,a)=>{t(a.results.slice(0,5).map(e=>({address:e.displayLines.join(", "),lat:e.coordinate.latitude,lng:e.coordinate.longitude,parts:new C(null,O.AppleMapKit)})))})})}reverseNominatim(e){return Object(i["a"])(regeneratorRuntime.mark(function t(){var a,n,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.lat,n=e.lng,r=new URLSearchParams({lat:a,lon:n,format:"jsonv2",addressdetails:1}).toString(),t.next=4,fetch("https://nominatim.openstreetmap.org/reverse?"+r).then(e=>e.json());case 4:return o=t.sent,t.abrupt("return",{address:o.display_name,lat:a,lng:n,parts:new C(Object(S["a"])({},o.address,{type:o.type}),O.Nominatim)});case 6:case"end":return t.stop()}},t,this)}))()}reverseMapbox(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark(function a(){var n,r,o,s,i;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.lat,r=e.lng,o=new URLSearchParams({types:"address,country,postcode,place,locality,district,neighborhood",limit:1,access_token:t.token}).toString(),a.next=4,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+r+","+n+".json?"+o).then(e=>e.json());case 4:return s=a.sent,i=s.features[0],a.abrupt("return",{address:i.place_name,lat:n,lng:r,parts:new C(i,O.Mapbox)});case 7:case"end":return a.stop()}},a,this)}))()}reverseGoogle(e){return new M.a(t=>{this.google.geocoder.geocode({location:e},a=>{var n=a[0];t(Object(S["a"])({address:n.formatted_address},e,{parts:new C(n.address_components,O.GoogleMaps)}))})})}reverseApple(e){var t=e.lat,a=e.lng;return new M.a(e=>{this.apple.Geocoder.reverseLookup(new this.apple.Coordinate(t,a),(n,r)=>{var o=r.results[0];e({address:o.formattedAddress,lat:t,lng:a,parts:new C(null,O.AppleMapKit)})})})}getGooglePlaceDetails(e,t){return new M.a(a=>{this.google.places.getDetails({placeId:e,fields:["geometry","address_component"]},e=>{a({address:t.address,lat:e.geometry.location.lat(),lng:e.geometry.location.lng(),parts:new C(e.address_components,O.GoogleMaps)})})})}}var L,P,I=(w=Object(m["a"])({components:{VueAutosuggest:v["a"]},props:{geo:A,service:String,defaultValue:String}}),w((j=function(e){function t(){var e,a;Object(c["a"])(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=Object(u["a"])(this,(e=Object(p["a"])(t)).call.apply(e,[this].concat(r))),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"suggestions",[{data:[]}]),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"renderSuggestion",function(e){var t=e.item;return t.address}),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"getSuggestionValue",function(e){return e.item.address}),a}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"onInputChange",value:function(){var e=this,t=null;return function(a){clearTimeout(t),t=setTimeout(Object(i["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.geo.search(a);case 2:n=t.sent,e.suggestions=[{data:n}];case 4:case"end":return t.stop()}},t,this)})),500)}}},{key:"onSelected",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(a=t.item,this.service!==O.GoogleMaps){e.next=7;break}return e.next=6,this.geo.getGooglePlaceDetails(a.__placeId,a);case 6:a=e.sent;case 7:this.$emit("selected",a);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"inputProps",get:function(){return{onInputChange:this.onInputChange(),class:"text nicetext fullwidth",placeholder:y("Search for a location"),initialValue:this.initialValue}}}]),t}(m["b"]),_=j))||_),R=I,z=a("2877"),G=Object(z["a"])(R,b,f,!1,null,null,null),T=G.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.$style.grid},[a("Input",{attrs:{label:e.labels.fullAddress,value:e.value.address},on:{input:function(t){e.onInput("fullAddress",t)}}}),a("Input",{attrs:{label:e.labels.number,value:e.value.parts.number},on:{input:function(t){e.onInput("number",t)}}}),a("Input",{attrs:{label:e.labels.address,value:e.value.parts.address},on:{input:function(t){e.onInput("address",t)}}}),a("Input",{attrs:{label:e.labels.city,value:e.value.parts.city},on:{input:function(t){e.onInput("city",t)}}}),a("Input",{attrs:{label:e.labels.postcode,value:e.value.parts.postcode},on:{input:function(t){e.onInput("postcode",t)}}}),a("Input",{attrs:{label:e.labels.county,value:e.value.parts.county},on:{input:function(t){e.onInput("county",t)}}}),a("Input",{attrs:{label:e.labels.state,value:e.value.parts.state},on:{input:function(t){e.onInput("state",t)}}}),a("Input",{attrs:{label:e.labels.country,value:e.value.parts.country},on:{input:function(t){e.onInput("country",t)}}})],1)},N=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("span",{class:e.$style.name},[e._v("\n\t\t"+e._s(e.label)+"\n\t")]),a("input",{staticClass:"text nicetext fullwidth",attrs:{type:e.type,name:e.name},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t)}}})])},K=[],V=(L=Object(m["a"])({props:{label:String,name:String,type:{type:String,default:"text"},value:[String,Number]}}),L(P=class extends m["b"]{})||P),E=V;function Z(e){var t=a("1c37");t.__inject__&&t.__inject__(e),this["$style"]=t.locals||t}var U,B,J,F=Object(z["a"])(E,D,K,!1,Z,null,null,!0),W=F.exports,H=(U=Object(m["a"])({components:{Input:W},props:{value:{type:Object,default:{address:"",lat:0,lng:0,parts:{}}},fullAddressDirty:Boolean}}),U((J=class extends m["b"]{constructor(){super(...arguments),Object(g["a"])(this,"labels",{fullAddress:y("Full Address"),number:y("Name / Number"),address:y("Street Address"),city:y("Town / City"),postcode:y("Postcode"),county:y("County"),state:y("State"),country:y("Country")})}onInput(e,t){this.$emit("changed",{name:e,value:t.target.value})}},B=J))||B),q=H;function Q(e){var t=a("9685");t.__inject__&&t.__inject__(e),this["$style"]=t.locals||t}var X,Y,ee,te,ae,ne=Object(z["a"])(q,$,N,!1,Q,null,null,!0),re=ne.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.$style.map})},se=[],ie=a("268f"),ce=a.n(ie),le=a("d360"),ue=(a("c5f6"),a("e11e")),pe=a.n(ue),de=(a("2acb"),a("898b"),{Wikimedia:"wikimedia",OpenStreetMap:"openstreetmap",CartoVoyager:"carto.rastertiles/voyager",CartoPositron:"carto.light_all",CartoDarkMatter:"carto.dark_all",MapboxOutdoors:"mapbox.outdoors",MapboxStreets:"mapbox.streets",MapboxLight:"mapbox.light",MapboxDark:"mapbox.dark",GoogleRoadmap:"google.roadmap",GoogleTerrain:"google.terrain",GoogleHybrid:"google.hybrid",MapKitStandard:"mapkit.standard",MapKitMutedStandard:"mapkit.muted",MapKitSatellite:"mapkit.satellite",MapKitHybrid:"mapkit.hybrid"}),he=de,ge=(a("6cc5"),X=Object(m["a"])({props:{tiles:String,token:String,latLng:Object,zoom:Number}}),Y=Object(m["c"])("latLng",{deep:!0}),X((ae=function(e){function t(){var e,a;Object(c["a"])(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=Object(u["a"])(this,(e=Object(p["a"])(t)).call.apply(e,[this].concat(r))),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"map",null),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"marker",null),a}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"mounted",value:function(){var e=this;if(this.map=pe.a.map(this.$el,{minZoom:3}).setView(this.latLng,this.zoom),this.tiles.indexOf("google")>-1)this._googleMutant();else if(this.tiles.indexOf("mapkit")>-1)this._mapKitMutant();else{var t=pe.a.tileLayer(this.tileLayer.url,{attribution:this.tileLayer.attr});this.map.addLayer(t)}this.map.on("zoom",this.onZoom),this.setMarker();var a=new IntersectionObserver(function(t){t[0].intersectionRatio<=0||e.map.invalidateSize(!0)});a.observe(this.$el)}},{key:"setMarker",value:function(){var e=this;this.marker&&this.map.removeLayer(this.marker),this.marker=pe.a.marker(this.latLng,{icon:this.icon,draggable:!0,autoPan:!0}),this.map.addLayer(this.marker),this.marker.on("dragend",function(){e.$emit("change",e.marker.getLatLng())})}},{key:"onLatChange",value:function(e,t){e.lat===t.lat&&e.lng===t.lng||(this.map.flyTo(this.latLng),this.setMarker())}},{key:"onZoom",value:function(){this.$emit("zoom",this.map.getZoom())}},{key:"_googleMutant",value:function(){pe.a.gridLayer.googleMutant({type:this.tiles.split(".")[1]}).addTo(this.map)}},{key:"_mapKitMutant",value:function(){var e=this;pe.a.mapkitMutant({type:this.tiles.split(".")[1],authorizationCallback:function(t){return t(e.token)},language:window.Craft.language}).addTo(this.map)}},{key:"tileLayer",get:function(){var e=pe.a.Browser.retina?"@2x.png":".png",t=this.tiles.split(".")[1];switch(this.tiles){case he.Wikimedia:return{url:"https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}".concat(e),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://maps.wikimedia.org" target="_blank" rel="noreferrer">Wikimedia</a>'};case he.OpenStreetMap:return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>'};case he.CartoVoyager:case he.CartoPositron:case he.CartoDarkMatter:return{url:"https://{s}.basemaps.cartocdn.com/".concat(t,"/{z}/{x}/{y}").concat(e),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution" target="_blank" rel="noreferrer">CARTO</a>'};case he.MapboxOutdoors:case he.MapboxStreets:case he.MapboxLight:case he.MapboxDark:return{url:"https://api.tiles.mapbox.com/v4/mapbox.".concat(t,"/{z}/{x}/{y}").concat(e,"?access_token=").concat(this.token),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://www.mapbox.com/">Mapbox</a>'};default:throw new Error("Unknown map tiles service: "+this.tiles)}}},{key:"icon",get:function(){return pe.a.divIcon({html:'<svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="41" viewBox="0 0 47 82"><path fill="#E7433B" d="M23.5036141,0 C10.5440829,0 0,10.5437082 0,23.5027789 C0,24.4175793 0.0650869313,25.3179165 0.159101388,26.1423217 C0.867825751,35.0299879 5.03338935,41.3938173 9.43760504,48.1336911 C15.1833347,56.9164988 21.6920278,62.0913384 21.6920278,80.1920939 C21.6920278,81.1900581 22.5019985,82 23.4999981,82 C24.4979978,82 25.3079685,81.1900581 25.3079685,80.1920939 C25.3079685,62.0949542 31.8166616,56.9201146 37.5623912,48.1336911 C41.9702229,41.3938173 46.1321705,35.0299879 46.833663,26.2074063 C46.9385253,25.3179165 46.9999963,24.4175793 46.9999963,23.499163 C47.0072282,10.5437082 36.4631453,0 23.5036141,0 Z M23,33 C18.0392,33 14,28.9608 14,24 C14,19.0392 18.0392,15 23,15 C27.9608,15 32,19.0392 32,24 C32,28.9608 27.9608,33 23,33 Z"/></svg>',iconSize:[23.5,41],iconAnchor:[11.75,41],className:""})}}]),t}(m["b"]),te=ae,Object(le["a"])(te.prototype,"onLatChange",[Y],ce()(te.prototype,"onLatChange"),te.prototype),ee=te))||ee),me=ge,be=a("f3c8");function fe(e){this["$style"]=be["default"].locals||be["default"]}var ve,ye,we,_e=Object(z["a"])(me,oe,se,!1,fe,null,null),je=_e.exports,ke={functional:!0,render:function(e,t){return t.children}},Oe=(ve=Object(m["a"])({props:{options:{type:String}},components:{Search:T,Address:re,Map:je,Fragment:ke}}),ve((we=function(e){function t(){var e,a;Object(c["a"])(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=Object(u["a"])(this,(e=Object(p["a"])(t)).call.apply(e,[this].concat(r))),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"config",{isSettings:!1,name:"",hideSearch:!1,hideMap:!1,hideAddress:!1,mapTiles:"wikimedia",mapToken:"",geoService:"nominatim",geoToken:""}),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"value",{address:"",zoom:15,lat:0,lng:0,parts:new C}),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"geo",null),Object(g["a"])(Object(h["a"])(Object(h["a"])(a)),"fullAddressDirty",!1),a}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=JSON.parse(this.$props.options),t=e.config,a=e.value;this.config=t,this.value=a,this.value.parts=C.from(a.parts),this.geo=new A(t)}},{key:"onSearchSelected",value:function(e){this.value=e}},{key:"onMapChange",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this.value.zoom,e.t0=this.config.geoService,e.next=e.t0===O.Nominatim?4:e.t0===O.Mapbox?8:e.t0===O.GoogleMaps?12:e.t0===O.AppleMapKit?16:20;break;case 4:return e.next=6,this.geo.reverseNominatim(t);case 6:return this.value=e.sent,e.abrupt("break",21);case 8:return e.next=10,this.geo.reverseMapbox(t);case 10:return this.value=e.sent,e.abrupt("break",21);case 12:return e.next=14,this.geo.reverseGoogle(t);case 14:return this.value=e.sent,e.abrupt("break",21);case 16:return e.next=18,this.geo.reverseApple(t);case 18:return this.value=e.sent,e.abrupt("break",21);case 20:throw new Error("Unknown geo service: "+this.config.geoService);case 21:this.value.zoom=a,this.fullAddressDirty=!1;case 23:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"onZoom",value:function(e){this.value.zoom=e}},{key:"onPartChange",value:function(e){var t=e.name,a=e.value;"fullAddress"===t?(this.value.address=a,this.fullAddressDirty=""!==a):(this.value.parts[t]=a,""!==this.value.address&&this.fullAddressDirty||(this.value.address=s()(this.value.parts).filter(Boolean).join(", ")))}}]),t}(m["b"]),ye=we))||ye),xe=Oe,Me=Object(z["a"])(xe,n,r,!1,null,null,null),Se=Me.exports,Ce={install:function(e){e.config.productionTip=!1,e.filter("t",y),e.component("simple-map",Se)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Ce)},"6bca":function(e,t,a){e.exports={grid:"Address_grid_3Vxrg"}},9685:function(e,t,a){"use strict";a.r(t);var n=a("6bca"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=r.a},b4c0:function(e,t,a){e.exports={map:"Map_map_2NpD9"}},bfca:function(e,t,a){e.exports={name:"Input_name_3DpMZ"}},f3c8:function(e,t,a){"use strict";var n=a("b4c0"),r=a.n(n);t["default"]=r.a}});
//# sourceMappingURL=app.js.map