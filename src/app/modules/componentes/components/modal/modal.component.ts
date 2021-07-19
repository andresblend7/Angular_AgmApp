import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openWithCallBack(modalTemplate: any) {
    this.open(modalTemplate);
  }

  open(modalContenedor: any) {
    this.modalService
      .open(modalContenedor, {
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'modal-holder',
        backdropClass: 'agm-modal-backdrop',
        backdrop:'static'
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
