import { Component } from '@angular/core';
import {  CampaignsService } from '../../services/campaigns.service';
import { HttpClientModule } from '@angular/common/http';
import { Campaign } from '../../interfaces/Campaign.interface';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-campaigns-list',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './campaigns-list.component.html',
  styleUrl: './campaigns-list.component.scss'
})
export class CampaignsListComponent {
  campaigns: Campaign[] = [];
  loading = true;
  error = '';
  Math = Math

  constructor(private campaignsService: CampaignsService) {}

  ngOnInit() {
    this.campaignsService.getCampaigns().subscribe({
      next: (data) => {
        this.campaigns = data.slice(0, 4); // Display only the first 4 campaigns
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load campaigns';
        this.loading = false;
      }
    });
  }

}
