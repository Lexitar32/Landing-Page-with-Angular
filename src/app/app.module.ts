import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedFoodComponent } from './components/featured-food/featured-food.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { OurProductsComponent } from './components/our-products/our-products.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedFoodComponent,
    SocialFeedComponent,
    ChefsComponent,
    OurProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
