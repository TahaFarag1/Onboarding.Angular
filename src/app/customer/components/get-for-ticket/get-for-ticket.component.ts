import { CustomerService } from './../../Service/customer.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../../ViewModels/Ticket';

@Component({
  selector: 'app-get-for-ticket',
  templateUrl: './get-for-ticket.component.html',
  styleUrls: ['./get-for-ticket.component.css']
})
export class GetForTicketComponent {
  ticket: Ticket | undefined;
  public Id: string = '';
  statusName: string = '';
  showSuccess = false;
  showError = false;
  message : string| null =null ; 


  constructor(
    private CustomerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Id = params['Id'];

      if (this.Id) {
        this.fetchTicket(this.Id);
      } else {
        console.log('No ID found in the route');
      }
    });
  }

  private fetchTicket(id: string): void {
    this.CustomerService.getTicket(id).subscribe(
      (res) => {
        if (res.success) {
          this.ticket = res.data as Ticket;
          this.updateCustomerInfo();
        } else {
          console.log('Error occurred while fetching ticket');
        }
      },
      (error) => {
        console.error('Error :', error);
      }
    );
  }

  private updateCustomerInfo(): void {
    if (this.ticket) {
      this.customer.name = this.ticket.fullName || '';
      this.customer.nationalId = this.ticket.nationalId || '';
      this.customer.cifNumber = this.ticket.ticketNumber || '';
    }
  }

  customer = { name: '', cifNumber: '', nationalId: '' };
  selectedFiles: File[] = [];

  onFileSelected(event: any): void {
    const files = Array.from(event.target.files) as File[];
    this.selectedFiles = [...this.selectedFiles, ...files];
  }
  

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  
    if (event.dataTransfer?.files) {
      const files = Array.from(event.dataTransfer.files);
      this.selectedFiles = [...this.selectedFiles, ...files];
    }
  }
  

  onSubmit(): void {
    if (this.selectedFiles.length === 0) {
      console.log('No files selected');
      return;
    }

    const formData = new FormData();
    formData.append('Id', this.Id);
    formData.append('name', this.customer.name);
    formData.append('cifNumber', this.customer.cifNumber);
    formData.append('nationalId', this.customer.nationalId);

    // Add files to formData under the same key 'files'
  this.selectedFiles.forEach((file) => {
    if (this.isValidFile(file)) {
      formData.append('files', file, file.name);  
    } else {
      console.log(`File ${file.name} is not valid.`);
    }

    // this.selectedFiles.forEach((file, index) => {
    //   if (this.isValidFile(file)) {
    //     formData.append(`file${index}`, file, file.name);
    //   } else {
    //     console.log(`File ${file.name} is not valid.`);
    //   }
    });

   

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });


    this.CustomerService.uploadFiles(formData).subscribe(
      (response) => {
        if (response.success) {
          //this.ticket = res.data as Ticket;
          //this.updateCustomerInfo();
          this.message=response.message;
          this.showSuccess = true;
          this.updateStatus();
        } else {
          //console.log('Error occurred while fetching ticket');
          this.message = 'Error occurred while fetching ticket';
          this.showError = true;
        }
      },
      (error) => {
        console.error('Error :', error);
        this.message = 'Error occurred while updating the status.';

        //this.message = error.message;
        this.showError = true;
      }
    );
  }

  private isValidFile(file: File): boolean {
    const maxSizeInMB = 5;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];

    if (file.size > maxSizeInBytes) {
      console.log(`File ${file.name} is too large.`);
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      console.log(`File type ${file.type} is not allowed.`);
      return false;
    }

    return true;
  }


  updateStatus(): void {
    if ( !this.Id) {
      console.log('Status name or Onboarding Request ID is missing.');
      return;
    }
    this.statusName = 'CustomerVisittedBranch';
    this.CustomerService.updateStatusName( this.statusName , this.Id).subscribe(
      (response) => {
        if (response.success) {
          this.message = 'Status updated successfully!';
          //this.showSuccess = true;
          //this.showError = false;
        } else {
          this.message = 'Error occurred while updating the status.';
          //this.showError = true;
          //this.showSuccess = false;
        }
      },
      (error) => {
        console.error('Error :', error);
        //this.message = 'An error occurred while updating the status.';
        //this.showError = true;
        //this.showSuccess = false;
      }
    );
  }


}
