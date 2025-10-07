loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

	
	(Animation = function(){
      var manifest = [
		{src:"images/media_10312.png", id:"media_10312"}
	];
       return manifest;                        
});