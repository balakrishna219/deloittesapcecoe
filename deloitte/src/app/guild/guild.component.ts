import { ChangeDetectorRef, Component } from '@angular/core';
import { AutoComponent } from '../auto/auto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guild.component.html',
  styleUrl: './guild.component.css'
})
export class GuildComponent {

  isVisible = false;
  currentPopup: string | null = null;

  showPopup(type: string) {
    this.currentPopup = type;
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
    this.currentPopup = null; // Reset the current popup
  }
}
