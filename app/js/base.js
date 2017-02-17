$.ajaxSetup({cache:false, method:'POST', type:'POST'});

PacketV = {
	PKT_NONE:0,
	PKT_LOGIN:1,
	PKT_APISTART:2,

	PKT_TRADE_MSG:11,
	PKT_STRATAGY:12,
	PKT_JAN:13,
	PKT_JAN_SUM:14,

	PKT_JAN_TAB:101,
	PKT_AUTO_TAB:102,
	PKT_CHE_TAB:103,
	PKT_MICHE_TAB:104,
	PKT_JONGA_TAB:105,
	PKT_CHART_TAB:106,
	PKT_WTCHART_TAB:107,
	PKT_RVSCHART_TAB:108,
	PKT_STG_TAB:109,
	PKT_MMLOG_TAB:110,
	PKT_MICHE_MINI:111,
	PKT_PYUNGA:112,
	PKT_ACCT:113,			//계좌조회..

	PKT_SAVECONFIG:998,
	PKT_EVT:999,

	EVT_ADD_WIN:1,
	EVT_REM_WIN:2,
	EVT_STOCKBOX:3,
	EVT_TOGGLE:4,

	PKT_JS:1000,    //JavaScript 온 패킷..
	PKT_APILOGIN:1001,
	PKT_APIREAL:1002,
	PKT_APITR:1003,
	PKT_APIMSG:1004,
	PKT_APILOGOUT:1005,
	PKT_APIORDER:1006,

	APIORDER_BUY:1,
	APIORDER_SELL:2,
	APIORDER_MODIFY:3,
	APIORDER_CANCLE:4,
	APIORDER_STG:5,
	APIORDER_STGAUTO:6,
	APIORDER_STGJONGA:7,
	APIORDER_AVAILABLE:8,
	APIORDER_DENY:9,

	PKT_TR:2001,
	PKT_REAL:2002,

	PKT_HOGA_PLAY:3001,
	PKT_MASTER:3002,
	PKT_HOGA:3003,
	PKT_SKY:3004,
	PKT_BOX:3005,
	PKT_SOC:3006,
	PKT_RVS:3007,
	PKT_NEW:3008,
	PKT_MYS:3009,
	PKT_ALM:3010,
	PKT_CHART:3011,
	PKT_STKYMD:3012,
	PKT_STKSOC:3013,
	PKT_PAGE:3014,
	PKT_RVS_CHART_SIMPLE:3015,
	PKT_RVS_HIST:3016,
	PKT_PAGE_STOCK:3017,
	PKT_MASTER_HIST:3018,
	PKT_CHEKYUL_REG:3019,

	PKT_JONGA:3020,
	PKT_JISU:3021,
	PKT_LOG:3022,
	PKT_SYNC:3023,
	PKT_RVS_YMD:3024,
	PKT_MULIT_CPRC:3025,
	PKT_MEMO_SAVE:3026,

	PKT_GONGJI:4000,
	PKT_WEB_GONGJI:4001,
	//WTS1, WTD1, WTE1 관련
	PKT_WPI_LOGIN:5001,
	PKT_WPI_STG:5002,
	PKT_WPI_STG_AUTO:5003,
	PKT_WPI_STG_JONGA:5004,
	PKT_WPI_MM_LOG:5005,

	//WINNER 모의투자 관련
	PKT_SIM_LOGIN:6001,
	PKT_SIM_ORDER:6002,
	PKT_SIM_TR:6003,
	PKT_SIM_REAL:6004,

	SIM_TR_ACCT_REG:1,
	SIM_TR_JAN_TAB:2,
	SIM_TR_CHE_TAB:3,
	SIM_TR_AUTO_TAB:4,
	SIM_TR_JONGA_TAB:5,
	SIM_TR_LOG_TAB:6,
	SIM_TR_MICHE_TAB:7,
	SIM_REAL_CHEKYUL:101,
	SIM_REAL_HOLDPRC:102,
	SIM_REAL_AUTOBUY:103,
	SIM_REAL_AUTOREM:104,
	//WINNER ALARM 관련
	PKT_ALM_LOGIN:7001,
	PKT_ALM_REG:7002,
	PKT_ALM_REAL:7003,

	//*****************************//
	// WTHEME 관련
	PKT_THEME_LOGIN:7501,

	//*****************************//

	//중계방송 관련
	PKT_AGREE:8001,
	PKT_DISAGREE:8002,
	PKT_HOLD_STOCK:8003,
	PKT_LIVE_START:8004,
	PKT_LIVE_SUCCESS:8005,
	PKT_LIVE_FAILURE:8006,
	PKT_AGREE_REQUEST:8007,
	PKT_SEND_DATA:8008,

	//***********embed chromium 관견 자바스크립트..******************//
	PKT_JS_COMMAND:9000,
	JS_CLOSE:1,
	JS_MINIMIZE:2,
	JS_MAXIMIZE:3,
	JS_IDOK:4,
    JS_IDCANCEL:5,
    JS_EXECUTE:6,
    JS_ONREADY:7,
    JS_ONFINDING:8,
    JS_CALLSCRIPT:9,
    JS_HTCAPTION:10,
    JS_HTTOP:11,
    JS_HTBOTTOM:12,
    JS_HTTOPLEFT:13,
    JS_HTBOTTOMRIGHT:14,
	JS_HTTOPRIGHT:15,
    JS_HTBOTTOMLEFT:16,
    JS_HTLEFT:17,
    JS_HTRIGHT:18,
    JS_WNDPOS:19,
    JS_POPUP:20,
	JS_OPACITY:21,
	JS_NOTI:22,
	JS_BROWSER:23,
	JS_FLASHWINDOW:24,
	JS_CLOSE_ALL_CHAT:25,
	JS_TOOLTIP:26,
	JS_SOUND:27,
	JS_VIBRATION:28,
	JS_STICKY:29,
	JS_CFG:30,
	JS_UPLOAD:31,
	JS_CONNECT_SERVER:40,

	//*****************************//

	//WSG 관련
	PKT_WSG_LOGIN:100001,
	PKT_WSG_LOGOUT:100002,
	PKT_WSG_MSG:100003,
	PKT_WSG_GROUP_MSG:100004,
	PKT_WSG_MEMO:100005,
	PKT_WSG_GROUP_MEMO:100006,
	PKT_WSG_MULTI_MSG:100007,
	PKT_WSG_MULTI_MEMO:100008,
	PKT_WSG_TOTAL_MEMO:100009,
	PKT_WSG_MASTER:100010,


	PKT_PING:900000,
	PKT_ALERT:900001,
	PKT_LOGOUT:999999
};

jQuery.fn.extend({
	disableSelection : function() {
		return this.each(function() {
			this.onselectstart = function() { return false; };
			this.unselectable = "on";
			jQuery(this).css('user-select', 'none');
			jQuery(this).css('-o-user-select', 'none');
			jQuery(this).css('-moz-user-select', 'none');
			jQuery(this).css('-khtml-user-select', 'none');
			jQuery(this).css('-webkit-user-select', 'none');
		});
	}
});

// Run javascript after DOM is initialized
$(document).ready(function() {
 	const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

	const links = document.querySelectorAll('link[rel="import"]')
// Import and add each page to the DOM
	Array.prototype.forEach.call(links, function (link) {
  		let template = link.import.querySelector('.task-template')
		let clone = document.importNode(template.content, true)
	    document.querySelector('#e-bdy').appendChild(clone)
	});	

    $("#min-btn").on("click", function (e) {
          var window = BrowserWindow.getFocusedWindow();
          window.minimize(); 
    });

    $("#max-btn").on("click", function (e) {
          var window = BrowserWindow.getFocusedWindow(); 
		  if(window.isMaximized()) {
			$(this).attr("class", "win");
			window.restore()
		  } else {
			$(this).attr("class", "max");  
          	window.maximize(); 
		  }
    });

    $("#close-btn").on("click", function (e) {
          var window = BrowserWindow.getFocusedWindow();
          window.close();
    });

  	$(document).click(function() {
  		$('#w-clickmenu').hide();
  	});	 


    $(".lnb .menu li").click(function(){
      var mnu = _T(this);
      
      if(mnu == "관심테마") {
		nav_my(0);
      } else if(mnu == "테마분석") {
		nav_analysis(0);
      } else if(mnu == "테마뉴스") {
		nav_news(0);
      } else {
		nav_home();
      }
    });


	$('#w-clickmenu ul li').click(function(event){
		var themeno=$(this).parent().parent().attr('themeno');
		var idx = $(this).attr('idx');
		if(idx == 1) //관련 테마내용 자세히 보기
		{
			nav_analysis(themeno);
		}
		else if(idx == 2) //관련 뉴스보기
		{
			nav_news(themeno);
		}
		else if(idx == 3) //내 관심테마로 등록
		{
			$.ajax({
				url : config.url,
				data : {aid:'home02', themeno:themeno, mbrno:config["mbrno"]},
				success : function(res) {
					if (_N(res) > 0) {
						nav_my(themeno);
					} else {
						console.log("WHY");
						alertify.error('관심테마등록은 20개 까지만 가능 합니다.');
					}
				}
			});
		}
		else if(idx == 4) {
			$.ajax({
				url : config.url,
				data : {aid:'my01', themeno:themeno, mbrno:config["mbrno"]},
				success : function(res) {
					if (_N(res) > 0) {
						nav_my(0);
					}
				}
			});			
		}
	});	

  	$('.tab a').click(function() {
		if($(this).hasClass('on')) {
			return;
		}

		$('.tab a').removeClass('on');
      	$(this).addClass("on");

		if(_T(this) == '뉴스') {
			$.ajax({
				url : config.url,
				data : {aid:'nws01', themeno:config["themeno"], start:0, limit:5},
				success : function(res) {
					var rs = _JSON(res);
					var ss = [];
					for(var i = 0; i < rs.rows.length; i++) {
						var r = rs.rows[i];
						ss.push('<div>{0}</div>'.format(r["tit"]));
					}
					$('.sum .ctt').html(ss.join(""));
				}
			});
		} else if(_T(this) == "테마개요") {
			var p = config["TOPPACKET"];
			$('.sum .ctt').html(p.get("DESCRIPTION"));
		} else {
			var p = config["TOPPACKET"];
			$('.sum .ctt').html('핵심분석 내용');
		}
	});

	auto_login();
	init_latest(0);
	call_category();
});

function logout() {
	const storage = require("electron-json-storage");
	storage.has('login', function(error, hasKey){
		if(error) throw error;
		if(hasKey) {
			storage.remove('login', function(error){
				if(error) throw error;
			});
		}
	});
}

function on_login(f) {	
	if(_T(f.id) == "") {
		f.id.focus();
		alertify.alert("아이디를 입력해 주세요");
		return false;
	}

	if(_T(f.pwd) == "") {
		f.pwd.focus();
		alertify.alert("비밀번호를 입력해 주세요");
		return false;
	}
	
	var data = $(f).serializeObject();
	data["aid"] = "login";
	
	$.ajax({
		url:config.url,
		data:data,
		success:function(res) {
			console.log(res);
			var json = _JSON(res);
			if(json["RTN"] == 'OK') {
				const storage = require('electron-json-storage');
				storage.set("login", json, function(error){
					if(error) throw error;
					console.log("save ok");
					storage.has('login', function(error, hasKey){
						if(error) throw error;
						if(hasKey) {
							console.log("has key");
						}
					});
				});
				login_success(json);
				
			} else {
				alertify.alert(json["RTN"], function(){});				
			}
		}
	});

	return false;
}

function auto_login() {
	const storage = require('electron-json-storage');
	storage.has('login', function(error, hasKey){
		if(error) throw error;
		if(hasKey)
		{
			storage.get("login", function(error, data){
				if(error) throw error;
				console.log(data);
				if(data["AUTO"] == "1")
				{
					$.ajax({
						url:config.url,
						data:{aid:'auto-login', mbrno:data["MBRNO"]},
						success:function(res) {
							var json = _JSON(res);
							if(json["RTN"] == 'OK') {
								login_success(json);
							}
						}
					});						
				}
				else if (data["SV"] == "1")
				{
					$(".login input[name='sv']").attr("checked", true);
					$(".login input[name='id']").val(data["ID"]);
				}
			});	
		}
	});
}

function login_success(json) {
	config["svr"] = json["SVR"];
	config["port"] = 8484;
	config["mbrno"] = json["MBRNO"];

	init_socket();

	$(".header").css("display", "block");
	$(".bottom").css("display", "block");
	$("#e-login").removeClass("is-shown");
	setTimeout(function(){
		$("#e-home").addClass("is-shown");
		nav_home();					
	}, 200);	
}

function init_socket() {
	var net = require('net');
	var client = new net.Socket();
	config["client"] = client;
	client.connect(config["port"], config["svr"], function() {
		console.log('Connected');
		var p = new Packet(JS_PKT);
		p.set("GBN", PacketV.PKT_THEME_LOGIN);
		p.set("WTSEQ", config["mbrno"]);
		socket_send(p);
	});

	client.on('data', function(data) {
		//console.log('Received: ' + data);
		config["buf"] += data;
		var c = config["buf"];
		var s = c.indexOf("<PKT>");
		if(s != -1) {
			var e = c.indexOf("</PKT>");
			if(e != -1) {
				var str = c.substring(s, e+6);
				config["buf"] = c.substring(e+6);
				var p = new Packet(str);
				recv_proc(p);
			}
		}
	});

	client.on('close', function() {
		console.log('Connection closed');
	});	
}

function strip_tags (input, allowed) {
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

function parse_multi_cprc(p)
{
	var data = p.get("DATA");
	var cs = data.split("\n");
	var ss = [];

	for(var i=0; i < cs.length; i++) {
		var ln = cs[i];
		var s = parse_cprc(ln);
		ss.push(s);
	}

	return ss;
}

function parse_cprc(ln)
{
	// console.log(ln);
	var s = {};
	var idx = 1;
	var flag = ln.substr(0, 1);
	if(flag != "|") {
		idx = 0;
	}

	var ss = ln.split(flag);
	//console.log(ss);
	s.chetime = 	ss[idx++];
	s.sign = 		ss[idx++];
	s.change = 		ss[idx++];
	s.drate = 		ss[idx++];
	s.price = 		ss[idx++];
	s.opentime = 	ss[idx++];
	s.open = 		ss[idx++];
	s.hightime = 	ss[idx++];
	s.high = 		ss[idx++];
	s.lowtime = 	ss[idx++];
	s.low = 		ss[idx++];
	s.cgubun = 		ss[idx++];
	s.cvolume = 	ss[idx++];
	s.volume = 		ss[idx++];
	s.value = 		ss[idx++];
	s.mdvolume = 	ss[idx++];
	s.mdchecnt = 	ss[idx++];
	s.msvolume = 	ss[idx++];
	s.mschecnt = 	ss[idx++];
	s.cpower = 		ss[idx++];
	s.w_avrg = 		ss[idx++];
	s.offerho = 	ss[idx++];
	s.bidho = 		ss[idx++];
	s.status = 		ss[idx++];
	s.jnilvolume = 	ss[idx++];
	s.shcode = 		ss[idx++];

	return s;
}

function socket_send(p) {
	var client = config["client"];
	if(client) {
		client.write(p.m_xml);
	}
}

function recv_proc(p) {
	var gbn = p.getV("GBN");
	if(gbn == PacketV.PKT_MULIT_CPRC) {
		//등록만 필요함.
		//var ss = parse_multi_cprc(p);
	} else if(gbn == PacketV.PKT_REAL) {
		if(config["page"] == "home")
		{
			var db = config["db"];
			var bUp = false;

			if(db)
			{			
				var c = parse_cprc(p.get("DATA"));
				for(var i = 0; i < db.length; i++) {
					for(var j = 0; j < db[i].length; j++)
					{
						if(db[i][j].shcode == c.shcode)
						{
							var prc = db[i][j]["cprc"];
							if(c.price != prc) bUp = true;

							db[i][j]["qty"] = c.volume;
							db[i][j]["cprc"] = c.price;
							db[i][j]["sprc"] = c.open;
							db[i][j]["hprc"] = c.high;
							db[i][j]["lprc"] = c.low;
						}
					}
				}
			}

			if(bUp)
			{
				var cls = "";
				var drate = c.drate;
				if(c.drate > 0) cls = "up";
				else if(c.drate < 0) cls = "dn";
				if(drate > 0) drate = "+" + drate;
				// console.log(c.shcode + ":" + c.drate);

				$('#e-home li[shcode="' + c.shcode + '"] p').attr("class",cls);
				$('#e-home li[shcode="' + c.shcode + '"] span.prc').html(_M(c.price));
				$('#e-home li[shcode="' + c.shcode + '"] span.chg').html(_M(c.change));
				$('#e-home li[shcode="' + c.shcode + '"] span.rat').html(drate + "%");

				$('#e-home li[shcode="' + c.shcode + '"]').css('background', "#96B8F0");
				setTimeout(function(){
					$('#e-home li[shcode="' + c.shcode + '"]').css("background", "#ffffff")
				}, 100);					
			}
		}
	} else if(config["page"] == "my" || config["page"] == "analysis") {
		var c = parse_cprc(p.get("DATA"));
		var db = config["db"];
		var q_daebi = "";
		for(var i = 0; i < db.length; i++) {
			if(db[i].shcode == c.shcode)
			{
            	//console.log(c.shcode + " find");
				db[i]["qty"] = c.volume;
				db[i]["cprc"] = c.price;
				db[i]["sprc"] = c.open;
				db[i]["hprc"] = c.high;
				db[i]["lprc"] = c.low;
				db[i]["daebi"] = c.change;
				db[i]["drate"] = c.drate;
				
				if(db[i]["pqty"] > 0) {
					q_daebi = Math.round(db[i]["qty"] * 100.0 / db[i]["pqty"], 2) + "%";
				}
			}
		}
		var cls = "";
		var drate = c.drate;
		if(c.drate > 0) cls = "up";
		else if(c.drate < 0) cls = "dn";
		if(drate > 0) drate = "+" + drate;

		var xx = "#e-analysis ";
		if(config["page"] == "my") {
			xx = "#e-my ";
		}
		//console.log(c.shcode + ":" + c.drate);
		$(xx + '.list .td ul[shcode="' + c.shcode + '"] li[class="prc"] span').html(_M(c.price)).attr("class", cls);
		$(xx + '.list .td ul[shcode="' + c.shcode + '"] li[class="chg"] span').html(_M(c.change)).attr("class", cls);
		$(xx + '.list .td ul[shcode="' + c.shcode + '"] li[class="rat"] span').html(drate + "%").attr("class", cls);
		$(xx + '.list .td ul[shcode="' + c.shcode + '"] li[class="vol"]').html(_M(c.volume));
		$(xx + '.list .td ul[shcode="' + c.shcode + '"] li[class="vch"]').html(q_daebi);
	}
}

function on_search(f) {
	var key = _T(f.key);
	key = key.trim();
	if(key == "") {
		alertify.error("검색어를 입력해 주세요");
		location.reload();
		return false;
	}

	nav_search(key);
	return false;
}

function nav_home() {
	
	 config["page"] = "home";
	 clear_multi_cprc();
     $(".lnb .menu li").removeClass("on");
     $('.lnb .menu li:first').addClass("on");
	 $("#e-bdy > div").removeClass("is-shown");
	 $("#e-home").addClass("is-shown");

     config["start"] = 0;
     var ww = $(this).width() - 100;
     var cnt = Math.round(ww / 300);
     config["limit"] = cnt;

     config["sort"] = "drate";

   	$(window).resize(function() {
		var ww = $(this).width() - 100;
		var cnt = Math.round(ww / 300);
		if(cnt != config["limit"]) {
			config["limit"] = cnt;
			load_theme();
		}
	});

  	$('#w-sort li').click(function(event){
  		 if($(this).hasClass('on')) {
			  return;
		 }

		 $('#w-sort li').toggleClass('on');
		 if($(this).children('input').attr('value') == '거래량') {
			  config["sort"] = "qty";
		  } else {
			  config["sort"] = "drate";
		  }

      	var db = config["db"];
		if(db)
		{
			var xx = [];
			for(var i = 0; i < db.length; i++) {
				xx.push(print_theme(db[i]));
			}
			$('.thema_list').html(xx.join(''));
			print_theme_after();
		}
  	});

  	$('#w-group-selector').on('change', function(event) {
  	  	load_theme();
  	});

  	load_theme();

}

function nav_my(themeno) {
	config["page"] = "my";
    $(".lnb .menu li").removeClass("on");
    $('.lnb .menu li:nth-child(2)').addClass("on");	
	$("#e-bdy > div").removeClass("is-shown");
	$("#e-my").addClass("is-shown");	
	$("#e-my").append(_$('w-clickmenu'));
	$(".my_list").html("");

	clear_multi_cprc();
	load_theme_my(themeno);
}

function nav_analysis(themeno) {
	config["page"] = "analysis";
     $(".lnb .menu li").removeClass("on");
     $('.lnb .menu li:nth-child(3)').addClass("on");	
	 $("#e-bdy > div").removeClass("is-shown");
	 $("#e-analysis").addClass("is-shown");

	clear_multi_cprc();

	if(themeno == 0) {
		themeno = config["themeno"];
		console.log("*********** " + themeno);
	} else {
		config["themeno"] = themeno;
	}

	init_latest(themeno);

	load_analysis_top();

	load_stock_list(themeno, "anal");
}


function nav_news(themeno) {
	config["page"] = "news";
    $(".lnb .menu li").removeClass("on");
    $('.lnb .menu li:nth-child(4)').addClass("on");		
	$("#e-bdy > div").removeClass("is-shown");
	$("#e-news").addClass("is-shown");

	clear_multi_cprc();

	if(themeno == 0) {
		themeno = config["themeno"];
		console.log("*********** " + themeno);
	} else {
		config["themeno"] = themeno;
	}

	init_latest(themeno);
	$('.news').html('<ul class="more" onclick="on_nws_more()">더보기</ul>');
	load_nws(themeno, 0);
}

function nav_search(k){
	config["page"] = "search";
	clear_multi_cprc();
	$(".lnb .menu li").removeClass("on");
	$("#e-bdy > div").removeClass("is-shown");

	$("#e-search").addClass("is-shown");
	$(".search_title b").html('"' + k + '"');
	 
}

function nav_all(){
	config["page"] = "all";
	$(".lnb .menu li").removeClass("on");
	$("#e-bdy > div").removeClass("is-shown");	
	clear_multi_cprc();

	$("#e-all").addClass("is-shown");
	$.ajax({
		url:config.url,
		data:{aid:'all01'},
		success : function(res){
			var json = _JSON(res);
			var dp_nm = "";
			var ss = [];
			for(var i=0; i < json.rows.length; i++) {
				var r = json.rows[i];
				if(dp_nm != r["dp_nm"]) {
					if(dp_nm != "") {
						ss.push("</div></div>");
					}

					ss.push('<div class="thema_box"><h2>{0}</h2><div><ul><li class="nam">테마명</li><li class="rat">등락율</li><li class="upi">상승</li><li class="dni">하락</li><li class="avr">거래대금</li></ul>'.format(r["dp_nm"]));
					dp_nm = r["dp_nm"];
				}

				var v = r["inf"].split(",");
				ss.push('<ul><li class="nam" onclick="nav_analysis({5})">{0}</li><li class="rat"><span class="up">{1}</span></li><li class="upi"><span class="up">{2}</span></li><li class="dni"><span class="dn">{3}</span></li><li class="avr">{4}백만</li></ul>'.format(r["themenm"],
					v[0]+"%", 
					(r["upcnt"]>0)?"▲"+r["upcnt"]:"-",
					(r["dncnt"]>0)?"▼"+r["dncnt"]:"-",
					_M(v[1]), r["themeno"]));
			}
			ss.push("</div></div>");

			$('.thema_all').html(ss.join(''));
		}
	});
}

function clear_multi_cprc() {
	var shcodes = "";
	var pp = new Packet(JS_PKT);
	pp.set("GBN", PacketV.PKT_MULIT_CPRC);
	pp.set("SHCODES", shcodes);	
	socket_send(pp);
}

function call_category() {
	$.ajax({
		url : config.url,
		data : {aid:'CATEGORY'},
		success : function(res) {
			$(".category").html(res);
			$("#e-news .category dd a").click(function(){
				var themeno = $(this).attr("themeno");
				catView('nws');
				nav_news(themeno);
			});
			$("#e-analysis .category dd a").click(function(){
				var themeno = $(this).attr("themeno");
				catView('anal');
				nav_analysis(themeno);
			});	
					
			var gg = [];
			var ss = [];
			$.each($("#e-news .category dt"), function(idx, v) {
				var no = $(v).attr("groupno");
				var nm = _T(v);
				gg.push({"groupno":no,"nm":nm});
				ss.push('<option value="{0}">{1}</option>'.format(no, nm));
			});

			$("#w-group-selector").append(ss.join(""));

			config["themegroup"] = gg;
			
			config["totalthemecount"] = $("#e-news .category dd a").length;
		}
	});	
}

function catView(gbn) {
	if(gbn == 'anal') {
		$("#e-analysis .category").slideToggle();
		$("#e-analysis .cat_view").toggleClass('cat_hide');
	} else {
		$("#e-news .category").slideToggle();
		$("#e-news .cat_view").toggleClass('cat_hide');
	}
}

//HOME
function load_theme() {
	//$('.thema_list').html('');
	$("#e-home").append(_$('w-clickmenu'));
	$.ajax({
		url:config.url,
		data : {aid:'home01', groupno:_T(_$('w-group-selector')), start:config["start"], limit:config["limit"]},
		success : function(res) {
			var rs = _JSON(res);
			var db = [];
			var ss;
			var themeno = 0;
			var stks = [];

			for(var i = 0; i < rs.rows.length; i++) {
				var r = rs.rows[i];
				if(r["themeno"] != themeno) {
					if(ss) {
						db.push(ss);
					}
					themeno = r["themeno"];
					if(i == 0) {
						$.cookie("defaultno", themeno);
					}
					ss = [];

					if(config["themeno"] == 0) {
						config["themeno"] = themeno;
					}
				}

				ss.push(r);
				if(stks.indexOf(r["shcode"]) == -1)
				{
					stks.push(r["shcode"]);
				}
			}

			if(ss) {
				db.push(ss);
			}

			var mm = [];
			for(var i = 0; i < db.length; i++) {
				mm.push(print_theme(db[i]));
			}

			// $('.thema_list').hide();
			$('.thema_list').html(mm.join(''));
			// $('.thema_list').show("slide", {direction:"right"}, 100);

			print_theme_after();

			var shcodes = stks.join("|");
			console.log(shcodes);
			var pp = new Packet(JS_PKT);
			pp.set("GBN", PacketV.PKT_MULIT_CPRC);
			pp.set("SHCODES", shcodes);
			socket_send(pp);

			config["db"] = db;
		}
	});
}

function print_theme(rs) {
	rs.sort(function(a,b){return b[config["sort"]] - a[config["sort"]];});
	var themeno = 0;
	var ss = [];
	var i;
	for(i = 0; i < rs.length; i++) {
		var r = rs[i];
		if(i == 0) {
			ss.push('<div><h2{0}><span>{1}</span> <label>[{2}]</label> <p>{3}</p> <input type="image" src="./images/more.png" themeno="{4}" /></h2><ul>'.format(r["rnk"] < 4 ? ' class="best"':'', r['rnk'], r['dp_nm'], r['themenm'], r["themeno"]));
		}
		var daebi = _M(r["daebi"]);
		ss.push('<li shcode="{0}"><a>{1}</a><p class="s{2}"><span class="prc">{4}</span><span class="chg"><em>{5}</em></span><span class="rat">{3}%</span></p></li>'.format(
			r["shcode"], r["hname"], r["sign"], (r['drate']>0?"+":"") + r["drate"], _M(r["cprc"]), daebi));
	}

	if(i > 0) {
		var dl = ss.join('') + '</ul></div>';
		//$('.thema_list').append(dl);
		return dl;
	}
	return "";	
}

function print_theme_after() {
	var ss = [];
	ss.push('<ul class="move">');
	ss.push('<li class="fl"><input type="button" class="first" onclick="on_prev()"><input type="button" class="prev" onclick="on_prev_page()"></li>');
	ss.push('<li class="fr"><input type="button" class="next" onclick="on_next()"><input type="button" class="last" onclick="on_next_page()"></li>');
	ss.push('</ul>');

	$('.thema_list').append(ss.join(''));

	$('.thema_list div h2 input').click(function(event) {
		event.preventDefault();
		event.stopPropagation();

		var themeno = $(this).attr('themeno');

		if($('#w-clickmenu').css('display') == 'block')
		{
			if( themeno == $('#w-clickmenu').attr('themeno')) {
				$('#w-clickmenu').hide();
				return;
			}
		}

		$(this).parent().append(_$('w-clickmenu'));
		$('#w-clickmenu').attr('themeno', themeno);
		$('#w-clickmenu').attr('themeno', themeno);
		$('#w-clickmenu li[idx="1"]').css('display', 'block');
		$('#w-clickmenu li[idx="2"]').css('display', 'block');
		$('#w-clickmenu li[idx="3"]').css('display', 'block');
		$('#w-clickmenu li[idx="4"]').css('display', 'none');		
		$('#w-clickmenu').css('display', 'block');

	});
}

function on_prev(sz) {
	var idx = config["start"];
	if(idx > 0) {
		config["start"] = idx - 1;
		load_theme();
	}
}

function on_prev_page() {
	var idx = config["start"];
	if(idx > 0) {
		idx = idx - config["limit"];
		if(idx < 0) idx = 0;
		config["start"] = idx;
		load_theme();
	}
}

function on_next() {
	var idx = config["start"];
	var xx = config["totalthemecount"] - config["limit"];
	if(idx < xx) {
		config["start"] = idx + 1;
		load_theme();
	}
}

function on_next_page() {
	var idx = config["start"];
	var xx = config["totalthemecount"] - config["limit"];
	if(idx < xx) {
		idx = idx + config["limit"];
		config["start"] = idx;
		load_theme();
	}
}
//HOME END

//최근조회
  function init_latest(themeno) {
    if(themeno > 0) {
      $.ajax({
        url : config.url,
        data : {aid:'ana01', themeno:themeno, mbrno:config["mbrno"]},
        success : function(res) {
          load_latest();
        }
      });
    } else {
      load_latest();
    }
  }

  function load_latest() {
    $.ajax({
      url : config.url,
      data : {aid:'ana02', mbrno:config["mbrno"]},
      success : function(res) {
        var rs = _JSON(res);
        var ss = [];
        ss.push("<h2>최근조회테마</h2>");
        for(var i=0; i < rs.rows.length; i++) {
          var r = rs.rows[i];
		  if(config["page"] == "news")
		  {
		  	ss.push('<li onclick="nav_news({0})">{1}<a href="#" themeno="{0}" onclick="delete_latest(this)">×</a></li>'.format(r["themeno"], r["themenm"]));
		  }
		  else if(config["page"] == "analysis")
		  {
			ss.push('<li onclick="nav_analysis({0})">{1}<a href="#" themeno="{0}" onclick="delete_latest(this)">×</a></li>'.format(r["themeno"], r["themenm"]));
		  }
          
          if(i == 0) {
            //config["themeno"] = r["themeno"];
          }
        }

        $(".lately").html(ss.join(""));
      }
    });
  }

  function delete_latest(btn) {
	event.preventDefault();
	event.stopPropagation();

    var themeno = $(btn).attr("themeno");
	
    $.ajax({
      url : config.url,
      data : {aid:'ana03', themeno:themeno, mbrno:config["mbrno"]},
      success : function(res) {
		if(_N(res) > 0)
		{
			console.log("delete " + themeno);
			load_latest();
		}
      }
    });
  }  
//최근조회  

//news
function DT(d) {
	return d.substr(0,4) + "." + d.substr(4, 2) + "." + d.substr(6, 2) + " " + d.substr(8,2) + ":" + d.substr(10,2);
}

function RT(v)
{
	var ix = v.indexOf("\n▶");
	if(ix != -1) {
		v = v.substr(0, ix);
	}

	var s = strip_tags(v, "");
	return s;
}

function load_nws(themeno, start)
{
	$.ajax({
		url : config.url,
		data : {aid:'nws01', start:start, limit:10, themeno:themeno},
		success : function(res) {
			var rs = _JSON(res);
			var ss = [];
			var idx = start;
			for(var i = 0; i < rs.rows.length; i++) {
				idx++;
				var r = rs.rows[i];
				ss.push('<dl><dt><label class="cat">{0}</label><h2 class="tit" idx="{4}" onclick="on_nws_view(this, {4})">{1}</h2><span class="dat">{2}</span></dt><dd>{3}</dd></dl>'.format(r["themenm"],r["tit"],DT(r["dt"]), RT(r["bdy"]), idx));
			}

			$(ss.join('')).insertBefore(".news ul.more");
			config["start"] = idx;
			config["themeno"] = themeno;
		}
	});
}

function on_nws_view(tit, idx)
{
	var ti = $(tit);
	var dd = $(tit).parent().next();
	if(ti.hasClass("emp")) {
		ti.removeClass("emp");
		dd.hide();
	} else {
		ti.addClass("emp");
		dd.show();
	}

	config["ti"] = ti;
	config["dd"] = dd;
}

function on_nws_more() {
	load_nws(config["themeno"], config["start"]);
}
//news end

// my
function load_theme_my(selected_themeno) {
	$.ajax({
		url : config.url,
		data : {aid:'my02', mbrno:config["mbrno"]},
		success : function(res) {
			var rs = _JSON(res);
			for(var i = 0; i < rs.rows.length; i++) {
				var r = rs.rows[i];
				var themeno = r["themeno"];
				var xx = r["inf"].split(",");
				var drate = xx[0];
				var mny = xx[1];
				var cls = "";
				if(drate > 0) cls = "up";
				else if(drate < 0) cls = "dn";

				if(drate > 0) {
					drate = "+" + drate;
				}	

				if(selected_themeno == 0) {
					selected_themeno = themeno;
					console.log("SET " + selected_themeno);
				}			 

				if($('.my_list dl[themeno="' + themeno + '"]').length)
				{
					$('.my_list dl[themeno="' + themeno + '"] dt span').html(r["rnk"]);
					$('.my_list dl[themeno="' + themeno + '"] dd').first().html('등락율  <p><span class="{0}">{1}%</span></p>'.format(cls, drate));
					$('.my_list dl[themeno="' + themeno + '"] dd').last().html('거래대금<p><span>{0}백만</span>'.format(_M(mny)));

				} else {
					var ss = [];
					ss.push('<dl themeno="{0}">'.format(themeno));
					ss.push('<dt> <span>{0}</span> <label>[{1}]</label>  <p>{2}</p><input type="image" src="./images/more.png" /></dt>'.format(r["rnk"], r["groupnm"], r["themenm"]));
					ss.push('<dd>등락율  <p><span class="{0}">{1}</span></p></dd>'.format(cls, drate+"%"));
					ss.push('<dd>거래대금<p><span>{0}백만</span></dd></dl>'.format(_M(mny)));
					$('.my_list').append(ss.join(''));
				}
			}

			config["themeno"] = selected_themeno;
			if(!$('.my_list dl[themeno="' + selected_themeno + '"] dt').hasClass("pick")) {
				$('.my_list dl[themeno="' + selected_themeno + '"] dt').addClass("pick");
				load_stock_list(selected_themeno, 'my');

				//select event
				$('.my_list dl dt').click(function(){
					$('.my_list dl dt').removeClass("pick");
					$(this).addClass("pick");
					var no = $(this).parent().attr("themeno");
					load_stock_list(no, 'my');
				});	

				$('.my_list dl dt input').click(function(event){
					event.preventDefault();
					event.stopPropagation();

					var themeno = $(this).parent().parent().attr('themeno');

					if($('#w-clickmenu').css('display') == 'block')
					{
						if( themeno == $('#w-clickmenu').attr('themeno')) {
							$('#w-clickmenu').hide();
							return;
						}
					}

					$(this).parent().append(_$('w-clickmenu'));
					$('#w-clickmenu').attr('themeno', themeno);
					$('#w-clickmenu li[idx="1"]').css('display', 'block');
					$('#w-clickmenu li[idx="2"]').css('display', 'none');
					$('#w-clickmenu li[idx="3"]').css('display', 'none');
					$('#w-clickmenu li[idx="4"]').css('display', 'block');
					$('#w-clickmenu').css('display', 'block');
				});					
			}
		}
	});
}

function infoVeiw(btn, gbn) {
	if(gbn == 'my')
	{
		$("#e-my .list").toggleClass('info');
	} else {
		$("#e-analysis .list").toggleClass('info');
	}

	if($(btn).val() == "주가정보") {
		$(btn).val("테마내용");
	} else {
		$(btn).val("주가정보");
	}
}

function listUp(gbn) {
	if(gbn == 'my') 
	{
		$("#e-my .list").toggleClass('listup');
	}
	else
	{
		$("#e-analysis .list").toggleClass('listup');
	}
}

function load_stock_list(themeno, gbn) {
	$.ajax({
      url:config.url,
      data : {aid:'ana05', themeno:themeno},
      success : function(res) {
	        var rs = _JSON(res);
        	var ss = [];
			var stks = [];
        	rs.rows.sort(function(a, b){ return b["drate"] - a["drate"]});
        	for(var i=0; i < rs.rows.length; i++) {
          		var r = rs.rows[i];
          		var rank = (i == 0) ? "대장주" : (i+1) + "등주";
          		var p = new Packet(r["contents"]);

  				var q_daebi = "";
				if(r["pqty"] > 0) {
					q_daebi = Math.round(r["qty"] * 100.0 / r["pqty"], 2) + "%";
				}

				var cls = (r["drate"]>0)?"up":((r["drate"]<0)?"dn":"");

          		ss.push('<ul shcode="{0}">'.format(r["shcode"]));
          		ss.push('<li class="rnk">{0}</li>'.format(rank));
          		ss.push('<li class="itm">{0}[{1}]</li>'.format(r["hname"], r["shcode"]));
          		ss.push('<li class="prc"><span class="{0}">{1}</span></li>'.format(cls, _M(r["cprc"])));
          		ss.push('<li class="chg"><span class="{0}">{1}</span></li>'.format(cls, _M(r["daebi"])));
          		ss.push('<li class="rat"><span class="{0}">{1}%</span></li>'.format(cls, r["drate"]));
				ss.push('<li class="vol">{0}</li>'.format(_M(r["qty"])));
				ss.push('<li class="vch">{0}</li>'.format(q_daebi));
				ss.push('<li class="tot">{0}억원</li>'.format(_M(r["siga"])));
          		ss.push('<li class="ctt">{0}</li>'.format(p.get("DESCRIPTION")));
          		ss.push('</ul>');

				stks.push(r["shcode"]);
			}

			config["db"] = rs.rows;
			if(gbn == 'my') {
				$('#e-my .list .td').html(ss.join(''));
			} else {
				$('#e-analysis .list .td').html(ss.join(''));
			}

			var shcodes = stks.join("|");
			console.log(shcodes);
			var pp = new Packet(JS_PKT);
			pp.set("GBN", PacketV.PKT_MULIT_CPRC);
			pp.set("SHCODES", shcodes);
			socket_send(pp);
		}
	});
}
// my end 

//analysis
function load_analysis_top() {
	var themeno = config["themeno"];
	$.ajax({
		url : config.url,
		data : {aid:'ana04', themeno:themeno},
		success : function(res) {
			var json = _JSON(res);
			var r = json.rows[0];
			var p = new Packet(r["contents"]);
			console.log(r);
			config["TOPPACKET"] = p;
			var img = p.get("IMG");
			if(img != "") {
				$(".overview .pic img").attr("src", img);
			}
			$('.sum .ctt').html(p.get("DESCRIPTION"));
			$('.overview label').html(p.get("PNAME"));

			var cls = "";
			var drate = r["drate"];
			drate = _N(drate).toFixed(2);

			if(drate < 0) {
				cls = "dn";
			}

			if(drate > 0) {
				drate = "+" + drate;
				cls = "up";
			}

			var up = "<em>▲</em>" + r["up"];
			var dn = "<em>▼</em>" + r["dn"];
			
			$('.overview span:nth-child(2)').html(r["themenm"]);
			$('.overview span:nth-child(3)').html(drate).attr("class", cls);
			$('.overview span:nth-child(4)').html(up);
			$('.overview span:nth-child(5)').html(dn);

		}
	});
}

function addOn() {
	var themeno = config["themeno"];
	$.ajax({
		url : config.url,
		data : {aid:'home02', themeno:themeno, mbrno:config["mbrno"]},
		success : function(res) {
			if (_N(res) > 0) {
				nav_my(themeno);
			} else {
				console.log("WHY");
				alertify.error('관심테마등록은 20개 까지만 가능 합니다.');
			}
		}
	});	
}
//analysis end