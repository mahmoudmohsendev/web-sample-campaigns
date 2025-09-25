import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../interfaces/Campaign.interface';

@Component({
  selector: 'app-campaign-details',
  standalone: true,
  imports: [DecimalPipe,CommonModule],
  templateUrl: './campaign-details.component.html',
  styleUrl: './campaign-details.component.scss'
})
export class CampaignDetailsComponent implements OnInit, OnDestroy {
  campaign?: Campaign;
  loading = true;
  errorMessages: string[] = [];
  private ws?: WebSocket;

  constructor(
    private route: ActivatedRoute,
    private campaignsService: CampaignsService,
  ) {}

  get percentAchieved(): number {
    if (!this.campaign) return 0;
    return Math.round((this.campaign.currentAmount / this.campaign.goal) * 100);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.campaignsService.getCampaignById(id).subscribe({
        next: (result) => {
          this.campaign = result.data?.campaign;
          this.loading = false;
          // Show non-blocking error notification if errors exist
          if (result.errors && result.errors.length) {
            this.errorMessages = result.errors.map(e => e.message);
          }
          // Connect to WebSocket after campaign is loaded
          this.connectWebSocket();
        },
        error: (err) => {
          this.errorMessages = [err.message || 'Failed to load campaign details'];
          this.loading = false;
        }
      });
    }
  }

  connectWebSocket() {
    this.ws = new WebSocket('wss://raise-right-assessment-mocks.up.railway.app/ws');
    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('WebSocket message received:', data);
        if (
          data.type === 'donation' &&
          this.campaign &&
          data.campaignId === this.campaign.id
        ) {
            this.campaign = {
              ...this.campaign!,
              currentAmount: this.campaign!.currentAmount + data.amount,
              donors: [
                ...this.campaign!.donors,
                { name: data.donor, amount: data.amount, isNew: true }
              ]
            };
        }
      } catch (e) {
        // Ignore malformed messages
      }
    };
  }

  ngOnDestroy() {
    if (this.ws) {
      this.ws.close();
    }
  }
}
