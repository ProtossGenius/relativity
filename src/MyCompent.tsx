import { Application } from 'pixi.js';
import { Component } from 'react';
//import "@pixi/canvas-renderer";
import 'pixi.js-legacy';
const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0x5BBA6F,
});

export class MyComponent extends Component {
  private _app: Application;
  constructor(props: any) {
    super(props);
    this._app = new Application();
  }
  render() {
    return <div ref={this.updateRef}></div>
  }

  private updateRef(ref: any) {
    // On first render add app to DOM
    ref.appendChild(app.view);
    // Start the PixiJS app
    app.start();
  }
}
