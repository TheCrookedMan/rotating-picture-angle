!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,i){var r;(function(){var i=!1,o=function(e){return e instanceof o?e:this instanceof o?void(this.EXIFwrapped=e):new o(e)};e.exports&&(t=e.exports=o),t.EXIF=o;var a=o.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},s=o.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},l=o.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},u=o.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},c=o.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function d(e){return!!e.exifdata}function g(e,t){function n(n){var r=f(n);e.exifdata=r||{};var a=function(e){var t=new DataView(e);i&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,o=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;n<r;){if(o(t,n)){var a=t.getUint8(n+7);a%2!=0&&(a+=1),0===a&&(a=4);var s=n+8+a,l=t.getUint16(n+6+a);return m(e,s,l)}n++}}(n);if(e.iptcdata=a||{},o.isXmpEnabled){var s=function(e){if(!("DOMParser"in self))return;var t=new DataView(e);i&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,o=new DOMParser;for(;n<r-4;){if("http"==F(t,n,4)){var a=n-1,s=t.getUint16(n-2)-1,l=F(t,a,s),u=l.indexOf("xmpmeta>")+8,c=(l=l.substring(l.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;l=l.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(c);var d=o.parseFromString(l,"text/xml");return y(d)}n++}}(n);e.xmpdata=s||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src))n(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),i=n.length,r=new ArrayBuffer(i),o=new Uint8Array(r),a=0;a<i;a++)o[a]=n.charCodeAt(a);return r}(e.src));else if(/^blob\:/i.test(e.src)){(a=new FileReader).onload=function(e){n(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(e.src,function(e){a.readAsArrayBuffer(e)})}else{var r=new XMLHttpRequest;r.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(r.response),r=null},r.open("GET",e.src,!0),r.responseType="arraybuffer",r.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var a;(a=new FileReader).onload=function(e){i&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},a.readAsArrayBuffer(e)}}function f(e){var t=new DataView(e);if(i&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;for(var n,r=2,o=e.byteLength;r<o;){if(255!=t.getUint8(r))return i&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),i&&console.log(n),225==n)return i&&console.log("Found 0xFFE1 marker"),b(t,r+4,t.getUint16(r+2));r+=2+t.getUint16(r+2)}}var h={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function m(e,t,n){for(var i,r,o,a,s=new DataView(e),l={},u=t;u<t+n;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(a=s.getUint8(u+2))in h&&((o=s.getInt16(u+3))+5,r=h[a],i=F(s,u+5,o),l.hasOwnProperty(r)?l[r]instanceof Array?l[r].push(i):l[r]=[l[r],i]:l[r]=i),u++;return l}function p(e,t,n,r,o){var a,s,l,u=e.getUint16(n,!o),c={};for(l=0;l<u;l++)a=n+12*l+2,!(s=r[e.getUint16(a,!o)])&&i&&console.log("Unknown tag: "+e.getUint16(a,!o)),c[s]=S(e,a,t,n,o);return c}function S(e,t,n,i,r){var o,a,s,l,u,c,d=e.getUint16(t+2,!r),g=e.getUint32(t+4,!r),f=e.getUint32(t+8,!r)+n;switch(d){case 1:case 7:if(1==g)return e.getUint8(t+8,!r);for(o=g>4?f:t+8,a=[],l=0;l<g;l++)a[l]=e.getUint8(o+l);return a;case 2:return F(e,o=g>4?f:t+8,g-1);case 3:if(1==g)return e.getUint16(t+8,!r);for(o=g>2?f:t+8,a=[],l=0;l<g;l++)a[l]=e.getUint16(o+2*l,!r);return a;case 4:if(1==g)return e.getUint32(t+8,!r);for(a=[],l=0;l<g;l++)a[l]=e.getUint32(f+4*l,!r);return a;case 5:if(1==g)return u=e.getUint32(f,!r),c=e.getUint32(f+4,!r),(s=new Number(u/c)).numerator=u,s.denominator=c,s;for(a=[],l=0;l<g;l++)u=e.getUint32(f+8*l,!r),c=e.getUint32(f+4+8*l,!r),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==g)return e.getInt32(t+8,!r);for(a=[],l=0;l<g;l++)a[l]=e.getInt32(f+4*l,!r);return a;case 10:if(1==g)return e.getInt32(f,!r)/e.getInt32(f+4,!r);for(a=[],l=0;l<g;l++)a[l]=e.getInt32(f+8*l,!r)/e.getInt32(f+4+8*l,!r);return a}}function F(e,t,i){var r="";for(n=t;n<t+i;n++)r+=String.fromCharCode(e.getUint8(n));return r}function b(e,t){if("Exif"!=F(e,t,4))return i&&console.log("Not valid EXIF data! "+F(e,t,4)),!1;var n,r,o,d,g,f=t+6;if(18761==e.getUint16(f))n=!1;else{if(19789!=e.getUint16(f))return i&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(f+2,!n))return i&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var h=e.getUint32(f+4,!n);if(h<8)return i&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(f+4,!n)),!1;if((r=p(e,f,f+h,s,n)).ExifIFDPointer)for(o in d=p(e,f,f+r.ExifIFDPointer,a,n)){switch(o){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":d[o]=c[o][d[o]];break;case"ExifVersion":case"FlashpixVersion":d[o]=String.fromCharCode(d[o][0],d[o][1],d[o][2],d[o][3]);break;case"ComponentsConfiguration":d[o]=c.Components[d[o][0]]+c.Components[d[o][1]]+c.Components[d[o][2]]+c.Components[d[o][3]]}r[o]=d[o]}if(r.GPSInfoIFDPointer)for(o in g=p(e,f,f+r.GPSInfoIFDPointer,l,n)){switch(o){case"GPSVersionID":g[o]=g[o][0]+"."+g[o][1]+"."+g[o][2]+"."+g[o][3]}r[o]=g[o]}return r.thumbnail=function(e,t,n,i){var r=function(e,t,n){var i=e.getUint16(t,!n);return e.getUint32(t+2+12*i,!n)}(e,t+n,i);if(!r)return{};if(r>e.byteLength)return{};var o=p(e,t,t+r,u,i);if(o.Compression)switch(o.Compression){case 6:if(o.JpegIFOffset&&o.JpegIFByteCount){var a=t+o.JpegIFOffset,s=o.JpegIFByteCount;o.blob=new Blob([new Uint8Array(e.buffer,a,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",o.Compression)}else 2==o.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return o}(e,f,h,n),r}function P(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var i=e.attributes.item(n);t["@attributes"][i.nodeName]=i.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r++){var o=e.childNodes.item(r),a=o.nodeName;if(null==t[a])t[a]=P(o);else{if(null==t[a].push){var s=t[a];t[a]=[],t[a].push(s)}t[a].push(P(o))}}return t}function y(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var i=e.children.item(n),r=i.attributes;for(var o in r){var a=r[o],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var u=i.nodeName;if(void 0===t[u])t[u]=P(i);else{if(void 0===t[u].push){var c=t[u];t[u]=[],t[u].push(c)}t[u].push(P(i))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}o.enableXmp=function(){o.isXmpEnabled=!0},o.disableXmp=function(){o.isXmpEnabled=!1},o.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(d(e)?t&&t.call(e):g(e,t),!0)},o.getTag=function(e,t){if(d(e))return e.exifdata[t]},o.getIptcTag=function(e,t){if(d(e))return e.iptcdata[t]},o.getAllTags=function(e){if(!d(e))return{};var t,n=e.exifdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},o.getAllIptcTags=function(e){if(!d(e))return{};var t,n=e.iptcdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},o.pretty=function(e){if(!d(e))return"";var t,n=e.exifdata,i="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?i+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":i+=t+" : ["+n[t].length+" values]\r\n":i+=t+" : "+n[t]+"\r\n");return i},o.readFromBinaryFile=function(e){return f(e)},void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}).call(this)},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i);function o(e,t){this.imgFile=e,this.callback=t,this.init()}o.prototype.init=function(){let e=null,t=document.createElement("canvas"),n=t.getContext("2d"),i=Math.PI/180,o=this;r.a.getData(this.imgFile,function(){switch(e=r.a.getTag(this,"Orientation")){case 3:t.width=o.imgFile.width,t.height=o.imgFile.height,n.transform(Math.cos(Math.PI),Math.sin(Math.PI),-Math.sin(Math.PI),Math.cos(Math.PI),o.imgFile.width,o.imgFile.height),n.drawImage(o.imgFile,0,0,o.imgFile.width,o.imgFile.height),o.callback(t.toDataURL());break;case 6:t.width=o.imgFile.height,t.height=o.imgFile.width,n.transform(Math.cos(90*i),Math.sin(90*i),-Math.sin(90*i),Math.cos(90*i),o.imgFile.height,0),n.drawImage(o.imgFile,0,0,o.imgFile.width,o.imgFile.height),o.callback(t.toDataURL());break;case 8:t.width=o.imgFile.height,t.height=o.imgFile.width,n.transform(Math.cos(270*i),Math.sin(270*i),-Math.sin(270*i),Math.cos(270*i),0,o.imgFile.width),n.drawImage(o.imgFile,0,0,o.imgFile.width,o.imgFile.height),o.callback(t.toDataURL());break;default:o.callback(o.imgFile)}})},t.default=o}]);