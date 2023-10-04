import * as cc from "cc"
import { EventTouch } from "cc";
import { main } from "./main"
const { ccclass } = cc._decorator;


@ccclass("buttonGrp")
export class buttonGrp extends cc.Component {
    b1: cc.Button;
    b2: cc.Button;
    b3: cc.Button;
    b4: cc.Button;
    b5: cc.Button;

    onLoad () {
        this.b1 = this.node.getChildByName('b01').getComponent(cc.Button);
        this.b2 = this.node.getChildByName('b02').getComponent(cc.Button);
        this.b3 = this.node.getChildByName('b03').getComponent(cc.Button);
        this.b4 = this.node.getChildByName('b04').getComponent(cc.Button);
        this.b5 = this.node.getChildByName('b05').getComponent(cc.Button);

        this.b1.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
        this.b2.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
        this.b3.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
        this.b4.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
        this.b5.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);

        setTimeout(() => {
            this.reset();
        }, 100);
    }

    reset(): void {
        this.b1.node.getChildByName('Label').getComponent(cc.Label).isBold = true;
        this.b2.node.getChildByName('Label').getComponent(cc.Label).isBold = true;
        this.b3.node.getChildByName('Label').getComponent(cc.Label).isBold = true;
        this.b4.node.getChildByName('Label').getComponent(cc.Label).isBold = true;
        this.b5.node.getChildByName('Label').getComponent(cc.Label).isBold = true;

        this.b1.node.getChildByName('Label').getComponent(cc.Label).string = '';
        this.b2.node.getChildByName('Label').getComponent(cc.Label).string = '';
        this.b3.node.getChildByName('Label').getComponent(cc.Label).string = '';
        this.b4.node.getChildByName('Label').getComponent(cc.Label).string = '';
        this.b5.node.getChildByName('Label').getComponent(cc.Label).string = '';
    }

    private onClick(ev: EventTouch): void {
        const target = ev.currentTarget;
        const labN: cc.Node = target.getChildByName('Label');
        const lab: cc.Label = labN.getComponent(cc.Label);
        lab.string = `${main.FW}${main.COUNT}`;
        main.COUNT++;
    }
    
}