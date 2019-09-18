import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Pccode } from 'src/app/shared/pccode.model';
import { PccodeService } from 'src/app/shared/pccode.service';

@Component({
  selector: 'app-pccode-list',
  templateUrl: './pccode-list.component.html',
  styles: []
})
export class PccodeListComponent implements OnInit {
  list: Pccode[];
  constructor(private service: PccodeService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray =>{
      this.list =actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Pccode;
      })
    });
  }

  onEdit(pccde: Pccode){
    this.service.formData = Object.assign({}, pccde);
  }

  onDelete(id:string){
    if(confirm('Are you sure to delete this record?')){
      this.firestore.doc('PCCode/'+id).delete();
      this.toastr.warning('Deleted Successfully','PC Code.Register');
    }
  }

}
