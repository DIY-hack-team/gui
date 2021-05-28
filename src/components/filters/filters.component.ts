import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { ApiDomainsService } from 'src/api/domains/api-domains.service';
import { Domain } from 'src/api/domains/models/domain.entity';
import { FilterParams } from './model/filter-params';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FiltersComponent implements OnInit {
  public domains: Array<Domain> = [];
  public params: FilterParams = {
    search: '',
  };

  @Input()
  searchPlaceholder: string;

  @Input()
  hasDomainFilter: boolean = false;

  @Output()
  onSubmit: EventEmitter<FilterParams> = new EventEmitter();

  constructor(private apiDomains: ApiDomainsService) {}

  ngOnInit(): void {
    if (this.hasDomainFilter) {
      this.apiDomains.get().then((domains) => {
        this.domains = domains;
      });
    }
  }

  emitOnSubmit() {
    this.onSubmit.emit(this.params);
  }
}
