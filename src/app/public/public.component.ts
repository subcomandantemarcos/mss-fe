import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicComponent implements OnInit {
  public ngOnInit(): void {}
}
