import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private router: Router) {}

  navigateToMoviesPage() {
    // Utiliza el método navigate para ir a la ruta de movies
    this.router.navigate(['/movies']);
  }

  ngOnInit() {
  }

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

}
