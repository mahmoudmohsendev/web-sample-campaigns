import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { Campaign } from '../interfaces/Campaign.interface';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private apiUrl = 'https://raise-right-assessment-mocks.up.railway.app/api/campaigns';

  constructor(private http: HttpClient, private apollo: Apollo) {}

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl);
  }

  // getCampaignById(id: string) {
  //   return this.http.get<Campaign>(`${this.apiUrl}/${id}`);
  // }

  getCampaignById(id: string) {
    const GET_CAMPAIGN_DETAILS = gql`
      query getCampaignDetails($id: ID!) {
        campaign(id: $id) {
          id
          name
          goal
          currentAmount
          description
          imageUrl
          donors {
            name
            amount
          }
        }
      }
    `;
    return this.apollo.query<{ campaign: Campaign }>({
      query: GET_CAMPAIGN_DETAILS,
      variables: { id },
      errorPolicy: 'all'
    });
  }

}
