/* eslint-disable */
;(function(g,d){
  if(g&&d){
    var v={"prod":"v1.0.1"};
    var c={"prod":{"api_ignore_urls":[],"api_url_regx":"","app":"jmpt-multi-fe","app_version_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]},"capture_type":0,"collect_event_types":["event","page","click","api","error","crash"],"enable":1,"endpoint":"https://fast-logstore.mypaas.com/report","ignore_pages":[],"include_search":true,"is_spa":true,"log_content_attribute":"data-log","log_event_attribute":"data-event","log_module_attribute":"data-module","logstore":"UKI255D2g0f9eYbi-0u9sBtwly8kQ81KZ0Cj1aGXfLivTxfar5YFqwyJRiTlg6jG","real_user_bu_name_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]},"real_user_name_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]},"real_user_post_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]},"real_user_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]},"real_user_role_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]},"replay":{"all":false,"crash":false,"endpoint":"https://fast-logupload.mypaas.com/report","error":false,"logstore":""},"report_api_params":false,"tenant_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]},"trace_config":{"headers":[],"rules":[],"tid_type":"fast"},"user_group_reader":{"key":"","range":["url","localstorage","sessionstorage","cookie","window"]}}};
    g.__fastTracker__={registUser:function(){},setBasicInfo:function(){},report:function(){},reportError:function(){},reportLoaded:function(){},clearLogStore:function(){},printDebug:function(){}};
    g.__myWebLogTracker__={registUser:function(){},setBasicInfo:function(){},report:function(){},reportError:function(){},reportLoaded:function(){},clearLogStore:function(){},printDebug:function(){}};
    var cn=g.__fastTrackerConfigName__||"prod";var cnt=0;var cfg=c.prod;var tv=v.prod;
    if(cn!=="prod"){tv=v[cn]||v.prod||'latest';var _cfg=c[cn]||{};var ks=Object.getOwnPropertyNames(_cfg);ks.forEach(function(k){cfg[k]=_cfg[k];});}
    var n=d.createElement("script");var tag=d.getElementsByTagName("script")[0];n.async="async";n.crossorigin="anonymous";n.src="https://mic-open.mypaas.com.cn/fast-tracker/release/browser/"+tv+"/fastTracker.min.js";
    function it(){if(g.fastTracker){g.fastTracker(cfg);}else if(cnt<3){cnt++;g.setTimeout(it, 50);}}
    n.onreadystatechange=n.onload=function(){if(!n.readyState||n.readyState==="loaded"||n.readyState==="complete"){it();}};
    tag.parentNode.insertBefore(n,tag);
  }
})(window, document);