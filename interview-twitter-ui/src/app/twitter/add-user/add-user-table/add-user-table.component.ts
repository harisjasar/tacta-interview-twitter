import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TweetService } from '../../../services/tweet/tweet.service';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-add-user-table',
  templateUrl: './add-user-table.component.html',
  styleUrls: ['./add-user-table.component.css']
})
export class AddUserTableComponent implements OnInit {


  ngOnInit() {
  }


  newUserCreateStatus = {fail: false, success: false};
  reqBody: any;

  constructor(private userService: UserService, private cd: ChangeDetectorRef) {
  }

  isSubmitButtonDisabled(form: NgForm): boolean {
    return form.invalid || form.submitted;
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.reqBody = {
        "fullName": form.value.fullName,
        "username": form.value.username,
        "password": form.value.password
      }
      
      this.userService.createUser(this.reqBody).subscribe(
        () => {
          this.handleCreate(form, {fail: false, success: true});
        },
        () => {
          this.handleCreate(form, {fail: true, success: false});
        }
      );
    }
  }

  private handleCreate(form: NgForm, newUserCreateStatus: any) {
    this.newUserCreateStatus = newUserCreateStatus;
    form.resetForm();
    this.cd.detectChanges();
  }

  onContentFocus() {
    this.newUserCreateStatus = {fail: false, success: false};
  }

}