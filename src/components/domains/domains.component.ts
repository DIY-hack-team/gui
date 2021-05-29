import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiDomainsService } from 'src/api/domains/api-domains.service';
import { Domain } from 'src/api/domains/models/domain.entity';
import { GetDomainsParamsDto } from 'src/api/domains/models/get-domains-params.dto';
import { FilterParams } from '../filters/model/filter-params';

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
    this.getDomains();
  }

  getDomains(params?: GetDomainsParamsDto): void {
    this.apiDomains.get(params).then((domains: Array<Domain>) => {
      this.domains = domains;
    });
  }

  onSearch(params: FilterParams): void {
    this.getDomains(params as GetDomainsParamsDto);
  }
}
