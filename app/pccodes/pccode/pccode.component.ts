import { Component, OnInit } from '@angular/core';
import { PccodeService } from 'src/app/shared/pccode.service';
import{ NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pccode',
  templateUrl: './pccode.component.html',
  styles: []
})
export class PccodeComponent implements OnInit {

  constructor(private service : PccodeService,
    private firestore : AngularFirestore,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData ={
      id : null,
      PCCode: '',
      PCCodeDesc: '',
      Entity: '',
      Location:'',
      LOB:''
    }
  }

  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id == null)
    {
    this.firestore.collection('PCCode').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted Successfully','PCCode.Register');
  }
    else
    {
    this.firestore.doc('PCCode/'+form.value.id).update(data);
    this.resetForm(form);
    this.toastr.warning('Updated Successfully','PCCode.Register');
  }
}

}
