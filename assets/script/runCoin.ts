
import { _decorator, Component, Node, RigidBody, Vec3, Quat, Camera, PhysicsSystem, Label, director, geometry } from 'cc';
const { ccclass, property } = _decorator;
import _ from 'lodash'

/**
 * Predefined variables
 * Name = RunCoin
 * DateTime = Sat Sep 25 2021 18:32:30 GMT+0800 (中国标准时间)
 * Author = HeStudy
 * FileBasename = runCoin.ts
 * FileBasenameNoExtension = runCoin
 * URL = db://assets/script/runCoin.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('RunCoin')
export class RunCoin extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        const rigidBody = this.node.getComponent(RigidBody)
        rigidBody.applyForce(new Vec3(0, 1000, 0))
        rigidBody.applyTorque(new Vec3(0, 0, _.random(1000, 2000, true)))
        // [3]
    }

    update(deltaTime: number) {
        // [4]
        const ray = new geometry.Ray();
        const position = this.node.worldPosition
        geometry.Ray.fromPoints(ray, new Vec3(position.x, position.y + 100, position.z), position)
        const rigidBody = this.node.getComponent(RigidBody)
        if (rigidBody.isSleepy) {
            PhysicsSystem.instance.raycastClosest(ray)
            const result = PhysicsSystem.instance.raycastClosestResult.collider.node.name
            const canvas = this.node.parent.getChildByName('canvas')
            const label = canvas.getChildByName('label').getComponent(Label)
            if (result === 'is') {
                canvas.active = true
                label.string = '你抛到了正面'
            } else if (result === 'the') {
                canvas.active = true
                label.string = '你抛到了反面'
            } else {
                canvas.active = true
                label.string = '遇到了特殊的答案了呢'
            }
        }
    }
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
