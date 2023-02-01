gdjs.GameCode = {};
gdjs.GameCode.GDBorderObjects1_1final = [];

gdjs.GameCode.GDBottom_95pipeObjects1_1final = [];

gdjs.GameCode.GDFlappy_95birdObjects1_1final = [];

gdjs.GameCode.GDGroundObjects1_1final = [];

gdjs.GameCode.GDTop_95pipeObjects1_1final = [];

gdjs.GameCode.GDFlappy_95birdObjects1= [];
gdjs.GameCode.GDFlappy_95birdObjects2= [];
gdjs.GameCode.GDFlappy_95birdObjects3= [];
gdjs.GameCode.GDFlappy_95birdObjects4= [];
gdjs.GameCode.GDTop_95pipeObjects1= [];
gdjs.GameCode.GDTop_95pipeObjects2= [];
gdjs.GameCode.GDTop_95pipeObjects3= [];
gdjs.GameCode.GDTop_95pipeObjects4= [];
gdjs.GameCode.GDBottom_95pipeObjects1= [];
gdjs.GameCode.GDBottom_95pipeObjects2= [];
gdjs.GameCode.GDBottom_95pipeObjects3= [];
gdjs.GameCode.GDBottom_95pipeObjects4= [];
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects1= [];
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2= [];
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects3= [];
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects4= [];
gdjs.GameCode.GDFlappy_95bird_95scoreObjects1= [];
gdjs.GameCode.GDFlappy_95bird_95scoreObjects2= [];
gdjs.GameCode.GDFlappy_95bird_95scoreObjects3= [];
gdjs.GameCode.GDFlappy_95bird_95scoreObjects4= [];
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects1= [];
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2= [];
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects3= [];
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects4= [];
gdjs.GameCode.GDMenu_95buttonObjects1= [];
gdjs.GameCode.GDMenu_95buttonObjects2= [];
gdjs.GameCode.GDMenu_95buttonObjects3= [];
gdjs.GameCode.GDMenu_95buttonObjects4= [];
gdjs.GameCode.GDRestart_95buttonObjects1= [];
gdjs.GameCode.GDRestart_95buttonObjects2= [];
gdjs.GameCode.GDRestart_95buttonObjects3= [];
gdjs.GameCode.GDRestart_95buttonObjects4= [];
gdjs.GameCode.GDPanel_95scoreObjects1= [];
gdjs.GameCode.GDPanel_95scoreObjects2= [];
gdjs.GameCode.GDPanel_95scoreObjects3= [];
gdjs.GameCode.GDPanel_95scoreObjects4= [];
gdjs.GameCode.GDBorderObjects1= [];
gdjs.GameCode.GDBorderObjects2= [];
gdjs.GameCode.GDBorderObjects3= [];
gdjs.GameCode.GDBorderObjects4= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDlabel_95game_95overObjects1= [];
gdjs.GameCode.GDlabel_95game_95overObjects2= [];
gdjs.GameCode.GDlabel_95game_95overObjects3= [];
gdjs.GameCode.GDlabel_95game_95overObjects4= [];
gdjs.GameCode.GDInstructionsObjects1= [];
gdjs.GameCode.GDInstructionsObjects2= [];
gdjs.GameCode.GDInstructionsObjects3= [];
gdjs.GameCode.GDInstructionsObjects4= [];
gdjs.GameCode.GDBackground_95dayObjects1= [];
gdjs.GameCode.GDBackground_95dayObjects2= [];
gdjs.GameCode.GDBackground_95dayObjects3= [];
gdjs.GameCode.GDBackground_95dayObjects4= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDNew_95hscoreObjects1= [];
gdjs.GameCode.GDNew_95hscoreObjects2= [];
gdjs.GameCode.GDNew_95hscoreObjects3= [];
gdjs.GameCode.GDNew_95hscoreObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.conditionTrue_2 = {val:false};
gdjs.GameCode.condition0IsTrue_2 = {val:false};
gdjs.GameCode.condition1IsTrue_2 = {val:false};
gdjs.GameCode.condition2IsTrue_2 = {val:false};
gdjs.GameCode.condition3IsTrue_2 = {val:false};
gdjs.GameCode.condition4IsTrue_2 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_95pipeObjects2);
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.GameCode.GDTop_95pipeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTop_95pipeObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95birdObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_95birdObjects2[i].behaviorActivated("SineMovement") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95birdObjects2[k] = gdjs.GameCode.GDFlappy_95birdObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95birdObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95birdObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlappy_95birdObjects2[i].behaviorActivated("SineMovement")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95birdObjects2[k] = gdjs.GameCode.GDFlappy_95birdObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95birdObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_95pipeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_95pipeObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBottom_95pipeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBottom_95pipeObjects1[i].setZOrder(1);
}
for(var i = 0, len = gdjs.GameCode.GDTop_95pipeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTop_95pipeObjects1[i].setZOrder(1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects1Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_95birdObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_95pipeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_95pipeObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBottom_95pipeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBottom_95pipeObjects2[i].addForce(-(100), 0, 0);
}
for(var i = 0, len = gdjs.GameCode.GDTop_95pipeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTop_95pipeObjects2[i].addForce(-(100), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 50, runtimeScene);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.GameCode.condition0IsTrue_2.val ) {
    gdjs.GameCode.conditionTrue_2.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_2.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.GameCode.condition1IsTrue_2.val ) {
    gdjs.GameCode.conditionTrue_2.val = true;
}
}
{
}
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition1IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
gdjs.GameCode.condition1IsTrue_2.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12633404);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.GameCode.GDInstructionsObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_wing.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAngle(320);
}
}{for(var i = 0, len = gdjs.GameCode.GDInstructionsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInstructionsObjects2[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95birdObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_95birdObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95birdObjects2[k] = gdjs.GameCode.GDFlappy_95birdObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95birdObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlappy_95birdObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].rotateTowardAngle(90, 150, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlappy_95birdObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects1[i].rotate(90, runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTop_9595pipeObjects1Objects = Hashtable.newFrom({"Top_pipe": gdjs.GameCode.GDTop_95pipeObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBottom_9595pipeObjects1Objects = Hashtable.newFrom({"Bottom_pipe": gdjs.GameCode.GDBottom_95pipeObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95birdObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlappy_95birdObjects1[i].behaviorActivated("SineMovement")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95birdObjects1[k] = gdjs.GameCode.GDFlappy_95birdObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95birdObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "pipe_spawn");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12639556);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.GameCode.GDBottom_95pipeObjects1.length = 0;

gdjs.GameCode.GDTop_95pipeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTop_9595pipeObjects1Objects, 420, gdjs.randomInRange(70, 320), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBottom_9595pipeObjects1Objects, 420, (( gdjs.GameCode.GDTop_95pipeObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTop_95pipeObjects1[0].getPointY("")) + 120, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}{for(var i = 0, len = gdjs.GameCode.GDTop_95pipeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTop_95pipeObjects1[i].flipX(true);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_hscore"), gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score"), gdjs.GameCode.GDFlappy_95bird_95scoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score_two"), gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95scoreObjects2[i].setOutline("0;0;0", 7);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2[i].setOutline("0;0;0", 2);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2[i].setOutline("0;0;0", 2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score"), gdjs.GameCode.GDFlappy_95bird_95scoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score_two"), gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95scoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_95pipeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_95pipeObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBottom_95pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottom_95pipeObjects2[i].getX() < (( gdjs.GameCode.GDFlappy_95birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_95birdObjects2[0].getPointX("Centre")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBottom_95pipeObjects2[k] = gdjs.GameCode.GDBottom_95pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottom_95pipeObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDTop_95pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTop_95pipeObjects2[i].getX() < (( gdjs.GameCode.GDFlappy_95birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_95birdObjects2[0].getPointX("Centre")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDTop_95pipeObjects2[k] = gdjs.GameCode.GDTop_95pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTop_95pipeObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBottom_95pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottom_95pipeObjects2[i].getX() > (( gdjs.GameCode.GDFlappy_95birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_95birdObjects2[0].getPointX("Centre")) - 60 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBottom_95pipeObjects2[k] = gdjs.GameCode.GDBottom_95pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottom_95pipeObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDTop_95pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTop_95pipeObjects2[i].getX() > (( gdjs.GameCode.GDFlappy_95birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_95birdObjects2[0].getPointX("Centre")) - 60 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDTop_95pipeObjects2[k] = gdjs.GameCode.GDTop_95pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTop_95pipeObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12624404);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_point.wav", false, 100, 1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("score"));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12630316);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("save", "high_score", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("save", "high_score");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_hscore"), gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "high_score", runtimeScene, runtimeScene.getVariables().get("score"));
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("score"))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score_two"), gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2[i].isVisible() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2[k] = gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score"), gdjs.GameCode.GDFlappy_95bird_95scoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95scoreObjects2[i].hide();
}
}}

}


{



}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setXOffset(gdjs.GameCode.GDGroundObjects1[i].getXOffset() + (1.7));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_95birdObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBorderObjects2Objects = Hashtable.newFrom({"Border": gdjs.GameCode.GDBorderObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_95birdObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_95birdObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBottom_9595pipeObjects2ObjectsGDgdjs_46GameCode_46GDTop_9595pipeObjects2Objects = Hashtable.newFrom({"Bottom_pipe": gdjs.GameCode.GDBottom_95pipeObjects2, "Top_pipe": gdjs.GameCode.GDTop_95pipeObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.GameCode.GDBorderObjects1.length = 0;

gdjs.GameCode.GDBottom_95pipeObjects1.length = 0;

gdjs.GameCode.GDFlappy_95birdObjects1.length = 0;

gdjs.GameCode.GDGroundObjects1.length = 0;

gdjs.GameCode.GDTop_95pipeObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.GDBorderObjects1_1final.length = 0;gdjs.GameCode.GDBottom_95pipeObjects1_1final.length = 0;gdjs.GameCode.GDFlappy_95birdObjects1_1final.length = 0;gdjs.GameCode.GDGroundObjects1_1final.length = 0;gdjs.GameCode.GDTop_95pipeObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GameCode.GDBorderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBorderObjects2Objects, false, runtimeScene, false);
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBorderObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBorderObjects1_1final.indexOf(gdjs.GameCode.GDBorderObjects2[j]) === -1 )
            gdjs.GameCode.GDBorderObjects1_1final.push(gdjs.GameCode.GDBorderObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDFlappy_95birdObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDFlappy_95birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_95birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_95birdObjects1_1final.push(gdjs.GameCode.GDFlappy_95birdObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects2Objects, false, runtimeScene, false);
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDFlappy_95birdObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDFlappy_95birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_95birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_95birdObjects1_1final.push(gdjs.GameCode.GDFlappy_95birdObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDGroundObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDGroundObjects1_1final.indexOf(gdjs.GameCode.GDGroundObjects2[j]) === -1 )
            gdjs.GameCode.GDGroundObjects1_1final.push(gdjs.GameCode.GDGroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_95pipeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_95pipeObjects2);
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBottom_9595pipeObjects2ObjectsGDgdjs_46GameCode_46GDTop_9595pipeObjects2Objects, false, runtimeScene, false);
if( gdjs.GameCode.condition2IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBottom_95pipeObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBottom_95pipeObjects1_1final.indexOf(gdjs.GameCode.GDBottom_95pipeObjects2[j]) === -1 )
            gdjs.GameCode.GDBottom_95pipeObjects1_1final.push(gdjs.GameCode.GDBottom_95pipeObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDFlappy_95birdObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDFlappy_95birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_95birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_95birdObjects1_1final.push(gdjs.GameCode.GDFlappy_95birdObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDTop_95pipeObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDTop_95pipeObjects1_1final.indexOf(gdjs.GameCode.GDTop_95pipeObjects2[j]) === -1 )
            gdjs.GameCode.GDTop_95pipeObjects1_1final.push(gdjs.GameCode.GDTop_95pipeObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBorderObjects1_1final, gdjs.GameCode.GDBorderObjects1);
gdjs.copyArray(gdjs.GameCode.GDBottom_95pipeObjects1_1final, gdjs.GameCode.GDBottom_95pipeObjects1);
gdjs.copyArray(gdjs.GameCode.GDFlappy_95birdObjects1_1final, gdjs.GameCode.GDFlappy_95birdObjects1);
gdjs.copyArray(gdjs.GameCode.GDGroundObjects1_1final, gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(gdjs.GameCode.GDTop_95pipeObjects1_1final, gdjs.GameCode.GDTop_95pipeObjects1);
}
}
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8124660);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_hit.wav", false, 100, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlashObjects2Objects = Hashtable.newFrom({"Flash": gdjs.GameCode.GDFlashObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPanel_9595scoreObjects2Objects = Hashtable.newFrom({"Panel_score": gdjs.GameCode.GDPanel_95scoreObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlabel_9595game_9595overObjects2Objects = Hashtable.newFrom({"label_game_over": gdjs.GameCode.GDlabel_95game_95overObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNew_9595hscoreObjects2Objects = Hashtable.newFrom({"New_hscore": gdjs.GameCode.GDNew_95hscoreObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMenu_9595buttonObjects2Objects = Hashtable.newFrom({"Menu_button": gdjs.GameCode.GDMenu_95buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRestart_9595buttonObjects2Objects = Hashtable.newFrom({"Restart_button": gdjs.GameCode.GDRestart_95buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595bird_9595hscoreObjects2Objects = Hashtable.newFrom({"Flappy_bird_hscore": gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595bird_9595score_9595twoObjects2Objects = Hashtable.newFrom({"Flappy_bird_score_two": gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMenu_9595buttonObjects2Objects = Hashtable.newFrom({"Menu_button": gdjs.GameCode.GDMenu_95buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRestart_9595buttonObjects1Objects = Hashtable.newFrom({"Restart_button": gdjs.GameCode.GDRestart_95buttonObjects1});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8127060);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDFlashObjects2.length = 0;

gdjs.GameCode.GDPanel_95scoreObjects2.length = 0;

gdjs.GameCode.GDlabel_95game_95overObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlashObjects2Objects, 0, 0, "Gameover");
}{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").Flash(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPanel_9595scoreObjects2Objects, 90, 220, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlabel_9595game_9595overObjects2Objects, 130, 140, "Gameover");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Panel_score"), gdjs.GameCode.GDPanel_95scoreObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPanel_95scoreObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPanel_95scoreObjects2[i].getY() > 240 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPanel_95scoreObjects2[k] = gdjs.GameCode.GDPanel_95scoreObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPanel_95scoreObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8129980);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.GameCode.GDNew_95hscoreObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNew_9595hscoreObjects2Objects, 230, 300, "Gameover");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("New_hscore"), gdjs.GameCode.GDNew_95hscoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDNew_95hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDNew_95hscoreObjects2[i].setZOrder(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flash"), gdjs.GameCode.GDFlashObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlashObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").IsFlashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlashObjects2[k] = gdjs.GameCode.GDFlashObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlashObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlashObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panel_score"), gdjs.GameCode.GDPanel_95scoreObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPanel_95scoreObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPanel_95scoreObjects2[i].getY() > 240 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPanel_95scoreObjects2[k] = gdjs.GameCode.GDPanel_95scoreObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPanel_95scoreObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8131884);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPanel_95scoreObjects2 */
gdjs.copyArray(runtimeScene.getObjects("label_game_over"), gdjs.GameCode.GDlabel_95game_95overObjects2);
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2.length = 0;

gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2.length = 0;

gdjs.GameCode.GDMenu_95buttonObjects2.length = 0;

gdjs.GameCode.GDRestart_95buttonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMenu_9595buttonObjects2Objects, 80, 400, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRestart_9595buttonObjects2Objects, 165, 420, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595bird_9595hscoreObjects2Objects, 255, 316, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595bird_9595score_9595twoObjects2Objects, 255, 271, "Gameover");
}{for(var i = 0, len = gdjs.GameCode.GDPanel_95scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPanel_95scoreObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDlabel_95game_95overObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDlabel_95game_95overObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2[i].setZOrder(20);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2[i].setZOrder(20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_button"), gdjs.GameCode.GDMenu_95buttonObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMenu_9595buttonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart_button"), gdjs.GameCode.GDRestart_95buttonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRestart_9595buttonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDFlappy_95birdObjects1.length = 0;
gdjs.GameCode.GDFlappy_95birdObjects2.length = 0;
gdjs.GameCode.GDFlappy_95birdObjects3.length = 0;
gdjs.GameCode.GDFlappy_95birdObjects4.length = 0;
gdjs.GameCode.GDTop_95pipeObjects1.length = 0;
gdjs.GameCode.GDTop_95pipeObjects2.length = 0;
gdjs.GameCode.GDTop_95pipeObjects3.length = 0;
gdjs.GameCode.GDTop_95pipeObjects4.length = 0;
gdjs.GameCode.GDBottom_95pipeObjects1.length = 0;
gdjs.GameCode.GDBottom_95pipeObjects2.length = 0;
gdjs.GameCode.GDBottom_95pipeObjects3.length = 0;
gdjs.GameCode.GDBottom_95pipeObjects4.length = 0;
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects1.length = 0;
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects2.length = 0;
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects3.length = 0;
gdjs.GameCode.GDFlappy_95bird_95score_95twoObjects4.length = 0;
gdjs.GameCode.GDFlappy_95bird_95scoreObjects1.length = 0;
gdjs.GameCode.GDFlappy_95bird_95scoreObjects2.length = 0;
gdjs.GameCode.GDFlappy_95bird_95scoreObjects3.length = 0;
gdjs.GameCode.GDFlappy_95bird_95scoreObjects4.length = 0;
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects1.length = 0;
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects2.length = 0;
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects3.length = 0;
gdjs.GameCode.GDFlappy_95bird_95hscoreObjects4.length = 0;
gdjs.GameCode.GDMenu_95buttonObjects1.length = 0;
gdjs.GameCode.GDMenu_95buttonObjects2.length = 0;
gdjs.GameCode.GDMenu_95buttonObjects3.length = 0;
gdjs.GameCode.GDMenu_95buttonObjects4.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects1.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects2.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects3.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects4.length = 0;
gdjs.GameCode.GDPanel_95scoreObjects1.length = 0;
gdjs.GameCode.GDPanel_95scoreObjects2.length = 0;
gdjs.GameCode.GDPanel_95scoreObjects3.length = 0;
gdjs.GameCode.GDPanel_95scoreObjects4.length = 0;
gdjs.GameCode.GDBorderObjects1.length = 0;
gdjs.GameCode.GDBorderObjects2.length = 0;
gdjs.GameCode.GDBorderObjects3.length = 0;
gdjs.GameCode.GDBorderObjects4.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects1.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects2.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects3.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDBackground_95dayObjects1.length = 0;
gdjs.GameCode.GDBackground_95dayObjects2.length = 0;
gdjs.GameCode.GDBackground_95dayObjects3.length = 0;
gdjs.GameCode.GDBackground_95dayObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects1.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects2.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects3.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects4.length = 0;

gdjs.GameCode.eventsList7(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
