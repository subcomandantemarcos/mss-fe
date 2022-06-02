import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavigationComponent implements OnInit {
  public ngOnInit(): void {}
}
