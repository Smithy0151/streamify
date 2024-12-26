import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  newUser = {
    username: '',
    password: ''
  };

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  onRegister(){
    const existingUser = this.checkUserExists(this.newUser.username);

    if (existingUser) {
      alert('Username already exists!');
    } else {
      this.http.post(this.apiUrl, this.newUser).subscribe(
        (response) => {
          alert('Registration successful!');
          console.log('User added:', response);
          this.newUser = { username: '', password: '' };  // Clear the form
        },
        (error) => {
          alert('Error registering user');
          console.error('There was an error!', error);
        }
      );
    }
  }

  // Check if the username already exists in the users array
  checkUserExists(username: string) {
  // Simulating a check by making a GET request to fetch all users
    this.http.get<any[]>(this.apiUrl).subscribe((users) => {
      return users.find(user => user.username === username);
    });
    return null;
  }
}
