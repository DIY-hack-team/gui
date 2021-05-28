import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiDomainsService } from 'src/api/domains/api-domains.service';
import { Domain } from 'src/api/domains/models/domain.entity';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DomainsComponent implements OnInit {
  public domains: Array<Domain> = [];

  constructor(private apiDomains: ApiDomainsService) {}

  ngOnInit(): void {
    this.apiDomains.get().then((domains: Array<Domain>) => {
      this.domains = domains;
    });
  }
}
