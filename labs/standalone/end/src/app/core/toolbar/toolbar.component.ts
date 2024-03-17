import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { materialImports } from '../../standalone-imports';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [materialImports, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  labTitle = 'standalone';
  labState = 'End';
}
