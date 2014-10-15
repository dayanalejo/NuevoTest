Alloy.Globals.Map = require('ti.map');

Alloy.Globals.mapview = $.mapview;
Alloy.Globals.locwindow = Alloy.createController('localities').getView();
Alloy.Globals.openWindows = {map: true, loc: false};

function doClick(e) {
    alert($.label.text);
}

if(Ti.app.deployType== "test")
	{
	
	require ("pecs/test-spec-1");
	require("behave").run(this);
	}


$.index.open();