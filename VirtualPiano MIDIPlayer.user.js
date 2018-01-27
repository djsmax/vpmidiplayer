// ==UserScript==
// @name         VirtualPiano MIDIPlayer
// @namespace    http://virtualpiano.net/
// @version      1.0
// @description  play in VP automatically!
// @author       djsmax
// @include      https://virtualpiano.net/
// @grant        none
// ==/UserScript==

(function (window, undefined) {
    var w;
    if (typeof unsafeWindow !== 'undefined') {
        w = unsafeWindow;
    } else {
        w = window;
    }
    if (w.self != w.top) {
        return;
    }
    if (/https:\/\/virtualpiano.net/.test(w.location.href)) {
        var ap =  document.getElementById('Menu');
        var nbtn = document.createElement('div');
        nbtn.id = 'MIDPlay';
        nbtn.className = 'tabcontent';
        nbtn.style = 'display: none;';
        nbtn.innerHTML = '<div class="playlabel">PLAY MIDI</div>\n<div class="msglabel"><input type=\"file\" id=\"MIDimport\" accept=\"audio/mid\" onchange=\"PMAopenFile(event)\"><select id="MIDSelect" onchange = "onMIDTrChange()" style="display: none;"></select><input type="button" id = "MIDbtn" value = "❚❚" onclick="MIDchtrack()" style="display: none;"></input>&nbsp;&nbsp;<input type="button" id = "MIDreplay" value = "⟳" onclick="MIDTryAgain(false)" style="display: none;"></input></div>';
        ap.parentNode.insertBefore(nbtn,ap);
        document.getElementsByClassName('tabpiano')[0].innerHTML += '<button class="tablinks" onclick="openCity(event, \'MIDPlay\')" id="defaultOpen">PLAY MIDI</button>';
        var opl = 'var nts={24:\'a49\',25:\'b49\',26:\'a50\',27:\'b50\',28:\'a51\',29:\'a52\',30:\'b52\',31:\'a53\',32:\'b53\',33:\'a54\',34:\'b54\',35:\'a55\',36:\'a56\',37:\'b56\',38:\'a57\',39:\'b57\',40:\'a48\',41:\'a81\',42:\'b81\',43:\'a87\',44:\'b87\',45:\'a69\',46:\'b69\',47:\'a82\',48:\'a84\',49:\'b84\',50:\'a89\',51:\'b89\',52:\'a85\',53:\'a73\',54:\'b73\',55:\'a79\',56:\'b79\',57:\'a80\',58:\'b80\',59:\'a65\',60:\'a83\',61:\'b83\',62:\'a68\',63:\'b68\',64:\'a70\',65:\'a71\',66:\'b71\',67:\'a72\',68:\'b72\',69:\'a74\',70:\'b74\',71:\'a75\',72:\'a76\',73:\'b76\',74:\'a90\',75:\'b90\',76:\'a88\',77:\'a67\',78:\'b67\',79:\'a86\',80:\'b86\',81:\'a66\',82:\'b66\',83:\'a78\',84:\'a77\'};MPstop=!1;MPtransope=0;var PMAopenFile=function(event){var input=event.target;var reader=new FileReader();reader.onload=function(){oc=MIDIParser.parse(reader.result);document.getElementById(\'MIDbtn\').style=\'visibility: visible;\';document.getElementById(\'MIDreplay\').style=\'visibility: visible;\';document.getElementById(\'MIDimport\').style=\'display: none;\';mp_tempo=(60*1000000)/oc.timeDivision;if(oc.tracks>1){MIDTrackSelect(oc)}else{songPlay(oc.track[0].event,mp_tempo)}};reader.readAsDataURL(input.files[0])};async function songPlay(track,tempo){for(var i=0;i<track.length;i++){if(MPstop==!0){mv_track=track.slice(i);mv_tempo=tempo;break};var msg=track[i];var ticks_per_beat=480;if(msg.type==9&&msg.data[1]!=0&&msg.data[0]!=0){if(nts[msg.data[0]+MPtransope*12].charAt(0)==\'a\'){var o=1}else{var o=3}\npiano.music(nts[msg.data[0]+MPtransope*12],o);await Tsleep(msg.deltaTime*tempo*1e-6/ticks_per_beat*1000)}else if(msg.type==8){await Tsleep(msg.deltaTime*tempo*1e-6/ticks_per_beat*1000)}else if(msg.type==255&&msg.metaType==81){var tempo=msg.data}};if(MPstop==!1){MIDTryAgain(!0)}}\nfunction Tsleep(ms){return new Promise(resolve=>setTimeout(resolve,ms))}\nfunction MIDchtrack(){var Mdcontrol_btn=document.getElementById(\'MIDbtn\');if(Mdcontrol_btn.value==\'►\'){MPstop=!1;songPlay(mv_track,mv_tempo);Mdcontrol_btn.value=\'❚❚\'}else{MPstop=!0;Mdcontrol_btn.value=\'►\'}}\nasync function MIDTryAgain(ended){if(ended==!1){MPstop=!0;await Tsleep(500)}\ndocument.getElementById(\'MIDbtn\').style=\'display: none;\';document.getElementById(\'MIDbtn\').value=\'❚❚\';document.getElementById(\'MIDreplay\').style=\'display: none;\';document.getElementById(\'MIDimport\').style=\'visibility: visible;\';mv_track=undefined;mv_tempo=0;MPstop=!1}\nfunction MIDTrackSelect(mfile){document.getElementById(\'MIDbtn\').style=\'display: none;\';document.getElementById(\'MIDreplay\').style=\'display: none;\';document.getElementById(\'MIDimport\').style=\'display: none;\';var midiselector=document.getElementById(\'MIDSelect\');midiselector.innerHTML=\'\';midiselector.style=\'visibility: visible;\';midiselector.va\nfor(var i=0;i<mfile.tracks;i++){var q=document.createElement(\'option\');q.value=\'Mtrack\'+i;q.text="Track #"+i+" ("+mfile.track[i].event[0].data+")";midiselector.appendChild(q)}}\nfunction onMIDTrChange(){var c=document.getElementById(\'MIDSelect\');var value=c.value.substr(6);c.style=\'display: none;\';document.getElementById(\'MIDbtn\').style=\'visibility: visible;\';document.getElementById(\'MIDreplay\').style=\'visibility: visible;\';document.getElementById(\'MIDimport\').style=\'display: none;\';songPlay(oc.track[value].event,mp_tempo)}';
        var jsmdf = document.createElement('script');
        jsmdf.src = 'https://cdn.jsdelivr.net/gh/colxi/midi-parser-js@2.1.2/src/midi-parser.min.js';
        document.head.appendChild(jsmdf);
        var jsmmp = document.createElement('script');
        jsmmp.innerHTML = opl;
        document.head.appendChild(jsmmp);
    }
})(window);

