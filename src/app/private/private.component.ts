import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateComponent implements OnInit {
  public ngOnInit(): void {}
}
