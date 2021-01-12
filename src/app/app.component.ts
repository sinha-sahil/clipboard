import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Clipboard } from '@angular/cdk/clipboard';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(JsonEditorComponent, { static: false })
  jsonEditor: JsonEditorComponent = new JsonEditorComponent();

  jsonEditorOptions: JsonEditorOptions;
  jsonData: any;
  currentValue: any;
  notFetched: boolean;

  constructor(
    private clipboard: Clipboard,
    private database: AngularFireDatabase
  ) {
    this.jsonEditorOptions = new JsonEditorOptions();
    this.jsonEditorOptions.mode = 'code';
    this.jsonData = {};
    this.currentValue = this.jsonData;
    this.notFetched = true;
    let dataObserver = this.database.database.ref().child('common');
    dataObserver.on('value', (data) => {
      this.notFetched = false;
      if (data.val()) {
        this.jsonData = data.val();
        this.currentValue = this.jsonData;
      }
    });
  }

  copy() {
    this.clipboard.copy(JSON.stringify(this.jsonData));
  }

  update() {
    this.database.database.ref().child('common').set(this.currentValue);
  }
  updateData(event: any) {
    if (!event.isTrusted) {
      this.currentValue = event;
    }
  }
}
