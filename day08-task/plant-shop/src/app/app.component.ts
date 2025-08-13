import { Component } from '@angular/core';;
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { BestsellingSliderComponent } from './components/bestselling-slider/bestselling-slider.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroSliderComponent, BestsellingSliderComponent, AboutusComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plant-shop';
}
