
import { _decorator, Component, Node, RigidBody, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Coin
 * DateTime = Sat Sep 25 2021 15:27:53 GMT+0800 (中国标准时间)
 * Author = HeStudy
 * FileBasename = coin.ts
 * FileBasenameNoExtension = coin
 * URL = db://assets/script/coin.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Coin')
export class Coin extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        const rigidBory = this.node.getComponent(RigidBody)
        rigidBory.applyTorque(new Vec3(100, 0, 100))
        // [3]
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
