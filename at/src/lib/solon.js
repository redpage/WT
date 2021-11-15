//eslint-disable-next-line no-extend-native
String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), String(arguments[i]));
    }
    return s;
};


//eslint-disable-next-line no-extend-native 
String.prototype.toDate = function(format) {
    var str = this;
    format = format || 'Ymd';

    var y = str.substr(0,4),
    m = Number(str.substr(4,2)) -1,
    d = str.substr(6,2);

    if(format === 'Y-m-d') {
        y = str.substr(0,4);
        m = Number(str.substr(6,2)) -1;
        d = str.substr(8,2);
    }

    return new Date(y,m,d);
}

//eslint-disable-next-line no-extend-native
Date.prototype.toString = function(format) {
    var yy = this.getFullYear(); 
    var mm = _PAD(this.getMonth() + 1, 2);
    var dd = _PAD(this.getDate(), 2);
    
    var hh = _PAD(this.getHours(), 2);
    var min = _PAD(this.getMinutes(), 2);
    var ss = _PAD(this.getSeconds(), 2);
    
    return format.replace('%Y', yy).replace('%m', mm).replace('%d', dd).replace("%h", hh).replace('%i', min).replace('%s', ss);
};

export const _PAD = function(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;
}

export const _T = function(el) {
    if (typeof el === 'string') return el;
    if (el === null || el === 'undefiend') return '';

    if (el.options) {
        return (el.options[el.selectedIndex].value || el.options[el.selectedIndex].textContent);
    }

    el = el[0] || el;

    return (el.value || el.textContent || el.innerText || "");

}

export const _N = function(el) {
    if (typeof el === 'number') {
        return el;
    }

    var s = (typeof el === 'string') ? el : _T(el);
    var nn = "";
    for (var i = 0; i < s.length; i++) {
        var k = s.charAt(i);
        if ((k >= '0' && k <= '9') || k === '.') {
            nn += k;
        }
    }
    var n = Number(nn);
    if (s.charAt(0) === '-') { n = -1 * n; }
    return (n || 0);
}

export const _M = function(v, unit, zero) {
    var mm = _N(v);
    return mm.toLocaleString('ko-KR');
    // unit = unit || '';
    // zero = zero || '';

    // v = String(v);
    // if (v === 'undefined') {
    //     return "";
    // }    
    
    // var ps = v.split('.');
    // var whole = ps[0];
    // var r = /(\d+)(\d{3})/;
    // while (r.test(whole)) {
    //     whole = whole.replace(r, '$1' + ',' + '$2');
    // }
    // v = whole;
    // if (v.charAt(0) === '-') {
    //     return '-' + unit + v.substr(1);
    // }
    // if (v === "0") { return zero; }
    // return "" + unit + v;
}

export const _JSON = function(str) {
    str = str || "{}";

    if(typeof str !== 'string') {
        str = String(str);
    }
    
    if(str.trim() == "") {
        str = "{}";
    }

    return JSON.parse(str);
    
    //return eval("(" + str + ")");
}

export const _S = function(obj) {
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'object') return JSON.stringify(obj);
    return String(obj);    
}

export function Packet(xml) {
    this.m_xml = xml || "<PKT></PKT>";
    this.get = function (tag, dv) {
        var xml = this.m_xml;
        var s = xml.indexOf("<" + tag + ">");
        if (s !== -1) {
            s = xml.indexOf(">", s + 1);
            var e = xml.indexOf("</" + tag + ">", s + 1);
            if (e !== -1) {
                return xml.substr(s + 1, e - s - 1);
            }
        }
        if(!dv) dv = "";
        return dv;
    };


    this.getV = function (tag, dv) {
        var v = this.get(tag, dv);
        return _N(v);
    };


    this.set = function (tag, v) {
    	if(v === undefined) v = '';
        var xml = this.m_xml;
        if(xml.indexOf("<" + tag + ">") !== -1)
        {
        	var vv = this.get(tag);
       		this.m_xml = xml.replace("<" + tag + ">" + vv + "</" + tag + ">", "<" + tag + ">" + v + "</" + tag + ">");
        }
        else {
            var s = xml.indexOf("</PKT>");
            if (s !== -1) {
                var kk = "<" + tag + ">" + v + "</" + tag + "></PKT>";
                this.m_xml = xml.replace("</PKT>", kk);
            }
        }
    };

    this.has = function(tag) {
        var s = xml.indexOf("<" + tag + ">");
        if (s !== -1) {
            return true;
        }
        return false;        
    };
}