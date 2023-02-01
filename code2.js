gdjs.CreditsCode = {};
gdjs.CreditsCode.GDNewSpriteObjects1= [];
gdjs.CreditsCode.GDNewSpriteObjects2= [];
gdjs.CreditsCode.GDNewTextObjects1= [];
gdjs.CreditsCode.GDNewTextObjects2= [];
gdjs.CreditsCode.GDPlayButtonObjects1= [];
gdjs.CreditsCode.GDPlayButtonObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.CreditsCode.GDPlayButtonObjects1});
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.CreditsCode.GDPlayButtonObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;
gdjs.CreditsCode.GDPlayButtonObjects1.length = 0;
gdjs.CreditsCode.GDPlayButtonObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);

return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
