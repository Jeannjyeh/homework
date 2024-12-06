gdjs.Wrong_32answerCode = {};
gdjs.Wrong_32answerCode.GDNewSpriteObjects1= [];
gdjs.Wrong_32answerCode.GDNewSpriteObjects2= [];
gdjs.Wrong_32answerCode.GDNewTextObjects1= [];
gdjs.Wrong_32answerCode.GDNewTextObjects2= [];
gdjs.Wrong_32answerCode.GDNewText2Objects1= [];
gdjs.Wrong_32answerCode.GDNewText2Objects2= [];
gdjs.Wrong_32answerCode.GDNewSprite2Objects1= [];
gdjs.Wrong_32answerCode.GDNewSprite2Objects2= [];


gdjs.Wrong_32answerCode.mapOfGDgdjs_9546Wrong_959532answerCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Wrong_32answerCode.GDNewSprite2Objects1});
gdjs.Wrong_32answerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Wrong_32answerCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Wrong_32answerCode.mapOfGDgdjs_9546Wrong_959532answerCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.Wrong_32answerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Wrong_32answerCode.GDNewSpriteObjects1.length = 0;
gdjs.Wrong_32answerCode.GDNewSpriteObjects2.length = 0;
gdjs.Wrong_32answerCode.GDNewTextObjects1.length = 0;
gdjs.Wrong_32answerCode.GDNewTextObjects2.length = 0;
gdjs.Wrong_32answerCode.GDNewText2Objects1.length = 0;
gdjs.Wrong_32answerCode.GDNewText2Objects2.length = 0;
gdjs.Wrong_32answerCode.GDNewSprite2Objects1.length = 0;
gdjs.Wrong_32answerCode.GDNewSprite2Objects2.length = 0;

gdjs.Wrong_32answerCode.eventsList0(runtimeScene);

return;

}

gdjs['Wrong_32answerCode'] = gdjs.Wrong_32answerCode;
