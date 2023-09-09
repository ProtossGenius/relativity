import { Application } from 'pixi.js';
import { Component, CSSProperties } from 'react';
//import "@pixi/canvas-renderer";
import 'pixi.js-legacy';

class Props {
  backgroundColor: string = '#000';
  width?: number;
  height?: number;
}

export class Canvas2D extends Component<Props> {
  private _app: Application;
  constructor(props: any) {
    super(props);
    var { backgroundColor, width, height } = this.props;
    this._app = new Application({
      width, height,
      backgroundColor,
    }
    );
  }
  render() {
    var { width, height } = this.props;
    return <div style={{ width, height }} ref={r => { this.updateRef(r) }}></div>
  }

  private updateRef(ref: any) {
    // On first render add app to DOM
    ref.appendChild(this._app.view);

    // Start the PixiJS app
    this._app.start();
  }
}
