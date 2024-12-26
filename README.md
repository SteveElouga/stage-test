
# Test

Ce README.md fournit une documentation détaillée sur la structure, les composants et les instructions pour démarrer l'application de test en vue d'obtenir un satge.

## Structure du Projet

Le projet est structuré en utilisant les meilleures pratiques Angular, avec une séparation claire entre les responsabilités et les fonctionnalités. Voici les dossiers principaux :

*   `src/app/`: Contient le code source de l'application.
  *   `core/`: Contient le code fondamental de l'application.
    *   `layout/`: Composants globaux de layout.
      *   `header.component.ts`: Composant pour l'en-tête de l'application.
      *   `footer.component.ts`: Composant pour le pied de page de l'application.
  *   `features/`: Contient les modules et composants spécifiques à chaque fonctionnalité.
    *   `home/`: Module pour la page d'accueil de l'application.
      *   `components/`:  Les composants de la page d'accueil.
        *   `hero.component.ts`: Composant pour la section d'accueil.
        *   `how-it-works.component.ts`: Composant pour la section "Comment ça marche".
        *   `course-list.component.ts`: Composant pour la liste des cours.
        *   `video-testimonial.component.ts`: Composant pour les témoignages vidéo.
        *   `testimonials.component.ts`: Composant pour afficher la liste des témoignages.
        *  `pricing-grid.component.ts`: Composant pour afficher la grille tarifaire.
           * `home.component.ts` : composant pour regrouper les différents composants.
  *   `shared/`: Contient les composants partagés dans toute l'application tels que les pipes, directives réutilisables etc...
    *   `components/`: Composants UI réutilisables.
      *   `button.component.ts`: Composant pour les boutons.
      *   `card.component.ts`: Composant pour l'affichage de cartes génériques.
      *   `testimonial.component.ts`: Composant pour l'affichage des témoignages.
    *   `shared.module.ts`: Module qui regroupe et exporte les composants réutilisables.
  *   `assets/`:  Contient les fichiers statiques de l'application (images, polices, etc).
  *   `app.component.ts`: Composant racine de l'application.
  *  `app.config.ts`: Configuration de l'application.
  *  `app.routes.ts`: Configuration du système de routage.

## Composants

### Composants du Module `core`

*   **`HeaderComponent` (`core/layout/header.component.ts`)**
  *   **Fonctionnalité :** Affiche l'en-tête de l'application avec le logo, la navigation et un bouton.
  *   **Template :**
      ```html
       <header>
          <div class="container">
            <a href="#" class="logo"><div><span>E</span></div> Edushare</a>
            <nav>
              <a href="#">Home</a>
              <a href="#">Profile</a>
              <a href="#">Courses</a>
              <a href="#">Contact</a>
            </nav>
            <button>Sign In</button>
          </div>
        </header>
      ```

*   **`FooterComponent` (`core/layout/footer.component.ts`)**
  *   **Fonctionnalité :** Affiche le pied de page de l'application avec des liens de navigation, le logo, le copyright.
  *   **Template :**
      ```html
      <footer>
         <div class="container">
              <nav class="logo-container">
                <a href="#" class="logo"><div><span>E</span></div> Edushare</a>
                <p>Our motto to fulfill customer demand by making them satisfied with growing their business.</p>
              </nav>
              <nav class="about">
                <p>About</p>
                <a href="#">About Us</a>
                <a href="#">Features</a>
                <a href="#">News</a>
                <a href="#">Careers</a>
                <a href="#">FAQ</a>
              </nav>
              <nav class="support">
                <p>Support</p>
                <a href="#">Account</a>
                <a href="#">Support Center</a>
                <a href="#">Feedback</a>
                <a href="#">Contact Us</a>
                <a href="#">Accessibility</a>
              </nav>
              <nav class="app">
                <p>Get our app</p>
                <div class="apk">
                  <div>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15636 0.966662C1.03824 1.23416 0.972992 1.56193 0.972992 1.94318V24.0592C0.972992 24.4413 1.03832 24.7691 1.15657 25.0365L13.1905 13.0008L1.15636 0.966662ZM1.85158 25.7557C2.29763 25.9465 2.8795 25.886 3.51399 25.5262L17.6711 17.4814L13.8976 13.7079L1.85158 25.7557ZM18.5735 16.9696L23.015 14.4462C24.412 13.6512 24.412 12.3522 23.015 11.5582L18.5715 9.03331L14.6047 13.0008L18.5735 16.9696ZM17.6698 8.52089L3.51399 0.477189C2.87946 0.116611 2.29756 0.0564479 1.85149 0.247586L13.8976 12.2937L17.6698 8.52089Z" fill="#606176"/>
                    </svg>

                  </div>
                  <div>
                    <div>GET IT ON</div>
                    <div>Google Play</div>
                  </div>
                </div>
      
                <div class="apk">
                  <div>
                    <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.769 12.3006C15.7907 10.6196 16.6934 9.02898 18.1256 8.14851C17.2221 6.85819 15.7088 6.04009 14.1344 5.99083C12.4552 5.81457 10.8272 6.99566 9.97149 6.99566C9.09922 6.99566 7.78172 6.00833 6.36299 6.03752C4.51374 6.09727 2.78977 7.14865 1.89007 8.76539C-0.0439277 12.1138 1.39866 17.0349 3.25127 19.7415C4.17817 21.0668 5.26145 22.5473 6.6789 22.4948C8.06596 22.4372 8.584 21.6103 10.2583 21.6103C11.9171 21.6103 12.4031 22.4948 13.8493 22.4614C15.3377 22.4372 16.2754 21.1302 17.1698 19.7923C17.8358 18.8479 18.3483 17.8042 18.6882 16.6997C16.9391 15.96 15.771 14.1997 15.769 12.3006Z" fill="#606176"/>
                      <path d="M13.0373 4.21083C13.8489 3.23663 14.2487 1.98445 14.1518 0.720215C12.912 0.850435 11.7668 1.44299 10.9443 2.37982C10.14 3.29516 9.72143 4.5253 9.80056 5.74121C11.0408 5.75398 12.2601 5.17749 13.0373 4.21083Z" fill="#606176"/>
                    </svg>
                  </div>
                  <div>
                    <div style="font-size: 8px">Download on the</div>
                    <div>App Store</div>
                  </div>
                </div>
              </nav>
          </div>
           <div style="height: 1px; width: 1160px;  background-color: #606176; margin-top: 100px"></div>
          <p class="copyright"> Copyright Besnik 2021 All rights reserved.</p>
        </footer>
      ```

### Composants du Module `shared`

*   **`ButtonComponent` (`shared/components/button.component.ts`)**
  *   **Fonctionnalité :** Affiche un bouton réutilisable avec un style et un texte.
  *   **TypeScript :**
      ```typescript
      import { Component, Input, Output, EventEmitter } from '@angular/core';
      import { NgClass } from '@angular/common';

      @Component({
        selector: 'app-button',
        standalone: true,
        imports: [NgClass],
        templateUrl: './button.component.html',
        styleUrl: './button.component.scss'
      })
      export class ButtonComponent {
        @Input() text: string = '';
        @Input() style: 'primary' | 'secondary' = 'primary';
        @Output() buttonClick = new EventEmitter<void>();

        handleClick() {
          this.buttonClick.emit();
        }
      }
      ```
  *   **Template :**
      ```html
       <button
          class="button"
          [ngClass]="'button-' + style"
          (click)="handleClick()">
          {{ text }}
       </button>
      ```
  *   **Propriétés :**
    *   `@Input() text`: Le texte du bouton.
    *   `@Input() style`: Le style du bouton ('primary' ou 'secondary').
    *   `@Output() buttonClick`: L'évènement déclenché lors du clic.
*   **`CardComponent` (`shared/components/card.component.ts`)**
  *   **Fonctionnalité :**  Affiche un élément visuel de carte générique.
  *   **TypeScript :**
      ```typescript
      import { Component, Input } from '@angular/core';
      import { NgIf } from '@angular/common';

      @Component({
        selector: 'app-card',
        standalone: true,
        imports: [NgIf],
        templateUrl: './card.component.html',
        styleUrl: './card.component.scss'
      })
      export class CardComponent {
        @Input() title: string = '';
        @Input() description: string = '';
        @Input() image: string | null = null;
         @Input() url: string | null = null;
      }
      ```
  *   **Template :**
        ```html
        <div class="card">
        <img *ngIf="image" [src]="image" alt="Card Image" class="card-image" [style]="">
        <h3>{{ title }}</h3>
        <div>{{ description }}</div>
        </div>
       ```
    *  **Propriétés :**
      * `@Input() title` : Le titre de la card.
      *  `@Input() description`: La description de la carte.
      * `@Input() image`: Le chemin vers l'image (optionnel).
      * `@Input() url`: Le lien (optionel).
*   **`TestimonialComponent` (`shared/components/testimonial.component.ts`)**
  *   **Fonctionnalité :** Affiche un témoignage.
  *   **TypeScript :**
      ```typescript
      import { Component, Input } from '@angular/core';
      import { CommonModule } from '@angular/common';

      @Component({
        selector: 'app-testimonial',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './testimonial.component.html',
        styleUrl: './testimonial.component.scss'
      })
      export class TestimonialComponent {
        @Input() name: string = '';
        @Input() comment: string = '';
        @Input() image: string | null = null;
        @Input() title: string | null = null;
        @Input() town: string | null = null
        @Input() stars: number | null = null

        getArray(stars: number | null) {
          return Array(stars).fill(0).map((x,i) => i+1)
        }
      }
      ```
  *  **Template :**
      ```html
      <div class="testimonial">
        <p class="comment title">{{title}}</p>
        <p class="comment">{{comment}}</p>
        <div class="infos-container">
          <img *ngIf="image" [src]="image" alt="" class="avatar">
          <div class="infos">
            <p class="name">{{ name }}</p>
            <p *ngIf="title" class="town">{{town}}</p>
            <div class="stars">
               <img *ngFor="let star of getArray(stars)" src="assets/img/svg10.svg">
            </div>
          </div>
        </div>
      </div>
      ```
  *   **Propriétés :**
    *   `@Input() name`: Le nom de la personne qui a fait le testimonial.
    *   `@Input() comment`: Le commentaire du testimonial.
    *   `@Input() image`: Le chemin vers l'image de la personne (optionnel).
    *   `@Input() title`: Le titre du commentaire (optionnel).
    *   `@Input() town`: La ville de la personne (optionnel).
    *   `@Input() stars`: Le nombre d'étoiles (optionnel).
    * `getArray` :  Fonction qui génère un tableau afin d'itérer et afficher les étoiles en fonction du paramètre d'entrée.

### Composants du Module `features/home`

*   **`HeroComponent` (`features/home/components/hero.component.ts`)**
  *   **Fonctionnalité :** Affiche la section d'accueil (hero section) de la page d'accueil.
  *    **Template :**
       ```html
       <section class="hero">
         <div>
          <div class="get-started">
            <div class="hero-title">Discover best classes for the best learning</div>
            <p>We designed Connections Academy to give students all across the nation a tuition-free online
              public school that lets them learn.</p>
            <app-button text="Get Started" style="primary" (buttonClick)="handleButtonClick()"></app-button>
            <p class="learn-more">Not sure when to start? <a href="#">Learn more</a></p>
         </div>
         <div class="get-started-image">
          <div></div>
          <img src="/assets/img/WhatsApp_Image_2024-12-23_à_16.37.27_ca171a1a-removebg.png" class="man">
          <img class="audience" src="/assets/img/WhatsApp_Image_2024-12-26_à_12.11.22_4b480659-removebg-preview.png">
          <img class="_100k" src="/assets/img/100k.png">
           <img class="orange" src="/assets/img/WhatsApp_Image_2024-12-26_à_12.14.00_f466e68f-removebg-preview.png">
          <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M62.8535 3.16462C61.2702 1.54646 58.9268 0.947956 56.7418 1.58129L5.79017 16.3031C3.48483 16.9428 1.85083 18.77 1.41067 21.088C0.961 23.4503 2.53167 26.4523 4.58367 27.7063L20.5152 37.4343C22.1492 38.435 24.2582 38.1848 25.6103 36.8295L43.8535 18.5863C44.7718 17.6331 46.2918 17.6331 47.2102 18.5863C48.1285 19.5015 48.1285 20.993 47.2102 21.943L28.9353 40.1861C27.58 41.5415 27.3267 43.6441 28.3242 45.2813L38.0585 61.273C39.1985 63.1698 41.1618 64.2496 43.3152 64.2496C43.5685 64.2496 43.8535 64.2496 44.1068 64.2148C46.5768 63.9013 48.5402 62.2198 49.2685 59.8448L64.3735 9.27629C65.0385 7.12296 64.4368 4.77962 62.8535 3.16462"
               stroke="#F77E53" stroke-width="2"/>
            <path d="M2.99935 46.9998L9.99935 39.9998" stroke="#F77E53" stroke-width="2" stroke-linecap="round"/>
            <path d="M14.9994 50.9998L21.9994 43.9998" stroke="#F77E53" stroke-width="2" stroke-linecap="round"/>
             <path d="M17.9994 62.9998L24.9994 55.9998" stroke="#F77E53" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
       <div class="mark">
          <div class="_400">
            <div>400+</div>
            <div class="description">Universities worldwide that partner with us</div>
          </div>
         <img class="mark-logo" src="assets/img/mark.png">
       </div>
     </section>
         ```
*   **`handleButtonClick()` :**  Méthode qui affiche un message dans la console lorsque le bouton "Get Started" est cliqué.
*   **`HowItWorksComponent` (`features/home/components/how-it-works.component.ts`)**
  *   **Fonctionnalité:** Affiche la section "How our online public school works" (description et liste de fonctionnalités).
  *   **Template :**
      ```html
       <section class="how-it-works">
              <div class="man-cover">
                <div class="background-man2"></div>
                <img class="man2" src="assets/img/man22.png">
                <img class="image2" src="assets/img/image2.png">
            </div>
         <div class="how-it-works-card">
               <div class="how-it-works-title">How our online public school works</div>
                <div class="cards">
                <app-card *ngFor="let item of items" [title]="item.title" [description]="item.description"
                               [image]="item.image"></app-card>
              </div>
          </div>
        </section>
        ```
  * **`items`**: Tableau contenant les informations des 4 sections de fonctionnement de l'école
*   **`CourseListComponent` (`features/home/components/course-list.component.ts`)**
  *   **Fonctionnalité :** Affiche la section avec la liste des cours et leurs informations.
  *   **Template :**
      ```html
       <section class="course-list">
         <div class="title">
           <div class="course-list-title">How our online public school works</div>
          <button>View all courses</button>
        </div>
          <div class="courses">
             <div class="card" *ngFor="let course of courses" [title]="course.title">
                 <img [src]="course.image">
               <div class="description">{{course.description}}</div>
               <div class="course-p">
                 <div> <img src="assets/img/svg5.svg">1,45690</div>
                  <div><img src="assets/img/svg6.svg">4 months</div>
              </div>
              <button><img class="buy" src="assets/img/svg7.svg"
                              style="width: 18px; height: 14px; margin-right: 10px;">Add to
                              cart</button>
            </div>
        </div>
          <button>View all courses</button>
        </section>
        ```
      *   **`courses`**: Tableau contenant les informations des 3 cours.
*   **`VideoTestimonialComponent` (`features/home/components/video-testimonial.component.ts`)**
  *   **Fonctionnalité:** Affiche une section avec une vidéo de témoignage et ses vignettes.
  *   **Template :**
      ```html
      <section class="video-testimonial">
        <div class="title-block">
           <div class="title">Transform your life through education</div>
           <p class="description">Ariel Hocsman launched a new career in software development by taking courses on Besnik.
               What will you be
               able to do?</p>
          <button>Get Started</button>
        </div>
        <div class="video-container">
            <div class="background"></div>
           <video controls poster="assets/img/db8254cc301b3350745232e03c67055a.png">
             <source src="your_video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
           <div class="play-video-container">
            <img class="play-video" src="assets/img/svg8.svg">
           </div>
           <div class="vignettes">
            <div class="vignette">
                <img src="assets/img/af33c642dc7caf4d800e6138c264e781.png">
                 <span>Lecture 2</span>
               </div>
             <div class="vignette">
                <img src="assets/img/7e9a1e392f809917d32b642e1564d328.png">
                  <span>Lecture 3</span>
                </div>
             <div class="vignette">
                <img src="assets/img/278205af4d715bbe4c21a98be3ffdeb6.png">
                  <span>Lecture 4</span>
              </div>
           </div>
         </div>
       </section>
       ```
*   **`TestimonialsComponent` (`features/home/components/testimonials.component.ts`)**
  *   **Fonctionnalité:** Affiche la section de témoignages.
  *   **Template :**
      ```html
      <section class="testimonials">
         <div class="title-container">
           <div class="title">Transform your life through education</div>
           <div class="change-button">
             <img class="navigate-left" src="assets/img/svg9.svg">
             <img src="assets/img/svg9.svg">
          </div>
        </div>
        <div class="testimonials-list">
         <app-testimonial *ngFor="let testimonial of testimonials" [name]="testimonial.name"
                         [comment]="testimonial.comment" [image]="testimonial.image" [title]="testimonial.title"
                         [town]="testimonial.town" [stars]="testimonial.stars"></app-testimonial>
        </div>
      </section>
      ```
    * **`testimonials`**: Tableau contenant les informations des témoignages.
* **`PricingGridComponent` (`features/home/components/pricing-grid.component.ts`)**
  *  **Fonctionnalité :** Affiche une section de grille tarifaire.
  *   **Template :**
       ```html
          <section class="pricing">
            <div class="title">
               <div class="pricing-list-title">Transform your life through education</div>
              <button>Upgrade now</button>
          </div>
           <div class="plans">
              <div *ngFor="let plan of plans" class="plan {{plan.status}}">
                <div class="formule {{plan.status}}"><span>{{plan.name}}</span></div>
               <p class="price">
                    ${{plan.price}}
                 </p>
                 <ul class="{{plan.status}}">
                  <li *ngFor="let feature of plan.features"> {{feature}}</li>
                </ul>
                <button class="buy-plan {{plan.status}}">Buy Plan</button>
             </div>
           </div>
        </section>
       ```
    * **`plans`**: Tableau contenant les informations des 3 plans.



# StageTest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
