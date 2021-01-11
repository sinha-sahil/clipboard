import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public jsonEditorOptions: JsonEditorOptions;

  @ViewChild(JsonEditorComponent, { static: false })
  jsonEditor: JsonEditorComponent = new JsonEditorComponent();

  public data: any;

  constructor(private clipboard: Clipboard) {
    this.jsonEditorOptions = new JsonEditorOptions();
    this.jsonEditorOptions.modes = ['code', 'text', 'tree'];
    this.data = {
      keyOne: 'valueOne',
      keyTwo: 'valueTwo',
      keyThree: 'valueThree',
    };
  }

  public copy() {
    this.clipboard.copy(JSON.stringify(this.data));
  }

  public getData(event: any) {
    console.log(event);
  }
}
