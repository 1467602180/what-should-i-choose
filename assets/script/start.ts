
import { _decorator, Component, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Start
 * DateTime = Sat Sep 25 2021 17:43:35 GMT+0800 (中国标准时间)
 * Author = HeStudy
 * FileBasename = start.ts
 * FileBasenameNoExtension = start
 * URL = db://assets/script/start.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Start')
export class Start extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        // [3]
    }

    click() {
        director.loadScene('run')
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
