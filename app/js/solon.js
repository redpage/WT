String.prototype.format = String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), String(arguments[i]));
    }
    return s;
};

String.prototype.trim = String.prototype.trim = function() {
	var s = this,
	trimRegex = /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g;
	return s.replace(trimRegex, "");
};


function hasProperty(obj, property) {
    return typeof obj[property] !== 'undefined';
}


function _$(el) {
    return document.getElementById(el);
}

function _T(el) {
    if (el == null || el == 'undefiend') return '';

    if (el.options) {
        return (el.options[el.selectedIndex].value || el.options[el.selectedIndex].textContent);
    }

    el = el[0] || el;

    return (el.value || el.textContent || el.innerText || "");
}

function _TS(el, v) {
    if (el == null || el == 'undefiend') return '';
    el = el[0] || el;

    if (el.value) el.value = v;
    else el.innerHTML = v;

}

function _M(v, unit, zero) {
    var unit = unit || '';
    var zero = zero || '';

    v = String(v);
    var ps = v.split('.');
    var whole = ps[0];
    var r = /(\d+)(\d{3})/;
    while (r.test(whole)) {
        whole = whole.replace(r, '$1' + ',' + '$2');
    }
    v = whole;
    if (v.charAt(0) == '-') {
        return '-' + unit + v.substr(1);
    }
    if (v == "0") { return zero; }
    return "" + unit + v;
}

function _N(el) {
    if (typeof el == 'number') {
        return el;
    }

    var s = (typeof el == 'string') ? el : _T(el);
    var nn = "";
    for (var i = 0; i < s.length; i++) {
        var k = s.charAt(i);
        if ((k >= '0' && k <= '9') || k == '.') {
            nn += k;
        }
    }
    var n = Number(nn);
    if (s.charAt(0) == '-') { n = -1 * n; }
    return (n || 0);
}

function _IX(s, t) { return s.indexOf(t); };
function _RIX(s, t) { return s.lastIndexOf(t); };

function URLEncode(sStr) {
    return escape(sStr).replace(/\+/g, '%2C').replace(/\"/g, '%22').replace(/\'/g, '%27');
}

var JS_PKT = "<PKT></PKT>";

function Packet(xml) {
    this.m_xml = xml;
    this.get = function (tag, dv) {
        var xml = this.m_xml;
        var s = xml.indexOf("<" + tag + ">");
        if (s != -1) {
            s = xml.indexOf(">", s + 1);
            var e = xml.indexOf("</" + tag + ">", s + 1);
            if (e != -1) {
                return xml.substr(s + 1, e - s - 1);
            }
        }
        if(!dv) dv = "";
        return dv;
    };

    this.getN = function (tag, dv) {
        var n = this.get(tag, dv);
        var v = _N(n);
        if (v == 0) return n;
        return v;
    };

    this.getV = function (tag, dv) {
        var v = this.get(tag, dv);
        return _N(v);
    };

    this.getM = function (tag, dv) {
        var v = this.getV(tag, dv);
        if (v == 0) return "&nbsp;";
        return _M(v);
    };

    this.set = function (tag, v) {
    	if(v == undefined) v = '';
        var xml = this.m_xml;
        if(xml.indexOf("<" + tag + ">") != -1)
        {
        	var vv = this.get(tag);
       		this.m_xml = xml.replace("<" + tag + ">" + vv + "</" + tag + ">", "<" + tag + ">" + v + "</" + tag + ">");
        }
        else {
            var s = xml.indexOf("</PKT>");
            if (s != -1) {
                var kk = "<" + tag + ">" + v + "</" + tag + "></PKT>";
                this.m_xml = xml.replace("</PKT>", kk);
            }
        }
    };
}

/*해당되는 문자만 들어 있는지*/
function containsCharsOnly(input, chars) {
    var vv = "";
    if (typeof input === 'string') {
        vv = input;
    } else {
        vv = _T(input);
    }

    for (var inx = 0; inx < vv.length; inx++) {
        if (chars.indexOf(vv.charAt(inx)) == -1)
            return false;
    }
    return true;
}

/**
* 입력값에 숫자만 있는지 체크
*/
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input, chars);
}

function isNumberDash(input) {
    var chars = "0123456789-";
    return containsCharsOnly(input, chars);
}

function _JSON(str) {

    return eval("(" + str + ")");

}

function getXmlDocument(xmlStr) {
	var xmlDoc;
	 if (window.DOMParser)
	 {
		 parser=new DOMParser();
		 xmlDoc=parser.parseFromString(xmlStr,"text/xml");
	 }
	 else // Internet Explorer
	 {
		 xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		 xmlDoc.async="false";
		 xmlDoc.loadXML(xmlStr);
	 }
	 
	 return xmlDoc;
}

function getXmlString(xmlData) { 
    var xmlString;
    if (window.ActiveXObject){
        xmlString = xmlData.xml;
    }
    else{
        xmlString = (new XMLSerializer()).serializeToString(xmlData);
    }
    return xmlString;
} 

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function isEmpty(o) {
	var v = _T(o);
	if(v.trim() == "") {
		return true;
	}
	return false;
}

if(typeof jQuery == 'undefined') {
	
} else {
	jQuery.fn.serializeObject = function() {
		  var arrayData, objectData;
		  arrayData = this.serializeArray();
		  objectData = {};

		  $.each(arrayData, function() {
		    var value;

		    if (this.value != null) {
		      value = this.value;
		    } else {
		      value = '';
		    }

		    if (objectData[this.name] != null) {
		      if (!objectData[this.name].push) {
		        objectData[this.name] = [objectData[this.name]];
		      }

		      objectData[this.name].push(value);
		    } else {
		      objectData[this.name] = value;
		    }
		  });

		  return objectData;
	};	
}

//drag select 방지.. 필요 있나?
/*
var omitformattags = "input|textarea|select";
function disableselect(e) {
    var evt = e ? e : event;
    var el = null;
    if (evt.srcElement) el = evt.srcElement;
    else if (evt.target) el = evt.target;
    else return false;

    if (omitformattags.indexOf(el.tagName.toLowerCase()) != -1)
        return true;

    return false;
}

if (typeof document.onselectstart != "undefined") {
    document.onselectstart = disableselect;
} else {
    document.onmousedown = disableselect;
    document.onmouseup = reEnable;
}
*/