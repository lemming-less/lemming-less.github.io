define(["exports","./defaultValue-f6d5e6da"],(function(e,t){"use strict";e.combine=function e(n,o,f){f=t.defaultValue(f,!1);const r={},i=t.defined(n),a=t.defined(o);let d,s,u;if(i)for(d in n)n.hasOwnProperty(d)&&(s=n[d],a&&f&&"object"==typeof s&&o.hasOwnProperty(d)?(u=o[d],r[d]="object"==typeof u?e(s,u,f):s):r[d]=s);if(a)for(d in o)o.hasOwnProperty(d)&&!r.hasOwnProperty(d)&&(u=o[d],r[d]=u);return r}}));