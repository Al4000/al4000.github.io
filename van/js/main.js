/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.4
*/
!function(a){function b(d,e){return this instanceof b?(a.isPlainObject(d)?e=d:(e=e||{},e.alias=d),this.el=void 0,this.opts=a.extend(!0,{},this.defaults,e),this.maskset=void 0,this.noMasksCache=e&&void 0!==e.definitions,this.userOptions=e||{},this.events={},this.dataAttribute="data-inputmask",this.isRTL=this.opts.numericInput,void c(this.opts.alias,e,this.opts)):new b(d,e)}function c(b,d,e){var f=e.aliases[b];return f?(f.alias&&c(f.alias,void 0,e),a.extend(!0,e,f),a.extend(!0,e,d),!0):(null===e.mask&&(e.mask=b),!1)}function d(c,d){function e(c,e,f){if(null!==c&&""!==c){if(1===c.length&&f.greedy===!1&&0!==f.repeat&&(f.placeholder=""),f.repeat>0||"*"===f.repeat||"+"===f.repeat){var g="*"===f.repeat?0:"+"===f.repeat?1:f.repeat;c=f.groupmarker.start+c+f.groupmarker.end+f.quantifiermarker.start+g+","+f.repeat+f.quantifiermarker.end}var h;return void 0===b.prototype.masksCache[c]||d===!0?(h={mask:c,maskToken:b.prototype.analyseMask(c,f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:e,maskLength:void 0},d!==!0&&(b.prototype.masksCache[f.numericInput?c.split("").reverse().join(""):c]=h,h=a.extend(!0,{},b.prototype.masksCache[f.numericInput?c.split("").reverse().join(""):c]))):h=a.extend(!0,{},b.prototype.masksCache[f.numericInput?c.split("").reverse().join(""):c]),h}}var f;if(a.isFunction(c.mask)&&(c.mask=c.mask(c)),a.isArray(c.mask)){if(c.mask.length>1){c.keepStatic=null===c.keepStatic||c.keepStatic;var g=c.groupmarker.start;return a.each(c.numericInput?c.mask.reverse():c.mask,function(b,d){g.length>1&&(g+=c.groupmarker.end+c.alternatormarker+c.groupmarker.start),g+=void 0===d.mask||a.isFunction(d.mask)?d:d.mask}),g+=c.groupmarker.end,e(g,c.mask,c)}c.mask=c.mask.pop()}return c.mask&&(f=void 0===c.mask.mask||a.isFunction(c.mask.mask)?e(c.mask,c.mask,c):e(c.mask.mask,c.mask,c)),f}function e(c,d,f){function k(a,b,c){b=b||0;var d,e,g,h=[],i=0,j=n();S=void 0!==V?V.maxLength:void 0,S===-1&&(S=void 0);do a===!0&&l().validPositions[i]?(g=l().validPositions[i],e=g.match,d=g.locator.slice(),h.push(c===!0?g.input:c===!1?e.nativeDef:F(i,e))):(g=q(i,d,i-1),e=g.match,d=g.locator.slice(),(f.jitMasking===!1||i<j||"number"==typeof f.jitMasking&&isFinite(f.jitMasking)&&f.jitMasking>i)&&h.push(c===!1?e.nativeDef:F(i,e))),i++;while((void 0===S||i<S)&&(null!==e.fn||""!==e.def)||b>i);return""===h[h.length-1]&&h.pop(),l().maskLength=i+1,h}function l(){return d}function m(a){var b=l();b.buffer=void 0,a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function n(a,b,c){var d=-1,e=-1,f=c||l().validPositions;void 0===a&&(a=-1);for(var g in f){var h=parseInt(g);f[h]&&(b||null!==f[h].match.fn)&&(h<=a&&(d=h),h>=a&&(e=h))}return d!==-1&&a-d>1||e<a?d:e}function o(b,c,d,e){function g(a){var b=l().validPositions[a];if(void 0!==b&&null===b.match.fn){var c=l().validPositions[a-1],d=l().validPositions[a+1];return void 0!==c&&void 0!==d}return!1}var h,i=b,j=a.extend(!0,{},l().validPositions),k=!1;for(l().p=b,h=c-1;h>=i;h--)void 0!==l().validPositions[h]&&(d!==!0&&(!l().validPositions[h].match.optionality&&g(h)||f.canClearPosition(l(),h,n(),e,f)===!1)||delete l().validPositions[h]);for(m(!0),h=i+1;h<=n();){for(;void 0!==l().validPositions[i];)i++;if(h<i&&(h=i+1),void 0===l().validPositions[h]&&A(h))h++;else{var o=q(h);k===!1&&j[i]&&j[i].match.def===o.match.def?(l().validPositions[i]=a.extend(!0,{},j[i]),l().validPositions[i].input=o.input,delete l().validPositions[h],h++):s(i,o.match.def)?z(i,o.input||F(h),!0)!==!1&&(delete l().validPositions[h],h++,k=!0):A(h)||(h++,i--),i++}}m(!0)}function p(a,b){for(var c,d=a,e=n(),g=l().validPositions[e]||t(0)[0],h=void 0!==g.alternation?g.locator[g.alternation].toString().split(","):[],i=0;i<d.length&&(c=d[i],!(c.match&&(f.greedy&&c.match.optionalQuantifier!==!0||(c.match.optionality===!1||c.match.newBlockMarker===!1)&&c.match.optionalQuantifier!==!0)&&(void 0===g.alternation||g.alternation!==c.alternation||void 0!==c.locator[g.alternation]&&y(c.locator[g.alternation].toString().split(","),h)))||b===!0&&(null!==c.match.fn||/[0-9a-bA-Z]/.test(c.match.def)));i++);return c}function q(a,b,c){return l().validPositions[a]||p(t(a,b?b.slice():b,c))}function r(a){return l().validPositions[a]?l().validPositions[a]:t(a)[0]}function s(a,b){for(var c=!1,d=t(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function t(b,c,d){function e(c,d,g,h){function j(g,h,m){function p(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){if(e.isQuantifier===!0&&(d=p(b,c.matches[a-1])))return!1}),d}function r(b,c,d){var e,f;return(l().tests[b]||l().validPositions[b])&&a.each(l().tests[b]||[l().validPositions[b]],function(a,b){var g=void 0!==d?d:b.alternation,h=void 0!==b.locator[g]?b.locator[g].toString().indexOf(c):-1;(void 0===f||h<f)&&h!==-1&&(e=b,f=h)}),e?e.locator.slice((void 0!==d?d:e.alternation)+1):void 0!==d?r(b,c):void 0}function s(a,c){return null===a.match.fn&&null!==c.match.fn&&c.match.fn.test(a.match.def,l(),b,!1,f,!1)}if(k>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+l().mask;if(k===b&&void 0===g.matches)return n.push({match:g,locator:h.reverse(),cd:q}),!0;if(void 0!==g.matches){if(g.isGroup&&m!==g){if(g=j(c.matches[a.inArray(g,c.matches)+1],h))return!0}else if(g.isOptional){var t=g;if(g=e(g,d,h,m)){if(i=n[n.length-1].match,!p(i,t))return!0;o=!0,k=b}}else if(g.isAlternator){var u,v=g,w=[],x=n.slice(),y=h.length,z=d.length>0?d.shift():-1;if(z===-1||"string"==typeof z){var A,B=k,C=d.slice(),D=[];if("string"==typeof z)D=z.split(",");else for(A=0;A<v.matches.length;A++)D.push(A);for(var E=0;E<D.length;E++){if(A=parseInt(D[E]),n=[],d=r(k,A,y)||C.slice(),g=j(v.matches[A]||c.matches[A],[A].concat(h),m)||g,g!==!0&&void 0!==g&&D[D.length-1]<v.matches.length){var F=a.inArray(g,c.matches)+1;c.matches.length>F&&(g=j(c.matches[F],[F].concat(h.slice(1,h.length)),m),g&&(D.push(F.toString()),a.each(n,function(a,b){b.alternation=h.length-1})))}u=n.slice(),k=B,n=[];for(var G=0;G<u.length;G++){var H=u[G],I=!1;H.alternation=H.alternation||y;for(var J=0;J<w.length;J++){var K=w[J];if(("string"!=typeof z||a.inArray(H.locator[H.alternation].toString(),D)!==-1)&&(H.match.def===K.match.def||s(H,K))){I=H.match.nativeDef===K.match.nativeDef,H.alternation==K.alternation&&K.locator[K.alternation].toString().indexOf(H.locator[H.alternation])===-1&&(K.locator[K.alternation]=K.locator[K.alternation]+","+H.locator[H.alternation],K.alternation=H.alternation,null==H.match.fn&&(K.na=K.na||H.locator[H.alternation].toString(),K.na.indexOf(H.locator[H.alternation])===-1&&(K.na=K.na+","+H.locator[H.alternation])));break}}I||w.push(H)}}"string"==typeof z&&(w=a.map(w,function(b,c){if(isFinite(c)){var d,e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=void 0,b.alternation=void 0;for(var g=0;g<f.length;g++)d=a.inArray(f[g],D)!==-1,d&&(void 0!==b.locator[e]?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(void 0!==b.locator[e])return b}})),n=x.concat(w),k=b,o=n.length>0,d=C.slice()}else g=j(v.matches[z]||c.matches[z],[z].concat(h),m);if(g)return!0}else if(g.isQuantifier&&m!==c.matches[a.inArray(g,c.matches)-1])for(var L=g,M=d.length>0?d.shift():0;M<(isNaN(L.quantifier.max)?M+1:L.quantifier.max)&&k<=b;M++){var N=c.matches[a.inArray(L,c.matches)-1];if(g=j(N,[M].concat(h),N)){if(i=n[n.length-1].match,i.optionalQuantifier=M>L.quantifier.min-1,p(i,N)){if(M>L.quantifier.min-1){o=!0,k=b;break}return!0}return!0}}else if(g=e(g,d,h,m))return!0}else k++}for(var m=d.length>0?d.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var p=j(c.matches[m],[m].concat(g),h);if(p&&k===b)return p;if(k>b)break}}function g(b){var c=[];return a.isArray(b)||(b=[b]),b.length>0&&(void 0===b[0].alternation?(c=p(b.slice()).locator.slice(),0===c.length&&(c=b[0].locator.slice())):a.each(b,function(a,b){if(""!==b.def)if(0===c.length)c=b.locator.slice();else for(var d=0;d<c.length;d++)b.locator[d]&&c[d].toString().indexOf(b.locator[d])===-1&&(c[d]+=","+b.locator[d])})),c}function h(a){return f.keepStatic&&b>0&&a.length>1+(""===a[a.length-1].match.def?1:0)&&a[0].match.optionality!==!0&&a[0].match.optionalQuantifier!==!0&&null===a[0].match.fn&&!/[0-9a-bA-Z]/.test(a[0].match.def)?[p(a)]:a}var i,j=l().maskToken,k=c?d:0,m=c?c.slice():[0],n=[],o=!1,q=c?c.join(""):"";if(b>-1){if(void 0===c){for(var r,s=b-1;void 0===(r=l().validPositions[s]||l().tests[s])&&s>-1;)s--;void 0!==r&&s>-1&&(m=g(r),q=m.join(""),k=s)}if(l().tests[b]&&l().tests[b][0].cd===q)return h(l().tests[b]);for(var t=m.shift();t<j.length;t++){var u=e(j[t],m,[t]);if(u&&k===b||k>b)break}}return(0===n.length||o)&&n.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:q}),void 0!==c&&l().tests[b]?h(a.extend(!0,[],n)):(l().tests[b]=a.extend(!0,[],n),h(l().tests[b]))}function u(){return void 0===l()._buffer&&(l()._buffer=k(!1,1),void 0===l().buffer&&l()._buffer.slice()),l()._buffer}function v(a){return void 0!==l().buffer&&a!==!0||(l().buffer=k(!0,n(),!0)),l().buffer}function w(a,b,c){var d;if(a===!0)m(),a=0,b=c.length;else for(d=a;d<b;d++)delete l().validPositions[d];for(d=a;d<b;d++)m(!0),c[d]!==f.skipOptionalPartCharacter&&z(d,c[d],!0,!0)}function x(a,c,d){switch(f.casing||c.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase();break;case"title":var e=l().validPositions[d-1];a=0===d||e&&e.input===String.fromCharCode(b.keyCode.SPACE)?a.toUpperCase():a.toLowerCase()}return a}function y(b,c){for(var d=f.greedy?c:c.slice(0,1),e=!1,g=0;g<b.length;g++)if(a.inArray(b[g],d)!==-1){e=!0;break}return e}function z(c,d,e,g,h){function i(a){var b=W?a.begin-a.end>1||a.begin-a.end===1&&f.insertMode:a.end-a.begin>1||a.end-a.begin===1&&f.insertMode;return b&&0===a.begin&&a.end===l().maskLength?"full":b}function j(b,d,e){var h=!1;return a.each(t(b),function(j,k){for(var p=k.match,q=d?1:0,r="",s=p.cardinality;s>q;s--)r+=D(b-(s-1));if(d&&(r+=d),v(!0),h=null!=p.fn?p.fn.test(r,l(),b,e,f,i(c)):(d===p.def||d===f.skipOptionalPartCharacter)&&""!==p.def&&{c:p.placeholder||p.def,pos:b},h!==!1){var t=void 0!==h.c?h.c:d;t=t===f.skipOptionalPartCharacter&&null===p.fn?p.placeholder||p.def:t;var y=b,A=v();if(void 0!==h.remove&&(a.isArray(h.remove)||(h.remove=[h.remove]),a.each(h.remove.sort(function(a,b){return b-a}),function(a,b){o(b,b+1,!0)})),void 0!==h.insert&&(a.isArray(h.insert)||(h.insert=[h.insert]),a.each(h.insert.sort(function(a,b){return a-b}),function(a,b){z(b.pos,b.c,!0,g)})),h.refreshFromBuffer){var B=h.refreshFromBuffer;if(e=!0,w(B===!0?B:B.start,B.end,A),void 0===h.pos&&void 0===h.c)return h.pos=n(),!1;if(y=void 0!==h.pos?h.pos:b,y!==b)return h=a.extend(h,z(y,t,!0,g)),!1}else if(h!==!0&&void 0!==h.pos&&h.pos!==b&&(y=h.pos,w(b,y,v().slice()),y!==b))return h=a.extend(h,z(y,t,!0)),!1;return(h===!0||void 0!==h.pos||void 0!==h.c)&&(j>0&&m(!0),u(y,a.extend({},k,{input:x(t,p,y)}),g,i(c))||(h=!1),!1)}}),h}function k(b,c,d){var e,h,i,j,k,o,p,q,r=a.extend(!0,{},l().validPositions),s=!1,u=n();for(j=l().validPositions[u];u>=0;u--)if(i=l().validPositions[u],i&&void 0!==i.alternation){if(e=u,h=l().validPositions[e].alternation,j.locator[i.alternation]!==i.locator[i.alternation])break;j=i}if(void 0!==h){q=parseInt(e);var v=void 0!==j.locator[j.alternation||h]?j.locator[j.alternation||h]:p[0];v.length>0&&(v=v.split(",")[0]);var w=l().validPositions[q],x=l().validPositions[q-1];a.each(t(q,x?x.locator:void 0,q-1),function(e,i){p=i.locator[h]?i.locator[h].toString().split(","):[];for(var j=0;j<p.length;j++){var t=[],u=0,x=0,y=!1;if(v<p[j]&&(void 0===i.na||a.inArray(p[j],i.na.split(","))===-1)){l().validPositions[q]=a.extend(!0,{},i);var A=l().validPositions[q].locator;for(l().validPositions[q].locator[h]=parseInt(p[j]),null==i.match.fn?(w.input!==i.match.def&&(y=!0,w.generatedInput!==!0&&t.push(w.input)),x++,l().validPositions[q].generatedInput=!/[0-9a-bA-Z]/.test(i.match.def),l().validPositions[q].input=i.match.def):l().validPositions[q].input=w.input,k=q+1;k<n(void 0,!0)+1;k++)o=l().validPositions[k],o&&o.generatedInput!==!0&&/[0-9a-bA-Z]/.test(o.input)?t.push(o.input):k<b&&u++,delete l().validPositions[k];for(y&&t[0]===i.match.def&&t.shift(),m(!0),s=!0;t.length>0;){var B=t.shift();if(B!==f.skipOptionalPartCharacter&&!(s=z(n(void 0,!0)+1,B,!1,g,!0)))break}if(s){l().validPositions[q].locator=A;var C=n(b)+1;for(k=q+1;k<n()+1;k++)o=l().validPositions[k],(void 0===o||null==o.match.fn)&&k<b+(x-u)&&x++;b+=x-u,s=z(b>C?C:b,c,d,g,!0)}if(s)return!1;m(),l().validPositions=a.extend(!0,{},r)}}})}return s}function r(b,c){var d=l().validPositions[c];if(d)for(var e=d.locator,f=e.length,g=b;g<c;g++)if(void 0===l().validPositions[g]&&!A(g,!0)){var h=t(g),i=h[0],j=-1;a.each(h,function(a,b){for(var c=0;c<f&&(void 0!==b.locator[c]&&y(b.locator[c].toString().split(","),e[c].toString().split(",")));c++)j<c&&(j=c,i=b)}),u(g,a.extend({},i,{input:i.match.placeholder||i.match.def}),!0)}}function u(b,c,d,e){if(e||f.insertMode&&void 0!==l().validPositions[b]&&void 0===d){var g,h=a.extend(!0,{},l().validPositions),i=n(void 0,!0);for(g=b;g<=i;g++)delete l().validPositions[g];l().validPositions[b]=a.extend(!0,{},c);var j,k=!0,o=l().validPositions,p=!1,q=l().maskLength;for(g=j=b;g<=i;g++){var r=h[g];if(void 0!==r)for(var t=j;t<l().maskLength&&(null===r.match.fn&&o[g]&&(o[g].match.optionalQuantifier===!0||o[g].match.optionality===!0)||null!=r.match.fn);){if(t++,p===!1&&h[t]&&h[t].match.def===r.match.def)l().validPositions[t]=a.extend(!0,{},h[t]),l().validPositions[t].input=r.input,C(t),j=t,k=!0;else if(s(t,r.match.def)){var u=z(t,r.input,!0,!0);k=u!==!1,j=u.caret||u.insert?n():t,p=!0}else k=r.generatedInput===!0;if(l().maskLength<q&&(l().maskLength=q),k)break}if(!k)break}if(!k)return l().validPositions=a.extend(!0,{},h),m(!0),!1}else l().validPositions[b]=a.extend(!0,{},c);return m(!0),!0}function C(b){for(var c=b-1;c>-1&&!l().validPositions[c];c--);var d,e;for(c++;c<b;c++)void 0===l().validPositions[c]&&(f.jitMasking===!1||f.jitMasking>c)&&(e=t(c,q(c-1).locator,c-1).slice(),""===e[e.length-1].match.def&&e.pop(),d=p(e),d&&(d.match.def===f.radixPointDefinitionSymbol||!A(c,!0)||a.inArray(f.radixPoint,v())<c&&d.match.fn&&d.match.fn.test(F(c),l(),c,!1,f))&&(G=j(c,d.match.placeholder||(null==d.match.fn?d.match.def:""!==F(c)?F(c):v()[c]),!0),G!==!1&&(l().validPositions[G.pos||c].generatedInput=!0)))}e=e===!0;var E=c;void 0!==c.begin&&(E=W&&!i(c)?c.end:c.begin);var G=!1,H=a.extend(!0,{},l().validPositions);if(C(E),i(c)&&(M(void 0,b.keyCode.DELETE,c),E=l().p),E<l().maskLength&&(G=j(E,d,e),(!e||g===!0)&&G===!1)){var I=l().validPositions[E];if(!I||null!==I.match.fn||I.match.def!==d&&d!==f.skipOptionalPartCharacter){if((f.insertMode||void 0===l().validPositions[B(E)])&&!A(E,!0)){var J=t(E).slice();""===J[J.length-1].match.def&&J.pop();var K=p(J,!0);K&&null===K.match.fn&&(K=K.match.placeholder||K.match.def,j(E,K,e),l().validPositions[E].generatedInput=!0);for(var L=E+1,N=B(E);L<=N;L++)if(G=j(L,d,e),G!==!1){r(E,void 0!==G.pos?G.pos:L),E=L;break}}}else G={caret:B(E)}}return G===!1&&f.keepStatic&&!e&&h!==!0&&(G=k(E,d,e)),G===!0&&(G={pos:E}),a.isFunction(f.postValidation)&&G!==!1&&!e&&g!==!0&&(G=!!f.postValidation(v(!0),G,f)&&G),void 0===G.pos&&(G.pos=E),G===!1&&(m(!0),l().validPositions=a.extend(!0,{},H)),G}function A(a,b){var c;if(b?(c=q(a).match,""===c.def&&(c=r(a).match)):c=r(a).match,null!=c.fn)return c.fn;if(b!==!0&&a>-1){var d=t(a);return d.length>1+(""===d[d.length-1].match.def?1:0)}return!1}function B(a,b){var c=l().maskLength;if(a>=c)return c;for(var d=a;++d<c&&(b===!0&&(r(d).match.newBlockMarker!==!0||!A(d))||b!==!0&&!A(d)););return d}function C(a,b){var c,d=a;if(d<=0)return 0;for(;--d>0&&(b===!0&&r(d).match.newBlockMarker!==!0||b!==!0&&!A(d)&&(c=t(d),c.length<2||2===c.length&&""===c[1].match.def)););return d}function D(a){return void 0===l().validPositions[a]?F(a):l().validPositions[a].input}function E(b,c,d,e,g){if(e&&a.isFunction(f.onBeforeWrite)){var h=f.onBeforeWrite(e,c,d,f);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;w(i===!0?i:i.start,i.end,h.buffer||c),c=v(!0)}void 0!==d&&(d=void 0!==h.caret?h.caret:d)}}b.inputmask._valueSet(c.join("")),void 0===d||void 0!==e&&"blur"===e.type?O(b,c,d):I(b,d),g===!0&&(Y=!0,a(b).trigger("input"))}function F(a,b){if(b=b||r(a).match,void 0!==b.placeholder)return b.placeholder;if(null===b.fn){if(a>-1&&void 0===l().validPositions[a]){var c,d=t(a),e=[];if(d.length>1+(""===d[d.length-1].match.def?1:0))for(var g=0;g<d.length;g++)if(d[g].match.optionality!==!0&&d[g].match.optionalQuantifier!==!0&&(null===d[g].match.fn||void 0===c||d[g].match.fn.test(c.match.def,l(),a,!0,f)!==!1)&&(e.push(d[g]),null===d[g].match.fn&&(c=d[g]),e.length>1&&/[0-9a-bA-Z]/.test(e[0].match.def)))return f.placeholder.charAt(a%f.placeholder.length)}return b.def}return f.placeholder.charAt(a%f.placeholder.length)}function G(c,d,e,g,h,i){function j(){var a=!1,b=u().slice(p,B(p)).join("").indexOf(o);if(b!==-1&&!A(p)){a=!0;for(var c=u().slice(p,p+b),d=0;d<c.length;d++)if(" "!==c[d]){a=!1;break}}return a}var k=g.slice(),o="",p=0,r=void 0;if(m(),l().p=B(-1),!e)if(f.autoUnmask!==!0){var s=u().slice(0,B(-1)).join(""),t=k.join("").match(new RegExp("^"+b.escapeRegex(s),"g"));t&&t.length>0&&(k.splice(0,t.length*s.length),p=B(p))}else p=B(p);if(a.each(k,function(b,d){if(void 0!==d){var g=new a.Event("keypress");g.which=d.charCodeAt(0),o+=d;var h=n(void 0,!0),i=l().validPositions[h],k=q(h+1,i?i.locator.slice():void 0,h);if(!j()||e||f.autoUnmask){var s=e?b:null==k.match.fn&&k.match.optionality&&h+1<l().p?h+1:l().p;r=aa.keypressEvent.call(c,g,!0,!1,e,s),p=s+1,o=""}else r=aa.keypressEvent.call(c,g,!0,!1,!0,h+1);if(!e&&a.isFunction(f.onBeforeWrite)&&(r=f.onBeforeWrite(g,v(),r.forwardPosition,f),r&&r.refreshFromBuffer)){var t=r.refreshFromBuffer;w(t===!0?t:t.start,t.end,r.buffer),m(!0),r.caret&&(l().p=r.caret)}}}),d){var x=void 0,y=n();document.activeElement===c&&(h||r)&&(x=I(c).begin,h&&r===!1&&(x=B(n(x))),r&&i!==!0&&(x<y+1||y===-1)&&(x=f.numericInput&&void 0===r.caret?C(r.forwardPosition):r.forwardPosition)),E(c,v(),x,h||new a.Event("checkval"))}}function H(b){if(b&&void 0===b.inputmask)return b.value;var c=[],d=l().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var g=0===c.length?"":(W?c.reverse():c).join("");if(a.isFunction(f.onUnMask)){var h=(W?v().slice().reverse():v()).join("");g=f.onUnMask(h,g,f)||g}return g}function I(a,b,c,d){function e(a){if(d!==!0&&W&&"number"==typeof a&&(!f.greedy||""!==f.placeholder)){var b=v().join("").length;a=b-a}return a}var h;if("number"!=typeof b)return a.setSelectionRange?(b=a.selectionStart,c=a.selectionEnd):window.getSelection?(h=window.getSelection().getRangeAt(0),h.commonAncestorContainer.parentNode!==a&&h.commonAncestorContainer!==a||(b=h.startOffset,c=h.endOffset)):document.selection&&document.selection.createRange&&(h=document.selection.createRange(),b=0-h.duplicate().moveStart("character",-a.inputmask._valueGet().length),c=b+h.text.length),{begin:e(b),end:e(c)};b=e(b),c=e(c),c="number"==typeof c?c:b;var i=parseInt(((a.ownerDocument.defaultView||window).getComputedStyle?(a.ownerDocument.defaultView||window).getComputedStyle(a,null):a.currentStyle).fontSize)*c;if(a.scrollLeft=i>a.scrollWidth?i:0,g||f.insertMode!==!1||b!==c||c++,a.setSelectionRange)a.selectionStart=b,a.selectionEnd=c;else if(window.getSelection){if(h=document.createRange(),void 0===a.firstChild||null===a.firstChild){var j=document.createTextNode("");a.appendChild(j)}h.setStart(a.firstChild,b<a.inputmask._valueGet().length?b:a.inputmask._valueGet().length),h.setEnd(a.firstChild,c<a.inputmask._valueGet().length?c:a.inputmask._valueGet().length),h.collapse(!0);var k=window.getSelection();k.removeAllRanges(),k.addRange(h)}else a.createTextRange&&(h=a.createTextRange(),h.collapse(!0),h.moveEnd("character",c),h.moveStart("character",b),h.select());O(a,void 0,{begin:b,end:c})}function J(b){var c,d,e=v(),f=e.length,g=n(),h={},i=l().validPositions[g],j=void 0!==i?i.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=q(c,j,c-1),j=d.locator.slice(),h[c]=a.extend(!0,{},d);var k=i&&void 0!==i.alternation?i.locator[i.alternation]:void 0;for(c=f-1;c>g&&(d=h[c],(d.match.optionality||d.match.optionalQuantifier||k&&(k!==h[c].locator[i.alternation]&&null!=d.match.fn||null===d.match.fn&&d.locator[i.alternation]&&y(d.locator[i.alternation].toString().split(","),k.toString().split(","))&&""!==t(c)[0].def))&&e[c]===F(c,d.match));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function K(a){for(var b=J(),c=a.length-1;c>b&&!A(c);c--);return a.splice(b,c+1-b),a}function L(b){if(a.isFunction(f.isComplete))return f.isComplete(b,f);if("*"!==f.repeat){var c=!1,d=J(!0),e=C(d.l);if(void 0===d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var g=0;g<=e;g++){var h=q(g).match;if(null!==h.fn&&void 0===l().validPositions[g]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null===h.fn&&b[g]!==F(g,h)){c=!1;break}}}return c}}function M(c,d,e,g){function h(){if(f.keepStatic){for(var b=[],d=n(-1,!0),e=a.extend(!0,{},l().validPositions),g=l().validPositions[d];d>=0;d--){var h=l().validPositions[d];if(h){if(h.generatedInput!==!0&&/[0-9a-bA-Z]/.test(h.input)&&b.push(h.input),delete l().validPositions[d],void 0!==h.alternation&&h.locator[h.alternation]!==g.locator[h.alternation])break;g=h}}if(d>-1)for(l().p=B(n(-1,!0));b.length>0;){var i=new a.Event("keypress");i.which=b.pop().charCodeAt(0),aa.keypressEvent.call(c,i,!0,!1,!1,l().p)}else l().validPositions=a.extend(!0,{},e)}}if((f.numericInput||W)&&(d===b.keyCode.BACKSPACE?d=b.keyCode.DELETE:d===b.keyCode.DELETE&&(d=b.keyCode.BACKSPACE),W)){var i=e.end;e.end=e.begin,e.begin=i}d===b.keyCode.BACKSPACE&&(e.end-e.begin<1||f.insertMode===!1)?(e.begin=C(e.begin),void 0===l().validPositions[e.begin]||l().validPositions[e.begin].input!==f.groupSeparator&&l().validPositions[e.begin].input!==f.radixPoint||e.begin--):d===b.keyCode.DELETE&&e.begin===e.end&&(e.end=A(e.end,!0)?e.end+1:B(e.end)+1,void 0===l().validPositions[e.begin]||l().validPositions[e.begin].input!==f.groupSeparator&&l().validPositions[e.begin].input!==f.radixPoint||e.end++),o(e.begin,e.end,!1,g),g!==!0&&h();var j=n(e.begin,!0);j<e.begin?l().p=B(j):g!==!0&&(l().p=e.begin)}function N(b){function c(a){var c,d=document.createElement("span");for(var e in g)isNaN(e)&&e.indexOf("font")!==-1&&(d.style[e]=g[e]);d.style.textTransform=g.textTransform,d.style.letterSpacing=g.letterSpacing,d.style.position="absolute",d.style.height="auto",d.style.width="auto",d.style.visibility="hidden",d.style.whiteSpace="nowrap",document.body.appendChild(d);var f,h=b.inputmask._valueGet(),i=0;for(c=0,f=h.length;c<=f;c++){if(d.innerHTML+=h.charAt(c)||"_",d.offsetWidth>=a){var j=a-i,k=d.offsetWidth-a;d.innerHTML=h.charAt(c),j-=d.offsetWidth/3,c=j<k?c-1:c;break}i=d.offsetWidth}return document.body.removeChild(d),c}function d(){T.style.position="absolute",T.style.top=e.top+"px",T.style.left=e.left+"px",T.style.width=parseInt(b.offsetWidth)-parseInt(g.paddingLeft)-parseInt(g.paddingRight)-parseInt(g.borderLeftWidth)-parseInt(g.borderRightWidth)+"px",T.style.height=parseInt(b.offsetHeight)-parseInt(g.paddingTop)-parseInt(g.paddingBottom)-parseInt(g.borderTopWidth)-parseInt(g.borderBottomWidth)+"px",T.style.lineHeight=T.style.height,T.style.zIndex=isNaN(g.zIndex)?-1:g.zIndex-1,T.style.webkitAppearance="textfield",T.style.mozAppearance="textfield",T.style.Appearance="textfield"}var e=a(b).position(),g=(b.ownerDocument.defaultView||window).getComputedStyle(b,null);b.parentNode;T=document.createElement("div"),document.body.appendChild(T);for(var h in g)isNaN(h)&&"cssText"!==h&&h.indexOf("webkit")==-1&&(T.style[h]=g[h]);b.style.backgroundColor="transparent",b.style.color="transparent",b.style.webkitAppearance="caret",b.style.mozAppearance="caret",b.style.Appearance="caret",d(),a(window).on("resize",function(c){e=a(b).position(),g=(b.ownerDocument.defaultView||window).getComputedStyle(b,null),d()}),a(b).on("click",function(a){return I(b,c(a.clientX)),aa.clickEvent.call(this,[a])}),a(b).on("keydown",function(a){a.shiftKey||f.insertMode===!1||setTimeout(function(){O(b)},0)})}function O(a,b,c){function d(){g||null!==i.fn&&void 0!==j.input?g&&null!==i.fn&&void 0!==j.input&&(g=!1,e+="</span>"):(g=!0,e+="<span class='im-static''>")}if(void 0!==T){b=b||v(),void 0===c?c=I(a):void 0===c.begin&&(c={begin:c,end:c});var e="",g=!1;if(""!=b){var h,i,j,k=0,m=n();do k===c.begin&&document.activeElement===a&&(e+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),l().validPositions[k]?(j=l().validPositions[k],i=j.match,h=j.locator.slice(),d(),e+=j.input):(j=q(k,h,k-1),i=j.match,h=j.locator.slice(),(f.jitMasking===!1||k<m||"number"==typeof f.jitMasking&&isFinite(f.jitMasking)&&f.jitMasking>k)&&(d(),e+=F(k,i))),k++;while((void 0===S||k<S)&&(null!==i.fn||""!==i.def)||m>k)}T.innerHTML=e}}function P(b){function c(b,c){function d(b){function d(b){if(a.valHooks&&(void 0===a.valHooks[b]||a.valHooks[b].inputmaskpatch!==!0)){var d=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},e=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=d(a);return n(void 0,void 0,a.inputmask.maskset.validPositions)!==-1||c.nullable!==!0?b:""}return d(a)},set:function(b,c){var d,f=a(b);return d=e(b,c),b.inputmask&&f.trigger("setvalue"),d},inputmaskpatch:!0}}}function e(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():n()!==-1||c.nullable!==!0?document.activeElement===this&&c.clearMaskOnLostFocus?(W?K(v().slice()).reverse():K(v().slice())).join(""):h.call(this):"":h.call(this)}function f(b){i.call(this,b),this.inputmask&&a(this).trigger("setvalue")}function g(b){_.on(b,"mouseenter",function(b){var c=a(this),d=this,e=d.inputmask._valueGet();e!==v().join("")&&c.trigger("setvalue")})}var h,i;if(!b.inputmask.__valueGet){if(c.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var j=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):void 0;j&&j.get&&j.set?(h=j.get,i=j.set,Object.defineProperty(b,"value",{get:e,set:f,configurable:!0})):"INPUT"!==b.tagName&&(h=function(){return this.textContent},i=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:e,set:f,configurable:!0}))}else document.__lookupGetter__&&b.__lookupGetter__("value")&&(h=b.__lookupGetter__("value"),i=b.__lookupSetter__("value"),b.__defineGetter__("value",e),b.__defineSetter__("value",f));b.inputmask.__valueGet=h,b.inputmask.__valueSet=i}b.inputmask._valueGet=function(a){return W&&a!==!0?h.call(this.el).split("").reverse().join(""):h.call(this.el)},b.inputmask._valueSet=function(a,b){i.call(this.el,null===a||void 0===a?"":b!==!0&&W?a.split("").reverse().join(""):a)},void 0===h&&(h=function(){return this.value},i=function(a){this.value=a},d(b.type),g(b))}}var e=b.getAttribute("type"),f="INPUT"===b.tagName&&a.inArray(e,c.supportsInputType)!==-1||b.isContentEditable||"TEXTAREA"===b.tagName;if(!f)if("INPUT"===b.tagName){var g=document.createElement("input");g.setAttribute("type",e),f="text"===g.type,g=null}else f="partial";return f!==!1&&d(b),f}var d=c(b,f);if(d!==!1&&(V=b,R=a(V),("rtl"===V.dir||f.rightAlign)&&(V.style.textAlign="right"),("rtl"===V.dir||f.numericInput)&&(V.dir="ltr",V.removeAttribute("dir"),V.inputmask.isRTL=!0,W=!0),f.colorMask===!0&&N(V),j&&(V.hasOwnProperty("inputmode")&&(V.inputmode=f.inputmode,V.setAttribute("inputmode",f.inputmode)),"rtfm"===f.androidHack&&(f.colorMask!==!0&&N(V),V.type="password")),_.off(V),d===!0&&(_.on(V,"submit",aa.submitEvent),_.on(V,"reset",aa.resetEvent),_.on(V,"mouseenter",aa.mouseenterEvent),_.on(V,"blur",aa.blurEvent),_.on(V,"focus",aa.focusEvent),_.on(V,"mouseleave",aa.mouseleaveEvent),f.colorMask!==!0&&_.on(V,"click",aa.clickEvent),_.on(V,"dblclick",aa.dblclickEvent),_.on(V,"paste",aa.pasteEvent),_.on(V,"dragdrop",aa.pasteEvent),_.on(V,"drop",aa.pasteEvent),_.on(V,"cut",aa.cutEvent),_.on(V,"complete",f.oncomplete),_.on(V,"incomplete",f.onincomplete),_.on(V,"cleared",f.oncleared),f.inputEventOnly!==!0&&(_.on(V,"keydown",aa.keydownEvent),_.on(V,"keypress",aa.keypressEvent)),_.on(V,"compositionstart",a.noop),_.on(V,"compositionupdate",a.noop),_.on(V,"compositionend",a.noop),_.on(V,"keyup",a.noop),_.on(V,"input",aa.inputFallBackEvent)),_.on(V,"setvalue",aa.setValueEvent),u(),""!==V.inputmask._valueGet()||f.clearMaskOnLostFocus===!1||document.activeElement===V)){var e=a.isFunction(f.onBeforeMask)?f.onBeforeMask(V.inputmask._valueGet(),f)||V.inputmask._valueGet():V.inputmask._valueGet();G(V,!0,!1,e.split(""));var g=v().slice();Q=g.join(""),L(g)===!1&&f.clearIncomplete&&m(),f.clearMaskOnLostFocus&&document.activeElement!==V&&(n()===-1?g=[]:K(g)),E(V,g),document.activeElement===V&&I(V,B(n()))}}d=d||this.maskset,f=f||this.opts;var Q,R,S,T,U,V=this.el,W=this.isRTL,X=!1,Y=!1,Z=!1,$=!1,_={on:function(c,d,e){var g=function(c){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var d=a.data(this,"_inputmask_opts");d?new b(d).mask(this):_.off(this)}else{if("setvalue"===c.type||!(this.disabled||this.readOnly&&!("keydown"===c.type&&c.ctrlKey&&67===c.keyCode||f.tabThrough===!1&&c.keyCode===b.keyCode.TAB))){switch(c.type){case"input":if(Y===!0)return Y=!1,c.preventDefault();break;case"keydown":X=!1,Y=!1;break;case"keypress":if(X===!0)return c.preventDefault();X=!0;break;case"click":if(h||i){var g=this,j=arguments;return setTimeout(function(){e.apply(g,j)},0),!1}}var k=e.apply(this,arguments);return k===!1&&(c.preventDefault(),c.stopPropagation()),k}c.preventDefault()}};c.inputmask.events[d]=c.inputmask.events[d]||[],c.inputmask.events[d].push(g),a.inArray(d,["submit","reset"])!==-1?null!=c.form&&a(c.form).on(d,g):a(c).on(d,g)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();a.inArray(c,["submit","reset"])!==-1?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}},aa={keydownEvent:function(c){function d(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}var e=this,g=a(e),h=c.keyCode,j=I(e);if(h===b.keyCode.BACKSPACE||h===b.keyCode.DELETE||i&&h===b.keyCode.BACKSPACE_SAFARI||c.ctrlKey&&h===b.keyCode.X&&!d("cut"))c.preventDefault(),M(e,h,j),E(e,v(!0),l().p,c,e.inputmask._valueGet()!==v().join("")),e.inputmask._valueGet()===u().join("")?g.trigger("cleared"):L(v())===!0&&g.trigger("complete");else if(h===b.keyCode.END||h===b.keyCode.PAGE_DOWN){c.preventDefault();var k=B(n());f.insertMode||k!==l().maskLength||c.shiftKey||k--,I(e,c.shiftKey?j.begin:k,k,!0)}else h===b.keyCode.HOME&&!c.shiftKey||h===b.keyCode.PAGE_UP?(c.preventDefault(),I(e,0,c.shiftKey?j.begin:0,!0)):(f.undoOnEscape&&h===b.keyCode.ESCAPE||90===h&&c.ctrlKey)&&c.altKey!==!0?(G(e,!0,!1,Q.split("")),g.trigger("click")):h!==b.keyCode.INSERT||c.shiftKey||c.ctrlKey?f.tabThrough===!0&&h===b.keyCode.TAB?(c.shiftKey===!0?(null===r(j.begin).match.fn&&(j.begin=B(j.begin)),j.end=C(j.begin,!0),j.begin=C(j.end,!0)):(j.begin=B(j.begin,!0),j.end=B(j.begin,!0),j.end<l().maskLength&&j.end--),j.begin<l().maskLength&&(c.preventDefault(),I(e,j.begin,j.end))):c.shiftKey||f.insertMode===!1&&(h===b.keyCode.RIGHT?setTimeout(function(){var a=I(e);I(e,a.begin)},0):h===b.keyCode.LEFT&&setTimeout(function(){var a=I(e);I(e,W?a.begin+1:a.begin-1)},0)):(f.insertMode=!f.insertMode,I(e,f.insertMode||j.begin!==l().maskLength?j.begin:j.begin-1));f.onKeyDown.call(this,c,v(),I(e).begin,f),Z=a.inArray(h,f.ignorables)!==-1},keypressEvent:function(c,d,e,g,h){var i=this,j=a(i),k=c.which||c.charCode||c.keyCode;if(!(d===!0||c.ctrlKey&&c.altKey)&&(c.ctrlKey||c.metaKey||Z))return k===b.keyCode.ENTER&&Q!==v().join("")&&(Q=v().join(""),
setTimeout(function(){j.trigger("change")},0)),!0;if(k){46===k&&c.shiftKey===!1&&","===f.radixPoint&&(k=44);var n,o=d?{begin:h,end:h}:I(i),p=String.fromCharCode(k);l().writeOutBuffer=!0;var q=z(o,p,g);if(q!==!1&&(m(!0),n=void 0!==q.caret?q.caret:d?q.pos+1:B(q.pos),l().p=n),e!==!1){var r=this;if(setTimeout(function(){f.onKeyValidation.call(r,k,q,f)},0),l().writeOutBuffer&&q!==!1){var s=v();E(i,s,f.numericInput&&void 0===q.caret?C(n):n,c,d!==!0),d!==!0&&setTimeout(function(){L(s)===!0&&j.trigger("complete")},0)}}if(c.preventDefault(),d)return q.forwardPosition=n,q}},pasteEvent:function(b){var c,d=this,e=b.originalEvent||b,g=a(d),h=d.inputmask._valueGet(!0),i=I(d);W&&(c=i.end,i.end=i.begin,i.begin=c);var j=h.substr(0,i.begin),k=h.substr(i.end,h.length);if(j===(W?u().reverse():u()).slice(0,i.begin).join("")&&(j=""),k===(W?u().reverse():u()).slice(i.end).join("")&&(k=""),W&&(c=j,j=k,k=c),window.clipboardData&&window.clipboardData.getData)h=j+window.clipboardData.getData("Text")+k;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;h=j+e.clipboardData.getData("text/plain")+k}var l=h;if(a.isFunction(f.onBeforePaste)){if(l=f.onBeforePaste(h,f),l===!1)return b.preventDefault();l||(l=h)}return G(d,!1,!1,W?l.split("").reverse():l.toString().split("")),E(d,v(),B(n()),b,Q!==v().join("")),L(v())===!0&&g.trigger("complete"),b.preventDefault()},inputFallBackEvent:function(c){var d=this,e=d.inputmask._valueGet();if(v().join("")!==e){var f=I(d);if(e=e.replace(new RegExp("("+b.escapeRegex(u().join(""))+")*"),""),h){var g=e.replace(v().join(""),"");if(1===g.length){var i=new a.Event("keypress");return i.which=g.charCodeAt(0),aa.keypressEvent.call(d,i,!0,!0,!1,l().validPositions[f.begin-1]?f.begin:f.begin-1),!1}}if(f.begin>e.length&&(I(d,e.length),f=I(d)),v().length-e.length!==1||e.charAt(f.begin)===v()[f.begin]||e.charAt(f.begin+1)===v()[f.begin]||A(f.begin)){for(var j=n()+1,k=u().join("");null===e.match(b.escapeRegex(k)+"$");)k=k.slice(1);e=e.replace(k,""),e=e.split(""),G(d,!0,!1,e,c,f.begin<j),L(v())===!0&&a(d).trigger("complete")}else c.keyCode=b.keyCode.BACKSPACE,aa.keydownEvent.call(d,c);c.preventDefault()}},setValueEvent:function(b){var c=this,d=c.inputmask._valueGet();G(c,!0,!1,(a.isFunction(f.onBeforeMask)?f.onBeforeMask(d,f)||d:d).split("")),Q=v().join(""),(f.clearMaskOnLostFocus||f.clearIncomplete)&&c.inputmask._valueGet()===u().join("")&&c.inputmask._valueSet("")},focusEvent:function(a){var b=this,c=b.inputmask._valueGet();f.showMaskOnFocus&&(!f.showMaskOnHover||f.showMaskOnHover&&""===c)&&(b.inputmask._valueGet()!==v().join("")?E(b,v(),B(n())):$===!1&&I(b,B(n()))),f.positionCaretOnTab===!0&&aa.clickEvent.apply(b,[a,!0]),Q=v().join("")},mouseleaveEvent:function(a){var b=this;if($=!1,f.clearMaskOnLostFocus&&document.activeElement!==b){var c=v().slice(),d=b.inputmask._valueGet();d!==b.getAttribute("placeholder")&&""!==d&&(n()===-1&&d===u().join("")?c=[]:K(c),E(b,c))}},clickEvent:function(b,c){function d(b){if(""!==f.radixPoint){var c=l().validPositions;if(void 0===c[b]||c[b].input===F(b)){if(b<B(-1))return!0;var d=a.inArray(f.radixPoint,v());if(d!==-1){for(var e in c)if(d<e&&c[e].input!==F(e))return!1;return!0}}}return!1}var e=this;setTimeout(function(){if(document.activeElement===e){var b=I(e);if(c&&(b.begin=b.end),b.begin===b.end)switch(f.positionCaretOnClick){case"none":break;case"radixFocus":if(d(b.begin)){var g=a.inArray(f.radixPoint,v().join(""));I(e,f.numericInput?B(g):g);break}default:var h=b.begin,i=n(h,!0),j=B(i);if(h<j)I(e,A(h)||A(h-1)?h:B(h));else{var k=F(j);(""!==k&&v()[j]!==k&&r(j).match.optionalQuantifier!==!0||!A(j)&&r(j).match.def===k)&&(j=B(j)),I(e,j)}}}},0)},dblclickEvent:function(a){var b=this;setTimeout(function(){I(b,0,B(n()))},0)},cutEvent:function(c){var d=this,e=a(d),f=I(d),g=c.originalEvent||c,h=window.clipboardData||g.clipboardData,i=W?v().slice(f.end,f.begin):v().slice(f.begin,f.end);h.setData("text",W?i.reverse().join(""):i.join("")),document.execCommand&&document.execCommand("copy"),M(d,b.keyCode.DELETE,f),E(d,v(),l().p,c,Q!==v().join("")),d.inputmask._valueGet()===u().join("")&&e.trigger("cleared")},blurEvent:function(b){var c=a(this),d=this;if(d.inputmask){var e=d.inputmask._valueGet(),g=v().slice();Q!==g.join("")&&setTimeout(function(){c.trigger("change"),Q=g.join("")},0),""!==e&&(f.clearMaskOnLostFocus&&(n()===-1&&e===u().join("")?g=[]:K(g)),L(g)===!1&&(setTimeout(function(){c.trigger("incomplete")},0),f.clearIncomplete&&(m(),g=f.clearMaskOnLostFocus?[]:u().slice())),E(d,g,void 0,b))}},mouseenterEvent:function(a){var b=this;$=!0,document.activeElement!==b&&f.showMaskOnHover&&b.inputmask._valueGet()!==v().join("")&&E(b,v())},submitEvent:function(a){Q!==v().join("")&&R.trigger("change"),f.clearMaskOnLostFocus&&n()===-1&&V.inputmask._valueGet&&V.inputmask._valueGet()===u().join("")&&V.inputmask._valueSet(""),f.removeMaskOnSubmit&&(V.inputmask._valueSet(V.inputmask.unmaskedvalue(),!0),setTimeout(function(){E(V,v())},0))},resetEvent:function(a){setTimeout(function(){R.trigger("setvalue")},0)}};if(void 0!==c)switch(c.action){case"isComplete":return V=c.el,L(v());case"unmaskedvalue":return void 0!==V&&void 0===c.value||(U=c.value,U=(a.isFunction(f.onBeforeMask)?f.onBeforeMask(U,f)||U:U).split(""),G(void 0,!1,!1,W?U.reverse():U),a.isFunction(f.onBeforeWrite)&&f.onBeforeWrite(void 0,v(),0,f)),H(V);case"mask":P(V);break;case"format":return U=(a.isFunction(f.onBeforeMask)?f.onBeforeMask(c.value,f)||c.value:c.value).split(""),G(void 0,!1,!1,W?U.reverse():U),a.isFunction(f.onBeforeWrite)&&f.onBeforeWrite(void 0,v(),0,f),c.metadata?{value:W?v().slice().reverse().join(""):v().join(""),metadata:e.call(this,{action:"getmetadata"},d,f)}:W?v().slice().reverse().join(""):v().join("");case"isValid":c.value?(U=c.value.split(""),G(void 0,!1,!0,W?U.reverse():U)):c.value=v().join("");for(var ba=v(),ca=J(),da=ba.length-1;da>ca&&!A(da);da--);return ba.splice(ca,da+1-ca),L(ba)&&c.value===v().join("");case"getemptymask":return u().join("");case"remove":if(V){R=a(V),V.inputmask._valueSet(H(V)),_.off(V);var ea;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(ea=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(V),"value"),ea&&V.inputmask.__valueGet&&Object.defineProperty(V,"value",{get:V.inputmask.__valueGet,set:V.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&V.__lookupGetter__("value")&&V.inputmask.__valueGet&&(V.__defineGetter__("value",V.inputmask.__valueGet),V.__defineSetter__("value",V.inputmask.__valueSet)),V.inputmask=void 0}return V;case"getmetadata":if(a.isArray(d.metadata)){var fa=k(!0,0,!1).join("");return a.each(d.metadata,function(a,b){if(b.mask===fa)return fa=b,!1}),fa}return d.metadata}}var f=navigator.userAgent,g=/mobile/i.test(f),h=/iemobile/i.test(f),i=/iphone/i.test(f)&&!h,j=/android/i.test(f)&&!h;return b.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask(b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:a.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},masksCache:{},mask:function(f){function g(b,d,e,f){function g(a,c){c=void 0!==c?c:b.getAttribute(f+"-"+a),null!==c&&("string"==typeof c&&(0===a.indexOf("on")?c=window[c]:"false"===c?c=!1:"true"===c&&(c=!0)),e[a]=c)}var h,i,j,k,l=b.getAttribute(f);if(l&&""!==l&&(l=l.replace(new RegExp("'","g"),'"'),i=JSON.parse("{"+l+"}")),i){j=void 0;for(k in i)if("alias"===k.toLowerCase()){j=i[k];break}}g("alias",j),e.alias&&c(e.alias,e,d);for(h in d){if(i){j=void 0;for(k in i)if(k.toLowerCase()===h.toLowerCase()){j=i[k];break}}g(h,j)}return a.extend(!0,d,e),d}var h=this;return"string"==typeof f&&(f=document.getElementById(f)||document.querySelectorAll(f)),f=f.nodeName?[f]:f,a.each(f,function(c,f){var i=a.extend(!0,{},h.opts);g(f,i,a.extend(!0,{},h.userOptions),h.dataAttribute);var j=d(i,h.noMasksCache);void 0!==j&&(void 0!==f.inputmask&&f.inputmask.remove(),f.inputmask=new b,f.inputmask.opts=i,f.inputmask.noMasksCache=h.noMasksCache,f.inputmask.userOptions=a.extend(!0,{},h.userOptions),f.inputmask.el=f,f.inputmask.maskset=j,a.data(f,"_inputmask_opts",i),e.call(f.inputmask,{action:"mask"}))}),f&&f[0]?f[0].inputmask||this:this},option:function(b,c){return"string"==typeof b?this.opts[b]:"object"==typeof b?(a.extend(this.userOptions,b),this.el&&c!==!0&&this.mask(this.el),this):void 0},unmaskedvalue:function(a){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"unmaskedvalue",value:a})},remove:function(){return e.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"getmetadata"})},isValid:function(a){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"isValid",value:a})},format:function(a,b){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"format",value:a,metadata:b})},analyseMask:function(b,c){function d(a,b,c,d){this.matches=[],this.openGroup=a||!1,this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(b,d,e){var f=c.definitions[d];e=void 0!==e?e:b.matches.length;var g=b.matches[e-1];if(f&&!q){f.placeholder=a.isFunction(f.placeholder)?f.placeholder(c):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,m=k.cardinality;b.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:m?m:1,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,nativeDef:d}),g=b.matches[e-1]}b.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,nativeDef:d})}else b.matches.splice(e++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==d,casing:null,def:c.staticDefinitionSymbol||d,placeholder:void 0!==c.staticDefinitionSymbol?d:void 0,nativeDef:d}),q=!1}function f(b){b&&b.matches&&a.each(b.matches,function(a,d){var g=b.matches[a+1];(void 0===g||void 0===g.matches||g.isQuantifier===!1)&&d&&d.isGroup&&(d.isGroup=!1,e(d,c.groupmarker.start,0),d.openGroup!==!0&&e(d,c.groupmarker.end)),f(d)})}function g(){if(s.length>0){if(l=s[s.length-1],e(l,j),l.isAlternator){m=s.pop();for(var a=0;a<m.matches.length;a++)m.matches[a].isGroup=!1;s.length>0?(l=s[s.length-1],l.matches.push(m)):r.matches.push(m)}}else e(r,j)}function h(a){function b(a){return a===c.optionalmarker.start?a=c.optionalmarker.end:a===c.optionalmarker.end?a=c.optionalmarker.start:a===c.groupmarker.start?a=c.groupmarker.end:a===c.groupmarker.end&&(a=c.groupmarker.start),a}a.matches=a.matches.reverse();for(var d in a.matches){var e=parseInt(d);if(a.matches[d].isQuantifier&&a.matches[e+1]&&a.matches[e+1].isGroup){var f=a.matches[d];a.matches.splice(d,1),a.matches.splice(e+1,0,f)}void 0!==a.matches[d].matches?a.matches[d]=h(a.matches[d]):a.matches[d]=b(a.matches[d])}return a}for(var i,j,k,l,m,n,o,p=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,q=!1,r=new d,s=[],t=[];i=p.exec(b);)if(j=i[0],q)g();else switch(j.charAt(0)){case c.escapeChar:q=!0;break;case c.optionalmarker.end:case c.groupmarker.end:if(k=s.pop(),k.openGroup=!1,void 0!==k)if(s.length>0){if(l=s[s.length-1],l.matches.push(k),l.isAlternator){m=s.pop();for(var u=0;u<m.matches.length;u++)m.matches[u].isGroup=!1;s.length>0?(l=s[s.length-1],l.matches.push(m)):r.matches.push(m)}}else r.matches.push(k);else g();break;case c.optionalmarker.start:s.push(new d((!1),(!0)));break;case c.groupmarker.start:s.push(new d((!0)));break;case c.quantifiermarker.start:var v=new d((!1),(!1),(!0));j=j.replace(/[{}]/g,"");var w=j.split(","),x=isNaN(w[0])?w[0]:parseInt(w[0]),y=1===w.length?x:isNaN(w[1])?w[1]:parseInt(w[1]);if("*"!==y&&"+"!==y||(x="*"===y?0:1),v.quantifier={min:x,max:y},s.length>0){var z=s[s.length-1].matches;i=z.pop(),i.isGroup||(o=new d((!0)),o.matches.push(i),i=o),z.push(i),z.push(v)}else i=r.matches.pop(),i.isGroup||(o=new d((!0)),o.matches.push(i),i=o),r.matches.push(i),r.matches.push(v);break;case c.alternatormarker:s.length>0?(l=s[s.length-1],n=l.matches.pop()):n=r.matches.pop(),n.isAlternator?s.push(n):(m=new d((!1),(!1),(!1),(!0)),m.matches.push(n),s.push(m));break;default:g()}for(;s.length>0;)k=s.pop(),r.matches.push(k);return r.matches.length>0&&(f(r),t.push(r)),c.numericInput&&h(t[0]),t}},b.extendDefaults=function(c){a.extend(!0,b.prototype.defaults,c)},b.extendDefinitions=function(c){a.extend(!0,b.prototype.defaults.definitions,c)},b.extendAliases=function(c){a.extend(!0,b.prototype.defaults.aliases,c)},b.format=function(a,c,d){return b(c).format(a,d)},b.unmask=function(a,c){return b(c).unmaskedvalue(a)},b.isValid=function(a,c){return b(c).isValid(a)},b.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},b.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},b.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},window.Inputmask=b,b}(jQuery),function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return!(!f||!f.inputmask)&&f.inputmask.hasMaskedValue();case"isComplete":return!f||!f.inputmask||f.inputmask.isComplete();case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0===f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(d)});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==typeof c)return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(c):void e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask}(jQuery,Inputmask),function(a,b){}(jQuery,Inputmask),function(a,b){function c(a){return isNaN(a)||29===new Date(a,2,0).getDate()}return b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return!isNaN(d)&&(b<=d&&d<=c)||!isNaN(e)&&(b<=e&&e<=c)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(b<d){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);b<e+c;)e--;var g=e+f;return a>g?a:g}if(a<=d&&d<=b){for(var h=d.toString().slice(0,2);b<h+c;)h--;var i=h+c;return i<a?a:i}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.trigger("setvalue")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},postValidation:function(a,b,d){var e,f,g=a.join("");return 0===d.mask.indexOf("y")?(f=g.substr(0,4),e=g.substr(4,11)):(f=g.substr(6,11),e=g.substr(0,6)),b&&(e!==d.leapday||c(f))},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&"-./".indexOf(a.charAt(1))===-1||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);f.indexOf(e.placeholder[0])!==-1&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);return d||g||a.charAt(1)!==e.separator&&"-./".indexOf(a.charAt(1))===-1||!(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0)))?g:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);f.indexOf(e.placeholder[0])!==-1&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||"-.:".indexOf(a.charAt(1))!==-1)&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,g<10?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}},onUnMask:function(a,b,c){return a},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(a,b,c){return a},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({numeric:{mask:function(a){function c(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b.charAt(d)]||a.optionalmarker.start===b.charAt(d)||a.optionalmarker.end===b.charAt(d)||a.quantifiermarker.start===b.charAt(d)||a.quantifiermarker.end===b.charAt(d)||a.groupmarker.start===b.charAt(d)||a.groupmarker.end===b.charAt(d)||a.alternatormarker===b.charAt(d)?"\\"+b.charAt(d):b.charAt(d);return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var d=Math.floor(a.integerDigits/a.groupSize),e=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0===e?d-1:d),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),"radixFocus"===a.positionCaretOnClick&&""===a.placeholder&&a.integerOptional===!1&&(a.positionCaretOnClick="lvp"),a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",a.numericInput===!0&&(a.positionCaretOnClick="radixFocus"===a.positionCaretOnClick?"lvp":a.positionCaretOnClick,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var f="[+]";if(f+=c(a.prefix),f+=a.integerOptional===!0?"~{1,"+a.integerDigits+"}":"~{"+a.integerDigits+"}",void 0!==a.digits){a.decimalProtect&&(a.radixPointDefinitionSymbol=":");var g=a.digits.toString().split(",");isFinite(g[0]&&g[1]&&isFinite(g[1]))?f+=(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}":(isNaN(a.digits)||parseInt(a.digits)>0)&&(f+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{1,"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}")}return f+=c(a.suffix),f+="[-]",a.greedy=!1,null!==a.min&&(a.min=a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.min=a.min.replace(a.radixPoint,"."))),null!==a.max&&(a.max=a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.max=a.max.replace(a.radixPoint,"."))),f},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",postFormat:function(c,d,e){e.numericInput===!0&&(c=c.reverse(),isFinite(d)&&(d=c.join("").length-d-1));var f,g;d=d>=c.length?c.length-1:d<0?0:d;var h=c[d],i=c.slice();h===e.groupSeparator&&(i.splice(d--,1),h=i[d]);var j=i.join("").match(new RegExp("^"+b.escapeRegex(e.negationSymbol.front)));j=null!==j&&1===j.length,d>(j?e.negationSymbol.front.length:0)+e.prefix.length&&d<i.length-e.suffix.length&&(i[d]="!");var k=i.join(""),l=i.join();if(j&&(k=k.replace(new RegExp("^"+b.escapeRegex(e.negationSymbol.front)),""),k=k.replace(new RegExp(b.escapeRegex(e.negationSymbol.back)+"$"),"")),k=k.replace(new RegExp(b.escapeRegex(e.suffix)+"$"),""),k=k.replace(new RegExp("^"+b.escapeRegex(e.prefix)),""),k.length>0&&e.autoGroup||k.indexOf(e.groupSeparator)!==-1){var m=b.escapeRegex(e.groupSeparator);k=k.replace(new RegExp(m,"g"),"");var n=k.split(h===e.radixPoint?"!":e.radixPoint);if(k=""===e.radixPoint?k:n[0],h!==e.negationSymbol.front&&(k=k.replace("!","?")),k.length>e.groupSize)for(var o=new RegExp("([-+]?[\\d?]+)([\\d?]{"+e.groupSize+"})");o.test(k)&&""!==e.groupSeparator;)k=k.replace(o,"$1"+e.groupSeparator+"$2"),k=k.replace(e.groupSeparator+e.groupSeparator,e.groupSeparator);k=k.replace("?","!"),""!==e.radixPoint&&n.length>1&&(k+=(h===e.radixPoint?"!":e.radixPoint)+n[1])}k=e.prefix+k+e.suffix,j&&(k=e.negationSymbol.front+k+e.negationSymbol.back);var p=l!==k.split("").join(),q=a.inArray("!",k);if(q===-1&&(q=d),p){for(c.length=k.length,f=0,g=k.length;f<g;f++)c[f]=k.charAt(f);c[q]=h}return q=e.numericInput&&isFinite(d)?c.join("").length-q-1:q,e.numericInput&&(c=c.reverse(),a.inArray(e.radixPoint,c)<q&&c.join("").length-e.suffix.length!==q&&(q-=1)),{pos:q,refreshFromBuffer:p,buffer:c,isNegative:j}},onBeforeWrite:function(c,d,e,f){var g;if(c&&("blur"===c.type||"checkval"===c.type||"keydown"===c.type)){var h=f.numericInput?d.slice().reverse().join(""):d.join(""),i=h.replace(f.prefix,"");i=i.replace(f.suffix,""),i=i.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(i=i.replace(f.radixPoint,"."));
var j=i.match(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"));if(j=null!==j&&1===j.length,i=i.replace(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"),""),i=i.replace(new RegExp(b.escapeRegex(f.negationSymbol.back)+"$"),""),isNaN(f.placeholder)&&(i=i.replace(new RegExp(b.escapeRegex(f.placeholder),"g"),"")),i=i===f.negationSymbol.front?i+"0":i,""!==i&&isFinite(i)){var k=parseFloat(i),l=j?k*-1:k;if(null!==f.min&&isFinite(f.min)&&l<parseFloat(f.min)?(k=Math.abs(f.min),j=f.min<0,h=void 0):null!==f.max&&isFinite(f.max)&&l>parseFloat(f.max)&&(k=Math.abs(f.max),j=f.max<0,h=void 0),i=k.toString().replace(".",f.radixPoint).split(""),isFinite(f.digits)){var m=a.inArray(f.radixPoint,i),n=a.inArray(f.radixPoint,h);m===-1&&(i.push(f.radixPoint),m=i.length-1);for(var o=1;o<=f.digits;o++)f.digitsOptional||void 0!==i[m+o]&&i[m+o]!==f.placeholder.charAt(0)?n!==-1&&void 0!==h[n+o]&&(i[m+o]=i[m+o]||h[n+o]):i[m+o]="0";i[i.length-1]===f.radixPoint&&delete i[i.length-1]}if(k.toString()!==i&&k.toString()+"."!==i||j)return i=(f.prefix+i.join("")).split(""),!j||0===k&&"blur"===c.type||(i.unshift(f.negationSymbol.front),i.push(f.negationSymbol.back)),f.numericInput&&(i=i.reverse()),g=f.postFormat(i,f.numericInput?e:e-1,f),g.buffer&&(g.refreshFromBuffer=g.buffer.join("")!==d.join("")),g}}if(f.autoGroup)return g=f.postFormat(d,f.numericInput?e:e-1,f),g.caret=e<(g.isNegative?f.negationSymbol.front.length:0)+f.prefix.length||e>g.buffer.length-(g.isNegative?f.negationSymbol.back.length:0)?g.pos:g.pos+1,g},regex:{integerPart:function(a){return new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+b.escapeRegex(a.placeholder.charAt(0))+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]===("-"===a?"+":e.negationSymbol.front)?"-"===a?""!==e.negationSymbol.back?{pos:0,c:e.negationSymbol.front,remove:0,caret:c,insert:{pos:b.buffer.length-1,c:e.negationSymbol.back}}:{pos:0,c:e.negationSymbol.front,remove:0,caret:c}:""!==e.negationSymbol.back?{pos:0,c:"+",remove:[0,b.buffer.length-1],caret:c}:{pos:0,c:"+",remove:0,caret:c}:b.buffer[0]===("-"===a?e.negationSymbol.front:"+")?"-"===a&&""!==e.negationSymbol.back?{remove:[0,b.buffer.length-1],caret:c-1}:{remove:0,caret:c-1}:"-"===a?""!==e.negationSymbol.back?{pos:0,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:0,c:e.negationSymbol.front,caret:c+1}:{pos:0,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&f.numericInput!==!0&&b===f.radixPoint&&void 0!==f.digits&&(isNaN(f.digits)||parseInt(f.digits)>0)){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));if(g!==-1&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"===h[0]&&h.index+1!==d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1,c:f.radixPoint}}return!1},leadingZeroHandler:function(b,c,d,e,f,g){if(!e){var h=c.buffer.slice("");if(h.splice(0,f.prefix.length),h.splice(h.length-f.suffix.length,f.suffix.length),f.numericInput===!0){var h=h.reverse(),i=h[0];if("0"===i&&void 0===c.validPositions[d-1])return{pos:d,remove:h.length-1}}else{d-=f.prefix.length;var j=a.inArray(f.radixPoint,h),k=h.slice(0,j!==-1?j:void 0).join("").match(f.regex.integerNPart(f));if(k&&(j===-1||d<=j)){var l=j===-1?0:parseInt(h.slice(j+1).join(""));if(0===k[0].indexOf(""!==f.placeholder?f.placeholder.charAt(0):"0")&&(k.index+1===d||g!==!0&&0===l))return c.buffer.splice(k.index+f.prefix.length,1),{pos:k.index+f.prefix.length,remove:k.index+f.prefix.length};if("0"===b&&d<=k.index&&k[0]!==f.groupSeparator)return!1}}}return!0},definitions:{"~":{validator:function(c,d,e,f,g,h){var i=g.signHandler(c,d,e,f,g);if(!i&&(i=g.radixHandler(c,d,e,f,g),!i&&(i=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(c):new RegExp("[0-9]").test(c),i===!0&&(i=g.leadingZeroHandler(c,d,e,f,g,h),i===!0)))){var j=a.inArray(g.radixPoint,d.buffer);i=j!==-1&&(g.digitsOptional===!1||d.validPositions[e])&&g.numericInput!==!0&&e>j&&!f?{pos:e,remove:e}:{pos:e}}return i},cardinality:1},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"===a||e.allowPlus&&"+"===a)&&(f=!(!d&&"-"===a)||(""!==e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1})),f},cardinality:1,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,placeholder:""},":":{validator:function(a,c,d,e,f){var g=f.signHandler(a,c,d,e,f);if(!g){var h="["+b.escapeRegex(f.radixPoint)+"]";g=new RegExp(h).test(a),g&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(g={caret:d+1})}return g},cardinality:1,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){if(""===c&&d.nullable===!0)return c;var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),d.unmaskAsNumber?(""!==d.radixPoint&&e.indexOf(d.radixPoint)!==-1&&(e=e.replace(b.escapeRegex.call(this,d.radixPoint),".")),Number(e)):e},isComplete:function(a,c){var d=a.join(""),e=a.slice();if(c.postFormat(e,0,c),e.join("")!==d)return!1;var f=d.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(b.escapeRegex(c.radixPoint),".")),isFinite(f)},onBeforeMask:function(a,c){if(c.numericInput===!0&&(a=a.split("").reverse().join("")),""!==c.radixPoint&&isFinite(a)){var d=a.split("."),e=""!==c.groupSeparator?parseInt(c.groupSize):0;2===d.length&&(d[0].length>e||d[1].length>e)&&(a=a.toString().replace(".",c.radixPoint))}var f=a.match(/,/g),g=a.match(/\./g);if(g&&f?g.length>f.length?(a=a.replace(/\./g,""),a=a.replace(",",c.radixPoint)):f.length>g.length?(a=a.replace(/,/g,""),a=a.replace(".",c.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),0===c.digits&&(a.indexOf(".")!==-1?a=a.substring(0,a.indexOf(".")):a.indexOf(",")!==-1&&(a=a.substring(0,a.indexOf(",")))),""!==c.radixPoint&&isFinite(c.digits)&&a.indexOf(c.radixPoint)!==-1){var h=a.split(c.radixPoint),i=h[1].match(new RegExp("\\d*"))[0];if(parseInt(c.digits)<i.toString().length){var j=Math.pow(10,parseInt(c.digits));a=a.replace(b.escapeRegex(c.radixPoint),"."),a=Math.round(parseFloat(a)*j)/j,a=a.toString().replace(".",c.radixPoint)}}return c.numericInput===!0&&(a=a.split("").reverse().join("")),a.toString()},canClearPosition:function(a,b,c,d,e){var f=a.validPositions[b].input,g=f!==e.radixPoint||null!==a.validPositions[b].match.fn&&e.decimalProtect===!1||isFinite(f)||b===c||f===e.groupSeparator||f===e.negationSymbol.front||f===e.negationSymbol.back;return g},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.trigger("setvalue");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),b}(jQuery,Inputmask),function(a,b){function c(a,b){var c=(a.mask||a).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),d=(b.mask||b).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),e=(a.mask||a).split("#")[0],f=(b.mask||b).split("#")[0];return 0===f.indexOf(e)?-1:0===e.indexOf(f)?1:c.localeCompare(d)}var d=b.prototype.analyseMask;return b.prototype.analyseMask=function(b,c){function e(a,c,d){c=c||"",d=d||g,""!==c&&(d[c]={});for(var f="",h=d[c]||d,i=a.length-1;i>=0;i--)b=a[i].mask||a[i],f=b.substr(0,1),h[f]=h[f]||[],h[f].unshift(b.substr(1)),a.splice(i,1);for(var j in h)h[j].length>500&&e(h[j].slice(),j,h)}function f(b){var d="",e=[];for(var g in b)a.isArray(b[g])?1===b[g].length?e.push(g+b[g]):e.push(g+c.groupmarker.start+b[g].join(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)+c.groupmarker.end):e.push(g+f(b[g]));return d+=1===e.length?e[0]:c.groupmarker.start+e.join(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)+c.groupmarker.end}var g={};c.phoneCodes&&c.phoneCodes.length>1e3&&(b=b.substr(1,b.length-2),e(b.split(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)),b=f(g));var h=d.call(this,b,c);return h},b.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(a){return a.definitions={"#":a.definitions[9]},a.phoneCodes.sort(c)},keepStatic:!0,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||c.indexOf(b.countrycode)===-1)&&(c="+"+b.countrycode+c),c},onUnMask:function(a,b,c){return b},inputmode:"tel"}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g((!0)));break;case")":k=d.pop(),d.length>0?d[d.length-1].matches.push(k):c.matches.push(k);break;case"{":case"+":case"*":var e=new g((!1),(!0));b=b.replace(/[{}]/g,"");var h=b.split(","),i=isNaN(h[0])?h[0]:parseInt(h[0]),j=1===h.length?i:isNaN(h[1])?h[1]:parseInt(h[1]);if(e.quantifier={min:i,max:j},d.length>0){var l=d[d.length-1].matches;a=l.pop(),a.isGroup||(k=new g((!0)),k.matches.push(a),a=k),l.push(a),l.push(e)}else a=c.matches.pop(),a.isGroup||(k=new g((!0)),k.matches.push(a),a=k),c.matches.push(a),c.matches.push(e);break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(m+="(",o++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(f.isGroup===!0)d=i(f,!0);else if(f.isQuantifier===!0){var g=a.inArray(f,b.matches),h=b.matches[g-1],k=m;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!==m&&f.repeaterPart.length>m.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=m),m=k+f.quantifier.max}else{for(var l=0,n=f.quantifier.max-1;l<n&&!(d=i(h,!0));l++);m=k+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!==f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=m,q+=f;for(var r=0;r<o;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(j)}else for(var t=0,u=f.length;t<u;t++)if("\\"!==f.charAt(t)){q=m,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;r<o;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(j))break}m+=f}if(d)break}return c&&(m+=")",o--),d}var j,k,l=c.buffer.slice(),m="",n=!1,o=0;null===f.regexTokens&&h(),l.splice(d,0,b),j=l.join("");for(var p=0;p<f.regexTokens.length;p++){var q=f.regexTokens[p];if(n=i(q,q.isGroup))break}return n},cardinality:1}}}}),b}(jQuery,Inputmask);
/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Belgian Phone extension.
 */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["inputmask"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("./inputmask"));
	} else {
		factory(window.Inputmask);
	}
}
(function (Inputmask) {
	Inputmask.extendAliases({
		"phone": {
			alias: "abstractphone",
			phoneCodes: [
				{ "mask": "+247-####", "cc": "AC", "cd": "Ascension", "desc_en": "", "name_ru": "Остров Вознесения", "desc_ru": "" },
				{ "mask": "+376-###-###", "cc": "AD", "cd": "Andorra", "desc_en": "", "name_ru": "Андорра", "desc_ru": "" },
				{ "mask": "+971-5#-###-####", "cc": "AE", "cd": "United Arab Emirates", "desc_en": "mobile", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "мобильные" },
				{ "mask": "+971-#-###-####", "cc": "AE", "cd": "United Arab Emirates", "desc_en": "", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "" },
				{ "mask": "+93-##-###-####", "cc": "AF", "cd": "Afghanistan", "desc_en": "", "name_ru": "Афганистан", "desc_ru": "" },
				{ "mask": "+1(268)###-####", "cc": "AG", "cd": "Antigua & Barbuda", "desc_en": "", "name_ru": "Антигуа и Барбуда", "desc_ru": "" },
				{ "mask": "+1(264)###-####", "cc": "AI", "cd": "Anguilla", "desc_en": "", "name_ru": "Ангилья", "desc_ru": "" },
				{ "mask": "+355(###)###-###", "cc": "AL", "cd": "Albania", "desc_en": "", "name_ru": "Албания", "desc_ru": "" },
				{ "mask": "+374-##-###-###", "cc": "AM", "cd": "Armenia", "desc_en": "", "name_ru": "Армения", "desc_ru": "" },
				{ "mask": "+599-###-####", "cc": "AN", "cd": "Caribbean Netherlands", "desc_en": "", "name_ru": "Карибские Нидерланды", "desc_ru": "" },
				{ "mask": "+599-###-####", "cc": "AN", "cd": "Netherlands Antilles", "desc_en": "", "name_ru": "Нидерландские Антильские острова", "desc_ru": "" },
				{ "mask": "+599-9###-####", "cc": "AN", "cd": "Netherlands Antilles", "desc_en": "Curacao", "name_ru": "Нидерландские Антильские острова", "desc_ru": "Кюрасао" },
				{ "mask": "+244(###)###-###", "cc": "AO", "cd": "Angola", "desc_en": "", "name_ru": "Ангола", "desc_ru": "" },
				{ "mask": "+672-1##-###", "cc": "AQ", "cd": "Australian bases in Antarctica", "desc_en": "", "name_ru": "Австралийская антарктическая база", "desc_ru": "" },
				{ "mask": "+54(###)###-####", "cc": "AR", "cd": "Argentina", "desc_en": "", "name_ru": "Аргентина", "desc_ru": "" },
				{ "mask": "+1(684)###-####", "cc": "AS", "cd": "American Samoa", "desc_en": "", "name_ru": "Американское Самоа", "desc_ru": "" },
				{ "mask": "+43(###)###-####", "cc": "AT", "cd": "Austria", "desc_en": "", "name_ru": "Австрия", "desc_ru": "" },
				{ "mask": "+61-#-####-####", "cc": "AU", "cd": "Australia", "desc_en": "", "name_ru": "Австралия", "desc_ru": "" },
				{ "mask": "+297-###-####", "cc": "AW", "cd": "Aruba", "desc_en": "", "name_ru": "Аруба", "desc_ru": "" },
				{ "mask": "+994-##-###-##-##", "cc": "AZ", "cd": "Azerbaijan", "desc_en": "", "name_ru": "Азербайджан", "desc_ru": "" },
				{ "mask": "+387-##-#####", "cc": "BA", "cd": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
				{ "mask": "+387-##-####", "cc": "BA", "cd": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
				{ "mask": "+1(246)###-####", "cc": "BB", "cd": "Barbados", "desc_en": "", "name_ru": "Барбадос", "desc_ru": "" },
				{ "mask": "+880-##-###-###", "cc": "BD", "cd": "Bangladesh", "desc_en": "", "name_ru": "Бангладеш", "desc_ru": "" },
				{ "mask": "+32(###)###-###", "cc": "BE", "cd": "Belgium", "desc_en": "", "name_ru": "Бельгия", "desc_ru": "" },
				{ "mask": "+226-##-##-####", "cc": "BF", "cd": "Burkina Faso", "desc_en": "", "name_ru": "Буркина Фасо", "desc_ru": "" },
				{ "mask": "+359(###)###-###", "cc": "BG", "cd": "Bulgaria", "desc_en": "", "name_ru": "Болгария", "desc_ru": "" },
				{ "mask": "+973-####-####", "cc": "BH", "cd": "Bahrain", "desc_en": "", "name_ru": "Бахрейн", "desc_ru": "" },
				{ "mask": "+257-##-##-####", "cc": "BI", "cd": "Burundi", "desc_en": "", "name_ru": "Бурунди", "desc_ru": "" },
				{ "mask": "+229-##-##-####", "cc": "BJ", "cd": "Benin", "desc_en": "", "name_ru": "Бенин", "desc_ru": "" },
				{ "mask": "+1(441)###-####", "cc": "BM", "cd": "Bermuda", "desc_en": "", "name_ru": "Бермудские острова", "desc_ru": "" },
				{ "mask": "+673-###-####", "cc": "BN", "cd": "Brunei Darussalam", "desc_en": "", "name_ru": "Бруней-Даруссалам", "desc_ru": "" },
				{ "mask": "+591-#-###-####", "cc": "BO", "cd": "Bolivia", "desc_en": "", "name_ru": "Боливия", "desc_ru": "" },
				{ "mask": "+55-##-####-####", "cc": "BR", "cd": "Brazil", "desc_en": "", "name_ru": "Бразилия", "desc_ru": "" },
				{ "mask": "+55-##-#####-####", "cc": "BR", "cd": "Brazil", "desc_en": "", "name_ru": "Бразилия", "desc_ru": "" },
				{ "mask": "+1(242)###-####", "cc": "BS", "cd": "Bahamas", "desc_en": "", "name_ru": "Багамские Острова", "desc_ru": "" },
				{ "mask": "+975-17-###-###", "cc": "BT", "cd": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
				{ "mask": "+975-#-###-###", "cc": "BT", "cd": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
				{ "mask": "+267-##-###-###", "cc": "BW", "cd": "Botswana", "desc_en": "", "name_ru": "Ботсвана", "desc_ru": "" },
				{ "mask": "+375(##)###-##-##", "cc": "BY", "cd": "Belarus", "desc_en": "", "name_ru": "Беларусь (Белоруссия)", "desc_ru": "" },
				{ "mask": "+501-###-####", "cc": "BZ", "cd": "Belize", "desc_en": "", "name_ru": "Белиз", "desc_ru": "" },
				{ "mask": "+243(###)###-###", "cc": "CD", "cd": "Dem. Rep. Congo", "desc_en": "", "name_ru": "Дем. Респ. Конго (Киншаса)", "desc_ru": "" },
				{ "mask": "+236-##-##-####", "cc": "CF", "cd": "Central African Republic", "desc_en": "", "name_ru": "Центральноафриканская Республика", "desc_ru": "" },
				{ "mask": "+242-##-###-####", "cc": "CG", "cd": "Congo (Brazzaville)", "desc_en": "", "name_ru": "Конго (Браззавиль)", "desc_ru": "" },
				{ "mask": "+41-##-###-####", "cc": "CH", "cd": "Switzerland", "desc_en": "", "name_ru": "Швейцария", "desc_ru": "" },
				{ "mask": "+225-##-###-###", "cc": "CI", "cd": "Cote d’Ivoire (Ivory Coast)", "desc_en": "", "name_ru": "Кот-д’Ивуар", "desc_ru": "" },
				{ "mask": "+682-##-###", "cc": "CK", "cd": "Cook Islands", "desc_en": "", "name_ru": "Острова Кука", "desc_ru": "" },
				{ "mask": "+56-#-####-####", "cc": "CL", "cd": "Chile", "desc_en": "", "name_ru": "Чили", "desc_ru": "" },
				{ "mask": "+237-####-####", "cc": "CM", "cd": "Cameroon", "desc_en": "", "name_ru": "Камерун", "desc_ru": "" },
				{ "mask": "+86(###)####-####", "cc": "CN", "cd": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
				{ "mask": "+86(###)####-###", "cc": "CN", "cd": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
				{ "mask": "+86-##-#####-#####", "cc": "CN", "cd": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
				{ "mask": "+57(###)###-####", "cc": "CO", "cd": "Colombia", "desc_en": "", "name_ru": "Колумбия", "desc_ru": "" },
				{ "mask": "+506-####-####", "cc": "CR", "cd": "Costa Rica", "desc_en": "", "name_ru": "Коста-Рика", "desc_ru": "" },
				{ "mask": "+53-#-###-####", "cc": "CU", "cd": "Cuba", "desc_en": "", "name_ru": "Куба", "desc_ru": "" },
				{ "mask": "+238(###)##-##", "cc": "CV", "cd": "Cape Verde", "desc_en": "", "name_ru": "Кабо-Верде", "desc_ru": "" },
				{ "mask": "+599-###-####", "cc": "CW", "cd": "Curacao", "desc_en": "", "name_ru": "Кюрасао", "desc_ru": "" },
				{ "mask": "+357-##-###-###", "cc": "CY", "cd": "Cyprus", "desc_en": "", "name_ru": "Кипр", "desc_ru": "" },
				{ "mask": "+420(###)###-###", "cc": "CZ", "cd": "Czech Republic", "desc_en": "", "name_ru": "Чехия", "desc_ru": "" },
				{ "mask": "+49(####)###-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
				{ "mask": "+49(###)###-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
				{ "mask": "+49(###)##-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
				{ "mask": "+49(###)##-###", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
				{ "mask": "+49(###)##-##", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
				{ "mask": "+49-###-###", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
				{ "mask": "+253-##-##-##-##", "cc": "DJ", "cd": "Djibouti", "desc_en": "", "name_ru": "Джибути", "desc_ru": "" },
				{ "mask": "+45-##-##-##-##", "cc": "DK", "cd": "Denmark", "desc_en": "", "name_ru": "Дания", "desc_ru": "" },
				{ "mask": "+1(767)###-####", "cc": "DM", "cd": "Dominica", "desc_en": "", "name_ru": "Доминика", "desc_ru": "" },
				{ "mask": "+1(809)###-####", "cc": "DO", "cd": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
				{ "mask": "+1(829)###-####", "cc": "DO", "cd": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
				{ "mask": "+1(849)###-####", "cc": "DO", "cd": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
				{ "mask": "+213-##-###-####", "cc": "DZ", "cd": "Algeria", "desc_en": "", "name_ru": "Алжир", "desc_ru": "" },
				{ "mask": "+593-##-###-####", "cc": "EC", "cd": "Ecuador ", "desc_en": "mobile", "name_ru": "Эквадор ", "desc_ru": "мобильные" },
				{ "mask": "+593-#-###-####", "cc": "EC", "cd": "Ecuador", "desc_en": "", "name_ru": "Эквадор", "desc_ru": "" },
				{ "mask": "+372-####-####", "cc": "EE", "cd": "Estonia ", "desc_en": "mobile", "name_ru": "Эстония ", "desc_ru": "мобильные" },
				{ "mask": "+372-###-####", "cc": "EE", "cd": "Estonia", "desc_en": "", "name_ru": "Эстония", "desc_ru": "" },
				{ "mask": "+20(###)###-####", "cc": "EG", "cd": "Egypt", "desc_en": "", "name_ru": "Египет", "desc_ru": "" },
				{ "mask": "+291-#-###-###", "cc": "ER", "cd": "Eritrea", "desc_en": "", "name_ru": "Эритрея", "desc_ru": "" },
				{ "mask": "+34(###)###-###", "cc": "ES", "cd": "Spain", "desc_en": "", "name_ru": "Испания", "desc_ru": "" },
				{ "mask": "+251-##-###-####", "cc": "ET", "cd": "Ethiopia", "desc_en": "", "name_ru": "Эфиопия", "desc_ru": "" },
				{ "mask": "+358(###)###-##-##", "cc": "FI", "cd": "Finland", "desc_en": "", "name_ru": "Финляндия", "desc_ru": "" },
				{ "mask": "+679-##-#####", "cc": "FJ", "cd": "Fiji", "desc_en": "", "name_ru": "Фиджи", "desc_ru": "" },
				{ "mask": "+500-#####", "cc": "FK", "cd": "Falkland Islands", "desc_en": "", "name_ru": "Фолклендские острова", "desc_ru": "" },
				{ "mask": "+691-###-####", "cc": "FM", "cd": "F.S. Micronesia", "desc_en": "", "name_ru": "Ф.Ш. Микронезии", "desc_ru": "" },
				{ "mask": "+298-###-###", "cc": "FO", "cd": "Faroe Islands", "desc_en": "", "name_ru": "Фарерские острова", "desc_ru": "" },
				{ "mask": "+262-#####-####", "cc": "FR", "cd": "Mayotte", "desc_en": "", "name_ru": "Майотта", "desc_ru": "" },
				{ "mask": "+33(###)###-###", "cc": "FR", "cd": "France", "desc_en": "", "name_ru": "Франция", "desc_ru": "" },
				{ "mask": "+508-##-####", "cc": "FR", "cd": "St Pierre & Miquelon", "desc_en": "", "name_ru": "Сен-Пьер и Микелон", "desc_ru": "" },
				{ "mask": "+590(###)###-###", "cc": "FR", "cd": "Guadeloupe", "desc_en": "", "name_ru": "Гваделупа", "desc_ru": "" },
				{ "mask": "+241-#-##-##-##", "cc": "GA", "cd": "Gabon", "desc_en": "", "name_ru": "Габон", "desc_ru": "" },
				{ "mask": "+1(473)###-####", "cc": "GD", "cd": "Grenada", "desc_en": "", "name_ru": "Гренада", "desc_ru": "" },
				{ "mask": "+995(###)###-###", "cc": "GE", "cd": "Rep. of Georgia", "desc_en": "", "name_ru": "Грузия", "desc_ru": "" },
				{ "mask": "+594-#####-####", "cc": "GF", "cd": "Guiana (French)", "desc_en": "", "name_ru": "Фр. Гвиана", "desc_ru": "" },
				{ "mask": "+233(###)###-###", "cc": "GH", "cd": "Ghana", "desc_en": "", "name_ru": "Гана", "desc_ru": "" },
				{ "mask": "+350-###-#####", "cc": "GI", "cd": "Gibraltar", "desc_en": "", "name_ru": "Гибралтар", "desc_ru": "" },
				{ "mask": "+299-##-##-##", "cc": "GL", "cd": "Greenland", "desc_en": "", "name_ru": "Гренландия", "desc_ru": "" },
				{ "mask": "+220(###)##-##", "cc": "GM", "cd": "Gambia", "desc_en": "", "name_ru": "Гамбия", "desc_ru": "" },
				{ "mask": "+224-##-###-###", "cc": "GN", "cd": "Guinea", "desc_en": "", "name_ru": "Гвинея", "desc_ru": "" },
				{ "mask": "+240-##-###-####", "cc": "GQ", "cd": "Equatorial Guinea", "desc_en": "", "name_ru": "Экваториальная Гвинея", "desc_ru": "" },
				{ "mask": "+30(###)###-####", "cc": "GR", "cd": "Greece", "desc_en": "", "name_ru": "Греция", "desc_ru": "" },
				{ "mask": "+502-#-###-####", "cc": "GT", "cd": "Guatemala", "desc_en": "", "name_ru": "Гватемала", "desc_ru": "" },
				{ "mask": "+1(671)###-####", "cc": "GU", "cd": "Guam", "desc_en": "", "name_ru": "Гуам", "desc_ru": "" },
				{ "mask": "+245-#-######", "cc": "GW", "cd": "Guinea-Bissau", "desc_en": "", "name_ru": "Гвинея-Бисау", "desc_ru": "" },
				{ "mask": "+592-###-####", "cc": "GY", "cd": "Guyana", "desc_en": "", "name_ru": "Гайана", "desc_ru": "" },
				{ "mask": "+852-####-####", "cc": "HK", "cd": "Hong Kong", "desc_en": "", "name_ru": "Гонконг", "desc_ru": "" },
				{ "mask": "+504-####-####", "cc": "HN", "cd": "Honduras", "desc_en": "", "name_ru": "Гондурас", "desc_ru": "" },
				{ "mask": "+385-(##)-###-###", "cc": "HR", "cd": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "" },
				{ "mask": "+385-(##)-###-####", "cc": "HR", "cd": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "" },
				{ "mask": "+385-1-####-###", "cc": "HR", "cd": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "" },
				{ "mask": "+509-##-##-####", "cc": "HT", "cd": "Haiti", "desc_en": "", "name_ru": "Гаити", "desc_ru": "" },
				{ "mask": "+36(###)###-###", "cc": "HU", "cd": "Hungary", "desc_en": "", "name_ru": "Венгрия", "desc_ru": "" },
				{ "mask": "+62(8##)###-####", "cc": "ID", "cd": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
				{ "mask": "+62-##-###-##", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
				{ "mask": "+62-##-###-###", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
				{ "mask": "+62-##-###-####", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
				{ "mask": "+62(8##)###-###", "cc": "ID", "cd": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
				{ "mask": "+62(8##)###-##-###", "cc": "ID", "cd": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
				{ "mask": "+353(###)###-###", "cc": "IE", "cd": "Ireland", "desc_en": "", "name_ru": "Ирландия", "desc_ru": "" },
				{ "mask": "+972-5#-###-####", "cc": "IL", "cd": "Israel ", "desc_en": "mobile", "name_ru": "Израиль ", "desc_ru": "мобильные" },
				{ "mask": "+972-#-###-####", "cc": "IL", "cd": "Israel", "desc_en": "", "name_ru": "Израиль", "desc_ru": "" },
				{ "mask": "+91(####)###-###", "cc": "IN", "cd": "India", "desc_en": "", "name_ru": "Индия", "desc_ru": "" },
				{ "mask": "+246-###-####", "cc": "IO", "cd": "Diego Garcia", "desc_en": "", "name_ru": "Диего-Гарсия", "desc_ru": "" },
				{ "mask": "+964(###)###-####", "cc": "IQ", "cd": "Iraq", "desc_en": "", "name_ru": "Ирак", "desc_ru": "" },
				{ "mask": "+98(###)###-####", "cc": "IR", "cd": "Iran", "desc_en": "", "name_ru": "Иран", "desc_ru": "" },
				{ "mask": "+354-###-####", "cc": "IS", "cd": "Iceland", "desc_en": "", "name_ru": "Исландия", "desc_ru": "" },
				{ "mask": "+39(###)####-###", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "" },
				{ "mask": "+1(876)###-####", "cc": "JM", "cd": "Jamaica", "desc_en": "", "name_ru": "Ямайка", "desc_ru": "" },
				{ "mask": "+962-#-####-####", "cc": "JO", "cd": "Jordan", "desc_en": "", "name_ru": "Иордания", "desc_ru": "" },
				{ "mask": "+81-##-####-####", "cc": "JP", "cd": "Japan ", "desc_en": "mobile", "name_ru": "Япония ", "desc_ru": "мобильные" },
				{ "mask": "+81(###)###-###", "cc": "JP", "cd": "Japan", "desc_en": "", "name_ru": "Япония", "desc_ru": "" },
				{ "mask": "+254-###-######", "cc": "KE", "cd": "Kenya", "desc_en": "", "name_ru": "Кения", "desc_ru": "" },
				{ "mask": "+996(###)###-###", "cc": "KG", "cd": "Kyrgyzstan", "desc_en": "", "name_ru": "Киргизия", "desc_ru": "" },
				{ "mask": "+855-##-###-###", "cc": "KH", "cd": "Cambodia", "desc_en": "", "name_ru": "Камбоджа", "desc_ru": "" },
				{ "mask": "+686-##-###", "cc": "KI", "cd": "Kiribati", "desc_en": "", "name_ru": "Кирибати", "desc_ru": "" },
				{ "mask": "+269-##-#####", "cc": "KM", "cd": "Comoros", "desc_en": "", "name_ru": "Коморы", "desc_ru": "" },
				{ "mask": "+1(869)###-####", "cc": "KN", "cd": "Saint Kitts & Nevis", "desc_en": "", "name_ru": "Сент-Китс и Невис", "desc_ru": "" },
				{ "mask": "+850-191-###-####", "cc": "KP", "cd": "DPR Korea (North) ", "desc_en": "mobile", "name_ru": "Корейская НДР ", "desc_ru": "мобильные" },
				{ "mask": "+850-##-###-###", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
				{ "mask": "+850-###-####-###", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
				{ "mask": "+850-###-###", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
				{ "mask": "+850-####-####", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
				{ "mask": "+850-####-#############", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
				{ "mask": "+82-##-###-####", "cc": "KR", "cd": "Korea (South)", "desc_en": "", "name_ru": "Респ. Корея", "desc_ru": "" },
				{ "mask": "+965-####-####", "cc": "KW", "cd": "Kuwait", "desc_en": "", "name_ru": "Кувейт", "desc_ru": "" },
				{ "mask": "+1(345)###-####", "cc": "KY", "cd": "Cayman Islands", "desc_en": "", "name_ru": "Каймановы острова", "desc_ru": "" },
				{ "mask": "+7(6##)###-##-##", "cc": "KZ", "cd": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
				{ "mask": "+7(7##)###-##-##", "cc": "KZ", "cd": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
				{ "mask": "+856(20##)###-###", "cc": "LA", "cd": "Laos ", "desc_en": "mobile", "name_ru": "Лаос ", "desc_ru": "мобильные" },
				{ "mask": "+856-##-###-###", "cc": "LA", "cd": "Laos", "desc_en": "", "name_ru": "Лаос", "desc_ru": "" },
				{ "mask": "+961-##-###-###", "cc": "LB", "cd": "Lebanon ", "desc_en": "mobile", "name_ru": "Ливан ", "desc_ru": "мобильные" },
				{ "mask": "+961-#-###-###", "cc": "LB", "cd": "Lebanon", "desc_en": "", "name_ru": "Ливан", "desc_ru": "" },
				{ "mask": "+1(758)###-####", "cc": "LC", "cd": "Saint Lucia", "desc_en": "", "name_ru": "Сент-Люсия", "desc_ru": "" },
				{ "mask": "+423(###)###-####", "cc": "LI", "cd": "Liechtenstein", "desc_en": "", "name_ru": "Лихтенштейн", "desc_ru": "" },
				{ "mask": "+94-##-###-####", "cc": "LK", "cd": "Sri Lanka", "desc_en": "", "name_ru": "Шри-Ланка", "desc_ru": "" },
				{ "mask": "+231-##-###-###", "cc": "LR", "cd": "Liberia", "desc_en": "", "name_ru": "Либерия", "desc_ru": "" },
				{ "mask": "+266-#-###-####", "cc": "LS", "cd": "Lesotho", "desc_en": "", "name_ru": "Лесото", "desc_ru": "" },
				{ "mask": "+370(###)##-###", "cc": "LT", "cd": "Lithuania", "desc_en": "", "name_ru": "Литва", "desc_ru": "" },
				{ "mask": "+352-###-###", "cc": "LU", "cd": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "" },
				{ "mask": "+352-####-###", "cc": "LU", "cd": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "" },
				{ "mask": "+352-#####-###", "cc": "LU", "cd": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "" },
				{ "mask": "+352-######-###", "cc": "LU", "cd": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "" },
				{ "mask": "+371-##-###-###", "cc": "LV", "cd": "Latvia", "desc_en": "", "name_ru": "Латвия", "desc_ru": "" },
				{ "mask": "+218-##-###-###", "cc": "LY", "cd": "Libya", "desc_en": "", "name_ru": "Ливия", "desc_ru": "" },
				{ "mask": "+218-21-###-####", "cc": "LY", "cd": "Libya", "desc_en": "Tripoli", "name_ru": "Ливия", "desc_ru": "Триполи" },
				{ "mask": "+212-##-####-###", "cc": "MA", "cd": "Morocco", "desc_en": "", "name_ru": "Марокко", "desc_ru": "" },
				{ "mask": "+377(###)###-###", "cc": "MC", "cd": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
				{ "mask": "+377-##-###-###", "cc": "MC", "cd": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
				{ "mask": "+373-####-####", "cc": "MD", "cd": "Moldova", "desc_en": "", "name_ru": "Молдова", "desc_ru": "" },
				{ "mask": "+382-##-###-###", "cc": "ME", "cd": "Montenegro", "desc_en": "", "name_ru": "Черногория", "desc_ru": "" },
				{ "mask": "+261-##-##-#####", "cc": "MG", "cd": "Madagascar", "desc_en": "", "name_ru": "Мадагаскар", "desc_ru": "" },
				{ "mask": "+692-###-####", "cc": "MH", "cd": "Marshall Islands", "desc_en": "", "name_ru": "Маршалловы Острова", "desc_ru": "" },
				{ "mask": "+389-##-###-###", "cc": "MK", "cd": "Republic of Macedonia", "desc_en": "", "name_ru": "Респ. Македония", "desc_ru": "" },
				{ "mask": "+223-##-##-####", "cc": "ML", "cd": "Mali", "desc_en": "", "name_ru": "Мали", "desc_ru": "" },
				{ "mask": "+95-##-###-###", "cc": "MM", "cd": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
				{ "mask": "+95-#-###-###", "cc": "MM", "cd": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
				{ "mask": "+95-###-###", "cc": "MM", "cd": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
				{ "mask": "+976-##-##-####", "cc": "MN", "cd": "Mongolia", "desc_en": "", "name_ru": "Монголия", "desc_ru": "" },
				{ "mask": "+853-####-####", "cc": "MO", "cd": "Macau", "desc_en": "", "name_ru": "Макао", "desc_ru": "" },
				{ "mask": "+1(670)###-####", "cc": "MP", "cd": "Northern Mariana Islands", "desc_en": "", "name_ru": "Северные Марианские острова Сайпан", "desc_ru": "" },
				{ "mask": "+596(###)##-##-##", "cc": "MQ", "cd": "Martinique", "desc_en": "", "name_ru": "Мартиника", "desc_ru": "" },
				{ "mask": "+222-##-##-####", "cc": "MR", "cd": "Mauritania", "desc_en": "", "name_ru": "Мавритания", "desc_ru": "" },
				{ "mask": "+1(664)###-####", "cc": "MS", "cd": "Montserrat", "desc_en": "", "name_ru": "Монтсеррат", "desc_ru": "" },
				{ "mask": "+356-####-####", "cc": "MT", "cd": "Malta", "desc_en": "", "name_ru": "Мальта", "desc_ru": "" },
				{ "mask": "+230-###-####", "cc": "MU", "cd": "Mauritius", "desc_en": "", "name_ru": "Маврикий", "desc_ru": "" },
				{ "mask": "+960-###-####", "cc": "MV", "cd": "Maldives", "desc_en": "", "name_ru": "Мальдивские острова", "desc_ru": "" },
				{ "mask": "+265-1-###-###", "cc": "MW", "cd": "Malawi", "desc_en": "Telecom Ltd", "name_ru": "Малави", "desc_ru": "Telecom Ltd" },
				{ "mask": "+265-#-####-####", "cc": "MW", "cd": "Malawi", "desc_en": "", "name_ru": "Малави", "desc_ru": "" },
				{ "mask": "+52(###)###-####", "cc": "MX", "cd": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
				{ "mask": "+52-##-##-####", "cc": "MX", "cd": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
				{ "mask": "+60-##-###-####", "cc": "MY", "cd": "Malaysia ", "desc_en": "mobile", "name_ru": "Малайзия ", "desc_ru": "мобильные" },
				{ "mask": "+60(###)###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
				{ "mask": "+60-##-###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
				{ "mask": "+60-#-###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
				{ "mask": "+258-##-###-###", "cc": "MZ", "cd": "Mozambique", "desc_en": "", "name_ru": "Мозамбик", "desc_ru": "" },
				{ "mask": "+264-##-###-####", "cc": "NA", "cd": "Namibia", "desc_en": "", "name_ru": "Намибия", "desc_ru": "" },
				{ "mask": "+687-##-####", "cc": "NC", "cd": "New Caledonia", "desc_en": "", "name_ru": "Новая Каледония", "desc_ru": "" },
				{ "mask": "+227-##-##-####", "cc": "NE", "cd": "Niger", "desc_en": "", "name_ru": "Нигер", "desc_ru": "" },
				{ "mask": "+672-3##-###", "cc": "NF", "cd": "Norfolk Island", "desc_en": "", "name_ru": "Норфолк (остров)", "desc_ru": "" },
				{ "mask": "+234(###)###-####", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
				{ "mask": "+234-##-###-###", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
				{ "mask": "+234-##-###-##", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
				{ "mask": "+234(###)###-####", "cc": "NG", "cd": "Nigeria ", "desc_en": "mobile", "name_ru": "Нигерия ", "desc_ru": "мобильные" },
				{ "mask": "+505-####-####", "cc": "NI", "cd": "Nicaragua", "desc_en": "", "name_ru": "Никарагуа", "desc_ru": "" },
				{ "mask": "+31-##-###-####", "cc": "NL", "cd": "Netherlands", "desc_en": "", "name_ru": "Нидерланды", "desc_ru": "" },
				{ "mask": "+47(###)##-###", "cc": "NO", "cd": "Norway", "desc_en": "", "name_ru": "Норвегия", "desc_ru": "" },
				{ "mask": "+977-##-###-###", "cc": "NP", "cd": "Nepal", "desc_en": "", "name_ru": "Непал", "desc_ru": "" },
				{ "mask": "+674-###-####", "cc": "NR", "cd": "Nauru", "desc_en": "", "name_ru": "Науру", "desc_ru": "" },
				{ "mask": "+683-####", "cc": "NU", "cd": "Niue", "desc_en": "", "name_ru": "Ниуэ", "desc_ru": "" },
				{ "mask": "+64(###)###-###", "cc": "NZ", "cd": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
				{ "mask": "+64-##-###-###", "cc": "NZ", "cd": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
				{ "mask": "+64(###)###-####", "cc": "NZ", "cd": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
				{ "mask": "+968-##-###-###", "cc": "OM", "cd": "Oman", "desc_en": "", "name_ru": "Оман", "desc_ru": "" },
				{ "mask": "+507-###-####", "cc": "PA", "cd": "Panama", "desc_en": "", "name_ru": "Панама", "desc_ru": "" },
				{ "mask": "+51(###)###-###", "cc": "PE", "cd": "Peru", "desc_en": "", "name_ru": "Перу", "desc_ru": "" },
				{ "mask": "+689-##-##-##", "cc": "PF", "cd": "French Polynesia", "desc_en": "", "name_ru": "Французская Полинезия (Таити)", "desc_ru": "" },
				{ "mask": "+675(###)##-###", "cc": "PG", "cd": "Papua New Guinea", "desc_en": "", "name_ru": "Папуа-Новая Гвинея", "desc_ru": "" },
				{ "mask": "+63(###)###-####", "cc": "PH", "cd": "Philippines", "desc_en": "", "name_ru": "Филиппины", "desc_ru": "" },
				{ "mask": "+92(###)###-####", "cc": "PK", "cd": "Pakistan", "desc_en": "", "name_ru": "Пакистан", "desc_ru": "" },
				{ "mask": "+48(###)###-###", "cc": "PL", "cd": "Poland", "desc_en": "", "name_ru": "Польша", "desc_ru": "" },
				{ "mask": "+970-##-###-####", "cc": "PS", "cd": "Palestine", "desc_en": "", "name_ru": "Палестина", "desc_ru": "" },
				{ "mask": "+351-##-###-####", "cc": "PT", "cd": "Portugal", "desc_en": "", "name_ru": "Португалия", "desc_ru": "" },
				{ "mask": "+680-###-####", "cc": "PW", "cd": "Palau", "desc_en": "", "name_ru": "Палау", "desc_ru": "" },
				{ "mask": "+595(###)###-###", "cc": "PY", "cd": "Paraguay", "desc_en": "", "name_ru": "Парагвай", "desc_ru": "" },
				{ "mask": "+974-####-####", "cc": "QA", "cd": "Qatar", "desc_en": "", "name_ru": "Катар", "desc_ru": "" },
				{ "mask": "+262-#####-####", "cc": "RE", "cd": "Reunion", "desc_en": "", "name_ru": "Реюньон", "desc_ru": "" },
				{ "mask": "+40-##-###-####", "cc": "RO", "cd": "Romania", "desc_en": "", "name_ru": "Румыния", "desc_ru": "" },
				{ "mask": "+381-##-###-####", "cc": "RS", "cd": "Serbia", "desc_en": "", "name_ru": "Сербия", "desc_ru": "" },
				{ "mask": "+7(###)###-##-##", "cc": "RU", "cd": "Russia", "desc_en": "", "name_ru": "Россия", "desc_ru": "" },
				{ "mask": "+250(###)###-###", "cc": "RW", "cd": "Rwanda", "desc_en": "", "name_ru": "Руанда", "desc_ru": "" },
				{ "mask": "+966-5-####-####", "cc": "SA", "cd": "Saudi Arabia ", "desc_en": "mobile", "name_ru": "Саудовская Аравия ", "desc_ru": "мобильные" },
				{ "mask": "+966-#-###-####", "cc": "SA", "cd": "Saudi Arabia", "desc_en": "", "name_ru": "Саудовская Аравия", "desc_ru": "" },
				{ "mask": "+677-###-####", "cc": "SB", "cd": "Solomon Islands ", "desc_en": "mobile", "name_ru": "Соломоновы Острова ", "desc_ru": "мобильные" },
				{ "mask": "+677-#####", "cc": "SB", "cd": "Solomon Islands", "desc_en": "", "name_ru": "Соломоновы Острова", "desc_ru": "" },
				{ "mask": "+248-#-###-###", "cc": "SC", "cd": "Seychelles", "desc_en": "", "name_ru": "Сейшелы", "desc_ru": "" },
				{ "mask": "+249-##-###-####", "cc": "SD", "cd": "Sudan", "desc_en": "", "name_ru": "Судан", "desc_ru": "" },
				{ "mask": "+46-##-###-####", "cc": "SE", "cd": "Sweden", "desc_en": "", "name_ru": "Швеция", "desc_ru": "" },
				{ "mask": "+65-####-####", "cc": "SG", "cd": "Singapore", "desc_en": "", "name_ru": "Сингапур", "desc_ru": "" },
				{ "mask": "+290-####", "cc": "SH", "cd": "Saint Helena", "desc_en": "", "name_ru": "Остров Святой Елены", "desc_ru": "" },
				{ "mask": "+290-####", "cc": "SH", "cd": "Tristan da Cunha", "desc_en": "", "name_ru": "Тристан-да-Кунья", "desc_ru": "" },
				{ "mask": "+386-##-###-###", "cc": "SI", "cd": "Slovenia", "desc_en": "", "name_ru": "Словения", "desc_ru": "" },
				{ "mask": "+421(###)###-###", "cc": "SK", "cd": "Slovakia", "desc_en": "", "name_ru": "Словакия", "desc_ru": "" },
				{ "mask": "+232-##-######", "cc": "SL", "cd": "Sierra Leone", "desc_en": "", "name_ru": "Сьерра-Леоне", "desc_ru": "" },
				{ "mask": "+378-####-######", "cc": "SM", "cd": "San Marino", "desc_en": "", "name_ru": "Сан-Марино", "desc_ru": "" },
				{ "mask": "+221-##-###-####", "cc": "SN", "cd": "Senegal", "desc_en": "", "name_ru": "Сенегал", "desc_ru": "" },
				{ "mask": "+252-##-###-###", "cc": "SO", "cd": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
				{ "mask": "+252-#-###-###", "cc": "SO", "cd": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
				{ "mask": "+252-#-###-###", "cc": "SO", "cd": "Somalia ", "desc_en": "mobile", "name_ru": "Сомали ", "desc_ru": "мобильные" },
				{ "mask": "+597-###-####", "cc": "SR", "cd": "Suriname ", "desc_en": "mobile", "name_ru": "Суринам ", "desc_ru": "мобильные" },
				{ "mask": "+597-###-###", "cc": "SR", "cd": "Suriname", "desc_en": "", "name_ru": "Суринам", "desc_ru": "" },
				{ "mask": "+211-##-###-####", "cc": "SS", "cd": "South Sudan", "desc_en": "", "name_ru": "Южный Судан", "desc_ru": "" },
				{ "mask": "+239-##-#####", "cc": "ST", "cd": "Sao Tome and Principe", "desc_en": "", "name_ru": "Сан-Томе и Принсипи", "desc_ru": "" },
				{ "mask": "+503-##-##-####", "cc": "SV", "cd": "El Salvador", "desc_en": "", "name_ru": "Сальвадор", "desc_ru": "" },
				{ "mask": "+1(721)###-####", "cc": "SX", "cd": "Sint Maarten", "desc_en": "", "name_ru": "Синт-Маартен", "desc_ru": "" },
				{ "mask": "+963-##-####-###", "cc": "SY", "cd": "Syrian Arab Republic", "desc_en": "", "name_ru": "Сирийская арабская республика", "desc_ru": "" },
				{ "mask": "+268-##-##-####", "cc": "SZ", "cd": "Swaziland", "desc_en": "", "name_ru": "Свазиленд", "desc_ru": "" },
				{ "mask": "+1(649)###-####", "cc": "TC", "cd": "Turks & Caicos", "desc_en": "", "name_ru": "Тёркс и Кайкос", "desc_ru": "" },
				{ "mask": "+235-##-##-##-##", "cc": "TD", "cd": "Chad", "desc_en": "", "name_ru": "Чад", "desc_ru": "" },
				{ "mask": "+228-##-###-###", "cc": "TG", "cd": "Togo", "desc_en": "", "name_ru": "Того", "desc_ru": "" },
				{ "mask": "+66-##-###-####", "cc": "TH", "cd": "Thailand ", "desc_en": "mobile", "name_ru": "Таиланд ", "desc_ru": "мобильные" },
				{ "mask": "+66-##-###-###", "cc": "TH", "cd": "Thailand", "desc_en": "", "name_ru": "Таиланд", "desc_ru": "" },
				{ "mask": "+992-##-###-####", "cc": "TJ", "cd": "Tajikistan", "desc_en": "", "name_ru": "Таджикистан", "desc_ru": "" },
				{ "mask": "+690-####", "cc": "TK", "cd": "Tokelau", "desc_en": "", "name_ru": "Токелау", "desc_ru": "" },
				{ "mask": "+670-###-####", "cc": "TL", "cd": "East Timor", "desc_en": "", "name_ru": "Восточный Тимор", "desc_ru": "" },
				{ "mask": "+670-77#-#####", "cc": "TL", "cd": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
				{ "mask": "+670-78#-#####", "cc": "TL", "cd": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
				{ "mask": "+993-#-###-####", "cc": "TM", "cd": "Turkmenistan", "desc_en": "", "name_ru": "Туркменистан", "desc_ru": "" },
				{ "mask": "+216-##-###-###", "cc": "TN", "cd": "Tunisia", "desc_en": "", "name_ru": "Тунис", "desc_ru": "" },
				{ "mask": "+676-#####", "cc": "TO", "cd": "Tonga", "desc_en": "", "name_ru": "Тонга", "desc_ru": "" },
				{ "mask": "+90(###)###-####", "cc": "TR", "cd": "Turkey", "desc_en": "", "name_ru": "Турция", "desc_ru": "" },
				{ "mask": "+1(868)###-####", "cc": "TT", "cd": "Trinidad & Tobago", "desc_en": "", "name_ru": "Тринидад и Тобаго", "desc_ru": "" },
				{ "mask": "+688-90####", "cc": "TV", "cd": "Tuvalu ", "desc_en": "mobile", "name_ru": "Тувалу ", "desc_ru": "мобильные" },
				{ "mask": "+688-2####", "cc": "TV", "cd": "Tuvalu", "desc_en": "", "name_ru": "Тувалу", "desc_ru": "" },
				{ "mask": "+886-#-####-####", "cc": "TW", "cd": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
				{ "mask": "+886-####-####", "cc": "TW", "cd": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
				{ "mask": "+255-##-###-####", "cc": "TZ", "cd": "Tanzania", "desc_en": "", "name_ru": "Танзания", "desc_ru": "" },
				{ "mask": "+380(##)###-##-##", "cc": "UA", "cd": "Ukraine", "desc_en": "", "name_ru": "Украина", "desc_ru": "" },
				{ "mask": "+256(###)###-###", "cc": "UG", "cd": "Uganda", "desc_en": "", "name_ru": "Уганда", "desc_ru": "" },
				{ "mask": "+44-##-####-####", "cc": "UK", "cd": "United Kingdom", "desc_en": "", "name_ru": "Великобритания", "desc_ru": "" },
				{ "mask": "+598-#-###-##-##", "cc": "UY", "cd": "Uruguay", "desc_en": "", "name_ru": "Уругвай", "desc_ru": "" },
				{ "mask": "+998-##-###-####", "cc": "UZ", "cd": "Uzbekistan", "desc_en": "", "name_ru": "Узбекистан", "desc_ru": "" },
				{ "mask": "+39-6-698-#####", "cc": "VA", "cd": "Vatican City", "desc_en": "", "name_ru": "Ватикан", "desc_ru": "" },
				{ "mask": "+1(784)###-####", "cc": "VC", "cd": "Saint Vincent & the Grenadines", "desc_en": "", "name_ru": "Сент-Винсент и Гренадины", "desc_ru": "" },
				{ "mask": "+58(###)###-####", "cc": "VE", "cd": "Venezuela", "desc_en": "", "name_ru": "Венесуэла", "desc_ru": "" },
				{ "mask": "+1(284)###-####", "cc": "VG", "cd": "British Virgin Islands", "desc_en": "", "name_ru": "Британские Виргинские острова", "desc_ru": "" },
				{ "mask": "+1(340)###-####", "cc": "VI", "cd": "US Virgin Islands", "desc_en": "", "name_ru": "Американские Виргинские острова", "desc_ru": "" },
				{ "mask": "+84-##-####-###", "cc": "VN", "cd": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
				{ "mask": "+84(###)####-###", "cc": "VN", "cd": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
				{ "mask": "+678-##-#####", "cc": "VU", "cd": "Vanuatu ", "desc_en": "mobile", "name_ru": "Вануату ", "desc_ru": "мобильные" },
				{ "mask": "+678-#####", "cc": "VU", "cd": "Vanuatu", "desc_en": "", "name_ru": "Вануату", "desc_ru": "" },
				{ "mask": "+681-##-####", "cc": "WF", "cd": "Wallis and Futuna", "desc_en": "", "name_ru": "Уоллис и Футуна", "desc_ru": "" },
				{ "mask": "+685-##-####", "cc": "WS", "cd": "Samoa", "desc_en": "", "name_ru": "Самоа", "desc_ru": "" },
				{ "mask": "+967-###-###-###", "cc": "YE", "cd": "Yemen ", "desc_en": "mobile", "name_ru": "Йемен ", "desc_ru": "мобильные" },
				{ "mask": "+967-#-###-###", "cc": "YE", "cd": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
				{ "mask": "+967-##-###-###", "cc": "YE", "cd": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
				{ "mask": "+27-##-###-####", "cc": "ZA", "cd": "South Africa", "desc_en": "", "name_ru": "Южно-Африканская Респ.", "desc_ru": "" },
				{ "mask": "+260-##-###-####", "cc": "ZM", "cd": "Zambia", "desc_en": "", "name_ru": "Замбия", "desc_ru": "" },
				{ "mask": "+263-#-######", "cc": "ZW", "cd": "Zimbabwe", "desc_en": "", "name_ru": "Зимбабве", "desc_ru": "" },
				{ "mask": "+1(###)###-####", "cc": ["US", "CA"], "cd": "USA and Canada", "desc_en": "", "name_ru": "США и Канада", "desc_ru": "" }
			 ]
		}
	});

    return Inputmask;
}));


// 'valid it' jquery plugin
// nickensoul@gmail.com
// MIT, 2016
// beta
// dependences: jquery, inputmask

;(function ($, window, document, undefined) {
    var pluginName = 'validit';
    function validit (element, options) {
        this.element = element;
        this._name = pluginName;
        this._defaults = $.fn.validit.defaults;
        this.options = $.extend( {}, this._defaults, options );
        this.init();
    }
    $.extend(validit.prototype, {
	    // base
        init: function () {
            this.buildCache();
            this.bindEvents();
            this.onInit();
        },
        buildCache: function () {
            this.$element = $(this.element);
            this.$inputs = this.$element.find('input, textarea').not(this.options.ignoreSelector);
			this.validState = true;
			this.serialized = [];
        },
        bindEvents: function() {
            var plugin = this;
			plugin.$inputs
				.on('input.validit', function(e){
					if (plugin.$element.attr('data-state') === 'processing') {
						plugin.check($(this));
					}
				});
			plugin.$element.on('submit.validit', function(e){
				e.preventDefault();
				plugin.submit($(this));
			});
        },
		check: function($field){
			var plugin = this;
			plugin.$element.attr('data-state', 'processing');
			plugin.validState = true;

			function checkF ($field) {
				if (!$field) return _this.error(0);

				if ($field.val() === '') {
					if ($field.attr(plugin.options.optionalAttr)) {
						var $optionalsPair = plugin.$inputs.filter('['+plugin.options.optionalAttr+'='+$field.attr(plugin.options.optionalAttr)+']'),
							pairState = false;
						$optionalsPair.each(function(){
							if ($(this).val() !== '') {
								pairState = true;
							}
						});
						if (pairState === false) {
							$optionalsPair.addClass(plugin.options.invalidClass);
							plugin.validState = false;
						} else {
							$optionalsPair.removeClass(plugin.options.invalidClass);
						}
					} else {
						plugin.validState = false;
						$field.addClass(plugin.options.invalidClass);
					}
				} else if ($field.is('[type=email]')) {
					if (plugin.options.reEmail.test($field.val())) {
						$field.removeClass(plugin.options.invalidClass);
					} else {
						plugin.validState = false;
						$field.addClass(plugin.options.invalidClass);
					}
				} else if ($field.is('[type=tel]')) {
					if ($field.inputmask('isComplete')){
						$field.removeClass(plugin.options.invalidClass);
					} else {
						plugin.validState = false;
						$field.addClass(plugin.options.invalidClass);
					}
				} else {
					$field.removeClass(plugin.options.invalidClass);
				}

				if (plugin.validState === false) {
					!$field.attr(plugin.options.optionalAttr) && $field.trigger('focus.validit');
				} else {
					plugin.$inputs.filter('['+plugin.options.optionalAttr+'='+$field.attr(plugin.options.optionalAttr)+']').removeClass(plugin.options.invalidClass);
				}
			}

			if (!$field) {
				plugin.$inputs.each(function(){
					if (plugin.validState) checkF($(this));
				});
			} else {
				checkF($field);
			}
		},
		submit: function() {
			var plugin = this;
			plugin.onSubmit();
			plugin.check();
			if (plugin.validState) {
				plugin.$element.removeAttr('data-state');
				plugin.serialized = plugin.$element.serializeArray();
				plugin.onSuccessSubmit();
			}
		},
        error: function(code) {
	        if (this.options.alerting) {
		        if (!code) {
		        	alert('ValidIt: There was an internal error.\nPlease try again later or contact this site admin.');
		        } else {
		        	alert('ValidIt: There was an internal error.\nPlease try again later or contact this site admin.\nError code: '+code);
		        }
	        }
	        if (this.options.logging) {
		        if (!code) {
		        	console.warn('ValidIt: There was an internal error.\nPlease try again later or contact this site admin.');
		        } else {
		        	console.warn('ValidIt: There was an internal error.\nPlease try again later or contact this site admin.\nError code: '+code);
		        }
	        }
        },
        refresh: function() {

        },
        reset: function() {

        },
        onInit: function() {
            var onInit = this.options.onInit;
            if (typeof onInit === 'function') {
				onInit.call(this);
            }
        },
        onCheck: function() {
            var onCheck = this.options.onCheck;
            if (typeof onCheck === 'function') {
				onCheck.call(this);
            }
        },
        onSubmit: function() {
            var onSubmit = this.options.onSubmit;
            if (typeof onSubmit === 'function') {
				onSubmit.call(this);
            }
        },
        onSuccessSubmit: function() {
            var onSuccessSubmit = this.options.onSuccessSubmit;
            if (typeof onSuccessSubmit === 'function') {
				onSuccessSubmit.call(this);
            }
        }
    });
    $.fn.validit = function (options) {
	    var arg = arguments;
		this.each(function() {
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new validit(this, options));
			}
			if (typeof options === 'string') {
				var $data = $(this).data(pluginName);
	            if (arg.length > 1) {
					$data[options].apply($data, Array.prototype.slice.call(arg, 1));
	            } else {
	                $data[options]();
	            }
	        }
		});
		return this;
    };
    $.fn.validit.defaults = {
		invalidClass:		'wrong',
		ignoreSelector:		'[data-novalidate=true]',
		optionalAttr:		'data-optional-id',
		reEmail:			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		logging:			false,
		alerting:			false,
		onInit:				null,
		onCheck:			null,
		onSubmit:			null,
		onSuccessSubmit:	null
    };
})(jQuery, window, document);

/*! flatpickr v2.2.3, @license MIT */
function Flatpickr(e,t){function n(){e._flatpickr&&M(e._flatpickr),e._flatpickr=ne,ne.element=e,ne.instanceConfig=t||{},W(),F(),N(),U(),R(),j(),ne.isOpen=ne.config.inline,ne.changeMonth=D,ne.clear=b,ne.close=y,ne.destroy=M,ne.formatDate=k,ne.jumpToDate=c,ne.open=L,ne.parseDate=S,ne.redraw=_,ne.set=P,ne.setDate=A,ne.toggle=z,ne.isMobile=!ne.config.disableMobile&&!ne.config.inline&&"single"===ne.config.mode&&!ne.config.disable.length&&!ne.config.enable.length&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),ne.isMobile||d(),l(),ne.minDateHasTime=ne.config.minDate&&(ne.config.minDate.getHours()||ne.config.minDate.getMinutes()||ne.config.minDate.getSeconds()),ne.maxDateHasTime=ne.config.maxDate&&(ne.config.maxDate.getHours()||ne.config.maxDate.getMinutes()||ne.config.maxDate.getSeconds()),ne.isMobile||Object.defineProperty(ne,"dateIsPicked",{set:function(e){return e?ne.calendarContainer.classList.add("dateIsPicked"):void ne.calendarContainer.classList.remove("dateIsPicked")}}),ne.dateIsPicked=ne.selectedDates.length>0||ne.config.noCalendar,ne.selectedDates.length&&(ne.config.enableTime&&r(),$()),ne.config.weekNumbers&&(ne.calendarContainer.style.width=ne.days.offsetWidth+ne.weekWrapper.offsetWidth+2+"px"),J("Ready")}function a(e){ne.config.noCalendar&&!ne.selectedDates.length&&(ne.selectedDates=[ne.now]),te(e),ne.selectedDates.length&&(i(),$())}function i(){if(ne.config.enableTime){var e=parseInt(ne.hourElement.value,10)||0,t=parseInt(ne.minuteElement.value,10)||0,n=ne.config.enableSeconds?parseInt(ne.secondElement.value,10)||0:0;ne.amPM&&(e=e%12+12*("PM"===ne.amPM.innerHTML)),ne.minDateHasTime&&0===ee(K(),ne.config.minDate)?(e=Math.max(e,ne.config.minDate.getHours()),e===ne.config.minDate.getHours()&&(t=Math.max(t,ne.config.minDate.getMinutes()))):ne.maxDateHasTime&&0===ee(K(),ne.config.maxDate)&&(e=Math.min(e,ne.config.maxDate.getHours()),e===ne.config.maxDate.getHours()&&(t=Math.min(t,ne.config.maxDate.getMinutes()))),o(e,t,n)}}function r(e){var t=e||K();t&&o(t.getHours(),t.getMinutes(),t.getSeconds())}function o(e,t,n){ne.selectedDates.length&&ne.selectedDates[ne.selectedDates.length-1].setHours(e%24,t,n||0,0),ne.config.enableTime&&!ne.isMobile&&(ne.hourElement.value=ne.pad(ne.config.time_24hr?e:(12+e)%12+12*(e%12===0)),ne.minuteElement.value=ne.pad(t),!ne.config.time_24hr&&ne.selectedDates.length&&(ne.amPM.textContent=K().getHours()>=12?"PM":"AM"),ne.config.enableSeconds&&(ne.secondElement.value=ne.pad(n)))}function l(){if(ne.config.wrap&&["open","close","toggle","clear"].forEach(function(e){try{ne.element.querySelector("[data-"+e+"]").addEventListener("click",ne[e])}catch(e){}}),"createEvent"in document&&(ne.changeEvent=document.createEvent("HTMLEvents"),ne.changeEvent.initEvent("change",!1,!0)),ne.isMobile)return B();ne.debouncedResize=Z(Y,50),ne.triggerChange=function(){return J("Change")},ne.debouncedChange=Z(ne.triggerChange,1e3),"range"===ne.config.mode&&ne.days.addEventListener("mouseover",I),document.addEventListener("keydown",T),window.addEventListener("resize",ne.debouncedResize);var e="undefined"!=typeof window.ontouchstart?"touchstart":"click";document.addEventListener(e,w),document.addEventListener("blur",w),ne.config.clickOpens&&(ne.altInput||ne.input).addEventListener("focus",L),ne.config.noCalendar||(ne.prevMonthNav.addEventListener("click",function(){return D(-1)}),ne.nextMonthNav.addEventListener("click",function(){return D(1)}),ne.currentYearElement.addEventListener("wheel",function(e){return Z(G(e),50)}),ne.currentYearElement.addEventListener("focus",function(){ne.currentYearElement.select()}),ne.currentYearElement.addEventListener("input",function(e){4===e.target.value.length&&(ne.currentYearElement.blur(),E(e.target.value),e.target.value=ne.currentYear)}),ne.days.addEventListener("click",O)),ne.config.enableTime&&(ne.timeContainer.addEventListener("wheel",function(e){return Z(a(e),5)}),ne.timeContainer.addEventListener("input",a),ne.timeContainer.addEventListener("wheel",ne.debouncedChange),ne.timeContainer.addEventListener("input",ne.triggerChange),ne.hourElement.addEventListener("focus",function(){ne.hourElement.select()}),ne.minuteElement.addEventListener("focus",function(){ne.minuteElement.select()}),ne.secondElement&&ne.secondElement.addEventListener("focus",function(){ne.secondElement.select()}),ne.amPM&&ne.amPM.addEventListener("click",function(e){a(e),ne.triggerChange(e)}))}function c(e){e=e?S(e):K()||(ne.config.minDate>ne.now?ne.config.minDate:ne.now);try{ne.currentYear=e.getFullYear(),ne.currentMonth=e.getMonth()}catch(t){console.error(t.stack),console.warn("Invalid date supplied: "+e)}ne.redraw()}function s(e,t){var n=e.target.parentNode.childNodes[0];n.value=parseInt(n.value,10)+t*(n.step||1);try{n.dispatchEvent(new Event("input",{bubbles:!0}))}catch(e){var a=document.createEvent("CustomEvent");a.initCustomEvent("input",!0,!0,{}),n.dispatchEvent(a)}}function u(e){var t=X("div","numInputWrapper"),n=X("input","numInput "+e),a=X("span","arrowUp"),i=X("span","arrowDown");return n.type="text",t.appendChild(n),t.appendChild(a),t.appendChild(i),a.addEventListener("click",function(e){return s(e,1)}),i.addEventListener("click",function(e){return s(e,-1)}),t}function d(){var e=document.createDocumentFragment();ne.calendarContainer=X("div","flatpickr-calendar"),ne.numInputType=navigator.userAgent.indexOf("MSIE 9.0")>0?"text":"number",ne.config.noCalendar||(e.appendChild(p()),ne.innerContainer=X("div","flatpickr-innerContainer"),ne.config.weekNumbers&&ne.innerContainer.appendChild(v()),ne.rContainer=X("div","flatpickr-rContainer"),ne.rContainer.appendChild(h()),ne.rContainer.appendChild(m()),ne.innerContainer.appendChild(ne.rContainer),e.appendChild(ne.innerContainer)),ne.config.enableTime&&e.appendChild(g()),ne.calendarContainer.appendChild(e),ne.config.inline||ne.config.static?(ne.calendarContainer.classList.add(ne.config.inline?"inline":"static"),H(),ne.config.appendTo&&ne.config.appendTo.nodeType?ne.config.appendTo.appendChild(ne.calendarContainer):ne.element.parentNode.insertBefore(ne.calendarContainer,(ne.altInput||ne.input).nextSibling)):document.body.appendChild(ne.calendarContainer)}function f(e,t,n){var a=x(t),i=X("span","flatpickr-day "+e,t.getDate());return i.dateObj=t,0===ee(t,ne.now)&&i.classList.add("today"),a?(i.tabIndex=0,q(t)&&(i.classList.add("selected"),"range"===ne.config.mode?i.classList.add(0===ee(t,ne.selectedDates[0])?"startRange":"endRange"):ne.selectedDateElem=i)):(i.classList.add("disabled"),ne.selectedDates[0]&&t>ne.minRangeDate&&t<ne.selectedDates[0]?ne.minRangeDate=t:ne.selectedDates[0]&&t<ne.maxRangeDate&&t>ne.selectedDates[0]&&(ne.maxRangeDate=t)),"range"===ne.config.mode&&(V(t)&&!q(t)&&i.classList.add("inRange"),1===ne.selectedDates.length&&(t<ne.minRangeDate||t>ne.maxRangeDate)&&i.classList.add("notAllowed")),ne.config.weekNumbers&&"prevMonthDay"!==e&&n%7===1&&ne.weekNumbers.insertAdjacentHTML("beforeend","<span class='disabled flatpickr-day'>"+ne.config.getWeek(t)+"</span>"),J("DayCreate",i),i}function m(){ne.days||(ne.days=X("div","flatpickr-days"),ne.days.tabIndex=-1),ne.firstOfMonth=(new Date(ne.currentYear,ne.currentMonth,1).getDay()-ne.l10n.firstDayOfWeek+7)%7,ne.prevMonthDays=ne.utils.getDaysinMonth((ne.currentMonth-1+12)%12);var e=ne.utils.getDaysinMonth(),t=document.createDocumentFragment(),n=ne.prevMonthDays+1-ne.firstOfMonth;ne.config.weekNumbers&&(ne.weekNumbers.innerHTML=""),"range"===ne.config.mode&&(ne.minRangeDate=new Date(ne.currentYear,ne.currentMonth-1,n),ne.maxRangeDate=new Date(ne.currentYear,ne.currentMonth+1,(42-ne.firstOfMonth)%e)),ne.days.innerHTML="";for(var a=0;n<=ne.prevMonthDays;a++,n++)t.appendChild(f("prevMonthDay",new Date(ne.currentYear,ne.currentMonth-1,n),n));for(n=1;n<=e;n++)t.appendChild(f("",new Date(ne.currentYear,ne.currentMonth,n),n));for(var i=e+1;i<=42-ne.firstOfMonth;i++)t.appendChild(f("nextMonthDay",new Date(ne.currentYear,ne.currentMonth+1,i%e),i));return ne.days.appendChild(t),ne.days}function p(){var e=document.createDocumentFragment();ne.monthNav=X("div","flatpickr-month"),ne.prevMonthNav=X("span","flatpickr-prev-month"),ne.prevMonthNav.innerHTML=ne.config.prevArrow,ne.currentMonthElement=X("span","cur-month");var t=u("cur-year");return ne.currentYearElement=t.childNodes[0],ne.currentYearElement.title=ne.l10n.scrollTitle,ne.config.minDate&&(ne.currentYearElement.min=ne.config.minDate.getFullYear()),ne.config.maxDate&&(ne.currentYearElement.max=ne.config.maxDate.getFullYear(),ne.currentYearElement.disabled=ne.config.minDate&&ne.config.minDate.getFullYear()===ne.config.maxDate.getFullYear()),ne.nextMonthNav=X("span","flatpickr-next-month"),ne.nextMonthNav.innerHTML=ne.config.nextArrow,ne.navigationCurrentMonth=X("span","flatpickr-current-month"),ne.navigationCurrentMonth.appendChild(ne.currentMonthElement),ne.navigationCurrentMonth.appendChild(t),e.appendChild(ne.prevMonthNav),e.appendChild(ne.navigationCurrentMonth),e.appendChild(ne.nextMonthNav),ne.monthNav.appendChild(e),Q(),ne.monthNav}function g(){ne.calendarContainer.classList.add("hasTime"),ne.timeContainer=X("div","flatpickr-time"),ne.timeContainer.tabIndex=-1;var e=X("span","flatpickr-time-separator",":"),t=u("flatpickr-hour");ne.hourElement=t.childNodes[0];var n=u("flatpickr-minute");if(ne.minuteElement=n.childNodes[0],ne.hourElement.tabIndex=ne.minuteElement.tabIndex=0,ne.hourElement.pattern=ne.minuteElement.pattern="d*",ne.hourElement.value=ne.pad(K()?K().getHours():ne.config.defaultHour),ne.minuteElement.value=ne.pad(K()?K().getMinutes():ne.config.defaultMinute),ne.hourElement.step=ne.config.hourIncrement,ne.minuteElement.step=ne.config.minuteIncrement,ne.hourElement.min=ne.config.time_24hr?0:1,ne.hourElement.max=ne.config.time_24hr?23:12,ne.minuteElement.min=0,ne.minuteElement.max=59,ne.hourElement.title=ne.minuteElement.title=ne.l10n.scrollTitle,ne.timeContainer.appendChild(t),ne.timeContainer.appendChild(e),ne.timeContainer.appendChild(n),ne.config.time_24hr&&ne.timeContainer.classList.add("time24hr"),ne.config.enableSeconds){ne.timeContainer.classList.add("hasSeconds");var a=u("flatpickr-second");ne.secondElement=a.childNodes[0],ne.secondElement.pattern=ne.hourElement.pattern,ne.secondElement.value=K()?ne.pad(K().getSeconds()):"00",ne.secondElement.step=ne.minuteElement.step,ne.secondElement.min=ne.minuteElement.min,ne.secondElement.max=ne.minuteElement.max,ne.timeContainer.appendChild(X("span","flatpickr-time-separator",":")),ne.timeContainer.appendChild(a)}return ne.config.time_24hr||(ne.amPM=X("span","flatpickr-am-pm",["AM","PM"][ne.hourElement.value>11|0]),ne.amPM.title=ne.l10n.toggleTitle,ne.amPM.tabIndex=0,ne.timeContainer.appendChild(ne.amPM)),ne.timeContainer}function h(){ne.weekdayContainer||(ne.weekdayContainer=X("div","flatpickr-weekdays"));var e=ne.l10n.firstDayOfWeek,t=ne.l10n.weekdays.shorthand.slice();return e>0&&e<t.length&&(t=[].concat(t.splice(e,t.length),t.splice(0,e))),ne.weekdayContainer.innerHTML="\n\t\t<span class=flatpickr-weekday>\n\t\t\t"+t.join("</span><span class=flatpickr-weekday>")+"\n\t\t</span>\n\t\t",ne.weekdayContainer}function v(){return ne.calendarContainer.classList.add("hasWeeks"),ne.weekWrapper=X("div","flatpickr-weekwrapper"),ne.weekWrapper.appendChild(X("span","flatpickr-weekday",ne.l10n.weekAbbreviation)),ne.weekNumbers=X("div","flatpickr-weeks"),ne.weekWrapper.appendChild(ne.weekNumbers),ne.weekWrapper}function D(e,t){ne.currentMonth="undefined"==typeof t||t?ne.currentMonth+e:e,E(),Q(),m(),ne.config.noCalendar||ne.days.focus(),J("MonthChange")}function b(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];ne.input.value="",ne.altInput&&(ne.altInput.value=""),ne.mobileInput&&(ne.mobileInput.value=""),ne.selectedDates=[],ne.dateIsPicked=!1,ne.redraw(),e!==!1&&J("Change")}function y(){ne.isOpen=!1,ne.isMobile||(ne.calendarContainer.classList.remove("open"),(ne.altInput||ne.input).classList.remove("active")),J("Close")}function M(e){e=e||ne,e.clear(!1),document.removeEventListener("keydown",T),window.removeEventListener("resize",e.debouncedResize),document.removeEventListener("click",w),document.removeEventListener("blur",w),e.isMobile&&e.mobileInput&&e.mobileInput.parentNode?e.mobileInput.parentNode.removeChild(e.mobileInput):e.calendarContainer&&e.calendarContainer.parentNode&&e.calendarContainer.parentNode.removeChild(e.calendarContainer),e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput)),e.input.classList.remove("flatpickr-input"),e.input.removeEventListener("focus",L),e.input.removeAttribute("readonly")}function C(e){for(var t=e;t;){if(/flatpickr-day|flatpickr-calendar/.test(t.className))return!0;t=t.parentNode}return!1}function w(e){var t=ne.element.contains(e.target)||e.target===ne.input||e.target===ne.altInput;!ne.isOpen||C(e.target)||t||(ne.close(),"range"===ne.config.mode&&1===ne.selectedDates.length&&(ne.clear(),ne.redraw()))}function k(e,t){if(ne.config.formatDate)return ne.config.formatDate(e,t);var n=e.split("");return n.map(function(e,a){return ne.formats[e]&&"\\"!==n[a-1]?ne.formats[e](t):"\\"!==e?e:""}).join("")}function E(e){ne.currentMonth<0||ne.currentMonth>11?(ne.currentYear+=ne.currentMonth%11,ne.currentMonth=(ne.currentMonth+12)%12,J("YearChange")):e&&(!ne.currentYearElement.min||e>=ne.currentYearElement.min)&&(!ne.currentYearElement.max||e<=ne.currentYearElement.max)&&(ne.currentYear=parseInt(e,10)||ne.currentYear,ne.config.maxDate&&ne.currentYear===ne.config.maxDate.getFullYear()?ne.currentMonth=Math.min(ne.config.maxDate.getMonth(),ne.currentMonth):ne.config.minDate&&ne.currentYear===ne.config.minDate.getFullYear()&&(ne.currentMonth=Math.max(ne.config.minDate.getMonth(),ne.currentMonth)),ne.redraw(),J("YearChange"))}function x(e){if(ne.config.minDate&&ee(e,ne.config.minDate)<0||ne.config.maxDate&&ee(e,ne.config.maxDate)>0)return!1;if(!ne.config.enable.length&&!ne.config.disable.length)return!0;e=S(e,!0);for(var t,n=ne.config.enable.length>0,a=n?ne.config.enable:ne.config.disable,i=0;i<a.length;i++){if(t=a[i],t instanceof Function&&t(e))return n;if((t instanceof Date||"string"==typeof t)&&S(t,!0).getTime()===e.getTime())return n;if("object"===("undefined"==typeof t?"undefined":_typeof(t))&&t.from&&t.to&&e>=S(t.from)&&e<=S(t.to))return n}return!n}function T(e){if(ne.isOpen)switch(e.which){case 13:ne.timeContainer&&ne.timeContainer.contains(e.target)?$():O(e);break;case 27:ne.clear(),ne.redraw(),ne.close();break;case 37:e.target!==ne.input&e.target!==ne.altInput&&D(-1);break;case 38:e.preventDefault(),ne.timeContainer&&ne.timeContainer.contains(e.target)?a(e):(ne.currentYear++,ne.redraw());break;case 39:e.target!==ne.input&e.target!==ne.altInput&&D(1);break;case 40:e.preventDefault(),ne.timeContainer&&ne.timeContainer.contains(e.target)?a(e):(ne.currentYear--,ne.redraw())}}function I(e){if(1===ne.selectedDates.length&&e.target.classList.contains("flatpickr-day")){for(var t=e.target.dateObj,n=S(ne.selectedDates[0],!0),a=Math.min(t.getTime(),ne.selectedDates[0].getTime()),i=Math.max(t.getTime(),ne.selectedDates[0].getTime()),r=!1,o=a;o<i;o+=ne.utils.duration.DAY)if(!x(new Date(o))){r=!0;break}for(var l=ne.days.childNodes[0].dateObj.getTime(),c=0;c<42;c++,l+=ne.utils.duration.DAY){var s=l<ne.minRangeDate.getTime()||l>ne.maxRangeDate.getTime();if(s)ne.days.childNodes[c].classList.add("notAllowed"),ne.days.childNodes[c].classList.remove("inRange","startRange","endRange");else if(!r||s){ne.days.childNodes[c].classList.remove("startRange","inRange","endRange","notAllowed");var u=Math.max(ne.minRangeDate.getTime(),a),d=Math.min(ne.maxRangeDate.getTime(),i);e.target.classList.add(t<ne.selectedDates[0]?"startRange":"endRange"),n>t&&l===n.getTime()?ne.days.childNodes[c].classList.add("endRange"):n<t&&l===n.getTime()?ne.days.childNodes[c].classList.add("startRange"):l>u&&l<d&&ne.days.childNodes[c].classList.add("inRange")}}}}function Y(){!ne.isOpen||ne.config.static||ne.config.inline||H()}function L(e){return ne.isMobile?(e&&(e.preventDefault(),e.target.blur()),setTimeout(function(){ne.mobileInput.click()},0),void J("Open")):void(ne.isOpen||(ne.altInput||ne.input).disabled||ne.config.inline||(ne.calendarContainer.classList.add("open"),ne.config.static||ne.config.inline||H(),ne.isOpen=!0,ne.config.allowInput||((ne.altInput||ne.input).blur(),(ne.config.noCalendar?ne.timeContainer:ne.selectedDateElem?ne.selectedDateElem:ne.days).focus()),(ne.altInput||ne.input).classList.add("active"),J("Open")))}function F(){var e=["utc","wrap","weekNumbers","allowInput","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"];ne.config=Object.create(Flatpickr.defaultConfig);var t=_extends({},ne.instanceConfig,ne.element.dataset||{});Object.defineProperty(ne.config,"minDate",{get:function(){return this._minDate},set:function(e){this._minDate=S(e),ne.days&&_(),ne.currentYearElement&&(e&&this._minDate instanceof Date?(ne.minDateHasTime=this._minDate.getHours()||this._minDate.getMinutes()||this._minDate.getSeconds(),ne.currentYearElement.min=this._minDate.getFullYear()):ne.currentYearElement.removeAttribute("min"),ne.currentYearElement.disabled=this._maxDate&&this._minDate&&this._maxDate.getFullYear()===this._minDate.getFullYear())}}),Object.defineProperty(ne.config,"maxDate",{get:function(){return this._maxDate},set:function(e){this._maxDate=S(e),ne.days&&_(),ne.currentYearElement&&(e&&this._maxDate instanceof Date?(ne.currentYearElement.max=this._maxDate.getFullYear(),ne.maxDateHasTime=this._maxDate.getHours()||this._maxDate.getMinutes()||this._maxDate.getSeconds()):ne.currentYearElement.removeAttribute("max"),ne.currentYearElement.disabled=this._maxDate&&this._minDate&&this._maxDate.getFullYear()===this._minDate.getFullYear())}}),_extends(ne.config,t);for(var n=0;n<e.length;n++)ne.config[e[n]]=ne.config[e[n]]===!0||"true"===ne.config[e[n]];!t.dateFormat&&t.enableTime&&(ne.config.dateFormat=ne.config.noCalendar?"H:i"+(ne.config.enableSeconds?":S":""):Flatpickr.defaultConfig.dateFormat+" H:i"+(ne.config.enableSeconds?":S":"")),t.altInput&&t.enableTime&&!t.altFormat&&(ne.config.altFormat=ne.config.noCalendar?"h:i"+(ne.config.enableSeconds?":S K":" K"):Flatpickr.defaultConfig.altFormat+(" h:i"+(ne.config.enableSeconds?":S":"")+" K"))}function N(){"object"!==_typeof(ne.config.locale)&&"undefined"==typeof Flatpickr.l10ns[ne.config.locale]&&console.warn("flatpickr: invalid locale "+ne.config.locale),ne.l10n=_extends(Object.create(Flatpickr.l10ns.default),"object"===_typeof(ne.config.locale)?ne.config.locale:"default"!==ne.config.locale?Flatpickr.l10ns[ne.config.locale]||{}:{})}function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return null;var n=/(\d+)/g,a=/^(\d{1,2})[:\s](\d\d)?[:\s]?(\d\d)?\s?(a|p)?/i,i=e;if(e.toFixed)e=new Date(e);else if("string"==typeof e)if(e=e.trim(),"today"===e)e=new Date,t=!0;else if(ne.config.parseDate)e=ne.config.parseDate(e);else if(a.test(e)){var r=e.match(a),o=r[4]?r[1]%12+("p"===r[4].toLowerCase()?12:0):r[1];e=new Date,e.setHours(o,r[2]||0,r[3]||0)}else if(/Z$/.test(e)||/GMT$/.test(e))e=new Date(e);else if(n.test(e)&&/^[0-9]/.test(e)){var l=e.match(n);e=new Date(l[0]+"/"+(l[1]||1)+"/"+(l[2]||1)+" "+(l[3]||0)+":"+(l[4]||0)+":"+(l[5]||0))}else e=new Date(e);return e instanceof Date?(ne.config.utc&&!e.fp_isUTC&&(e=e.fp_toUTC()),t&&e.setHours(0,0,0,0),e):(console.warn("flatpickr: invalid date "+i),console.info(ne.element),null)}function H(){var e=ne.calendarContainer.offsetHeight,t=ne.altInput||ne.input,n=t.getBoundingClientRect(),a=window.innerHeight-n.bottom+t.offsetHeight,i=void 0,r=window.pageXOffset+n.left;a<e?(i=window.pageYOffset-e+n.top-2,ne.calendarContainer.classList.remove("arrowTop"),ne.calendarContainer.classList.add("arrowBottom")):(i=window.pageYOffset+t.offsetHeight+n.top+2,ne.calendarContainer.classList.remove("arrowBottom"),ne.calendarContainer.classList.add("arrowTop")),ne.config.static||ne.config.inline||(ne.calendarContainer.style.top=i+"px",ne.calendarContainer.style.left=r+"px")}function _(){ne.config.noCalendar||ne.isMobile||(h(),Q(),m())}function O(e){if(ne.config.allowInput&&13===e.which&&e.target===(ne.altInput||ne.input))return ne.setDate((ne.altInput||ne.input).value),e.target.blur();if(e.target.classList.contains("flatpickr-day")&&!e.target.classList.contains("disabled")&&!e.target.classList.contains("notAllowed")){var t=e.target.dateObj;if(ne.selectedDateElem=e.target,"single"===ne.config.mode)ne.selectedDates=[t],ne.config.enableTime||ne.close();else if("multiple"===ne.config.mode){var n=q(t);n?ne.selectedDates.splice(n,1):ne.selectedDates.push(t)}else"range"===ne.config.mode&&(2===ne.selectedDates.length&&ne.clear(),ne.selectedDates.push(t),ne.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()}));i(),t.getMonth()!==ne.currentMonth&&"range"!==ne.config.mode&&(ne.currentYear=t.getFullYear(),ne.currentMonth=t.getMonth(),Q()),m(),ne.minDateHasTime&&ne.config.enableTime&&0===ee(t,ne.config.minDate)&&r(ne.config.minDate),$(),setTimeout(function(){return ne.dateIsPicked=!0},50),"range"===ne.config.mode&&1===ne.selectedDates.length&&I(e),J("Change")}}function P(e,t){ne.config[e]=t,ne.redraw(),c()}function A(e,t){return e?(ne.selectedDates=(Array.isArray(e)?e.map(S):[S(e)]).filter(function(e){return e instanceof Date&&x(e)}),ne.redraw(),c(),r(),$(),ne.dateIsPicked=ne.selectedDates.length>0,void(t&&J("Change"))):ne.clear()}function R(){ne.selectedDates=[],ne.now=new Date;var e=ne.config.defaultDate||ne.input.value;if(Array.isArray(e))ne.selectedDates=e.map(S);else if(e)switch(ne.config.mode){case"single":ne.selectedDates=[S(e)];break;case"multiple":ne.selectedDates=e.split("; ").map(S);break;case"range":ne.selectedDates=e.split(ne.l10n.rangeSeparator).map(S)}ne.selectedDates=ne.selectedDates.filter(function(e){return e instanceof Date&&e.getTime()&&x(e)});var t=ne.selectedDates.length?ne.selectedDates[0]:ne.config.minDate>ne.now?ne.config.minDate:ne.now;ne.currentYear=t.getFullYear(),ne.currentMonth=t.getMonth()}function j(){ne.utils={duration:{DAY:864e5},getDaysinMonth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.currentMonth,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ne.currentYear;return 1===e&&(t%4===0&&t%100!==0||t%400===0)?29:ne.l10n.daysInMonth[e]},monthToStr:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ne.config.shorthandCurrentMonth;return ne.l10n.months[(t?"short":"long")+"hand"][e]}}}function W(){ne.formats={D:function(e){return ne.l10n.weekdays.shorthand[ne.formats.w(e)]},F:function(e){return ne.utils.monthToStr(ne.formats.n(e)-1,!1)},H:function(e){return Flatpickr.prototype.pad(e.getHours())},J:function(e){return e.getDate()+ne.l10n.ordinal(e.getDate())},K:function(e){return e.getHours()>11?"PM":"AM"},M:function(e){return ne.utils.monthToStr(e.getMonth(),!0)},S:function(e){return Flatpickr.prototype.pad(e.getSeconds())},U:function(e){return e.getTime()/1e3},Y:function(e){return e.getFullYear()},d:function(e){return Flatpickr.prototype.pad(ne.formats.j(e))},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return Flatpickr.prototype.pad(e.getMinutes())},j:function(e){return e.getDate()},l:function(e){return ne.l10n.weekdays.longhand[ne.formats.w(e)]},m:function(e){return Flatpickr.prototype.pad(ne.formats.n(e))},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},w:function(e){return e.getDay()},y:function(e){return String(ne.formats.Y(e)).substring(2)}}}function U(){ne.input=ne.config.wrap?ne.element.querySelector("[data-input]"):ne.element,ne.input.classList.add("flatpickr-input"),ne.config.altInput&&(ne.altInput=X(ne.input.nodeName,ne.config.altInputClass),ne.altInput.placeholder=ne.input.placeholder,ne.altInput.type="text",ne.input.type="hidden",ne.input.parentNode&&ne.input.parentNode.insertBefore(ne.altInput,ne.input.nextSibling)),ne.config.allowInput||(ne.altInput||ne.input).setAttribute("readonly","readonly")}function B(){var e=ne.config.enableTime?ne.config.noCalendar?"time":"datetime-local":"date";ne.mobileInput=X("input","flatpickr-input flatpickr-mobile"),ne.mobileInput.step="any",ne.mobileInput.tabIndex=-1,ne.mobileInput.type=e,ne.mobileInput.disabled=ne.input.disabled,ne.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",ne.selectedDates.length&&(ne.mobileInput.defaultValue=ne.mobileInput.value=k(ne.mobileFormatStr,ne.selectedDates[0])),ne.config.minDate&&(ne.mobileInput.min=k("Y-m-d",ne.config.minDate)),ne.config.maxDate&&(ne.mobileInput.max=k("Y-m-d",ne.config.maxDate)),ne.input.type="hidden",ne.config.altInput&&(ne.altInput.type="hidden");try{ne.input.parentNode.insertBefore(ne.mobileInput,ne.input.nextSibling)}catch(e){}ne.mobileInput.addEventListener("change",function(e){ne.setDate(e.target.value),J("Change"),J("Close")})}function z(){ne.isOpen?ne.close():ne.open()}function J(e,t){if(ne.config["on"+e])for(var n=Array.isArray(ne.config["on"+e])?ne.config["on"+e]:[ne.config["on"+e]],a=0;a<n.length;a++)n[a](ne.selectedDates,ne.input.value,ne,t);if("Change"===e)try{ne.input.dispatchEvent(new Event("change",{bubbles:!0})),ne.input.dispatchEvent(new Event("input",{bubbles:!0}))}catch(e){if("createEvent"in document)return ne.input.dispatchEvent(ne.changeEvent);ne.input.fireEvent("onchange")}}function K(){return ne.selectedDates.length?ne.selectedDates[ne.selectedDates.length-1]:null}function q(e){for(var t=0;t<ne.selectedDates.length;t++)if(0===ee(ne.selectedDates[t],e))return""+t;return!1}function V(e){return!("range"!==ne.config.mode||ne.selectedDates.length<2)&&(ee(e,ne.selectedDates[0])>=0&&ee(e,ne.selectedDates[1])<=0)}function Q(){if(!ne.config.noCalendar&&!ne.isMobile&&ne.monthNav){if(ne.currentMonthElement.textContent=ne.utils.monthToStr(ne.currentMonth)+" ",ne.currentYearElement.value=ne.currentYear,ne.config.minDate){var e=ne.currentYear===ne.config.minDate.getFullYear()?(ne.currentMonth+11)%12<ne.config.minDate.getMonth():ne.currentYear<ne.config.minDate.getFullYear();ne.prevMonthNav.style.display=e?"none":"block"}else ne.prevMonthNav.style.display="block";if(ne.config.maxDate){var t=ne.currentYear===ne.config.maxDate.getFullYear()?ne.currentMonth+1>ne.config.maxDate.getMonth():ne.currentYear>ne.config.maxDate.getFullYear();ne.nextMonthNav.style.display=t?"none":"block"}else ne.nextMonthNav.style.display="block"}}function $(){if(!ne.selectedDates.length)return ne.clear();ne.isMobile&&(ne.mobileInput.value=ne.selectedDates.length?k(ne.mobileFormatStr,K()):"");var e="range"!==ne.config.mode?"; ":ne.l10n.rangeSeparator;ne.input.value=ne.selectedDates.map(function(e){return k(ne.config.dateFormat,e)}).join(e),ne.config.altInput&&(ne.altInput.value=ne.selectedDates.map(function(e){return k(ne.config.altFormat,e)}).join(e)),J("ValueUpdate")}function G(e){e.preventDefault();var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY)),n=parseInt(e.target.value,10)+t;E(n),e.target.value=ne.currentYear}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=document.createElement(e);return a.className=t,n&&(a.innerHTML=n),a}function Z(e,t,n){var a=void 0;return function(){for(var i=arguments.length,r=Array(i),o=0;o<i;o++)r[o]=arguments[o];var l=this,c=function(){a=null,n||e.apply(l,r)};clearTimeout(a),a=setTimeout(c,t),n&&!a&&e.apply(l,r)}}function ee(e,t){return e instanceof Date&&t instanceof Date&&new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0)}function te(e){if(e.preventDefault(),e&&((e.target.value||e.target.textContent).length>=2||"keydown"!==e.type&&"input"!==e.type)&&e.target.blur(),ne.amPM&&e.target===ne.amPM)return e.target.textContent=["AM","PM"]["AM"===e.target.textContent|0];var t=Number(e.target.min),n=Number(e.target.max),a=Number(e.target.step),i=parseInt(e.target.value,10),r=Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY)),o=Number(i);"wheel"===e.type?o=i+a*r:"keydown"===e.type&&(o=i+a*(38===e.which?1:-1)),o<t?o=n+o+(e.target!==ne.hourElement)+(e.target===ne.hourElement&&!ne.amPM):o>n&&(o=e.target===ne.hourElement?o-n-!ne.amPM:t),ne.amPM&&e.target===ne.hourElement&&(1===a?o+i===23:Math.abs(o-i)>a)&&(ne.amPM.textContent="PM"===ne.amPM.innerHTML?"AM":"PM"),e.target.value=ne.pad(o)}var ne=this;return n(),ne}function _flatpickr(e,t){for(var n=[],a=0;a<e.length;a++)try{e[a]._flatpickr=new Flatpickr(e[a],t||{}),n.push(e[a]._flatpickr)}catch(e){console.warn(e,e.stack)}return 1===n.length?n[0]:n}function flatpickr(e,t){return _flatpickr(document.querySelectorAll(e),t)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Flatpickr.defaultConfig={mode:"single",utc:!1,wrap:!1,weekNumbers:!1,allowInput:!1,clickOpens:!0,time_24hr:!1,enableTime:!1,noCalendar:!1,dateFormat:"Y-m-d",altInput:!1,altInputClass:"form-control input",altFormat:"F j, Y",defaultDate:null,minDate:null,maxDate:null,parseDate:null,formatDate:null,getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},enable:[],disable:[],shorthandCurrentMonth:!1,inline:!1,static:!1,appendTo:null,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",enableSeconds:!1,hourIncrement:1,minuteIncrement:5,defaultHour:12,defaultMinute:0,disableMobile:!1,locale:"default",onChange:null,onOpen:null,onClose:null,onReady:null,onValueUpdate:null,onDayCreate:null},Flatpickr.l10ns={en:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle"}},Flatpickr.l10ns.default=Flatpickr.l10ns.en,Flatpickr.localize=function(e){return _extends(Flatpickr.l10ns.default,e||{})},Flatpickr.prototype={pad:function(e){return("0"+e).slice(-2)}},"undefined"!=typeof HTMLElement&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return _flatpickr(this,e)},HTMLElement.prototype.flatpickr=function(e){return _flatpickr([this],e)}),"undefined"!=typeof jQuery&&(jQuery.fn.flatpickr=function(e){return _flatpickr(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+parseInt(e,10))},Date.prototype.fp_isUTC=!1,Date.prototype.fp_toUTC=function(){var e=new Date(this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds());return e.fp_isUTC=!0,e},"classList"in document.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function e(e){return function(n){var a=t.className.split(/\s+/),i=a.indexOf(n);
e(a,i,n),t.className=a.join(" ")}}var t=this,n={add:e(function(e,t,n){~t||e.push(n)}),remove:e(function(e,t){~t&&e.splice(t,1)}),toggle:e(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(e){return!!~t.className.split(/\s+/).indexOf(e)},item:function(e){return t.className.split(/\s+/)[e]||null}};return Object.defineProperty(n,"length",{get:function(){return t.className.split(/\s+/).length}}),n}}),"undefined"!=typeof module&&(module.exports=Flatpickr);


/* Russian locals for flatpickr */
var Flatpickr = Flatpickr || { l10ns: {} };
Flatpickr.l10ns.ru = {};

Flatpickr.l10ns.ru.weekdays = {
	shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	longhand: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
};

Flatpickr.l10ns.ru.months = {
	shorthand: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
	longhand: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
};
if (typeof module !== "undefined") {
	module.exports = Flatpickr.l10ns;
}

(function($, window, undefined){
	'use sctrict';

	var $root = $('html, body');
	var locale = $('html').attr('lang');
	(function detectNavigator () {
		var _ua = navigator.userAgent, _detected;
		if (_ua.match(/iPad|iPhone|iPod/) && !window.MSStream) {
			_detected = 'is-ios';
		} else if (_ua.match(/MSIE |Trident\/|Edge\//)) {
			_detected = 'is-ie';
		} else if (_ua.match(/Android /)) {
			_detected = 'is-android';
		}
		if (_detected) $('html').addClass(_detected);
	})();

	function getAnimEndEventName () {
		var el = document.createElement('div'),
			animEndEventNames = {
			    animation       : 'animationend',
			    OAnimation      : 'oAnimationEnd',
			    MozAnimation    : 'animationend',
			    WebkitAnimation : 'webkitAnimationEnd'
			};
		for (var name in animEndEventNames) {
			if (el.style[name] !== undefined) {
				return animEndEventNames[name];
			}
		}
	}
	function iosScrollFix ($element) {
		var el = $element[0];
		if (!el.iosScrollFix) {
			el.iosScrollFix = true;
			el.addEventListener('touchstart', function(e){
				this.isAdded = true;
				this.aup = (this.scrollTop > 0);
				this.ud = (this.scrollTop < this.scrollHeight - this.clientHeight);
				this.prevTop = null; this.prevBot = null;
				this.lastY = e.pageY;
			});
			el.addEventListener('touchmove', function(e){
				var up = (e.pageY > this.lastY), down = !up;
				this.lastY = e.pageY;

				if ((up && this.aup) || (down && this.ud)) e.stopPropagation();
				else e.preventDefault();
			});
		}
	}

	// mini-header showing
	function stuckHeader () {
		if (!$('.mini-header').length) return;

		var _t = $(window).scrollTop(),
			_node = $('.mini-header'),
			_className = 'is-stuck',
			_distance = parseInt(_node.attr('data-distance'));
		if ($('.section.section--home-banner').length) {
			_distance = $('.section.section--home-banner').outerHeight() + $('.section.section--home-banner').offset().top;
		} else if ($('.breadcrumbs').length) {
			_distance = $('.breadcrumbs').outerHeight() + $('.breadcrumbs').offset().top;
		}

		if (_t > _distance) {
			!_node.hasClass(_className) && _node.addClass(_className);
		} else {
			_node.hasClass(_className) && _node.removeClass(_className);
		}
	}

	// mobile side-nav
	$('.side-nav-toggler').on('click', function(e){
		e.preventDefault();
		if (!$('html').hasClass('is-side-nav-active')) {
			$('html').addClass('is-side-nav-active');
		} else {
			$('html').removeClass('is-side-nav-active');
		}
	});
	$('.wrapper').on('click', function(e){
		if ($(e.target).parents('.mob-menu').length == 0 && $(e.target).closest('.side-nav-toggler').length == 0 && $('html').hasClass('is-side-nav-active')) {
			e.preventDefault();
			$('html').removeClass('is-side-nav-active');
			return false;
		}
	});
	$('.mob-menu-search-form')
		.on('submit', mobileSearch)
		.validit({
			onSuccessSubmit: function(){
				var searchQuery = this.serialized[0].value.trim();
				if(searchQuery !== '')
					window.location.href = window.location.origin + '/search/?query=' + searchQuery;
			}
		});

	function mobileSearch(ev){
		var _form = $('.mob-menu-search-form'),
			_input = _form.find('#mob-menu-search'),
			_value = _input.val();

		if (ev) {
			ev && ev.preventDefault();
			if (!_form.hasClass('is-expanded')) {
				_form.addClass('is-expanded');
				return false;
			}
		} else {
			_form.removeClass('is-expanded');
		}
	}
	$(document).on('click', function(e){
		var _t = $(e.target);
		if (_t.closest('.mob-menu-search-form').length === 0) {
			mobileSearch();
		}
	});

	if ($('html').hasClass('is-ios')) {
		iosScrollFix ($('.mob-menu'));
	}

	// mob nav menus
	$('.mob-menu-list-holder').each(function(){
		if ($(this).hasClass('is-expanded')) {
			$(this).find('.mob-menu-list-c-cont').show();
		}
	});
	$('.mob-menu-list-header').on('click', function(e){
		e.preventDefault();
		var _holder = $(this).parent('.mob-menu-list-holder'),
			_cont = _holder.find('.mob-menu-list-c-cont');
		if (_holder.hasClass('is-expanded')) {
			_holder.removeClass('is-expanded');
			_cont.stop().slideUp(250)
		} else {
			_holder.addClass('is-expanded');
			_cont.stop().slideDown(250);
		}
	});

	// menu item's dropdowns
	$('.mini-header-menu, .header-menu')
		.on('mouseover', function(){
			$(this).addClass('is-expanded');
		})
		.on('click', function(){
			if (!$(this).hasClass('is-expanded')) {
				$(this).addClass('is-expanded');
			} else {
				$(this).removeClass('is-expanded');
			}
		})
		.on('mouseleave', function(){
			$(this).removeClass('is-expanded');
		});

	// mobile footer about toggler
	$('.c-nfo-about__more').on('click', function(e){
		e.preventDefault();
		var _cont = $('.c-nfo-about-content'),
			_h = _cont[0].scrollHeight;
			if (!_cont[0].classList.contains('is-mob-expanded')) {
				_cont.css('max-height', _h).addClass('is-mob-expanded');
			} else {
				_cont.removeAttr('style').removeClass('is-mob-expanded');
			}
	});

	// Flatpickr
	if (locale === 'en') {
		Flatpickr.l10ns.default.weekdays.shorthand = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
		Flatpickr.l10ns.default.months.longhand	= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		localeDateFormat = 'm/d/Y';
	} else {
		Flatpickr.localize(Flatpickr.l10ns.ru);
		Flatpickr.l10ns.default.firstDayOfWeek = 1;
		localeDateFormat = 'd/m/Y';
	}

	// modals
	$.spreader = {
		init: function (options) {
			var _this = this;
			_this.defaults = {
			    documentActiveClass	: 'is-spreader-active',
			    activeClass			: 'spreader--active',
			    containerClass		: 'spreader-container',
			    containerActiveClass: 'spreader-container--visible',
			    contentClass		: 'spreader-content',
			    speed				: 500,
				autoClose			: 0,
				autoCloseTimer		: undefined,
				root				: $('html'),
				spreader			: $('<div class="spreader" role="dialog" style="display: none;"></div>').appendTo('body'),
				containerTpl		: '<div class="spreader-container" tabindex="-1" role="dialog"><div class="spreader-content" role="document"><a href="#" data-spreader="close" class="spreader-close" role="button"><svg xmlns="http://www.w3.org/2000/svg" class="svg-icon"><use xlink:href="#close-modal"></use></svg></a></div></div>',
				selector			: '[data-spreader]',
				curNode				: undefined,
				targetCont			: undefined,
				animationEnd		: getAnimEndEventName(),
				logging				: false,
				onInit				: null,
				onOpen				: null,
				onShow				: null,
				onHide				: null,
				onClose				: null
			};
			_this.options = options;
			_this.settings = $.extend({}, _this.defaults, _this.options);
			if ($(_this.settings.selector).length) {
				_this.bind();
				if (_this.settings.onInit instanceof Function) {
					_this.settings.onInit();
				}
			} else {
				_this.settings.logging && console.warn('Nohing was found using [selector].\nExiting.');
			}
		},
		bind: function(){
			var _this = this;
			$(document).on('click.spreader', _this.settings.selector, function(e){
				e.preventDefault();
				_this.settings.curNode = $(this);
				_this.settings.targetCont = _this.settings.curNode.attr('href');
				if ($(this).attr('data-spreader') === 'close') {
					_this.close();
				} else {
					_this.show(_this.settings.targetCont);
				}
			});
			_this.settings.spreader.on('click.spreader', function(e){
				var _target = $(e.target);
				if (_target.hasClass('spreader--active')) {
					_this.close();
					return false;
				}
			});
			$(window).on('resize.spreader', function(){
				if (_this.settings.spreader.hasClass(_this.settings.activeClass)) {
					if (this._t) clearTimeout(this._t);
					this._t = setTimeout(function(){_this.watchHeight.call(_this)},50);
				}
			});
		},
		open: function(){
			var _this = this;
			_this.settings.spreader.empty();
			if (!_this.settings.root.hasClass(_this.settings.documentActiveClass)) {
				_this.settings.root.addClass(_this.settings.documentActiveClass);
				_this.settings.spreader.addClass(_this.settings.activeClass).stop().fadeIn(_this.settings.speed, function(){
					iosScrollFix (_this.settings.spreader);
				});
			}
			_this.show();
		},
		close: function(){
			var _this = this;
			_this.hide();
			_this.settings.root.removeClass(_this.settings.documentActiveClass);
			_this.settings.spreader.removeClass(_this.settings.activeClass).stop().fadeOut(_this.settings.speed, function(){
				_this.settings.spreader.empty();
			});
		},
		show: function(){ // $.spreader.show(selector[string], autohide[number, ms]);
			var _this = this;
			var _target = arguments[0];
			if (_this.settings.autoCloseTimer) {
				clearTimeout(_this.settings.autoCloseTimer);
				_this.settings.autoCloseTimer = undefined;
				_this.settings.autoClose = _this.options.autoClose || _this.defaults.autoClose;
			}
			if (arguments[1] && arguments[1] !== 0) {
				_this.settings.autoClose = arguments[1];
			}
			if (_target !== undefined && $(_target).length !== 0) {
				_this.settings.targetCont = _target;
			} else if (_this.settings.targetCont === undefined || $(_this.settings.targetCont).length === 0) {
				_this.settings.logging && console.warn('Targeting content does not exists.\nExiting.');
				return;
			}
			if (!_this.settings.root.hasClass(_this.settings.documentActiveClass)) {
				_this.open();
				return;
			}
			var _container = $(_this.settings.containerTpl),
				_content = _container.find('.'+_this.settings.contentClass),
				_prevContainers = _this.settings.spreader.find('.'+_this.settings.containerClass);
			if (_prevContainers.length !== 0) {
				_this.hide(_prevContainers);
			}
			$(_this.settings.targetCont).clone().appendTo(_content).show();
			_container.appendTo(_this.settings.spreader).addClass(_this.settings.containerActiveClass);
			if (_this.settings.autoClose !== 0) {
				_this.settings.autoCloseTimer = setTimeout(function(){
					_this.close();
					_this.settings.autoClose = _this.options.autoClose || _this.defaults.autoClose;
				}, _this.settings.autoClose);
			}
			_this.onShowed(_container);
		},
		hide: function($containers){
			var _this = this,
				_target = $containers ? $containers : _this.settings.spreader.find('.'+_this.settings.containerClass);

			_target.removeClass(_this.settings.containerActiveClass).on(_this.settings.animationEnd, function(){
				$(this).remove();
			});
		},
		onShowed: function(_container){
			var _this = this;
			_container.find('[type=tel]').inputmask({showMaskOnHover: false});
			_container.find('[data-type="date"]').each(function(){
				$(this).flatpickr({
					minDate: 'today',
					nextArrow: '',
					prevArrow: '',
					static: true,
					dateFormat: localeDateFormat
				});
			});
			_container.css('height', '');
			_this.watchHeight();
			if (_this.settings.onShow instanceof Function) {
				_this.settings.onShow();
			}
		},
		watchHeight: function(){
			var _this = this,
				_w = _this.settings.spreader,
				_c = _w.find('.'+_this.settings.containerClass+'.'+_this.settings.containerActiveClass),
				_cp = _w.find('.'+_this.settings.containerClass+':not(.'+_this.settings.containerActiveClass+')');
			if (_cp.length && _w.hasClass('spreader--overflow')) {
				_cp.stop().animate({'height': 0}, 500);
			}
			_c.css('height', '');
			var _wh = _w.height(),
				_ch = _c.height();
			_ch%2 !== 0 && _c.height(++_ch);

			if (_wh < _ch) {
				_w.addClass('spreader--overflow');
			} else {
				_w.removeClass('spreader--overflow');
			}
		}

	};

	// execute
	$.spreader.init({
		logging: true,
		onInit: function(){
			// [this] - current $.spreader object w/ updated cache and binding;
		},
		onShow: function(){
			// now modal content is ready
			// let's call $.fn.validit
			// [this] - current $.validit instance
			this.spreader.find('.form').validit({
// 				logging: true,
// 				alerting: true,
				onSuccessSubmit: function(){
					console.log('validit: submited successfully. serialized array:', this.serialized);
					$.post('/ajax/sendForm', this.serialized, function(){});
					var autoHide = 10000, _resultDialogSelector = undefined;
					if (this.$element.is('#review-form')) {
						_resultDialogSelector = '#review-success';
					} else if (this.$element.is('.form--request')) {
						_resultDialogSelector = '#request-success';
					} else {
						_resultDialogSelector = '#dialog-common-success';
					}
					if (_resultDialogSelector) {
						$.spreader.show(_resultDialogSelector, autoHide);
					} else {
						console.warn('No success action was specified.');
					}
				}
			});
		}
	});

	// timepick
	$(document).on('click', function(e){
		var _t = $(e.target);
		if (_t.closest('.drop-down').length === 0) {
			$('.drop-down').removeClass('open');
		} else {
			var _w = _t.closest('.drop-down'),
				_l = _w.find('.drop-down-list'),
				_c = _w.find('.drop-down-current'),
				_i = _w.find('.drop-down-input');
			if (_t.closest('.drop-down-item').length === 0) {
				_w.addClass('open');
			} else {
				var _v = _t.data('value');
				_l.find('.drop-down-item').removeClass('drop-down-item--active');
				_t.addClass('drop-down-item--active');
				_c.attr('data-value', _v).text(_v);
				_i.val(_v);
				_w.removeClass('open');
			}
		}
	});
	// GENERAL COMMON EVENTS
	function onScreenChanged (e) {
		var type = e.type;
		if (type === 'scroll') {}
		else if (type === 'resize') {
			updateCatalogTagsHeight($('.catalog-tags'));
		}

		stuckHeader();
		$(window).width() > 680 && $('html').removeClass('is-side-nav-active');
	}
	function onKeyPressed (e) {
		if (e.keyCode == '27') { // close something if esc was pressed
			var prevent = false;
			if ($('html').hasClass('is-side-nav-active')) {
				prevent = true;
				$('html').removeClass('is-side-nav-active');
			}
			if ($('html').hasClass('is-fullscreen-active')) {
				prevent = true;
				prodGallery.toggleZoom();
			}
			if ($('.content-banner-heading').hasClass('is-active')) {
				prevent = true;
				$('.content-banner-heading').removeClass('is-active');
			}
			if ($('.spreader').hasClass('spreader--active')) {
				prevent = true;
				$.spreader.close();
			}
			if (prevent) e.preventDefault();
		}
	}
	$(document).on('scroll', onScreenChanged);
	$(window).on('resize', onScreenChanged);
	$(document).on('keypress', onKeyPressed);

	//
	// CONTENT
	//

	// home page
	// banner slider
	if ($('.home-banner-slider').length) {
		var homeSliderTimout = $('.home-banner-slider').data('speed'),
			homeSlider = new Swiper('.home-banner-slider', {
				slideActiveClass: 'home-banner-slide--active',
				slideDuplicatedActiveClass: 'home-banner-slide--active',
				pagination: '.home-banner-pagination',
				nextButton: '.home-banner-nav.home-banner-nav--n',
				prevButton: '.home-banner-nav.home-banner-nav--p',
				buttonDisabledClass: 'home-banner-nav--disabled',
				bulletClass: 'home-banner-pagination-bullet',
				bulletActiveClass: 'home-banner-pagination-bullet--active',
				autoplay: homeSliderTimout,
				autoplayDisableOnInteraction: false,
				paginationClickable: true,
				simulateTouch: false,
				speed: 1500,
				effect: 'fade',
// 				fade: {crossFade: true},
				loop: true,
				preventClicks: false,
				preventClicksPropagation: false,
				autoResize: true,
				resizeReInit: true,
				resizeEvent: 'resize',
				onInit: function(swiper) {
					swiper.container.removeClass('is-loading');
					if (swiper.bullets.length < 2) {
						swiper.stopAutoplay();
						swiper.lockSwipes();
						swiper.container.addClass('is-single-slide');
					}
				}
			});

		$root.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(){$('html,body').stop()}); // first stop scroll animation if user scrolls manually
		// first screen scroll button
		$('.scroll-down').on('click', function(e){
			e.preventDefault();
			var _where = $(this).parents('.section').next().offset().top;
			console.log($(this).parents('.section').next());
			$root.stop().animate({scrollTop: _where}, 1500, 'easeInOutQuad');
		});
	}
	// articles slider
	if ($('.articles-slider').length) {
		var	homeSlider = new Swiper('.articles-slider', {
				slideActiveClass: 'articles-item--active',
				simulateTouch: false,
				speed: 1000,
				slidesPerView: 'auto',
				simulateTouch: true
			});
	}
	// map
	if ($('.map-canvas').length) {
		var map = {
			init: function(){
				this.position = new google.maps.LatLng(25.062908, 55.13852500000007);
				this.options = {
					backgroundColor: '#fff',
					center: this.position,
					disableDefaultUI: true,
					dragable: true,
					gestureHandling: 'greedy',
					mapTypeControl: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					overviewMapControl: false,
					panControl: false,
					scaleControl: false,
					scrollwheel: false,
					streetViewControl: false,
					zoom: 15,
					zoomControl: true,
					zoomControlOptions: {
						position: google.maps.ControlPosition.TOP_LEFT
					},
// 					styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"color":"#ececec"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ececec"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#303030"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"geometry.stroke","stylers":[{"lightness":"-61"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dadada"},{"lightness":17}]}]
					styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"color":"#ececec"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ececec"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#303030"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"geometry.stroke","stylers":[{"lightness":"-61"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":19}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"transit.station","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dadada"},{"lightness":17}]}]
				};
				this.mapObj;
				this.markerIcon = '/img/ic/map_marker.svg';
				this.markerIconS = new google.maps.MarkerImage(
					this.markerIcon, null, null, null,
					new google.maps.Size(50, 55)
				);
				this.marker = new google.maps.Marker({
					position: this.position,
					icon: this.markerIcon
				});
				this.transitLayer = new google.maps.TransitLayer();
				this.doPan = $('.map-hint').length ? true : false;
				this.create();
			},
			create: function(){
				var self = this;
				self.mapObj = new google.maps.Map(document.getElementById('map-canvas'), self.options);
				self.addMarker();
				if (self.doPan) {
					$(window).on('resize', function(){self.shifting()});
					self.shifting();
				}
				self.transitLayer.setMap(self.mapObj);
			},
			addMarker: function(){
				var self = this;
				self.marker.setMap(self.mapObj);
			},
			shifting: function(){
				var self = this,
					_w = $(window).width(),
					_hol = $('.map-hint').offset().left,
					_brps = [1601, 1301, 1101, 981, 891, 769, 681, 641, 581, 481, 441, 421, 381, 341, 321],
					_pvx = 0,
					_pvy = 0;

				if (_w < _brps[0] && _w > _brps[9]) {
					_pvx = (_w - _hol) / 2;

					if (_w < _brps[6]) {
						self.marker.setIcon(self.markerIconS);
					} else {
						self.marker.setIcon(self.markerIcon);
					}
				} else if (_w < _brps[9]) {
					_pvy = 150;
					self.marker.setIcon(self.markerIconS);
				}
				setTimeout(function(){
					self.mapObj.setCenter(self.position);
					if (_pvx !== 0 || _pvy !== 0) self.mapObj.panBy(_pvx, _pvy);
				}, 0)
			}
		}
		map.init();
	}

	// main catalog grid scripts
	if ($('.gl-col.gl-col--slider').length) {
		$('.gl-slider').each(function(i, el){
			var swiper = new Swiper(this, {
					slideClass: 'gl-slide',
					slideActiveClass: 'gl-slide--active',
					nextButton: '.gl-slider-nav.gl-slider-nav--n',
					prevButton: '.gl-slider-nav.gl-slider-nav--p',
					buttonDisabledClass: 'gl-slider-nav--disabled',
					pagination: '.gl-slider-pagination',
					bulletClass: 'gl-slider-pagination-bullet',
					bulletActiveClass: 'gl-slider-pagination-bullet--active',
					paginationClickable: true,
					simulateTouch: false,
					speed: 500,
					loop: true
				});
		});
	} // product-cart photo slider
	if ($('.gl-col.gl-col--review').length) {
		$('.gl-review-slider').each(function(i, el){
			var swiper = new Swiper(this, {
					slideClass: 'gl-review-slide',
					slideActiveClass: 'gl-review-slide--active',
					pagination: '.gl-review-slide-pagination',
					bulletClass: 'gl-review-slide-pagination-bullet',
					bulletActiveClass: 'gl-review-slide-pagination--active',
					paginationClickable: true,
					autoplay: 10000,
					autoplayDisableOnInteraction: false,
					paginationClickable: true,
					simulateTouch: false,
					speed: 1000
				});
		});
	} // reviews slider

	// add/remove/toggle items to/from favourite list;
	// define action if you need to remove or add items to fav only;
	// in other way, pass the event object from ['.js-toggle-fav'] click's event;

	// this means that if no action was specified, [toggleItemFav] will try find element
	// from ['.js-toggle-fav'] element as its parents;

	function toggleItemFav (e, action) {
		var $el = undefined;
		try {
			if (!e) throw new Error('Nothing to work with.\nPlease pass something in arguments.');

			if (e.type === 'click') { // simple click event
				e.preventDefault();
				$el = $(e.target).parents('.gl-col');
			} else {
				if (typeof e === 'object') { // if jquery object was passed
					$el = e;
				} else if (typeof e === 'string') { // if selector was passed
					$el = $(e);
				} else {
					console.log(e);
					throw new Error('Wrong argument [e].'); // if nothing
				}
			}

			// check for node exists
			if (!$el || $el.length === 0) throw new Error('Nothing was found.');

			// set action if isn't
			if (!action) {
				if ($el.hasClass('gl-col--fav')) {
					action = 'remove';
				} else {
					action = 'add';
				}
			}

			// actions
			// callbacks should be here
			if (action === 'add') {
				$el.addClass('gl-col--fav');
				console.info('Added successfully.\nAdd your callback here.');
				/* ajax add */
				var eid = $el.attr('data-id');

				$.post('/ajax/addToFavorites', 'id=' + eid, function(e){
					console.log('added by ajax');

					// refresh_num
					var cnt = parseInt( $('.header-favourites__counter').html());

					$('.header-favourites__counter').text(parseInt(cnt + 1));
				});
			} else if (action === 'remove') {
				$el.removeClass('gl-col--fav');
				console.info('Removed successfully.\nAdd your callback here.');

				var eid = $el.attr('data-id');
				$.post('/ajax/removeFromFavorites', 'id=' + eid, function(e){
					console.log('removed by ajax');

					// refresh_num

					var cnt = parseInt( $('.header-favourites__counter').html());

					$('.header-favourites__counter').text(parseInt(cnt - 1));
				});
			}

		} catch (err) {
			console.warn('Adding/removing items in/from favourites fail: ' + err.message);
		}
	}
	$('.js-toggle-fav').on('click', function(e){
		if ($(this).parents('.gl.gl--favourites').length !== 0) {
			e.preventDefault();
			var _item = $(this).parents('.gl-col');
			if ($(window).width() <= 1080) {
				_item.slideUp(500, function(){
					toggleItemFav($(this), 'remove');
					$(this).remove();
				});
			} else {
				_item.css('height', _item.height()-1);
				_item.hide(500, function(){
					toggleItemFav($(this), 'remove');
					$(this).remove();
				});
			}
		} else {
			toggleItemFav(e);
		}
	});
	// //home page

	// product page
	if ($('.product-visual-slider').length) {
		var prodGallery = {
			init: function(){
				var _this = this;
				_this.fx = 'fade';
				_this.slider = $('.product-visual-slider');
				_this.mobile = $(window).width() <= 680 ? true : false;
				_this.fx = _this.mobile ? 'slide' : 'fade';
				_this.sliderOptions = {
					slideClass: 'product-visual-slide',
					slideActiveClass: 'product-visual-slide--active',
					pagination: '.product-visual-slider-pagination',
					bulletClass: 'product-visual-slider-pagination-bullet',
					bulletActiveClass: 'product-visual-slider-pagination-bullet--active',
					paginationClickable: true,
					effect: _this.fx,
					fade: {crossFade: true},
					simulateTouch: false,
					speed: 500,
					onSlideChangeStart: function(swiper){
						_this.cuIndex = swiper.activeIndex;
						_this.update();
					}
				};
				_this.cuIndex = 0;
				_this.productSlider = null;
				_this.thumbsWrap = $('.product-visual-thumbs');
				_this.thumbs = _this.thumbsWrap.find('.product-visual-thumb');
				_this.activeThumbClass = 'product-visual-thumb--active';
				_this.fullscreen = $('.product-visual-fullscreen');
				_this.close = $('.js-close-fullscreen');
				_this.bind();
			},
			bind: function(){
				var _this = this;
				if (_this.productSlider == null) _this.productSlider = new Swiper('.product-visual-slider', _this.sliderOptions);
				_this.thumbs
					.on('click', function(){
						_this.changeSlide.call(_this, this);
					})
					.eq(_this.cuIndex).addClass(_this.activeThumbClass);
				_this.slider.find('.swiper-wrapper').add(_this.fullscreen).on('click', function(e){
					e.preventDefault();
					_this.toggleZoom.call(_this, this);
				});

				iosScrollFix (_this.fullscreen);
			},
			changeSlide: function(_node){
				var _this = this;
				var _idx = $(_node).index();
				_this.productSlider.slideTo(_idx);
			},
			update: function(){
				var _this = this;
				_this.thumbs.removeClass(_this.activeThumbClass).eq(_this.cuIndex).addClass(_this.activeThumbClass);
			},
			toggleZoom: function(){
				var _this = this;
				if ($('html, body').hasClass('is-fullscreen-active')) {
					_this.fullscreen.stop().fadeOut(500, function(){
						console.log(this);
// 						$(this).removeClass('is-active').find('.п__img').remove();
						$(this).removeClass('is-active').find('.product-visual-fullscreen__img').remove();
						$('html, body').removeClass('is-fullscreen-active');
					});
					return;
				} else if (_this.mobile) {
					return;
				}
				var	_src = _this.thumbs.eq(_this.cuIndex).attr('data-full'),
					_img = $('<img src="'+_src+'" class="product-visual-fullscreen__img"/>').load(loadedCallback);
				_this.fullscreen.stop().fadeIn(500);
				$(this).addClass('is-active');
				$('html, body').addClass('is-fullscreen-active');
				function loadedCallback () {
					_img.appendTo(_this.fullscreen);
					setTimeout(function(){
						_img.addClass('product-visual-fullscreen__img--loaded');
					}, 0);
				}
				return;
			},
			slideTo: function(index){
				var _this = this;
				_this.productSlider.slideTo(index);
			}
		};
		prodGallery.init();
	}
	$('.product-price__show').on('click', function(e){
		e.preventDefault();
		if (!$(this).parent('.product-price').hasClass('.is-price-showed')) {
			$(this).fadeOut(500).siblings('.product-price__showed').fadeIn(500).parent('.product-price').addClass('is-price-showed');
		}
	});

	$('.product-visual-thumb').on('click', function(){
		$('.swiper-slide-3d, .swiper-slide-video').addClass('swiper-slide');
	});

	$('.product-visual-thumb-video').on('click', function(){
		$('.swiper-slide-video').removeClass('swiper-slide');
	});

	$('.product-visual-thumb-3d').on('click', function(){
		$('.swiper-slide-3d').removeClass('swiper-slide');
	});

	$('#slide-video').YTplayer({
    videoId: '2PL7KhlYQy4',
    playerVars: {
    	showinfo: '0',
    	rel: '0',
    	controls: '0',
    	modestbranding: '0'
	  }
	});
  $('#slide-video2').YTplayer({
  	videoId: '2PL7KhlYQy4',
  	playerVars: {
    	showinfo: '0',
    	rel: '0',
    	controls: '1',
    	modestbranding: '0'
	  }
	});

  $('.product-visual-thumb').on('click', function(){
  	$('#slide-video').pause();
  });
  $('.product-visual-thumb-video').on('click', function(){
  	$('#slide-video').play();
  });

  $('#product-visual-3d-view').on('click', function(){
  	if ($('#slide-3d-mobile').is(":visible")){
  		$('#slide-3d-mobile').css('display', 'none');
  	} else {
  		$('#slide-3d-mobile').css('display', 'block');
  		$('#slide-3d-mobile').toggleFullscreen();
  };
  });

	$('#product-visual-play-video').on('click', function() { 		  
	  $('#slide-video2').toggleFullscreen();
	  if($('#slide-video2').hasClass('ytplayer-fullscreen')){
	  	$('#slide-video2').play();
	  }
	});
	// //product page

	// catalog page
	if ($('.content-banner-heading__list').length) {
		var _tout;
		$('.content-banner-heading-text--current')
			.on('mouseenter', function() {
				$('.content-banner-heading').addClass('is-active');
			})
			.on('mouseleave', function() {
				_tout = setTimeout(function(){
					$('.content-banner-heading').removeClass('is-active');
				}, 150);
			})
			.on('click touchstart', function(e) {
				e.preventDefault();
				$('.content-banner-heading').toggleClass('is-active');
			});
		$('.content-banner-heading__list')
			.on('mouseenter', function(){
				clearTimeout(_tout);
				this.wasover = true;
			})
			.on('mouseleave', function(){
				if (this.wasover) {
					$('.content-banner-heading').removeClass('is-active');
				}
				this.wasover = false;
			});
		$(document).on('click', function(e){
			if ($('.content-banner-heading').hasClass('is-active') && $(e.target).closest('.content-banner-heading-text--current, .content-banner-heading__list').length === 0) {
				e.preventDefault();
				$('.content-banner-heading').removeClass('is-active');
			}
		});
	}
	// footer
		$('.c-nfo-subscribe-form').validit({
			logging: true,
			alerting: true,
			onSuccessSubmit: function() {
				$.ajax({
					type: 'POST',
					url: '/ajax/subscribe',
					data: this.serialized,
					dataType: 'json',
					beforeSend: function() {
						$('.c-nfo-subscribe-form .subscribe-button').css('pointer-events', 'none');
					},
					success: function(data) {
						if(data.status > 0){
							$.spreader.show('#dialog-common-success', 10000);
						}
						$('.c-nfo-subscribe-form .subscribe-button').css('pointer-events', '');
					}
				});
			}
		});
	// mobile footer about toggler
	if ($('.catalog-tags').length) {
		$('.catalog-tags-show-all').on('click', function(e){
			e.preventDefault();
			var _cont = $('.catalog-tags'),
				_h = _cont[0].scrollHeight;
			if (!_cont[0].classList.contains('is-expanded')) {
				_cont.css('max-height', _h).addClass('is-expanded');
			} else {
				_cont.removeAttr('style').removeClass('is-expanded');
			}
		});
	}
	updateCatalogTagsHeight($('.catalog-tags'));

	function updateCatalogTagsHeight(content) {
		if (!content.length) {return};
		var _h = content[0].scrollHeight,
			_hel = content.find('.tag.tag--catalog').outerHeight(true) * 2;

		if (content[0].classList.contains('is-expanded')) {
			content.css('max-height', _h).addClass('is-expanded');
		}

		if (_h - _hel > 10) {
			content[0].classList.add('is-has-overflow');
		} else {
			content[0].classList.remove('is-has-overflow');
		}
	}
	// //catalog page

	// about page
	if ($('.gl.gl--team').length) {

		$('.gl.gl--team').find('.gl-col:not(.gl-col--go-follow)').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('is-active');
		});
	}
	// //about page

	//search
	$('.main-search .main-search-form').on('submit', function(e) {
		e.preventDefault();
		var searchQuery = $('.main-search  #main-search-input').val().trim();
		if(searchQuery !== ''){
			$.ajax({
				type: 'POST',
				url: '/search/?query=' + searchQuery,
				data: {
					action: 'ajax',
				},
				dataType: 'json',
				beforeSend: function() {
					$('.main-search .main-search-result-count').hide();
					$('.main-search .main-search-results').hide();
				},
				success: function(data) {
					$('.main-search .main-search-result-count').show();
					$('.main-search .main-search-results').show();
					$('.main-search .main-search-result-count__val').html(data.count);
					$('.main-search .main-search-results .main-search-results__content .gl-row').html(data.data);
				}
			});
		}
	});

	$('.footer-search-form').on('submit', function(e) {
		e.preventDefault();
		var searchQuery = $('.footer-search-form  #footer-search').val().trim();
		if(searchQuery !== ''){
			window.location.href = '/search/?query=' + searchQuery;
		}
	});

	//
	// FALLBACKS, OTHER STUFF
	//

	// iedge object-fit fallback
	/*! npm.im/object-fit-images */
	var objectFitImages=function(){"use strict";function t(t){for(var e,r=getComputedStyle(t).fontFamily,i={};null!==(e=c.exec(r));)i[e[1]]=e[2];return i}function e(e,i){if(!e[n].parsingSrcset){var s=t(e);if(s["object-fit"]=s["object-fit"]||"fill",!e[n].s){if("fill"===s["object-fit"])return;if(!e[n].skipTest&&l&&!s["object-position"])return}var c=e[n].ios7src||e.currentSrc||e.src;if(i)c=i;else if(e.srcset&&!u&&window.picturefill){var o=window.picturefill._;e[n].parsingSrcset=!0,e[o.ns]&&e[o.ns].evaled||o.fillImg(e,{reselect:!0}),e[o.ns].curSrc||(e[o.ns].supported=!1,o.fillImg(e,{reselect:!0})),delete e[n].parsingSrcset,c=e[o.ns].curSrc||c}if(e[n].s)e[n].s=c,i&&(e[n].srcAttr=i);else{e[n]={s:c,srcAttr:i||f.call(e,"src"),srcsetAttr:e.srcset},e.src=n;try{e.srcset&&(e.srcset="",Object.defineProperty(e,"srcset",{value:e[n].srcsetAttr})),r(e)}catch(t){e[n].ios7src=c}}e.style.backgroundImage='url("'+c+'")',e.style.backgroundPosition=s["object-position"]||"center",e.style.backgroundRepeat="no-repeat",/scale-down/.test(s["object-fit"])?(e[n].i||(e[n].i=new Image,e[n].i.src=c),function t(){return e[n].i.naturalWidth?void(e[n].i.naturalWidth>e.width||e[n].i.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"):void setTimeout(t,100)}()):e.style.backgroundSize=s["object-fit"].replace("none","auto").replace("fill","100% 100%")}}function r(t){var r={get:function(){return t[n].s},set:function(r){return delete t[n].i,e(t,r),r}};Object.defineProperty(t,"src",r),Object.defineProperty(t,"currentSrc",{get:r.get})}function i(){a||(HTMLImageElement.prototype.getAttribute=function(t){return!this[n]||"src"!==t&&"srcset"!==t?f.call(this,t):this[n][t+"Attr"]},HTMLImageElement.prototype.setAttribute=function(t,e){!this[n]||"src"!==t&&"srcset"!==t?g.call(this,t,e):this["src"===t?"src":t+"Attr"]=String(e)})}function s(t,r){var i=!A&&!t;if(r=r||{},t=t||"img",a&&!r.skipTest)return!1;"string"==typeof t?t=document.querySelectorAll("img"):"length"in t&&(t=[t]);for(var c=0;c<t.length;c++)t[c][n]=t[c][n]||r,e(t[c]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&s(t.target,{skipTest:r.skipTest})},!0),A=!0,t="img"),r.watchMQ&&window.addEventListener("resize",s.bind(null,t,{skipTest:r.skipTest}))}var n="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",c=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,o=new Image,l="object-fit"in o.style,a="object-position"in o.style,u="string"==typeof o.currentSrc,f=o.getAttribute,g=o.setAttribute,A=!1;return s.supportsObjectFit=l,s.supportsObjectPosition=a,i(),s}();
	if ($('html').hasClass('is-ie')) {
		objectFitImages('.home-banner-img', {watchMQ: true});
	}
})($, window, undefined);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
*/
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;}});
