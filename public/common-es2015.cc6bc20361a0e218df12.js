(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"H+bZ":function(t,s,r){"use strict";r.d(s,"a",(function(){return n}));var e=r("AytR"),a=r("fXoL"),i=r("tk/3");let n=(()=>{class t{constructor(t){this.http=t,this.apiUrl="http://localhost:4500/api",this.env=e.a,this.env.production&&(this.apiUrl="http://opay-hackathon-2020.herokuapp.com/api")}getMessages(){return this.http.get(`${this.apiUrl}/message/get`)}sendMessage(t){return this.http.post(`${this.apiUrl}/message/post`,t)}pay(t){return this.http.post(`${this.apiUrl}/product/pay`,t)}getCountries(){return this.http.get(`${this.apiUrl}/countries`)}getBanks(t){return this.http.get(`${this.apiUrl}/banks?countryCode=${t}`)}transfer(t){return this.http.post(`${this.apiUrl}/transfer`,t)}validateBankAccount(t){return this.http.post(`${this.apiUrl}/validate-bank-account`,t)}}return t.\u0275fac=function(s){return new(s||t)(a.ec(i.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);