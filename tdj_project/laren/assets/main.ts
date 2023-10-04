import * as cc from "cc"
import { buttonGrp } from "./buttonGrp";
const { ccclass } = cc._decorator;


@ccclass("main")
export class main extends cc.Component {
    static FW: string = '';
    static COUNT: number = 1;

    private allBtn: cc.Button[] = [];
    private resBtn: cc.Button[] = [];

    private grp1: buttonGrp;
    private grp2: buttonGrp; 
    private grp3: buttonGrp;
    private grp4: buttonGrp;
    private grp5: buttonGrp;

    private rgrp1: buttonGrp;
    private rgrp2: buttonGrp; 
    private rgrp3: buttonGrp;
    private rgrp4: buttonGrp;
    private rgrp5: buttonGrp;

    private s1: cc.Button;
    private s2: cc.Button;
    private s3: cc.Button;
    private s4: cc.Button;
    private s5: cc.Button;

    onLoad () {

        this.s1 = this.node.getChildByName('s1').getComponent(cc.Button);
        this.s2 = this.node.getChildByName('s2').getComponent(cc.Button);
        this.s3 = this.node.getChildByName('s3').getComponent(cc.Button);
        this.s4 = this.node.getChildByName('s4').getComponent(cc.Button);
        this.s5 = this.node.getChildByName('s5').getComponent(cc.Button);

        this.grp1 = this.node.getChildByName('allgrp').getChildByName('grp1').getComponent(buttonGrp);
        this.grp2 = this.node.getChildByName('allgrp').getChildByName('grp2').getComponent(buttonGrp);
        this.grp3 = this.node.getChildByName('allgrp').getChildByName('grp3').getComponent(buttonGrp);
        this.grp4 = this.node.getChildByName('allgrp').getChildByName('grp4').getComponent(buttonGrp);
        this.grp5 = this.node.getChildByName('allgrp').getChildByName('grp5').getComponent(buttonGrp);

        this.rgrp1 = this.node.getChildByName('result').getChildByName('grp1').getComponent(buttonGrp);
        this.rgrp2 = this.node.getChildByName('result').getChildByName('grp2').getComponent(buttonGrp);
        this.rgrp3 = this.node.getChildByName('result').getChildByName('grp3').getComponent(buttonGrp);
        this.rgrp4 = this.node.getChildByName('result').getChildByName('grp4').getComponent(buttonGrp);
        this.rgrp5 = this.node.getChildByName('result').getChildByName('grp5').getComponent(buttonGrp);


        this.s1.node.on(cc.Node.EventType.TOUCH_START, this.tankTouch, this);
        this.s2.node.on(cc.Node.EventType.TOUCH_START, this.iTouch, this);
        this.s3.node.on(cc.Node.EventType.TOUCH_START, this.otherTouch, this);
        this.s4.node.on(cc.Node.EventType.TOUCH_START, this.reset, this);
        this.s5.node.on(cc.Node.EventType.TOUCH_START, this.onla, this);
        
        setTimeout(() => {
            this.reset();

            this.allBtn = [];
            this.resBtn = [];

            this.allBtn.push(this.grp4.b1);
            this.allBtn.push(this.grp3.b1);
            this.allBtn.push(this.grp2.b1);
            this.allBtn.push(this.grp1.b1);
            this.allBtn.push(this.grp5.b2);
            this.allBtn.push(this.grp4.b2);
            this.allBtn.push(this.grp3.b2);
            this.allBtn.push(this.grp2.b2);
            this.allBtn.push(this.grp1.b2);
            this.allBtn.push(this.grp5.b3);
            this.allBtn.push(this.grp4.b3);
            this.allBtn.push(this.grp5.b1);
            this.allBtn.push(this.grp2.b3);
            this.allBtn.push(this.grp1.b3);
            this.allBtn.push(this.grp5.b4);
            this.allBtn.push(this.grp4.b4);
            this.allBtn.push(this.grp3.b4);
            this.allBtn.push(this.grp2.b4);
            this.allBtn.push(this.grp1.b4);
            this.allBtn.push(this.grp5.b5);
            this.allBtn.push(this.grp4.b5);
            this.allBtn.push(this.grp3.b5);
            this.allBtn.push(this.grp2.b5);
            this.allBtn.push(this.grp1.b5);


            this.resBtn.push(this.rgrp4.b3);
            this.resBtn.push(this.rgrp3.b2);
            this.resBtn.push(this.rgrp3.b4);
            this.resBtn.push(this.rgrp2.b3);
            this.resBtn.push(this.rgrp4.b2);
            this.resBtn.push(this.rgrp4.b4);
            this.resBtn.push(this.rgrp2.b2);
            this.resBtn.push(this.rgrp2.b4);
            this.resBtn.push(this.rgrp5.b3);
            this.resBtn.push(this.rgrp3.b1);
            this.resBtn.push(this.rgrp3.b5);
            this.resBtn.push(this.rgrp1.b3);
            this.resBtn.push(this.rgrp5.b2);
            this.resBtn.push(this.rgrp5.b4);
            this.resBtn.push(this.rgrp4.b1);
            this.resBtn.push(this.rgrp4.b5);
            this.resBtn.push(this.rgrp2.b1);
            this.resBtn.push(this.rgrp2.b5);
            this.resBtn.push(this.rgrp1.b2);
            this.resBtn.push(this.rgrp1.b4);

        }, 100);
    }

    private reset(): void {
        main.FW = '';
        main.COUNT = 1;
        this.grp1.reset();
        this.grp2.reset();
        this.grp3.reset();
        this.grp4.reset();
        this.grp5.reset();

        this.s1.interactable = true;
        this.s2.interactable = true;
        this.s3.interactable = true;
    }

    private tankTouch(): void {
        main.FW = '坦';
        this.s1.interactable = false;
        this.s2.interactable = true;
        this.s3.interactable = true;
    }

    private iTouch(): void {
        main.FW = '障礙';
        this.s1.interactable = true;
        this.s2.interactable = false;
        this.s3.interactable = true;
    }

    private otherTouch(): void {
        main.FW = '其他';
        this.s1.interactable = true;
        this.s2.interactable = true;
        this.s3.interactable = false;
    }

    private onla(): void {
        this.rgrp1.reset();
        this.rgrp2.reset();
        this.rgrp3.reset();
        this.rgrp4.reset();
        this.rgrp5.reset();

        let result = [];

        for (let k = 1; k < 6; k++) {
            let agrp = this[`grp${k}`];
            let rgrp = this[`rgrp${k}`];

            for (let p = 1; p < 6; p++) {
                let t1 = agrp[`b${p}`].node.getChildByName('Label').getComponent(cc.Label);
                let t2 = rgrp[`b${p}`].node.getChildByName('Label').getComponent(cc.Label);

                if (t1.string.indexOf('障礙') >= 0) {
                    t2.string = t1.string;
                }
            }
        }

        for (let i = 0; i < this.allBtn.length; i++) {
            let lab = this.allBtn[i].node.getChildByName('Label').getComponent(cc.Label);
            if (lab.string != '' && lab.string.indexOf('障礙') < 0) {
                result.push(lab.string);
            }
        }

        let count = 0 ;

        while(result.length >= 0) {
            let rlab = this.resBtn[count].node.getChildByName('Label').getComponent(cc.Label);
            if (rlab.string == '') {
                rlab.string = result[0];
                result.splice(0,1);
            }
            
            count++;
        }
    }
}