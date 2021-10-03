import { Component, Inject, OnInit } from '@angular/core';

import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-prompt-component',

  templateUrl: './prompt-component.component.html',

  styleUrls: ['./prompt-component.component.css'],
})
export class PromptComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { mobileType: 'ios' | 'android'; promptEvent?: any },
    private bottomSheetRef: MatBottomSheetRef<PromptComponent>
  ) {}
  public installPwa(): void {
    this.data.promptEvent.prompt();

    this.close();
  }
  public close(): void {
    this.bottomSheetRef.dismiss();
  }
}
