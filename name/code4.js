gdjs.IntorductionCode = {};
gdjs.IntorductionCode.GDNewTextObjects1= [];
gdjs.IntorductionCode.GDNewTextObjects2= [];
gdjs.IntorductionCode.GDNewText2Objects1= [];
gdjs.IntorductionCode.GDNewText2Objects2= [];
gdjs.IntorductionCode.GDNewSpriteObjects1= [];
gdjs.IntorductionCode.GDNewSpriteObjects2= [];
gdjs.IntorductionCode.GDNewSprite2Objects1= [];
gdjs.IntorductionCode.GDNewSprite2Objects2= [];
gdjs.IntorductionCode.GDNewText3Objects1= [];
gdjs.IntorductionCode.GDNewText3Objects2= [];


gdjs.IntorductionCode.mapOfGDgdjs_9546IntorductionCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.IntorductionCode.GDNewSpriteObjects1});
gdjs.IntorductionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IntorductionCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntorductionCode.mapOfGDgdjs_9546IntorductionCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introduction2", false);
}}

}


};

gdjs.IntorductionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntorductionCode.GDNewTextObjects1.length = 0;
gdjs.IntorductionCode.GDNewTextObjects2.length = 0;
gdjs.IntorductionCode.GDNewText2Objects1.length = 0;
gdjs.IntorductionCode.GDNewText2Objects2.length = 0;
gdjs.IntorductionCode.GDNewSpriteObjects1.length = 0;
gdjs.IntorductionCode.GDNewSpriteObjects2.length = 0;
gdjs.IntorductionCode.GDNewSprite2Objects1.length = 0;
gdjs.IntorductionCode.GDNewSprite2Objects2.length = 0;
gdjs.IntorductionCode.GDNewText3Objects1.length = 0;
gdjs.IntorductionCode.GDNewText3Objects2.length = 0;

gdjs.IntorductionCode.eventsList0(runtimeScene);

return;

}

gdjs['IntorductionCode'] = gdjs.IntorductionCode;
