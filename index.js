
/*
 * Copyright (C) 2016 Jaroslav Peter Prib
 * 
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 * 
 */
var pribJSExtensions={};

if(Object.prototype.defineFunction)
	console.warning("Object.prototype.defineFunction already defined");
else
	Object.defineProperty(Object.prototype, "defineFunction", {
			enumerable: false
		  	,value: function(o,p,f) {
		  		console.log("pribJSExtentions loading "+p+" for "+typeof o);
		  		if(o.hasOwnProperty(p))
		  			console.warning("Object.prototype."+p+" already defined for "+typeof o);
		  		else
		  			Object.defineProperty(o, p, {
		
  					enumerable: false
		  					,value: f
		  				});
		  	}
		});
Object.defineFunction(String,'startsWith',function () {
		for (var i = 0; i < arguments.length; i++)
			if(this.slice(0, arguments[i].length)==arguments[i]) return true;
		return false;
	});
Object.defineFunction(Array, "getIterator", function() {
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
Object.defineFunction(Array, "last", function() {
		if(this.length===0) return null;
	  	return this[this.length - 1];
	});
Object.defineFunction(Array ,"pushArray", function(a) {
		if(a instanceof Array ) 
	  		for (var i = 0; i<a.length; i++)
	  			this.push(a[i]);
	  		} else this.push(a);
	});
Object.defineFunction(Array ,"sum", function() {
	  	for(var t=0 i=0;i<this.length;i++) t+=this[i];
		return t;
	});
Object.defineFunction(Array ,"summariseMetrics", function(metrics,location) {
		var a,property,cell,output = {};
		for (a = 0; a < metrics.length; a++)
		output[metrics[a]]={count:0,total:0};
	  	for(var i=0;i<this.length;i++)
			for (var a = 0; a < metrics.length; a++) {
   		  		property=metrics[a];
   		  		cell=output[property];
   		  		if(location==null) {
	   			  	if(!this[i].hasOwnProperty(property)) continue;
					cell.total+=this[i][property];
   				} else {
	   				if(!this[i].hasOwnProperty(location)||!this[i][location].hasOwnProperty(property)) continue;
   					cell.total+=this[i][location][property];
   				}
   				cell.count++;
   			}
	  	return output;
	  });
Object.defineFunction(Array ,"toPercentages",  function() {
		for(var o=[], t=this.sum(), i=0;i<this.length;i++) o[i]=Math.floor((100*this[i])/t);
	  	return o;
	});
Object.defineFunction(Array ,"toRatios", function() {
		for(var o=[], t=this.sum(), i=0;i<this.length;i++) o[i]=this[i]/total;
		return o;
	});
Object.defineFunction(Date ,"timeDuration" = {
	second : 1000
	,minute : 1000*60
	,hour : 1000*60*60
	,day : 1000*60*60*24
	});
Object.defineFunction(Date ,"days" ,function(toData) {
		return Math.abs(Math.floor(toData.getTime()/Date.timeDuration.day) -  Math.floor(this.getTime()/Date.timeDuration.day));
	});
Object.defineFunction(Object ,"addPropertyByObjectProperty", function(p,o) {
		if(o==null) return;
		this[o[p]]=o;
	});
Object.defineFunction(Object ,"clone", function() {
		if(this instanceof String) return new String(this);  
		if(this instanceof Number) return new Number(this);  
		if(this instanceof Date)return new Date(this);
		if(this instanceof Array) var newObj=[];
		else if(typeof this == "object")var newObj={};
		else return this;
		for (var i in this) newObj[i]=(this[i]==null?null:this[i].clone());
		return newObj;
  	});
Object.defineFunction(Object ,"forProperty", function(f,o) {
		for (var p in this) f.apply(o,[p,this[p]]);
  	});
Object.defineFunction(Object ,"forPropertyEnumerable", function(f,o) {
		for (var p in this) {
			if(!this[p]==null && this[p].enumerable && this[p].enumerable===false) continue;
			f.apply(o,[p,this[p]]);
		}
	});
Object.defineFunction(Object ,"getIterator", function() {
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
	  	if (o.hasNext()) O.next();
	  	return o; 
	});
Object.defineFunction(Object ,"getProperty" ,function(property) {
		if(!this.hasOwnProperty(getProperty)) throw Error("missing property "+name);
		return this[name];
  	});
Object.defineFunction(Object ,"getValue", function(k) {
  		if(k==null) return this;
  		try{
			for(var r=this ,properties=key.split('.'), i=0;i<p.length;i++) r=r[p[i]];
  		} catch (e) {
  			throw Error("key "+k+" not found at level "+i+" property: "+properties[i]);
  		}
		return r;
	});
Object.defineFunction(Object ,"hasProperties", function() {
		for(var p in this)
			if(this.hasOwnProperty(p)) return true;
		return false;
	});
Object.defineFunction(Object ,"hasAllProperties", function() {
		for (var i = 0; i < arguments.length; i++)
			if(!this.hasOwnProperty(arguments[i])) throw Error("missing "+arguments[i]);
		 return true;
  	});
Object.defineFunction(Object ,"inheritsProperties", function() {
		for(var superFunction in arguments)
			for(var property in superFunction)
				if(!this.hasOwnProperty(property))
					this[property]=superFunction[property];
			for(var property in superFunction.prototype)
				if(!this.prototype.hasOwnProperty(property))
					this.prototype[property]=superFunction.prototype[property];

		if(arguments.length=1)
			this.super_ = arguments[0];
		else {
			this.super_functions=[];
			for(var i=1;i<arguments.length;i++) this.super_functions.push(i); 
			this.super_ = function() {
				for(var i=1;i<arguments.length;i++) this.super_functions[i].apply(this, [arguments])
			}
		}
});

Object.defineFunction(Object ,"isEmpty", function() {
		for (var p in this) 
			if(this.hasOwnProperty(p)) return false;
		 return true;
  	});
Object.defineFunction(Object ,"merge", function(s) {
		if(arguments.length>1) {
			for(var i=1;i<arguments.length;i++) {
   				if(this[arguments[i]]) throw Error("collision with property: "+arguments[i]);
		  		this[arguments[i]] = s[arguments[i]];
			}
		 } else
		 	for (var p in s) {
		 		if(this[p]) throw Error("collision with property: "+p);
	  			this[p] = s[p];
  			}
  	});
Object.defineFunction(Object ,"mergeEnumerable", function(s) {
		 for (var p in s) {
		 	if(s[p].enumerable && source[p].enumerable===false) continue;
		  	if(this[p]) throw Error("collision with property: "+p);
		  	this[p] = s[p];
		 }
	});
Object.defineFunction(Object ,"mergeReplace", function(s) {
		if(arguments.length>1)
	  		for(var i=1;i<arguments.length;i++) this[arguments[i]] = s[arguments[i]];
	  	else 
			for (var p in s) this[p] = s[p];
  	});
Object.defineFunction(Object ,"mergeReplaceEnumerable", function(s) {
		for (var p in s) {
			if(s[p].enumerable && s[p].enumerable===false) continue;
   		  	this[p] = s[p];
		 }
	});
Object.defineFunction(Object ,"propertyList" ,function() {
		for (var l=[], p in this) l.push(p);
   		return l;
  	});
Object.defineFunction(Object ,"propertyList2String", function() {
	    	return this.propertyList().join(',');
  	});
Object.defineFunction(Object ,"toSimpleArray", function(prefix) {
		for (var o=[] ,p in this)
			if(this[p]==null || this[p].enumerable==null || this[p].enumerable==true)
		  		o.push([(prefix||"")+p,this[p],typeof this[p]]);
		 return o;
	});
if(String.prototype.defineFunction)
	console.warning("String.prototype.defineFunction already defined");
else
	String.prototype.defineFunction = function(p,f) { 
			console.log("pribJSExtentions loading "+p+" for "+typeof o);
		  	if(String.prototype.hasOwnProperty(p))
				console.warning("String.prototype."+p+" already defined");
			String.prototype[p]=f;

		};
String.defineFunction("addSlashes",function() { 
		return this.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
	});
String.defineFunction("capitalize",function() {
		return this.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
	});
String.defineFunction("endsWithList",function () {
		for (var i = 0; i < arguments.length; i++)
			if(this.substr(-arguments[i].length)==arguments[i]) return true;
		return false;
	});
String.defineFunction("endsWith",String.prototype.endsWithList);

String.defineFunction("endsWithListAnyCase",function () {
		for (var i=0; i<arguments.length; i++)
			if(this.substr(-arguments[i].length).toLowerCase()===arguments[i].toLowerCase()) return true;
		return false;
	});
String.defineFunction("inList",function () {
		var thisString=this.toString(), argValue;
		for (var i=0; i<arguments.length; i++) {
			var argValue=arguments[i];
			if(argValue==null) continue;
			if(argValue instanceof Array) {
				for (var j= 0; j<argValue.length;j++)
					if(thisString==argValue[j]) return true;
			} else if(thisString==argValue) return true;
		}
		return false;
   	});
String.defineFunction("inListAnyCase",function () {
		var thisLower=this.toString().toLowerCase(), argValue;
		for (var i=0; i<arguments.length; i++) {
			var argValue=arguments[i];
			if(argValue==null) continue;
			if(argValue instanceof Array) {
				for (var j= 0; j<argValue.length;j++)
					if(thisLower==argValue[j].toLowerCase()) return true;
			} else if(thisLower==argValue.toLowerCase()) return true;
		}
		return false;
	});
String.defineFunction("inListLowerCase",function () {
		var thisLower=this.toString().toLowerCase(), argValue;
		for (var i=0; i<arguments.length; i++) {
			var argValue=arguments[i];
			if(argValue==null) continue;
			if(argValue instanceof Array) {
				for (var j= 0; j<argValue.length;j++)
					if(thisLower==argValue[j]) return true;
			} else if(thisLower==argValue) return true;
		}
		return false;
	});
String.defineFunction("maxSize",function (max) {
		return this.substring(0,Math.min(max,this.length));
	});
String.defineFunction("replaceAll",function(a,b) {
		return this.replace(a,b,"g");
	});
String.defineFunction("startsWith",String.prototype.startsWithList);
String.defineFunction("startsWithList",function () {
		for (var i = 0; i < arguments.length; i++)
			if(this.slice(0, arguments[i].length)==arguments[i]) return true;
		return false;
	});
String.defineFunction("startsWithListAnyCase",function () {
		for (var i = 0; i < arguments.length; i++)
			if(this.slice(0, arguments[i].length).toLowerCase()==arguments[i].toLowerCase()) return true;
		return false;
 	});
String.defineFunction("trimChar",function(char) {
		if(this.charAt(0)!=char && this.charAt(0)!=char) return this;
		var o=this;
		while (o.charAt(0)==char && o.length>0) 
			o=this.substring(1);
		while (o.charAt(o.length-1)==char && o.length>0) 
			o=this.substring(0,o.length-1);
		return o;
	});
String.defineFunction("toQuoted",function() {
		var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
			,meta = {'\b':'\\b','\t':'\\t','\n': '\\n','\f': '\\f','\r': '\\r','"' : '\\"','\\': '\\\\'};
		escapable.lastIndex = 0;
		return escapable.test(this)
			? '"' +this.replace(escapable, function (a) {
		    			var c = meta[a];
		    			return typeof c === 'string'
		    				? c
		    				: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		    		}) + '"'
			: '"' + this + '"';		
	});
Object.defineFunction(Object,"toJsonString", function(depth,nodes) {
		try{
			if(nodes && nodes > 1000) return '"*** max nodes reached"';
			switch (typeof this) {
				case 'number': return this;
				case 'string': return this.toQuoted();
				case 'boolean': return this;
				case 'object':
					if(depth && depth > 10) return '"*** max depth reached"';
					switch (this.constructor) {
						case Array :
							var a="";
							for (var i = 0; i < this.length && i < 1000 ; i++) 
								a+=","+(this[i]==null?"null":this[i].toJsonString(depth,nodes));
							if(a.length===0) return "[]";
							return "["+a.substr(1)+"]";
						case Object :
							var o="";
							for (var property in this)
								if(!property.startsWith("$_"))
									o+=',"'+property+'" : '+(this[property]==null?"null":this[property].toJsonString(depth,nodes));
								if(o.length===0) return "{}";
								return "{"+o.substr(1)+"}";
							default: 
								return JSON.stringify(this);
						}
			}
			return JSON.stringify(this);
		} catch(e) {
			return "*** "+e.toString();
		}
	});

function setAllNodesClass(c,f,thisObject) {
	console.log("setAllNodesClass: "+c);
	if(c instanceof Array) {
		for (var cc of c) setAllNodesClass(cc,f,thisObject);
		return;
	}
	var f=f||this[c]||null;
	if(f==null) return;
	for(var ns = document.getElementsByClassName(c),nsl=ns.length,i=0;i<nsl;i++)
		f.apply(thisObject||this,[ns[i]]);
}
pribJSExtensions.setAllNodesClass=setAllNodesClass;

if (typeof define !== 'function') {
    var define = require('amdefine')(pribJSExtensions);
}
define(function(require) {
    //The value returned from the function is
    //used as the module export visible to Node.
    return pribJSExtensions;
});

