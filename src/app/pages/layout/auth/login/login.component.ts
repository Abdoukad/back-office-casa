import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoading = false;
    successMessage = '';

    constructor(private auth: AuthService,
                private router: Router) { }

    ngOnInit(): void {
    }

    onLogin() {
        this.isLoading = true;
        this.auth.login();
        // Simule un délai de chargement
        setTimeout(() => {
            this.isLoading = false;
            this.successMessage = 'Connecté avec succès!';
            this.router.navigateByUrl('/request/contact-requests');
        }, 2000);
    }
}
