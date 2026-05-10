import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   users: any[] = [];

  constructor(private userService: UserService, private auth: JwtService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.userService.getUsers().subscribe((res: any) => (this.users = res));
  }

  delete(id: string) {
    this.userService.deleteUser(id).subscribe(() => this.load());
  }

  logout() {
    this.auth.logout();
  }

}
