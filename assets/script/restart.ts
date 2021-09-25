
import { _decorator, Component, Node, Vec3, RigidBody } from 'cc';
const { ccclass, property } = _decorator;
import _ from 'lodash'

/**
 * Predefined variables
 * Name = Restart
 * DateTime = Sat Sep 25 2021 19:19:58 GMT+0800 (中国标准时间)
 * Author = HeStudy
 * FileBasename = restart.ts
 * FileBasenameNoExtension = restart
 * URL = db://assets/script/restart.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Restart')
export class Restart extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        // [3]
    }

    restart() {
        const coin = this.node.parent.parent.getChildByName('coin')
        coin.setPosition(new Vec3(16.711, 7.948, 15.745))
        const rigidBody = coin.getComponent(RigidBody)
        rigidBody.applyForce(new Vec3(0, 1000, 0))
        rigidBody.applyTorque(new Vec3(0, 0, _.random(200, 300, true)))
        this.node.parent.active = false
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
