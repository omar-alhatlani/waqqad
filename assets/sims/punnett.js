/* ============================================================
   محاكاة تفاعلية — مربّع بانيت (توقّع الصفات الوراثية)
   لكلّ أبٍ أليلان (حرفٌ كبيرٌ للسائد، صغيرٌ للمتنحّي). يوزّع مربّعُ
   بانيت أليلاتِ الأبوين على الأبناء، فنقرأ النمطين الجيني والظاهري.
   الاستعمال من المحرّك:  window.SIMS['punnett'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['punnett'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function geno(g){ return g.split('').sort(function(a,b){ return (a==='A'?0:1)-(b==='A'?0:1); }).join(''); }

  var GENOS=[['AA','نقيّ سائد'],['Aa','هجين'],['aa','نقيّ متنحّي']];
  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مربّع بانيت لأبناء أبوين">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit js-stage" style="aspect-ratio:auto;min-height:210px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:9px;padding:12px"></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">النمط الظاهري:</span><span class="wq-val js-phen">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl" style="gap:4px"><div class="wq-sllabel"><span>الأب</span><b class="js-p1v">Aa</b></div>'+
            '<div class="wq-quick"><button type="button" class="wq-qbtn js-p1" data-g="AA">AA</button><button type="button" class="wq-qbtn js-p1" data-g="Aa" aria-pressed="true">Aa</button><button type="button" class="wq-qbtn js-p1" data-g="aa">aa</button></div></div>'+
          '<div class="wq-sl" style="gap:4px"><div class="wq-sllabel"><span>الأم</span><b class="js-p2v">Aa</b></div>'+
            '<div class="wq-quick"><button type="button" class="wq-qbtn js-p2" data-g="AA">AA</button><button type="button" class="wq-qbtn js-p2" data-g="Aa" aria-pressed="true">Aa</button><button type="button" class="wq-qbtn js-p2" data-g="aa">aa</button></div></div>'+
          '<div class="wq-eq"><span class="wq-eqt">النمط الجيني (النِّسبة)</span><div class="wq-eqv"><span class="js-gtype">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">سائد (أخضر)</div><div class="wq-v js-dom">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">متنحٍّ (أصفر)</div><div class="wq-v js-rec">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">مربّع بانيت</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var stage=q('.js-stage'), elPhen=q('.js-phen'), elIc=q('.js-ic'), elX=q('.js-etext');
    var p1='Aa', p2='Aa';
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function refresh(){
      var f=p1.split(''), m=p2.split('');
      var green=css('--s-ar-soft','#E8F5EE'), greenD=css('--s-ar-deep','#1F7D52');
      var yellow='rgba(244,183,64,.20)', yellowD=css('--ember-deep','#E4681B');
      var ln=css('--line-strong','#D6D9EC'), mu=css('--muted','#7C82A8');
      var cnt={AA:0,Aa:0,aa:0}, dom=0, rec=0, cells='';
      for(var r=0;r<2;r++){ for(var c=0;c<2;c++){ var g=geno(f[c]+m[r]); cnt[g]++;
        var isDom=g.indexOf('A')>=0; if(isDom) dom++; else rec++;
        cells+='<td style="border:1.5px solid '+ln+';width:40px;height:40px;text-align:center;font-weight:800;font-size:16px;background:'+(isDom?green:yellow)+';color:'+(isDom?greenD:yellowD)+'">'+g+'</td>'; } }
      // بناء الجدول: زاوية + أليلا الأب أعلى، أليلا الأم يسار
      var hd='style="width:40px;height:26px;text-align:center;font-weight:800;color:'+css('--ink','#1C2143')+';font-size:15px"';
      var mhd='style="width:26px;text-align:center;font-weight:800;color:'+css('--ink','#1C2143')+';font-size:15px"';
      var rows=''; var idx=0;
      for(var rr=0;rr<2;rr++){ var rowCells=''; for(var cc=0;cc<2;cc++){ var g=geno(f[cc]+m[rr]); var isDom=g.indexOf('A')>=0;
          rowCells+='<td style="border:1.5px solid '+ln+';width:42px;height:42px;text-align:center;font-weight:800;font-size:16px;background:'+(isDom?green:yellow)+';color:'+(isDom?greenD:yellowD)+'">'+g+'</td>'; }
        rows+='<tr><td '+mhd+'>'+m[rr]+'</td>'+rowCells+'</tr>'; }
      stage.innerHTML =
        '<div style="font-weight:700;font-size:13px;color:'+mu+'">الأب <b style="color:'+css('--ink','#1C2143')+'">'+p1+'</b> × الأم <b style="color:'+css('--ink','#1C2143')+'">'+p2+'</b></div>'+
        '<table style="border-collapse:collapse"><tr><td '+mhd+'></td><td '+hd+'>'+f[0]+'</td><td '+hd+'>'+f[1]+'</td></tr>'+rows+'</table>'+
        '<div style="font-size:11.5px;color:'+mu+'"><b style="color:'+greenD+'">A</b> = أخضر (سائد) · <b style="color:'+yellowD+'">a</b> = أصفر (متنحّي)</div>';
      // القراءات والنِّسَب
      function ratio(){ var parts=[]; if(cnt.AA)parts.push(toAr(cnt.AA)+' AA'); if(cnt.Aa)parts.push(toAr(cnt.Aa)+' Aa'); if(cnt.aa)parts.push(toAr(cnt.aa)+' aa'); return parts.join(' : '); }
      q('.js-gtype').textContent=ratio();
      q('.js-dom').textContent=toAr(dom)+' من ٤'; q('.js-rec').textContent=toAr(rec)+' من ٤';
      elPhen.textContent = (dom&&rec)? (toAr(dom)+' سائد : '+toAr(rec)+' متنحٍّ') : (dom? 'الكلّ سائد':'الكلّ متنحٍّ');
      elPhen.style.color=css('--s-ar-deep','#1F7D52');
      q('.js-p1v').textContent=p1; q('.js-p2v').textContent=p2;
      qa('.js-p1').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-g')===p1?'true':'false'); });
      qa('.js-p2').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-g')===p2?'true':'false'); });
      elIc.style.background=css('--s-ar-deep','#1F7D52'); elIc.innerHTML=ICN;
      elX.innerHTML='كلُّ أبٍ يعطي <b>أليلًا واحدًا</b> لكلِّ ابن. يوزّع المربّعُ أليلَي الأب (أعلى) على أليلَي الأم (يسار)، فتظهر الاحتمالاتُ الأربعة. الابنُ يكون <b>سائدًا</b> إذا حَمل <b>A</b> واحدًا على الأقل، و<b>متنحّيًا</b> فقط إذا كان <b>aa</b>. الهجينُ (Aa) × الهجين يعطي <b>٣ سائد : ١ متنحٍّ</b>.';
    }
    qa('.js-p1').forEach(function(b){ b.addEventListener('click', function(){ p1=b.getAttribute('data-g'); refresh(); }); });
    qa('.js-p2').forEach(function(b){ b.addEventListener('click', function(){ p2=b.getAttribute('data-g'); refresh(); }); });
    q('.js-reset').onclick=function(){ p1='Aa'; p2='Aa'; refresh(); };
    ['.js-p1v','.js-p2v','.js-gtype'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    refresh();
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
