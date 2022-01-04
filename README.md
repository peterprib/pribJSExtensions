# PribJSExtensions

Various extensions to base object.

object methods 
    defineFunction(<object prototype>, <method name>,<function>) - add a method, tedst of already exists

Array
    areEqual", function(l,r,t,f,o) {
    diffCells", function() {
    getIterator", function() {
		var returnData = {array:this
				,endOfList: function() {return this.key>=this.array.length;}
				,getFirst: function() {this.key=0;}
				,getLast: function() {this.key=this.array.length-1;}
				,hasData: function() {return this.key<this.array.length;}
				,hasNext: function() {return this.key+1<this.array.length;}
				,key: -1
				,next: function() {this.value=this.array[++this.key];}
				,value: null
			    };
		if (returnData.hasNext()) returnData.next();
			return returnData; 
	});
    innerSet", function() {
    last", function() {
    outerSet", function() {
    pushArray", function(a) {
    sum", function() {
    summariseMetrics", function(metrics,l) {
    toPercentages",  function() {
    toRatios", function() {
Date
    timeDuration" ,{
	second : 1000
	,minute : 1000*60
	,hour : 1000*60*60
	,day : 1000*60*60*24
	});
    days" ,function(toData) {

Object
    addPropertyByObjectProperty", function(p,o) {
    getConstructorName", function() {	
    getFunctionName", function() {	
    clone", function() {
    cloneProperties", function(...properties) {
    forProperty", function(f,o) {
    forPropertyEnumerable", function(f,o) {
    getIterator", function() {
		var o = {array:this.propertyList()
			,thisObject: this
			,endOfList: function() {return this.position>=this.array.length;}
			,getFirst: function() {this.position=0;this.set();}
			,getLast: function() {this.position=this.array.length-1;this.set();}
			,hasData: function() {return this.position<this.array.length;}
			,hasNext: function() {return this.position+1<this.array.length;}
			,key: null
			,position:-1
			,next: function() {this.position++;this.set();}
			,set: function() {
					this.key=this.array[this.position];
					this.value=this.thisObject[this.key];
				}
			,value: null
			};
		if (o.hasNext()) o.next();
		return o; 
	});
    getProperty" ,function(n) {
    getValue", function(k) {
    hasProperties", function() {
    hasAllProperties", function() {
    inheritsProperties", function() {
    isEmpty", function() {
    merge", function(s) {
    mergeEnumerable", function(s) {
    mergeReplace", function(s) {
    mergeReplaceEnumerable", function(s) {
    propertyList" ,function() {
    propertyList2String", function() {
    toSimpleArray", function(prefix) {

String
    addSlashes",function() { 
    capitalize",function() {
    endsWithList",function () {
    endsWithListAnyCase",function () {
    inList",function () {
    inListAnyCase",function () {
    inListLowerCase",function () {
    maxSize",function (max) {
    replaceAll",function(a,b) {
    startsWithList",function () {
    startsWithListAnyCase",function () {
    startsWithAnyCase",String.prototype.startsWithListAnyCase);
    trimChar",function(char) {
    toQuoted",function() {
    toJsonString", function(depth,nodes) {


------------------------------------------------------------

# Install

npm install pribJSExtensions

# Version

0.0.1 Initial release

# Author
  
[Peter Prib][2] 

[1]: https://www.npmjs.com/package/pribJSExtensions "source code"

[2]: https://github.com/peterprib "base github"
