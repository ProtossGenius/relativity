import React, { Component } from "react";
import { Application, Sprite, Texture, Container, ICanvas } from 'pixi.js';


export class Unit extends Component {
  render() {
    return (
      <div id="stage"></div>
    );
  }

  componentDidMount() {
    const app = new Application({
      view: document.getElementById("stage") as any as ICanvas,
      forceCanvas: true,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0x6495ed,
      width: 640,
      height: 480
    });

    const conty = new Container();
    conty.x = 200;
    conty.y = 0;
    app.stage.addChild(conty);

    const clampy = Sprite.from("clampy.png");
    clampy.x = 100;
    clampy.y = 100;
    conty.addChild(clampy);

  }
}
