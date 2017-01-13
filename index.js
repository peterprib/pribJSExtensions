
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

if(Array.prototype.getIterator)
	console.log("Array.prototype.getIterator already defined");
else
	Object.defineProperty(Array.prototype, "getIterator", {
			enumerable: false
	  		,value:  function() {
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
				}
	  		});
if(Array.prototype.last)
	console.log("Array.prototype.last already defined");
else
	Object.defineProperty(Array.prototype, "last", {
			enumerable: false
	  		,value:  function() {
	  				if(this.length===0) 
	  					return null;
	  				return this[this.length - 1];
	  			}
	  		});
if(global.DEBUG_LOG_2_CONSOLE) 
	test.Management.add({description:"Array.prototype.last"
		,tests:[ {script:"[1,2,3,4].last()" ,result:"4"}
			,{script:"[].last()"		,result:null}
		]});
if(Array.prototype.object2Table)
	console.log("Array.prototype.object2Table already defined");
else
	Object.defineProperty(Array.prototype, "object2Table", {
			enumerable: false
		  	,value: function() {
		  			var returnData = {
		  					columnsInfo: {
		  						num : 0
		  						,name : []
								,precision : []
								,scale : []
								,type : []
								,width : []
								,displaySize : []
		  						}
							,rowsReturned : 0
							,rowsInSet : {
								rowsFound : 0
								,endFound : true
								}
							,isRowCountComplete : true
							,data: []
							}
 						,columnPos= {}
		  				,columnsInfo=returnData.columnsInfo
		  				,data=returnData.data;
		  			for(var i=0;i<this.length;i++)
		  				for(var property in this[i])
		  					if(columnPos[property]==null) {
		  						columnPos[property]=columnsInfo.num;
		  						columnsInfo.num++;
		  						columnsInfo.name.push(property);
		  						columnsInfo.precision,push(128);
		  						columnsInfo.scale.push(0);
								columnsInfo.type.push(typeof property);
		  						columnsInfo.width.push(20);
		  						columnsInfo.displaySize.push(20);
		  					}
		  			for(var i=0;i<this.length;i++) {
		  				var row=[]; 
		  				for(var property in columnPos)
		  					row.push(this[i][property]==null?null:this[i][property]);
		  			 	data.push(row);
		  			}
		  			return returnData;
		  		}
		  	});	
if(Array.prototype.pushArray)
	console.log("Array.prototype.pushArray already defined");
else
	Object.defineProperty(Array.prototype, "pushArray", {
			enumerable: false
	  		,value:  function(anArray) {
	  				if(anArray instanceof Array ) {
	  					for (var i = 0; i<anArray.length; i++)
	  						this.push(anArray[i]);
	  				} else this.push(anArray);
	  			}
	  		});
if(!Array.prototype.sum)
	Object.defineProperty(Array.prototype, "sum", {
			enumerable: false
	  		,value:  function() {
	  				var total = 0;
	  				for(var i=0;i<this.length;i++)
	  					total+=this[i];
	  				return total;
	  			}
	  		});
if(Array.prototype.summariseMetrics)
	console.log("Array.prototype.summariseMetrics already defined");
else
	Object.defineProperty(Array.prototype, "summariseMetrics", {
			enumerable: false
	  		,value:  function(metrics,location) {
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
	   		  				if(!this[i].hasOwnProperty(location)) continue;
	   		  				if(!this[i][location].hasOwnProperty(property)) continue;
   		  					cell.total+=this[i][location][property];
   		  				}
   		  				cell.count++;
   		  			}
	  				return output;
	  			}
	  		});
if(Array.prototype.toPercentages)
	console.log("Array.prototype.toPercentages already defined");
else
	Object.defineProperty(Array.prototype, "toPercentages", {
			enumerable: false
	  		,value:  function() {
	  				var total = 0, returnArray=[];
	  				for(var i=0;i<this.length;i++)
	  					total+=this[i];
	  				for(i=0;i<this.length;i++)
	  					returnArray[i]=Math.floor((100*this[i])/total);
	  				return returnArray;
	  			}
	  		});
if(Array.prototype.toRatios)
	console.log("Array.prototype.toRatios already defined");
else
	Object.defineProperty(Array.prototype, "toRatios", {
			enumerable: false
	  		,value:  function() {
	  				var total = 0, returnArray;
	  				for(var i=0;i<this.length;i++)
	  					total+=this[i];
	  				for(i=0;i<this.length;i++)
	  					returnArray[i]=this[i]/total;
	  				return returnArray;
	  			}
	  		});
if(Array.prototype.toTable)
	console.log("Array.prototype.toTable already defined");
else
	Object.defineProperty(Array.prototype, "toTable", {
			enumerable: false
		  	,value: function() {
		  			return {
		  					columnsInfo: {
		  						num : 3
		  						,name : ["name", "value","type"]
								,precision : [128,1024,8]
								,scale : [0,0,0]
								,type : ["string","string","string"]
								,width : [20,128,8]
								,displaySize : [20,128,8]
		  						}
							,rowsReturned : this.length
							,rowsInSet : {
								rowsFound :this.length
								,endFound : true
								}
							,isRowCountComplete : true
							,data: this
						};
		  		}
		  	});	
if(Date.prototype.days)
	console.log("Date.prototype.days already defined");
else
	Date.prototype.days = function(toData) {
	  				return Math.abs(Math.floor(toData.getTime()/global.timeDuration.day) -  Math.floor(this.getTime()/global.timeDuration.day));
	  			};
if(Object.prototype.addPropertyByObjectProperty)
	console.log("Object.prototype.addPropertyByObjectProperty already defined");
else
	Object.defineProperty(Object.prototype, "addPropertyByObjectProperty", {
			enumerable: false
		  	,value: function(property,aObject) {
		  			if(aObject==null) return;
		  			this[aObject[property]]=aObject;
		  		}
		  	});
if(Object.prototype.clone)
	console.log("Object.prototype.clone already defined");
else
	Object.defineProperty(Object.prototype, "clone", {
			enumerable: false
		  	,value: function() {
	  				if(this instanceof String) 
	  					return new String(this);  
		  			if(this instanceof Number) 
		  				return new Number(this);  
		  			if(this instanceof Date)  
		  				return new Date(this);
		  			if(this instanceof Array) 
		  				var newObj=[];
		  			else if(typeof this == "object")
		  				var newObj={};
		  			else 
		  				return this;
		  			for (i in this)
		  				newObj[i]=(this[i]==null?null:this[i].clone());
		  			return newObj;
		  		}
		  	});
if(Object.prototype.forProperty)
	console.log("Object.prototype.forProperty already defined");
else
	Object.defineProperty(Object.prototype, "forProperty", {
			enumerable: false
		  	,value: function(aFunction,aObject) {
		  			for (var property in this)
		  				aFunction.apply(aObject,[property,this[property]]);
		  		}
		  	});
if(Object.prototype.forPropertyEnumerable)
	console.log("Object.prototype.forPropertyEnumerable already defined");
else
	Object.defineProperty(Object.prototype, "forPropertyEnumerable", {
			enumerable: false
		  	,value: function(aFunction,aObject) {
		  			for (var property in this) {
		  				if(!this[property]==null && this[property].enumerable && this[property].enumerable===false) continue;
		  				aFunction.apply(aObject,[property,this[property]]);
		  			}
		  		}
		  	});

if(Object.prototype.getIterator)
	console.log("Object.prototype.getIterator already defined");
else
	Object.defineProperty(Object.prototype, "getIterator", {
			enumerable: false
	  		,value:  function() {
	  				var returnData = {array:this.propertyList()
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
	  				if (returnData.hasNext()) returnData.next();
	  				return returnData; 
				}
	  		});
if(Object.prototype.getProperty)
	console.log("Object.prototype.getProperty already defined");
else
	Object.defineProperty(Object.prototype, "getProperty", {
			enumerable: false
		  	,value: function(property) {
				if(!this.hasOwnProperty(getProperty)) throw Error("missing property "+name);
		    		return this[name];
		  		}
		  	});
if(Object.prototype.getValue)
	console.log("Object.prototype.getValue already defined");
else
	Object.defineProperty(Object.prototype, "getValue", {
			enumerable: false
			,value: function(key) {
  				if(key==null) return this;
  				var properties=key.split('.')
  					,resource=this;
  				try{
  					for(var i=0;i<properties.length;i++)
  						resource=resource[properties[i]];
  				} catch (e) {
  					throw Error("key "+key+" not found at level "+i+" property: "+properties[i]);
  				}
  				return resource;
  			}
  		});
if(Object.prototype.hasProperties)
	console.log("Object.prototype.hasProperties already defined");
else
	Object.defineProperty(Object.prototype, "hasProperties", {
			enumerable: false
		  	,value: function() {
		  			for(var property in this)
		  				if(this.hasOwnProperty(property)) return true;
		  			return false;
		  		}
		  	});
if(Object.prototype.hasAllProperties)
	console.log("Object.prototype.hasAllProperties already defined");
else
	Object.defineProperty(Object.prototype, "hasAllProperties", {
			enumerable: false
		  	,value: function() {
		  			for (var i = 0; i < arguments.length; i++)
		  				if(!this.hasOwnProperty(arguments[i])) throw Error("missing "+arguments[i]);
		    		return true;
		  		}
		  	});
if(Object.prototype.isEmpty)
	console.log("Object.prototype.isEmpty already defined");
else
	Object.defineProperty(Object.prototype, "isEmpty", {
			enumerable: false
		  	,value: function() {
		  			for (var property in this) 
		  				if(this.hasOwnProperty(property)) return false;
		  			return true;
		  		}
		  	});	


if(Object.prototype.merge)
	console.log("Object.prototype.merge already defined");
else
	Object.defineProperty(Object.prototype, "merge", {
			enumerable: false
		  	,value: function(source) {
		  			if(arguments.length>1) {
		  				for(var i=1;i<arguments.length;i++) {
   		  				if(this[arguments[i]])
   		  					throw Error("collision with property: "+arguments[i]);
		  					this[arguments[i]] = source[arguments[i]];
		  				}
		  				return;
		  			}
		  			for (var property in source) {
		  				if(this[property])
		  					throw Error("collision with property: "+property);
	  					this[property] = source[property];
		  			}
		  		}
		  	});
if(Object.prototype.mergeEnumerable)
	console.log("Object.prototype.mergeEnumerable already defined");
else
	Object.defineProperty(Object.prototype, "mergeEnumerable", {
			enumerable: false
		  	,value: function(source,override) {
		  			for (var property in source) {
		  				if(source[property].enumerable && source[property].enumerable===false) continue;
		  				if(this[property])
		  						throw Error("collision with property: "+property);
		  				this[property] = source[property];
		  			}
		  		}
		  	});
if(Object.prototype.mergeReplace)
	console.log("Object.prototype.mergeReplace already defined");
else
	Object.defineProperty(Object.prototype, "mergeReplace", {
			enumerable: false
		  	,value: function(source) {
	  			if(arguments.length>1) {
	  				for(var i=1;i<arguments.length;i++)
	  					this[arguments[i]] = source[arguments[i]];
	  				return;
	  			}
		  			for (var property in source)
	  					this[property] = source[property];
		  		}
		  	});
if(Object.prototype.mergeReplaceEnumerable)
	console.log("Object.prototype.mergeReplaceEnumerable already defined");
else
	Object.defineProperty(Object.prototype, "mergeReplaceEnumerable", {
			enumerable: false
		  	,value: function(source,override) {
		  			for (var property in source) {
		  				if(source[property].enumerable && source[property].enumerable===false)
		  					continue;
   		  				this[property] = source[property];
		  			}
		  		}
		  	});
if(Object.prototype.propertyList)
	console.log("Object.prototype.propertyList already defined");
else
	Object.defineProperty(Object.prototype, "propertyList", {
			enumerable: false
		  	,value: function() {
		  			var list=[];
		  			for (var property in this) list.push(property);
   		    	return list;
		  		}
		  	});
if(Object.prototype.propertyList2String)
	console.log("Object.prototype.propertyList2String already defined");
else
	Object.defineProperty(Object.prototype, "propertyList2String", {
			enumerable: false
		  	,value: function() {
   		    	return this.propertyList().join(',');
		  		}
		  	});
if(Object.prototype.toSimpleArray)
	console.log("Object.prototype.toSimpleArray already defined");
else
	Object.defineProperty(Object.prototype, "toSimpleArray", {
			enumerable: false
			,value: function(prefix) {
		  			var returnValue=[];
		  			for (var property in this) {
		  				if(this[property]==null || this[property].enumerable==null || this[property].enumerable==true)
		  					returnValue.push([(prefix?prefix:"")+property,this[property],typeof this[property]]);
		  			}
		  			return returnValue;
		  		}
		  	});	
if(Object.prototype.toTable)
	console.log("Object.prototype.toTable already defined");
else
	Object.defineProperty(Object.prototype, "toTable", {
		enumerable: false
		,value: function() {
		  			return this.toSimpleArray().toTable();
		  		}
		  	});	

if(String.prototype.addSlashes)
	console.log("String.prototype.addSlashes already defined");
else
	String.prototype.addSlashes = function() { 
			return this.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
		} 

if(String.prototype.capitalize)
	console.log("String.prototype.capitalize already defined");
else
	String.prototype.capitalize = function() {
	    	return this.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
		};
if(String.prototype.endsWithList)
	console.log("String.prototype.endsWithList already defined");
else
	String.prototype.endsWithList = function () {
			for (var i = 0; i < arguments.length; i++)
				if(this.substr(-arguments[i].length)==arguments[i]) return true;
			return false;
   		};
if(String.prototype.endsWith)
	console.log("String.prototype.endsWith already defined");
else
	String.prototype.endsWith = String.prototype.endsWithList;

if(String.prototype.endsWithListAnyCase)
	console.log("String.prototype.endsWithListAnyCase already defined");
else
	String.prototype.endsWithListAnyCase = function () {
			for (var i=0; i<arguments.length; i++)
				if(this.substr(-arguments[i].length).toLowerCase()===arguments[i].toLowerCase()) return true;
			return false;
		};
if(String.prototype.inList)
	console.log("String.prototype.inList already defined");
else
	String.prototype.inList = function () {
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
   		};
if(String.prototype.inListAnyCase)
	console.log("String.prototype.inListAnyCase already defined");
else
	String.prototype.inListAnyCase = function () {
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
		};
if(String.prototype.inListLowerCase)
	console.log("String.prototype.inListLowerCase already defined");
else
	String.prototype.inListLowerCase = function () {
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
		};

if(String.prototype.maxSize)
	console.log("String.prototype.maxSize already defined");
else
	String.prototype.maxSize = function (max) {
			return this.substring(0,Math.min(max,this.length));
		};
		
if(String.prototype.replaceAll)
	console.log("String.prototype.replaceAll already defined");
else
	String.prototype.replaceAll = function(a,b) { return this.replace(a,b,"g");  };
if(String.prototype.startsWith)
	console.log("String.prototype.startsWith already defined");
else
	String.prototype.startsWith = String.prototype.startsWithList;
if(String.prototype.startsWithList)
	console.log("String.prototype.startsWithList already defined");
else
	String.prototype.startsWithList = function () {
			for (var i = 0; i < arguments.length; i++)
				if(this.slice(0, arguments[i].length)==arguments[i]) return true;
			return false;
   		};

if(String.prototype.startsWithListAnyCase)
	console.log("String.prototype.startsWithListAnyCase already defined");
 else
	String.prototype.startsWithListAnyCase = function () {
			for (var i = 0; i < arguments.length; i++)
				if(this.slice(0, arguments[i].length).toLowerCase()==arguments[i].toLowerCase()) return true;
			return false;
 		};
if(String.prototype.trimChar)
	console.log("String.prototype.trimChar already defined");
else
	String.prototype.trimChar = function(char) {
			if(this.charAt(0)!=char && this.charAt(0)!=char) return this;
			var returnString=this;
			while (returnString.charAt(0)==char && returnString.length>0) 
				returnString=this.substring(1);
			while (returnString.charAt(returnString.length-1)==char && returnString.length>0) 
				returnString=this.substring(0,returnString.length-1);
			    return returnString ;
		};

if(String.prototype.toQuoted)
	console.log("String.prototype.toQuoted already defined");
else
	String.prototype.toQuoted = function() {
			var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
			 ,meta = {'\b': '\\b'
						,'\t': '\\t'
						,'\n': '\\n'
						,'\f': '\\f'
						,'\r': '\\r'
						,'"' : '\\"'
						,'\\': '\\\\'
		        		};
		    escapable.lastIndex = 0;
		    return escapable.test(this) ? '"' 
		    	+ this.replace(escapable, function (a) {
		    			var c = meta[a];
		    			return typeof c === 'string'
		    				? c
		    				: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		    		}) + '"' : '"' + this + '"';		
		};

		
if(Object.prototype.toJsonString)
	console.log("Object.prototype.toJsonString already defined");
else
	Object.defineProperty(Object.prototype, "toJsonString", {
		enumerable: false
		,value: function(depth,nodes) {
		  			try{
						if(nodes && nodes > 1000) return '"*** max nodes reached"';
						switch (typeof this) {
							case 'number':
								return this;
							case 'string':
								return this.toQuoted();
							case 'boolean':
								return this;
							case 'object':
								if(depth && depth > 10) return '"*** max depth reached"';
								switch (this.constructor) {
									case Array :
										var valueArray="";
										for (var i = 0; i < this.length && i < 1000 ; i++) 
											valueArray+=","+(this[i]==null?"null":this[i].toJsonString(depth,nodes));
										if(valueArray.length===0) return "[]";
										return "["+valueArray.substr(1)+"]";
									case Object :
										var valueObject="";
										for (var property in this)
											if(!property.startsWith("$_"))
												valueObject+=',"'+property+'" : '+(this[property]==null?"null":this[property].toJsonString(depth,nodes));
										if(valueObject.length===0) return "{}";
										return "{"+valueObject.substr(1)+"}";
									default: 
										return JSON.stringify(this);
								}
							}
							return JSON.stringify(this);
						} catch(e) {
							return "*** "+e.toString();
						}
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

