(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{dfzJ:function(e,t,a){"use strict";a.r(t);var r=a("ln6h"),n=a.n(r),s=a("zrwo"),c=a("O40h"),i=a("0iUn"),o=a("sLSF"),l=a("MI3g"),u=a("a7VT"),d=a("AT/M"),p=a("Tit0"),m=a("vYYK"),h=a("kOwS"),b=a("9Jkg"),f=a.n(b),g=a("q1tI"),v=a.n(g),_=a("5Yp1"),y=a("b0oO"),w=v.a.createElement,N=function(e){return w("div",{className:"product-result__container",key:e._id},"discussion"===e._type?w("div",null,w("div",{className:"product-result__header"},w("a",{href:"https://community.musictribe.com"+e.view_href,target:"blank"},w("p",null,e.subject),w("p",null,"https://community.musictribe.com"+e.view_href))),w("div",{className:"product-result__body"},w("div",{className:"product-result__body--description"},w("p",{dangerouslySetInnerHTML:{__html:e.body.replace(/<[^>]+>/g,"").substring(0,250)}})))):null)},S=a("/VJY"),O=a("0WWi"),j=a("Iinc"),P=a.n(j);a("nOHt");a.d(t,"default",function(){return F});var I=v.a.createElement,k={settings:{app:"artists,products,downloads,videos,learn,artist,news",url:"https://elastic.musictribe.com"},datasearch:{componentId:"searchSensor",dataField:["artistName","name","productName","productId","code","title","subject","brand"],autosuggest:!0,placeholder:"Search",iconPosition:"right",icon:I("img",{src:"/static/search-icon.svg",style:{display:"flex"}}),className:"global-search__input col-sm-10",innerClass:{input:"global-input"},onValueSelected:function(e,t,a){return document.location.href=e?'/?searchSensor="'.concat(e,'"'):"/"},URLParams:!0,renderNoSuggestion:function(){return I("div",null,"No suggestion found")}},resultcard:{componentId:"discussionResult",dataField:["subject","search_snippet"],size:15,defaultQuery:function(){return{query:{terms:{_type:["discussion"]}}}},renderResultStats:function(e){return I("div",{className:"result-stats__container"},I("p",null,"( Showing page ".concat(e.currentPage+1," of ").concat(e.numberOfPages," ) displayed result of ").concat(e.displayedResults," total of ").concat(e.numberOfResults," results in ( ").concat(e.time," ms )")))},render:function(e){var t=e.loading,a=e.error,r=e.data;return t?I("div",{className:"loader__container"},I("img",{src:"/static/loader.gif"})):a?I("div",null,"Something went wrong! Error details ",f()(a)):r.map(function(e){return I(N,Object(h.a)({key:e._id},e))})},pagination:!0,URLParams:!0,react:{and:["searchSensor","productFilter","ratingsSensor"]}},productfilter:{componentId:"productFilter",dataField:"brand",title:"Products",showSearch:!1,URLParams:!0,showFilter:!0,className:"filter__container",react:{or:["searchSensor"]}}},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n))),Object(m.a)(Object(d.a)(a),"state",{reactivedata:a.props,value:a.props.url.query.searchSensor}),Object(m.a)(Object(d.a)(a),"onChange",function(e,t){a.setState({value:e})}),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return I(O.d,Object(h.a)({theme:{typography:{fontFamily:'Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif'}}},k.settings,{getInitialProps:this.props.store}),I(y.a,null),I(_.a,null,I("div",{className:"row "},I("div",{className:"col-sm-20"},I("div",{className:"global-search__container"},I(O.a,k.datasearch)))),I("div",{className:"row"},I("div",{className:"col-sm-5"},I("div",{className:"sidebar__container"},I("h5",null,"Filter Search Results"),I(O.b,k.productfilter),I(O.c,{componentId:"ratingsSensor",dataField:"averageRating",title:"Ratings",className:"filter__container",data:[{start:4,end:5,label:"4 stars and up"},{start:3,end:5,label:"3 stars and up"},{start:2,end:5,label:"2 stars and up"},{start:1,end:5,label:"> 1 stars"}]}))),I("div",{className:"col-sm-15"},I(S.default,null),I(O.e,k.resultcard)))))}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(n.a.mark(function e(t){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.pathname,a=t.query,e.next=3,P()([{datasearch:Object(s.a)({},k.datasearch),source:O.a},{resultcard:Object(s.a)({},k.resultcard),source:O.e}],null,k.settings,a);case 3:return e.t0=e.sent,e.abrupt("return",{store:e.t0});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(g.Component)},"obK+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/discussions",function(){var e=a("dfzJ");return{page:e.default||e}}])}},[["obK+",1,0]]]);